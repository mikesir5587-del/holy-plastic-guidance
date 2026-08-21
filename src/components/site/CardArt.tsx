import { useEffect, useRef, useState } from "react";

/**
 * Futuristic glass debit card (85.6 x 53.98 ratio) with physical edge, bevel,
 * layered refractions and caustics. Face carries only: metal chip, VISA mark, "Debit".
 */
export function CardArt({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    setFine(mq.matches);
    const onChange = () => setFine(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!fine) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        setTilt({ x: Math.max(-1, Math.min(1, dx)) * 7, y: Math.max(-1, Math.min(1, dy)) * -5.5 });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [fine]);

  return (
    <div ref={ref} className={className} aria-hidden="true" style={{ perspective: "1700px" }}>
      <div
        className="card-float relative aspect-[85.6/53.98] w-full"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* contact shadow on the scene */}
        <div
          className="pointer-events-none absolute inset-x-[8%] bottom-[-9%] h-[16%] rounded-[50%] blur-2xl"
          style={{ background: "oklch(0 0 0 / 0.65)" }}
        />

        {/* physical thickness / edge stack */}
        <div
          className="absolute inset-0 rounded-[6.5%]"
          style={{
            transform: "translateZ(-6px)",
            background:
              "linear-gradient(180deg, oklch(0.55 0.03 285), oklch(0.16 0.01 285) 60%, oklch(0.4 0.02 285))",
            boxShadow: "0 26px 60px -24px oklch(0 0 0 / 0.9)",
          }}
        />

        {/* body */}
        <div
          className="sweep relative h-full w-full overflow-hidden rounded-[6.5%]"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.30 0.025 285) 0%, oklch(0.46 0.07 240) 24%, oklch(0.34 0.05 300) 47%, oklch(0.52 0.10 330) 72%, oklch(0.22 0.015 285) 100%)",
            boxShadow:
              "inset 0 1.5px 0 oklch(1 0 0 / 0.55), inset 0 -1.5px 0 oklch(0 0 0 / 0.6), inset 1.5px 0 0 oklch(1 0 0 / 0.18), inset -1.5px 0 0 oklch(0 0 0 / 0.35), 0 1px 2px oklch(0 0 0 / 0.6), 0 60px 90px -50px oklch(0.65 0.15 300 / 0.45)",
          }}
        >
          {/* inner glass pane */}
          <div
            className="pointer-events-none absolute inset-[1.5%] rounded-[5.5%]"
            style={{
              background:
                "linear-gradient(160deg, oklch(1 0 0 / 0.16), transparent 38%, oklch(0 0 0 / 0.22) 72%, oklch(1 0 0 / 0.1))",
              boxShadow: "inset 0 0 30px oklch(0 0 0 / 0.35)",
            }}
          />

          {/* refraction / caustics */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 6% 2%, color-mix(in oklab, var(--cyan) 55%, transparent), transparent 46%), radial-gradient(110% 95% at 97% 99%, color-mix(in oklab, var(--magenta) 52%, transparent), transparent 50%), radial-gradient(60% 50% at 58% 46%, color-mix(in oklab, white 22%, transparent), transparent 64%)",
              mixBlendMode: "screen",
              opacity: 0.8,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-55"
            style={{
              background:
                "conic-gradient(from 205deg at 38% 58%, transparent 0deg, color-mix(in oklab, white 28%, transparent) 62deg, transparent 140deg, color-mix(in oklab, var(--violet) 42%, transparent) 236deg, transparent 330deg)",
              mixBlendMode: "screen",
            }}
          />
          {/* caustic filaments */}
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              background:
                "repeating-linear-gradient(112deg, transparent 0 26px, color-mix(in oklab, white 10%, transparent) 26px 27px, transparent 27px 60px)",
              mixBlendMode: "screen",
            }}
          />

          {/* face content */}
          <div className="absolute inset-0 flex flex-col justify-between p-[6.5%]">
            <div className="flex items-start">
              {/* metal chip */}
              <div
                className="relative h-[15%] w-[13%] min-h-7 min-w-9 rounded-[14%] sm:h-[17%] sm:w-[14%]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.94 0.05 95) 0%, oklch(0.75 0.09 85) 38%, oklch(0.88 0.06 92) 58%, oklch(0.64 0.08 80) 100%)",
                  boxShadow:
                    "inset 0 0 0 1px oklch(1 0 0 / 0.55), inset 0 -2px 4px oklch(0 0 0 / 0.4), 0 1px 3px oklch(0 0 0 / 0.5)",
                }}
              >
                <div className="absolute inset-[12%] grid grid-cols-3 grid-rows-3 gap-[1.5px] opacity-45">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-[1px] bg-black/45" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end gap-[3%]">
              <span className="pb-[2%] text-[0.5rem] font-medium tracking-[0.3em] text-white/70 uppercase sm:text-[0.68rem]">
                Debit
              </span>
              {/* VISA mark */}
              <span
                className="text-[1.05rem] leading-none font-black tracking-[0.02em] text-white italic sm:text-[1.7rem]"
                style={{ textShadow: "0 1px 0 oklch(0 0 0 / 0.45)" }}
              >
                VISA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
