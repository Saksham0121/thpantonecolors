import { lazy, Suspense, useEffect, useState } from "react";

const InkHeroScene = lazy(() => import("./ink-hero"));
const InkOrbitScene = lazy(() => import("./ink-orbit"));

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** WebGL scenes only render in the browser, and only where WebGL exists. */
export function InkHero() {
  const mounted = useMounted();
  if (!mounted || !hasWebGL()) return null;
  return (
    <Suspense fallback={null}>
      <InkHeroScene />
    </Suspense>
  );
}

export function InkOrbit() {
  const mounted = useMounted();
  if (!mounted || !hasWebGL()) return null;
  return (
    <Suspense fallback={null}>
      <InkOrbitScene />
    </Suspense>
  );
}

/** Headline whose words rise one after another on load. */
export function SplitWords({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="word-mask">
          <span className="word" style={{ animationDelay: `${120 + i * 70}ms` }}>
            {w}
          </span>
          {" "}
        </span>
      ))}
    </span>
  );
}

/** Scroll progress in CMYK along the top bar, plus parallax offsets for photo frames. */
export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bar = document.getElementById("scroll-progress");
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    for (const t of targets) {
      if (t.getBoundingClientRect().top < window.innerHeight * 0.92) continue;
      t.classList.add("reveal-hidden");
      io.observe(t);
    }
    const frames = Array.from(document.querySelectorAll<HTMLElement>("[data-par]"));
    let raf = 0;

    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      const vh = window.innerHeight;
      for (const f of frames) {
        const r = f.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) continue;
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        f.style.setProperty("--py", `${(-p * 38).toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      for (const t of targets) t.classList.remove("reveal-hidden", "reveal-in");
    };
  }, []);

  return null;
}
