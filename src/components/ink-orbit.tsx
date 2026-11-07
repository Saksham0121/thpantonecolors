import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const inks = [
  { color: "#00a2e8", radius: 1.9, speed: 0.55, phase: 0, size: 0.5 },
  { color: "#e5007e", radius: 1.9, speed: 0.55, phase: Math.PI / 2, size: 0.5 },
  { color: "#ffe100", radius: 1.9, speed: 0.55, phase: Math.PI, size: 0.5 },
  { color: "#14151a", radius: 1.9, speed: 0.55, phase: (3 * Math.PI) / 2, size: 0.5 },
];

function Orbit() {
  const group = useRef<THREE.Group>(null);
  const spheres = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    inks.forEach((ink, i) => {
      const m = spheres.current[i];
      if (!m) return;
      const a = t * ink.speed + ink.phase;
      m.position.set(Math.cos(a) * ink.radius, Math.sin(a * 2) * 0.55, Math.sin(a) * ink.radius);
    });
    const g = group.current;
    if (g) {
      const k = 1 - Math.pow(0.01, dt);
      g.rotation.x += (-state.pointer.y * 0.5 + 0.35 - g.rotation.x) * k;
      g.rotation.y += (state.pointer.x * 0.7 - g.rotation.y) * k;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} floatIntensity={0.6} rotationIntensity={0.2}>
        {inks.map((ink, i) => (
          <mesh
            key={ink.color}
            ref={(el) => {
              spheres.current[i] = el;
            }}
            scale={ink.size}
          >
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhysicalMaterial
              color={ink.color}
              roughness={0.18}
              metalness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.04}
            />
          </mesh>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.9, 0.012, 16, 160]} />
          <meshBasicMaterial color="#0b1536" transparent opacity={0.25} />
        </mesh>
      </Float>
    </group>
  );
}

export default function InkOrbit() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [still, setStill] = useState(false);

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
    <div ref={wrap} className="h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 7], fov: 42 }}
        frameloop={visible && !still ? "always" : "demand"}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={3} />
        <pointLight position={[-4, -2, 3]} intensity={30} color="#ffffff" />
        <Orbit />
      </Canvas>
    </div>
  );
}
