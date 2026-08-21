import { useEffect, useState } from "react";

/** Soft mesh-gradient orbs with gentle scroll parallax. */
export function Orbs() {
  const [y, setY] = useState(0);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setMotion(mq.matches);
    const onChange = () => setMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!motion) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [motion]);

  const orbs = [
    {
      style: "left-[-12%] top-[-6%] h-[46vw] w-[46vw] min-h-[280px] min-w-[280px]",
      color: "color-mix(in oklab, var(--ice) 55%, transparent)",
      speed: -0.06,
    },
    {
      style: "right-[-14%] top-[18%] h-[52vw] w-[52vw] min-h-[300px] min-w-[300px]",
      color: "color-mix(in oklab, var(--pink) 45%, transparent)",
      speed: 0.05,
    },
    {
      style: "left-[18%] top-[52%] h-[44vw] w-[44vw] min-h-[260px] min-w-[260px]",
      color: "color-mix(in oklab, var(--violet) 38%, transparent)",
      speed: -0.04,
    },
    {
      style: "right-[6%] bottom-[2%] h-[40vw] w-[40vw] min-h-[240px] min-w-[240px]",
      color: "color-mix(in oklab, var(--ice) 42%, transparent)",
      speed: 0.03,
    },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,white,transparent_70%)]" />
      {orbs.map((o, i) => (
        <div
          key={i}
          className={`absolute ${o.style}`}
          style={{ transform: `translate3d(0, ${y * o.speed}px, 0)` }}
        >
          <div
            className="orb inset-0 opacity-[0.55]"
            style={{
              background: o.color,
              animation: motion ? `hp-drift ${16 + i * 4}s ease-in-out ${i}s infinite` : undefined,
            }}
          />
        </div>

      ))}
    </div>
  );
}
