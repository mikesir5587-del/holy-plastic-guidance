import { useEffect, useRef, useState } from "react";

/**
 * Code-native product object: a horizontal debit card (85.6 x 53.98 ratio).
 * No fake bank logo, no card number, no personal data.
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
      setTilt({ x: Math.max(-1, Math.min(1, dx)) * 6, y: Math.max(-1, Math.min(1, dy)) * -5 });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine]);

  return (
    <div
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ perspective: "1400px" }}
    >
      <div
        className="sweep relative aspect-[85.6/53.98] w-full rounded-[6.5%] border border-white/40"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(135deg, oklch(0.30 0.03 262) 0%, oklch(0.22 0.02 266) 38%, oklch(0.34 0.05 275) 62%, oklch(0.19 0.02 266) 100%)",
          boxShadow:
            "0 2px 4px oklch(0.19 0.02 266 / 0.18), 0 60px 90px -50px oklch(0.19 0.02 266 / 0.65), inset 0 1px 0 oklch(1 0 0 / 0.28)",
        }}
      >
        {/* spectral edge light */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[6.5%] opacity-70"
          style={{
            background:
              "radial-gradient(120% 90% at 12% 8%, color-mix(in oklab, var(--ice) 34%, transparent), transparent 45%), radial-gradient(90% 80% at 92% 96%, color-mix(in oklab, var(--pink) 26%, transparent), transparent 50%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-between p-[5.5%]">
          <div className="flex items-start justify-between">
            <span className="text-[0.85rem] font-extrabold tracking-tight text-white/95 sm:text-base">
              HolyPlastic
            </span>
            <span className="rounded-full border border-white/25 px-2 py-[2px] text-[0.6rem] font-semibold tracking-[0.12em] text-white/70 uppercase sm:text-[0.65rem]">
              Debit
            </span>
          </div>

          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <div
                className="h-7 w-10 sm:h-8 sm:w-11 rounded-[5px]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.9 0.06 95), oklch(0.72 0.09 85) 55%, oklch(0.94 0.04 100))",
                  boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.35)",
                }}
              />
              <p className="text-[0.6rem] font-medium tracking-[0.22em] text-white/45 uppercase sm:text-[0.68rem]">
                Virtual · Physical
              </p>
            </div>
            <span className="text-[1.15rem] font-bold tracking-[0.14em] text-white/85 italic">
              VISA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
