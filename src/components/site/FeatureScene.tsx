/**
 * Feature scenes: each one is a single 3D render presented inside a glass
 * portal. No schematic SVG objects — only atmosphere (frame, glow, grid,
 * scan beam, label) around the photograph.
 */

import { ScanBeam } from "@/components/site/Decor";
import walletPhoto from "@/assets/wallet-phone-card.webp.asset.json";
import globePhoto from "@/assets/glass-globe.webp.asset.json";
import cardPairPhoto from "@/assets/card-pair.webp.asset.json";

type Shape = "arch" | "split" | "stack";

function Portal({
  shape,
  glow,
  photo,
  alt,
  label,
  phase,
  objectPosition = "50% 50%",
}: {
  shape: Shape;
  glow: string;
  photo: { url: string };
  alt: string;
  label: string;
  phase: number;
  objectPosition?: string;
}) {
  const radius =
    shape === "arch"
      ? "rounded-[9rem_9rem_1.75rem_1.75rem]"
      : shape === "split"
        ? "rounded-[1.75rem_5.5rem_1.75rem_5.5rem]"
        : "rounded-[2.25rem]";

  return (
    <div className="relative w-full max-w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[3rem] opacity-70 blur-2xl"
        style={{ background: glow }}
      />

      <figure
        className={`glass-panel relative aspect-[4/5] w-full overflow-hidden text-white sm:aspect-[4/4.4] ${radius}`}
        style={{ boxShadow: "0 50px 90px -50px rgba(0,0,0,0.95)" }}
      >
        <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-25" />

        <img
          src={photo.url}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={720}
          height={720}
          sizes="(min-width: 640px) 40vw, 92vw"
          className="scene-kenburns absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition,
            animationDelay: `${phase}s`,
            maskImage:
              "radial-gradient(96% 96% at 50% 50%, black 78%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(96% 96% at 50% 50%, black 78%, transparent 100%)",
          }}
        />

        <ScanBeam className="opacity-30" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            boxShadow:
              "inset 0 0 0 1px color-mix(in oklab, white 14%, transparent), inset 0 -60px 90px -70px color-mix(in oklab, var(--magenta) 90%, transparent), inset 0 60px 90px -70px color-mix(in oklab, var(--cyan) 70%, transparent)",
          }}
        />

        <figcaption className="kicker absolute bottom-5 left-6 z-10 text-white/70">
          {label}
        </figcaption>
      </figure>
    </div>
  );
}

export function SceneWallet() {
  return (
    <Portal
      shape="arch"
      phase={0}
      photo={walletPhoto}
      alt="Смартфон с добавленной картой Visa и бесконтактной оплатой"
      label="Wallet"
      glow="radial-gradient(60% 60% at 35% 25%, color-mix(in oklab, var(--violet) 55%, transparent), transparent 70%)"
    />
  );
}

export function SceneRoutes() {
  return (
    <Portal
      shape="split"
      phase={-4}
      photo={globePhoto}
      alt="Стеклянный глобус с маршрутом международного перевода"
      label="Routes"
      glow="radial-gradient(60% 60% at 65% 35%, color-mix(in oklab, var(--cyan) 50%, transparent), transparent 70%)"
    />
  );
}

export function SceneFormats() {
  return (
    <Portal
      shape="stack"
      phase={-8}
      photo={cardPairPhoto}
      alt="Виртуальная и физическая карты Visa на стеклянном пьедестале"
      label="Virtual / Physical"
      objectPosition="50% 42%"
      glow="radial-gradient(60% 60% at 50% 70%, color-mix(in oklab, var(--magenta) 50%, transparent), transparent 70%)"
    />
  );
}
