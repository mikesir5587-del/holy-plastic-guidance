/**
 * HolyPlastic decoration language.
 *
 * A single reusable set of atmospheric layers: orbital payment routes,
 * topographic contours, glass lenses and spectral edges. Every layer is
 * decorative only — aria-hidden, pointer-events-none, and always behind
 * content in the stacking order.
 *
 * Motion is CSS-driven so `prefers-reduced-motion: reduce` (handled globally
 * in styles.css) stops everything without extra JS.
 */

type Tone = "light" | "dark";

/** Small floating pane of smoked glass with a refracting edge. */
export function GlassFragment({
  className = "",
  rotate = 0,
  delay = 0,
  tone = "dark",
}: {
  className?: string;
  rotate?: number;
  delay?: number;
  tone?: Tone;
}) {
  return (
    <span
      aria-hidden="true"
      className={`lens drift pointer-events-none absolute block ${className}`}
      data-tone={tone}
      style={{ rotate: `${rotate}deg`, animationDelay: `${delay}s` }}
    />
  );
}

/** Concentric orbital routes with light nodes travelling along them. */
export function SectionOrbits({
  className = "",
  rings = 3,
  nodes = 3,
  opacity = 0.6,
}: {
  className?: string;
  rings?: number;
  nodes?: number;
  opacity?: number;
}) {
  const cx = 200;
  const cy = 200;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
      role="presentation"
    >
      <defs>
        <linearGradient id="hp-orbit-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.85" />
          <stop offset="50%" stopColor="var(--violet)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--magenta)" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#hp-orbit-stroke)">
        {Array.from({ length: rings }).map((_, i) => {
          const r = 60 + i * 52;
          return (
            <ellipse
              key={r}
              cx={cx}
              cy={cy}
              rx={r}
              ry={r * (0.42 + i * 0.09)}
              strokeWidth="0.8"
              opacity={0.75 - i * 0.16}
              transform={`rotate(${-18 + i * 11} ${cx} ${cy})`}
            />
          );
        })}
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.28">
        <circle cx={cx} cy={cy} r="150" strokeDasharray="2 10" />
        <circle cx={cx} cy={cy} r="184" strokeDasharray="1 14" />
      </g>
      <g>
        {Array.from({ length: nodes }).map((_, i) => {
          const r = 60 + i * 52;
          const ry = r * (0.42 + i * 0.09);
          const rot = -18 + i * 11;
          return (
            <circle
              key={`n-${r}`}
              r="3"
              fill="var(--cyan)"
              className="orbit-node"
              style={{
                offsetPath: `path("M ${cx - r} ${cy} a ${r} ${ry} 0 1 0 ${r * 2} 0 a ${r} ${ry} 0 1 0 ${-r * 2} 0")`,
                animationDuration: `${26 + i * 9}s`,
                animationDelay: `${i * -7}s`,
                transformOrigin: "center",
                rotate: `${rot}deg`,
              }}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Topographic contour field — thin nested curves suggesting depth. */
export function TopoLines({
  className = "",
  lines = 9,
  opacity = 0.35,
}: {
  className?: string;
  lines?: number;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
      role="presentation"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.7">
        {Array.from({ length: lines }).map((_, i) => {
          const o = i * 26;
          return (
            <path
              key={o}
              d={`M-40 ${120 + o} C 180 ${40 + o}, 380 ${210 + o}, 620 ${140 + o} S 1020 ${60 + o}, 1240 ${150 + o}`}
              opacity={0.85 - i * 0.07}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Slow scanning light sheet — used under the marquee and glass installations. */
export function ScanBeam({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`scan-beam pointer-events-none absolute ${className}`} />;
}

/**
 * Full atmospheric backdrop for a dark section: caustic bloom, contour grid,
 * chrome arc and orbital routes, composed as one layer.
 */
export function AtmosphericField({
  className = "",
  orbits = true,
  topo = true,
  intensity = 1,
}: {
  className?: string;
  orbits?: boolean;
  topo?: boolean;
  intensity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden text-white ${className}`}
    >
      <div className="grid-lines absolute inset-0" style={{ opacity: 0.5 * intensity }} />
      <div
        className="caustic absolute top-[10%] left-1/2 aspect-square w-[120vw] max-w-[1200px] -translate-x-1/2"
        style={{ opacity: 0.3 * intensity }}
      />
      {topo ? <TopoLines className="inset-x-0 bottom-0 h-[46%] w-full" opacity={0.18 * intensity} /> : null}
      {orbits ? (
        <SectionOrbits
          className="top-1/2 left-1/2 aspect-square w-[130vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2"
          opacity={0.35 * intensity}
        />
      ) : null}
    </div>
  );
}
