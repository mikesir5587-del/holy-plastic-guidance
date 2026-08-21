import { useEffect, useRef, useState } from "react";

/**
 * Code-native pearlescent debit card (85.6 x 53.98 ratio).
 * No bank logo, no card number, no personal data.
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
      setTilt({ x: Math.max(-1, Math.min(1, dx)) * 7, y: Math.max(-1, Math.min(1, dy)) * -6 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine]);

  return (
    <div ref={ref} className={className} aria-hidden="true" style={{ perspective: "1400px" }}>
      <div
        className={`card-float sweep relative aspect-[85.6/53.98] w-full rounded-[6.5%] border border-white/70`}
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 450ms cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(135deg, oklch(0.97 0.03 240) 0%, oklch(0.93 0.06 300) 30%, oklch(0.95 0.05 200) 55%, oklch(0.92 0.07 340) 78%, oklch(0.98 0.02 250) 100%)",
          boxShadow:
            "0 2px 4px oklch(0.19 0.02 266 / 0.08), 0 60px 90px -50px oklch(0.5 0.1 290 / 0.55), inset 0 1px 0 oklch(1 0 0 / 0.9)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[6.5%] opacity-80"
          style={{
            background:
              "radial-gradient(120% 90% at 10% 6%, color-mix(in oklab, var(--ice) 42%, transparent), transparent 46%), radial-gradient(90% 80% at 92% 96%, color-mix(in oklab, var(--pink) 40%, transparent), transparent 52%), radial-gradient(70% 70% at 60% 40%, color-mix(in oklab, var(--violet) 20%, transparent), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-between p-[5.5%]">
          <div className="flex items-start justify-between">
            <span className="text-[0.8rem] font-extrabold tracking-[0.12em] text-foreground/80 uppercase sm:text-sm">
              HolyPlastic
            </span>
            <span className="rounded-full border border-white/70 bg-white/40 px-2 py-[2px] text-[0.58rem] font-semibold tracking-[0.14em] text-foreground/60 uppercase sm:text-[0.65rem]">
              Debit
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <div
                className="h-7 w-10 rounded-[5px] sm:h-9 sm:w-12"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.93 0.05 95), oklch(0.78 0.08 85) 50%, oklch(0.96 0.03 100))",
                  boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.6)",
                }}
              >
                <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-[2px] p-[3px] opacity-40">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-[1px] bg-foreground/40" />
                  ))}
                </div>
              </div>
              <p className="text-[0.58rem] font-semibold tracking-[0.22em] text-foreground/45 uppercase sm:text-[0.68rem]">
                Virtual · Physical
              </p>
            </div>
            <span className="text-[1.1rem] font-bold tracking-[0.14em] text-foreground/70 italic sm:text-[1.4rem]">
              VISA DEBIT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
