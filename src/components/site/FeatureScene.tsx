/**
 * Graphic micro-installations for the "Возможности" section.
 * Each scene gets its own glass geometry — no invented figures, no fake numbers.
 */

import type { ReactNode } from "react";
import { GlassFragment, ScanBeam } from "@/components/site/Decor";

const stroke = "currentColor";

/**
 * Shared installation shell. `shape` gives every scene a distinct silhouette
 * so the three cards never read as the same box with different contents.
 */
function Installation({
  children,
  shape,
  glow,
}: {
  children: ReactNode;
  shape: "arch" | "split" | "stack";
  glow: string;
}) {
  const radius =
    shape === "arch"
      ? "rounded-[9rem_9rem_1.75rem_1.75rem]"
      : shape === "split"
        ? "rounded-[1.75rem_5.5rem_1.75rem_5.5rem]"
        : "rounded-[1.75rem]";

  return (
    <div className={`relative w-full max-w-full ${shape === "stack" ? "pt-6 pl-5" : ""}`}>
      {shape === "stack" ? (
        <div
          aria-hidden="true"
          className="glass-panel absolute inset-0 -translate-x-2 -translate-y-2 rounded-[1.75rem] opacity-40"
        />
      ) : null}

      <div
        className={`glass-panel relative aspect-[4/3] w-full overflow-hidden text-white ${radius}`}
      >
        <div className="grid-lines absolute inset-0 opacity-40" />
        <ScanBeam className="opacity-40" />

        <svg
          viewBox="0 0 320 240"
          className="absolute inset-0 h-full w-full"
          role="presentation"
          aria-hidden="true"
        >
          {children}
        </svg>

        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: glow }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            boxShadow:
              "inset 0 0 0 1px color-mix(in oklab, white 10%, transparent), inset 0 -40px 70px -60px color-mix(in oklab, var(--magenta) 90%, transparent)",
          }}
        />
      </div>

      {shape !== "stack" ? (
        <GlassFragment
          className="-right-4 -bottom-6 size-20 sm:size-24"
          rotate={-12}
          delay={2}
        />
      ) : null}
    </div>
  );
}

/** Apple Pay — device emitting concentric NFC/wallet waves into a node field. */
export function SceneWallet() {
  return (
    <Installation
      shape="arch"
      glow="radial-gradient(70% 60% at 30% 18%, color-mix(in oklab, var(--cyan) 24%, transparent), transparent 62%), radial-gradient(70% 60% at 82% 92%, color-mix(in oklab, var(--magenta) 20%, transparent), transparent 64%)"
    >
      <g opacity="0.75" stroke={stroke} fill="none">
        <rect x="40" y="56" width="76" height="128" rx="15" strokeWidth="1.2" opacity="0.9" />
        <rect x="50" y="74" width="54" height="34" rx="6" strokeWidth="0.9" opacity="0.55" />
        <rect x="56" y="84" width="54" height="34" rx="6" strokeWidth="0.9" opacity="0.35" />
        <path d="M62 168 H94" strokeWidth="1.4" opacity="0.4" strokeLinecap="round" />
      </g>

      <g stroke={stroke} fill="none" strokeLinecap="round">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M132 ${120 - (i + 1) * 14} A ${(i + 1) * 24} ${(i + 1) * 24} 0 0 1 132 ${120 + (i + 1) * 14}`}
            strokeWidth="1"
            opacity={0.62 - i * 0.1}
            strokeDasharray="120 240"
            className="dash-flow"
            style={{ animationDelay: `${i * -2.4}s`, animationDuration: `${12 + i * 3}s` }}
          />
        ))}
      </g>

      <g stroke={stroke} fill="none" strokeWidth="0.7" opacity="0.32">
        <path d="M206 128 L232 70 L268 112 L242 158 Z" />
        <path d="M268 112 L286 182 L242 158" />
      </g>
      <g fill={stroke}>
        {[
          [232, 70],
          [268, 112],
          [242, 158],
          [286, 182],
          [206, 128],
        ].map(([x, y], i) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" opacity={0.75 - i * 0.06} />
        ))}
      </g>
      <circle
        r="2.6"
        fill="var(--cyan)"
        className="orbit-node"
        style={{
          offsetPath: 'path("M206 128 L232 70 L268 112 L242 158 Z")',
          animationDuration: "16s",
        }}
      />
    </Installation>
  );
}

/** Transfers — Europe↔US route map with travelling light nodes. */
export function SceneRoutes() {
  const arcA = "M84 156 C 128 58, 214 60, 252 106";
  const arcB = "M104 72 C 158 132, 200 172, 240 152";
  return (
    <Installation
      shape="split"
      glow="radial-gradient(60% 60% at 20% 30%, color-mix(in oklab, var(--violet) 22%, transparent), transparent 62%), radial-gradient(60% 60% at 85% 78%, color-mix(in oklab, var(--cyan) 20%, transparent), transparent 64%)"
    >
      <g stroke={stroke} fill="none" opacity="0.4" strokeWidth="0.7">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M0 ${44 + i * 32} C 90 ${20 + i * 32}, 220 ${70 + i * 32}, 320 ${34 + i * 32}`} />
        ))}
      </g>

      <g stroke={stroke} fill="none" opacity="0.5" strokeWidth="0.9">
        <circle cx="160" cy="120" r="80" />
        <ellipse cx="160" cy="120" rx="33" ry="80" />
        <ellipse cx="160" cy="120" rx="62" ry="80" opacity="0.6" />
        <path d="M80 120 H240" />
      </g>

      <g stroke={stroke} fill="none" strokeWidth="1.3" opacity="0.85" strokeLinecap="round">
        <path d={arcA} strokeDasharray="5 7" className="dash-flow" />
        <path
          d={arcB}
          strokeDasharray="4 8"
          opacity="0.6"
          className="dash-flow"
          style={{ animationDuration: "24s" }}
        />
      </g>

      <g fill={stroke}>
        <circle cx="84" cy="156" r="3.6" />
        <circle cx="252" cy="106" r="3.6" />
        <circle cx="104" cy="72" r="2.4" opacity="0.6" />
        <circle cx="240" cy="152" r="2.4" opacity="0.6" />
      </g>
      <circle
        r="3"
        fill="var(--cyan)"
        className="orbit-node"
        style={{ offsetPath: `path("${arcA}")`, animationDuration: "9s" }}
      />
      <circle
        r="2.4"
        fill="var(--magenta)"
        className="orbit-node"
        style={{ offsetPath: `path("${arcB}")`, animationDuration: "13s", animationDelay: "-4s" }}
      />
    </Installation>
  );
}

/** Virtual / Physical — a dissolving digital plane materialising into plastic. */
export function SceneFormats() {
  return (
    <Installation
      shape="stack"
      glow="radial-gradient(70% 60% at 74% 22%, color-mix(in oklab, var(--magenta) 20%, transparent), transparent 62%), radial-gradient(70% 60% at 24% 88%, color-mix(in oklab, var(--cyan) 20%, transparent), transparent 64%)"
    >
      <g stroke={stroke} fill="none" opacity="0.3" strokeWidth="0.9">
        <ellipse cx="160" cy="122" rx="126" ry="52" transform="rotate(-12 160 122)" />
        <ellipse cx="160" cy="122" rx="94" ry="34" transform="rotate(-12 160 122)" opacity="0.6" />
      </g>

      <g transform="rotate(-9 160 120)">
        {/* virtual plane — dissolving */}
        <rect
          x="58"
          y="66"
          width="150"
          height="95"
          rx="12"
          fill="oklch(1 0 0 / 0.04)"
          stroke={stroke}
          strokeWidth="1"
          strokeDasharray="6 7"
          opacity="0.6"
          className="dash-flow"
        />
        <g fill={stroke} opacity="0.3">
          {Array.from({ length: 22 }).map((_, i) => (
            <rect
              key={i}
              x={64 + (i % 8) * 17}
              y={76 + Math.floor(i / 8) * 26}
              width="6"
              height="2"
              rx="1"
              opacity={1 - (i % 8) * 0.1}
            />
          ))}
        </g>

        {/* physical plane — materialised */}
        <rect
          x="106"
          y="98"
          width="152"
          height="96"
          rx="13"
          fill="oklch(1 0 0 / 0.1)"
          stroke={stroke}
          strokeWidth="1.3"
          opacity="0.92"
        />
        <rect
          x="120"
          y="112"
          width="25"
          height="19"
          rx="4"
          stroke={stroke}
          fill="oklch(1 0 0 / 0.14)"
          strokeWidth="0.9"
          opacity="0.75"
        />
        <path d="M120 172 H176" stroke={stroke} strokeWidth="1.4" opacity="0.45" strokeLinecap="round" />
      </g>

      <g stroke={stroke} fill="none" strokeWidth="0.8" opacity="0.4">
        <path d="M12 208 C 68 192, 108 216, 160 200 S 262 178, 308 198" />
        <path d="M12 218 C 72 206, 114 226, 160 212 S 260 194, 308 210" opacity="0.55" />
      </g>
    </Installation>
  );
}
