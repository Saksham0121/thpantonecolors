import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Domain-warped fbm marbling in the four process-ink colours, pushed around by the pointer.
const fragment = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
               mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.02 + vec2(7.1, 3.7);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 2.4;
    vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0) * 2.4;
    float t = uTime * 0.11;

    vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
    vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 1.3),
                  fbm(p + 3.0 * q + vec2(8.3, 2.8) - t));
    vec2 d = p - m;
    r += d / (dot(d, d) + 0.55) * 0.22;
    float f = fbm(p + 3.0 * r);

    vec3 navy = vec3(0.02, 0.05, 0.15);
    vec3 deep = vec3(0.0, 0.2, 0.5);
    vec3 cyan = vec3(0.0, 0.7, 0.95);
    vec3 mag = vec3(1.0, 0.0, 0.5);
    vec3 yel = vec3(1.0, 0.85, 0.0);

    vec3 col = mix(navy, deep, smoothstep(0.25, 0.65, f));
    col = mix(col, cyan, smoothstep(0.55, 0.85, f) * clamp(r.x * 1.6, 0.0, 1.0));
    col += mag * smoothstep(0.93, 1.05, r.y * (0.4 + f) * 1.7) * 0.55;
    col += yel * smoothstep(0.9, 1.05, r.x * q.y * 2.4) * 0.5;

    // keep the text side calm, let the right side glow
    col *= mix(0.5, 1.0, smoothstep(0.05, 0.9, uv.x));
    col *= 1.0 - 0.45 * length(uv - 0.5);

    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;

function Fluid() {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 12 },
      uMouse: { value: new THREE.Vector2(0.7, 0.5) },
      uRes: { value: new THREE.Vector2(1, 1) },
    }),
    [],
  );
  const target = useRef(new THREE.Vector2(0.7, 0.5));

  useFrame((state, dt) => {
    uniforms.uTime.value += dt;
    target.current.set((state.pointer.x + 1) / 2, (state.pointer.y + 1) / 2);
    uniforms.uMouse.value.lerp(target.current, 1 - Math.pow(0.001, dt));
    uniforms.uRes.value.set(
      state.size.width * state.viewport.dpr,
      state.size.height * state.viewport.dpr,
    );
  });

  return (
    <mesh frustumCulled={false} renderOrder={-1}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
}

const chips = [
  "#a3162f",
  "#e1251b",
  "#f57c20",
  "#ffd200",
  "#b5cc18",
  "#00a551",
  "#00a39a",
  "#009ee0",
  "#0087c8",
  "#1e4fd6",
  "#14288a",
  "#1a1a1a",
  "#e5007e",
  "#f6c1ce",
];
const CHIP_LEN = 2.5;
const CHIP_W = 0.56;

function Chip({ color }: { color: string }) {
  return (
    <group position={[CHIP_LEN / 2 - 0.2, 0, 0]}>
      <RoundedBox args={[CHIP_LEN, CHIP_W, 0.02]} radius={0.05} smoothness={4}>
        <meshPhysicalMaterial color="#f6f4ee" roughness={0.5} clearcoat={0.3} />
      </RoundedBox>
      <RoundedBox
        args={[CHIP_LEN * 0.72, CHIP_W * 0.82, 0.03]}
        radius={0.03}
        smoothness={4}
        position={[CHIP_LEN * 0.12, 0, 0.006]}
      >
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.35}
          clearcoat={0.6}
          clearcoatRoughness={0.15}
        />
      </RoundedBox>
    </group>
  );
}

function SwatchFan() {
  const root = useRef<THREE.Group>(null);
  const arms = useRef<(THREE.Group | null)[]>([]);
  const { viewport } = useThree();
  const wide = viewport.width > 7;
  const scale = wide ? 1.1 : 0.72;
  const n = chips.length;

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    // opens from closed on load, then breathes
    const intro = 1 - Math.pow(1 - Math.min(t / 2.2, 1), 3);
    const spread = (0.2 + 0.018 * Math.sin(t * 0.9)) * intro;
    arms.current.forEach((arm, i) => {
      if (!arm) return;
      const wave = 0.035 * Math.sin(t * 1.6 - i * 0.55) * intro;
      arm.rotation.z = Math.PI / 2 + (i - (n - 1) / 2) * spread + wave;
      arm.position.z = i * 0.03;
    });
    const g = root.current;
    if (g) {
      const k = 1 - Math.pow(0.02, dt);
      const ty = Math.sin(t * 0.5) * 0.25 + state.pointer.x * 0.5;
      const tx = -0.12 - state.pointer.y * 0.3;
      g.rotation.y += (ty - g.rotation.y) * k;
      g.rotation.x += (tx - g.rotation.x) * k;
      g.position.y += (-1.5 + Math.sin(t * 0.8) * 0.12 - g.position.y) * k;
    }
  });

  return (
    <group
      ref={root}
      position={[wide ? viewport.width * 0.2 : 0, wide ? -1.5 : -viewport.height * 0.2, 0]}
      scale={scale}
    >
      {chips.map((c, i) => (
        <group
          key={c}
          ref={(el) => {
            arms.current[i] = el;
          }}
          rotation={[0, 0, Math.PI / 2]}
        >
          <Chip color={c} />
        </group>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, n * 0.03 + 0.02]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 32]} />
        <meshPhysicalMaterial color="#c9ccd2" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Studio() {
  return (
    <Environment resolution={256}>
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer form="rect" intensity={5} position={[0, 5, -9]} scale={[12, 10, 1]} />
        <Lightformer form="rect" intensity={3} position={[-5, 1, -1]} scale={[8, 2, 1]} />
        <Lightformer form="circle" intensity={4} position={[4, 2, 4]} scale={4} color="#8fdcff" />
        <Lightformer form="circle" intensity={3} position={[-3, -3, 3]} scale={3} color="#ff4fa3" />
      </group>
    </Environment>
  );
}

export default function InkHero() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [still, setStill] = useState(false);
  const heroEl = typeof document === "undefined" ? null : document.getElementById("hero");

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e?.isIntersecting ?? true), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        {...(heroEl ? { eventSource: heroEl, eventPrefix: "client" as const } : {})}
        camera={{ position: [0, 0, 6], fov: 45 }}
        frameloop={visible && !still ? "always" : "demand"}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Fluid />
        <Studio />
        <SwatchFan />
      </Canvas>
    </div>
  );
}
