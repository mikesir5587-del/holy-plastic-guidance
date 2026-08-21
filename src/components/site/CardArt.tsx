import { useEffect, useRef, useState } from "react";

/**
 * Liquid-chrome debit card (85.6 x 53.98 ratio).
 * No brand name, no bank, no card number, no personal data.
 */
export function CardArt({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    setFine(mq.matches);
    const onChange = () => setFine(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      setTilt({ x: Math.max(-1, Math.min(1, dx)) * 9, y: Math.max(-1, Math.min(1, dy)) * -7 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine]);

  return (
    <div ref={ref} className={className} aria-hidden="true" style={{ perspective: "1600px" }}>
      <div
        className="card-float sweep relative aspect-[85.6/53.98] w-full rounded-[6.5%] border border-white/25"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(140deg, oklch(0.32 0.03 285) 0%, oklch(0.55 0.09 240) 26%, oklch(0.42 0.06 300) 48%, oklch(0.6 0.12 330) 70%, oklch(0.28 0.02 285) 100%)",
          boxShadow:
            "0 2px 6px oklch(0 0 0 / 0.5), 0 80px 120px -60px oklch(0.7 0.16 300 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.35)",
        }}
      >
        {/* liquid chrome reflections */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[6.5%]"
          style={{
            background:
              "radial-gradient(120% 90% at 8% 4%, color-mix(in oklab, var(--cyan) 55%, transparent), transparent 48%), radial-gradient(100% 90% at 96% 98%, color-mix(in oklab, var(--magenta) 55%, transparent), transparent 52%), radial-gradient(70% 60% at 55% 55%, color-mix(in oklab, white 26%, transparent), transparent 62%)",
            mixBlendMode: "screen",
            opacity: 0.85,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[6.5%] opacity-60"
          style={{
            background:
              "conic-gradient(from 210deg at 40% 60%, transparent 0deg, color-mix(in oklab, white 30%, transparent) 70deg, transparent 150deg, color-mix(in oklab, var(--violet) 40%, transparent) 240deg, transparent 330deg)",
            mixBlendMode: "screen",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-[6%]">
          <div className="flex items-start justify-end">
            <span className="rounded-full border border-white/40 px-2 py-[2px] text-[0.55rem] font-semibold tracking-[0.24em] text-white/75 uppercase sm:text-[0.62rem]">
              Debit
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div
              className="h-7 w-10 rounded-[5px] sm:h-9 sm:w-12"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0.05 95), oklch(0.72 0.09 85) 50%, oklch(0.95 0.03 100))",
                boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.5)",
              }}
            >
              <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-[2px] p-[3px] opacity-40">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-[1px] bg-black/50" />
                ))}
              </div>
            </div>
            <span className="text-[1.05rem] font-bold tracking-[0.16em] text-white/90 italic sm:text-[1.5rem]">
              VISA DEBIT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
