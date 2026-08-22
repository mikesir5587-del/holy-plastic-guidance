import { useEffect, useRef, useState } from "react";

/**
 * Premium smoked-glass Visa debit card (85.6 x 53.98).
 * Physical extrusion + bevel, holographic film, caustic streaks, micro-grain,
 * realistic EMV chip. Face carries ONLY: chip, VISA, Debit.
 */

function Chip({ className = "" }: { className?: string }) {
  const pad = "oklch(0.9 0.055 92)";
  const padDark = "oklch(0.66 0.075 82)";
  return (
    <svg
      viewBox="0 0 62 48"
      className={className}
      role="presentation"
      style={{ filter: "drop-shadow(0 1px 2px oklch(0 0 0 / 0.55))" }}
    >
      <defs>
        <linearGradient id="hp-chip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.95 0.045 95)" />
          <stop offset="34%" stopColor={padDark} />
          <stop offset="56%" stopColor={pad} />
          <stop offset="100%" stopColor="oklch(0.6 0.07 78)" />
        </linearGradient>
      </defs>
      <rect x="0.6" y="0.6" width="60.8" height="46.8" rx="7" fill="url(#hp-chip)" />
      <rect
        x="0.6"
        y="0.6"
        width="60.8"
        height="46.8"
        rx="7"
        fill="none"
        stroke="oklch(1 0 0 / 0.55)"
        strokeWidth="1.2"
      />
      {/* contact pad tracery */}
      <g stroke="oklch(0.32 0.03 80 / 0.75)" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M20 1 V47" />
        <path d="M42 1 V47" />
        <path d="M1 16 H20" />
        <path d="M42 16 H61" />
        <path d="M1 32 H20" />
        <path d="M42 32 H61" />
        <path d="M20 12 H26 A4 4 0 0 1 30 16 V32 A4 4 0 0 1 26 36 H20" />
        <path d="M42 12 H36 A4 4 0 0 0 32 16 V32 A4 4 0 0 0 36 36 H42" />
        <path d="M31 20 V28" />
      </g>
      <rect
        x="0.6"
        y="0.6"
        width="60.8"
        height="46.8"
        rx="7"
        fill="none"
        stroke="oklch(0 0 0 / 0.35)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

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
        setTilt({ x: Math.max(-1, Math.min(1, dx)) * 6, y: Math.max(-1, Math.min(1, dy)) * -4.5 });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [fine]);

  // multi-layer extrusion: stacked slices behind the face
  const slices = [1, 2, 3, 4, 5, 6];

  return (
    <div ref={ref} className={className} aria-hidden="true" style={{ perspective: "1900px" }}>
      <div
        className="card-float relative aspect-[85.6/53.98] w-full"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* contact shadow */}
        <div
          className="pointer-events-none absolute inset-x-[10%] bottom-[-8%] h-[14%] rounded-[50%] blur-2xl"
          style={{ background: "oklch(0 0 0 / 0.7)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-[22%] bottom-[-4%] h-[8%] rounded-[50%] blur-md"
          style={{ background: "oklch(0 0 0 / 0.55)" }}
        />

        {/* extruded edge slices */}
        {slices.map((i) => (
          <div
            key={i}
            className="pointer-events-none absolute inset-0 rounded-[6.2%]"
            style={{
              transform: `translateZ(${-i * 1.6}px) translateY(${i * 0.35}px)`,
              background:
                i % 2
                  ? "linear-gradient(180deg, oklch(0.62 0.02 250 / 0.9), oklch(0.14 0.008 285) 55%, oklch(0.34 0.02 300 / 0.9))"
                  : "linear-gradient(180deg, oklch(0.42 0.015 250 / 0.9), oklch(0.1 0.006 285) 55%, oklch(0.24 0.015 300 / 0.9))",
            }}
          />
        ))}
        {/* deepest slab with drop shadow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[6.2%]"
          style={{
            transform: "translateZ(-11px) translateY(2.5px)",
            background: "oklch(0.09 0.005 285)",
            boxShadow: "0 30px 70px -26px oklch(0 0 0 / 0.95)",
          }}
        />

        {/* card body — smoked glass */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[6.2%]"
          style={{
            background:
              "linear-gradient(152deg, oklch(0.24 0.014 268 / 0.96) 0%, oklch(0.16 0.01 285 / 0.96) 34%, oklch(0.2 0.02 300 / 0.96) 62%, oklch(0.13 0.008 285 / 0.97) 100%)",
            backdropFilter: "blur(6px)",
            boxShadow:
              "inset 0 1.2px 0 oklch(1 0 0 / 0.5), inset 0 -1.2px 0 oklch(0 0 0 / 0.7), inset 1.2px 0 0 oklch(1 0 0 / 0.14), inset -1.2px 0 0 oklch(0 0 0 / 0.45), inset 0 0 60px oklch(0 0 0 / 0.55), 0 1px 2px oklch(0 0 0 / 0.7), 0 70px 100px -60px oklch(0.6 0.14 300 / 0.4)",
          }}
        >
          {/* bevel ring */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[6.2%]"
            style={{
              padding: "1.4px",
              background:
                "linear-gradient(150deg, oklch(1 0 0 / 0.55), transparent 22%, transparent 72%, oklch(1 0 0 / 0.28))",
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* holographic film — subtle, low opacity */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              background:
                "conic-gradient(from 200deg at 30% 70%, transparent 0deg, color-mix(in oklab, var(--cyan) 45%, transparent) 55deg, transparent 120deg, color-mix(in oklab, var(--magenta) 40%, transparent) 210deg, transparent 275deg, color-mix(in oklab, var(--violet) 40%, transparent) 330deg, transparent 360deg)",
              mixBlendMode: "screen",
            }}
          />

          {/* edge dispersion (chromatic fringe near corners) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(80% 120% at 0% 0%, color-mix(in oklab, var(--cyan) 40%, transparent), transparent 34%), radial-gradient(80% 120% at 100% 100%, color-mix(in oklab, var(--magenta) 36%, transparent), transparent 36%)",
              mixBlendMode: "screen",
            }}
          />

          {/* specular sheet — broad soft highlight */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(118deg, oklch(1 0 0 / 0.22) 0%, transparent 26%, transparent 58%, oklch(1 0 0 / 0.1) 74%, transparent 88%)",
            }}
          />

          {/* caustic streaks */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            style={{
              background:
                "repeating-linear-gradient(108deg, transparent 0 34px, oklch(1 0 0 / 0.16) 34px 35px, transparent 35px 44px, oklch(1 0 0 / 0.07) 44px 45px, transparent 45px 84px)",
              mixBlendMode: "screen",
            }}
          />

          {/* micro-grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
            }}
          />

          {/* moving glare */}
          <div className="glare pointer-events-none absolute inset-[-40%]" />

          {/* face content */}
          <div className="absolute inset-0 flex flex-col justify-between p-[6.5%]">
            <Chip className="h-[17%] w-[13.2%] min-h-8 min-w-10" />

            <div className="flex items-end justify-end gap-[3.5%]">
              <span
                className="pb-[3%] text-[0.48rem] font-medium tracking-[0.34em] uppercase sm:text-[0.62rem]"
                style={{
                  color: "oklch(1 0 0 / 0.6)",
                  textShadow: "0 1px 0 oklch(0 0 0 / 0.6), 0 -0.5px 0 oklch(1 0 0 / 0.12)",
                }}
              >
                Debit
              </span>
              <span
                className="text-[1.05rem] leading-none font-black tracking-[0.01em] italic sm:text-[1.75rem]"
                style={{
                  color: "oklch(0.98 0.004 90 / 0.94)",
                  textShadow:
                    "0 1px 0 oklch(0 0 0 / 0.65), 0 -1px 0 oklch(1 0 0 / 0.18), 0 4px 12px oklch(0 0 0 / 0.5)",
                }}
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
