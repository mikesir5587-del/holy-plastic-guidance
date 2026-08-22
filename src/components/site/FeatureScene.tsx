/**
 * Abstract graphic micro-scenes for the "Возможности" section.
 * No invented figures — contour lines, routes, orbital paths, nodes, waves.
 */

const stroke = "currentColor";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-panel relative aspect-[4/3] w-full overflow-hidden rounded-2xl text-white">
      <div className="grid-lines absolute inset-0 opacity-40" />
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
        style={{
          background:
            "radial-gradient(70% 60% at 30% 20%, color-mix(in oklab, var(--cyan) 22%, transparent), transparent 62%), radial-gradient(70% 60% at 80% 90%, color-mix(in oklab, var(--magenta) 20%, transparent), transparent 64%)",
        }}
      />
    </div>
  );
}

/** Apple Pay — device + emitted contactless waves into a node field */
export function SceneWallet() {
  return (
    <Frame>
      <g opacity="0.7" stroke={stroke} fill="none">
        <rect x="42" y="58" width="74" height="124" rx="14" strokeWidth="1.2" opacity="0.9" />
        <rect x="52" y="76" width="54" height="34" rx="6" strokeWidth="0.9" opacity="0.55" />
        <rect x="58" y="86" width="54" height="34" rx="6" strokeWidth="0.9" opacity="0.35" />
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M136 ${120 - (i + 1) * 16} A ${(i + 1) * 26} ${(i + 1) * 26} 0 0 1 136 ${120 + (i + 1) * 16}`}
            strokeWidth="1"
            opacity={0.65 - i * 0.13}
          />
        ))}
      </g>
      <g fill={stroke}>
        {[
          [232, 70],
          [268, 112],
          [242, 158],
          [286, 182],
          [206, 128],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" opacity="0.7" />
        ))}
      </g>
      <g stroke={stroke} fill="none" strokeWidth="0.7" opacity="0.35">
        <path d="M206 128 L232 70 L268 112 L242 158 Z" />
        <path d="M268 112 L286 182 L242 158" />
      </g>
    </Frame>
  );
}

/** International route — globe contour with payment arcs */
export function SceneRoutes() {
  return (
    <Frame>
      <g stroke={stroke} fill="none" opacity="0.55" strokeWidth="0.9">
        <circle cx="160" cy="120" r="82" />
        <ellipse cx="160" cy="120" rx="34" ry="82" />
        <ellipse cx="160" cy="120" rx="64" ry="82" opacity="0.6" />
        <path d="M78 120 H242" />
        <path d="M92 82 H228" opacity="0.6" />
        <path d="M92 158 H228" opacity="0.6" />
      </g>
      <g stroke={stroke} fill="none" strokeWidth="1.3" opacity="0.85" strokeLinecap="round">
        <path d="M96 152 C 130 60, 210 62, 244 104" strokeDasharray="5 6" />
        <path d="M110 74 C 160 132, 200 168, 238 150" strokeDasharray="4 7" opacity="0.6" />
      </g>
      <g fill={stroke}>
        <circle cx="96" cy="152" r="3.4" />
        <circle cx="244" cy="104" r="3.4" />
        <circle cx="110" cy="74" r="2.4" opacity="0.6" />
        <circle cx="238" cy="150" r="2.4" opacity="0.6" />
      </g>
    </Frame>
  );
}

/** Virtual / Physical — two offset card planes + orbital path */
export function SceneFormats() {
  return (
    <Frame>
      <g stroke={stroke} fill="none" opacity="0.35" strokeWidth="0.9">
        <ellipse cx="160" cy="122" rx="128" ry="52" transform="rotate(-12 160 122)" />
        <ellipse cx="160" cy="122" rx="96" ry="34" transform="rotate(-12 160 122)" opacity="0.6" />
      </g>
      <g transform="rotate(-9 160 120)">
        <rect
          x="66"
          y="72"
          width="150"
          height="95"
          rx="12"
          fill="oklch(1 0 0 / 0.05)"
          stroke={stroke}
          strokeWidth="1"
          strokeDasharray="6 6"
          opacity="0.65"
        />
        <rect
          x="102"
          y="94"
          width="150"
          height="95"
          rx="12"
          fill="oklch(1 0 0 / 0.09)"
          stroke={stroke}
          strokeWidth="1.2"
          opacity="0.9"
        />
        <rect
          x="116"
          y="108"
          width="24"
          height="18"
          rx="4"
          stroke={stroke}
          fill="none"
          strokeWidth="0.9"
          opacity="0.7"
        />
      </g>
      <g stroke={stroke} fill="none" strokeWidth="0.8" opacity="0.45">
        <path d="M20 206 C 70 190, 110 214, 160 198 S 260 176, 300 196" />
        <path d="M20 216 C 74 204, 116 224, 160 210 S 258 192, 300 208" opacity="0.55" />
      </g>
    </Frame>
  );
}
