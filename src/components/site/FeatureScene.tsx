/**
 * Feature scenes: each one is a single 3D render presented as a frameless
 * artwork dissolved into the dark background — no panels, borders or captions.
 * Only volumetric colour glow lives behind the object.
 */

const WALLET_PHOTO = "/media/wallet-phone-card.webp";
const GLOBE_PHOTO = "/media/glass-globe.webp";
const CARD_PAIR_PHOTO = "/media/formats-two-cards.webp";

function Artwork({
  glow,
  photo,
  alt,
  phase,
  cutout = false,
}: {
  glow: string;
  photo: string;
  alt: string;
  phase: number;
  cutout?: boolean;
}) {
  return (
    <div className="relative w-full max-w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10 opacity-80 blur-3xl"
        style={{ background: glow }}
      />

      <img
        src={photo}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={720}
        height={720}
        sizes="(min-width: 640px) 40vw, 92vw"
        className={
          cutout
            ? "art-cutout cutout-float relative block aspect-[4/4.4] w-full"
            : "art-object art-screen art-float relative block aspect-[4/4.4] w-full"
        }
        style={{ animationDelay: `${phase}s` }}
      />
    </div>
  );
}

export function SceneWallet() {
  return (
    <Artwork
      phase={0}
      photo={WALLET_PHOTO}
      alt="Смартфон с добавленной картой Visa и бесконтактной оплатой"
      glow="radial-gradient(50% 50% at 40% 35%, color-mix(in oklab, var(--violet) 45%, transparent), transparent 72%), radial-gradient(40% 40% at 70% 70%, color-mix(in oklab, var(--cyan) 26%, transparent), transparent 72%)"
    />
  );
}

export function SceneRoutes() {
  return (
    <Artwork
      phase={-4}
      photo={GLOBE_PHOTO}
      alt="Стеклянный глобус с маршрутом международного перевода"
      glow="radial-gradient(50% 50% at 60% 40%, color-mix(in oklab, var(--cyan) 42%, transparent), transparent 72%), radial-gradient(40% 40% at 30% 70%, color-mix(in oklab, var(--violet) 26%, transparent), transparent 72%)"
    />
  );
}

export function SceneFormats() {
  return (
    <Artwork
      cutout
      phase={-8}
      photo={CARD_PAIR_PHOTO}
      alt="Виртуальная и физическая карты Visa на стеклянном пьедестале"
      glow="radial-gradient(50% 50% at 50% 60%, color-mix(in oklab, var(--magenta) 42%, transparent), transparent 72%), radial-gradient(40% 40% at 30% 35%, color-mix(in oklab, var(--cyan) 24%, transparent), transparent 72%)"
    />
  );
}
