import { useEffect, useRef, useState } from "react";

const HERO_CARD = "/media/hero-liquid-card.webp";

/**
 * Hero 3D object: the liquid-chrome Visa render is the single hero subject.
 * Entrance reveal + slow float + pointer parallax (desktop) + scroll depth.
 * Only atmospheric layers (glow, orbits, caustic light) live around it.
 */
export function HeroLiquidCard({ className = "" }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [motion, setMotion] = useState(false);
  const [fine, setFine] = useState(false);
  const [ready, setReady] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const f = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      setMotion(m.matches);
      setFine(f.matches && m.matches);
    };
    sync();
    m.addEventListener("change", sync);
    f.addEventListener("change", sync);
    const t = setTimeout(() => setReady(true), 40);
    return () => {
      m.removeEventListener("change", sync);
      f.removeEventListener("change", sync);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!fine) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const el = wrap.current;
      if (!el) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / Math.max(r.width, 1);
        const dy = (e.clientY - (r.top + r.height / 2)) / Math.max(r.height, 1);
        setTilt({
          x: Math.max(-1, Math.min(1, dx)) * 7,
          y: Math.max(-1, Math.min(1, dy)) * -5.5,
        });
      });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [fine]);

  useEffect(() => {
    if (!motion) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setDepth(Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [motion]);

  const entrance = ready || !motion;

  return (
    <div
      ref={wrap}
      className={`relative ${className}`}
      style={{ perspective: "1800px" }}
    >
      {/* atmospheric orbits around the object (never over its face) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span
          className="absolute top-1/2 left-1/2 aspect-square w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={motion ? { animation: "hp-hero-orbit 26s linear infinite" } : undefined}
        />
        <span
          className="absolute top-1/2 left-1/2 aspect-[2/1] w-[126%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/8"
          style={
            motion ? { animation: "hp-hero-orbit 38s linear infinite reverse" } : undefined
          }
        />
        <span
          className="absolute top-1/2 left-1/2 h-[62%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, color-mix(in oklab, var(--violet) 42%, transparent), transparent 68%), radial-gradient(circle at 70% 65%, color-mix(in oklab, var(--cyan) 34%, transparent), transparent 66%)",
            ...(motion ? { animation: "hp-hero-bloom 9s ease-in-out infinite" } : {}),
          }}
        />
      </div>

      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: `translate3d(0, ${entrance ? depth * -26 : 40}px, 0) scale(${entrance ? 1 : 0.86}) rotateX(${tilt.y + depth * 3}deg) rotateY(${tilt.x - depth * 2}deg) rotateZ(${entrance ? 0 : -3}deg)`,
          opacity: entrance ? 1 : 0,
          transition:
            "transform 900ms cubic-bezier(0.22,1,0.36,1), opacity 900ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className={motion ? "hero-card-float" : undefined}>
          <img
            src={HERO_CARD}
            srcSet="/media/hero-liquid-card-720.webp 720w, /media/hero-liquid-card-1080.webp 1080w, /media/hero-liquid-card.webp 1280w"
            sizes="(min-width: 1024px) 46vw, 92vw"
            alt="Дебетовая Visa HolyPlastic в жидко-хромовой оболочке"
            width={900}
            height={600}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 block w-full select-none"

            style={{
              filter: "drop-shadow(0 60px 80px rgba(0,0,0,0.75))",
              maskImage:
                "radial-gradient(66% 66% at 50% 52%, black 46%, rgba(0,0,0,0.6) 70%, transparent 94%)",
              WebkitMaskImage:
                "radial-gradient(66% 66% at 50% 52%, black 46%, rgba(0,0,0,0.6) 70%, transparent 94%)",
            }}
          />

          {/* moving caustic highlight across the chrome shell */}
          {motion ? (
            <span
              aria-hidden="true"
              className="hero-card-glint pointer-events-none absolute inset-0 z-20"
            />
          ) : null}
        </div>

        {/* pulsing reflection / contact shadow under the object */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[12%] bottom-[2%] h-[9%] rounded-[50%] blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 45%, transparent), transparent)",
            ...(motion ? { animation: "hp-hero-bloom 7s ease-in-out infinite" } : {}),
          }}
        />
      </div>
    </div>
  );
}
