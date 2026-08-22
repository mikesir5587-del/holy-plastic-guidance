import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  SiAirbnb,
  SiAnthropic,
  SiBookingdotcom,
  SiApple,
  SiGoogleplay,
  SiGooglepay,
  SiNetflix,
  SiSpotify,
  SiSteam,
  SiYoutube,
} from "react-icons/si";
import { Copy, Check, ArrowUpRight, Send, Mail } from "lucide-react";

import { HeroLiquidCard } from "@/components/site/HeroLiquidCard";
import { Logo } from "@/components/site/Logo";
import { Marquee, type MarqueeItem } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { SceneWallet, SceneRoutes, SceneFormats } from "@/components/site/FeatureScene";
import {
  AtmosphericField,
  GlassFragment,
  ScanBeam,
  SectionOrbits,
  TopoLines,
} from "@/components/site/Decor";


const TELEGRAM = "https://t.me/holy_plastic";
const EMAIL = "holyyplastic@gmail.com";
const HERO_WAVE = "/media/hero-chrome-wave.webp";
const CRYPTO_PHOTO = "/media/crypto-flow.webp";
const PASSPORT_PHOTO = "/media/passport-card.webp";
const CARD_PAIR_PHOTO = "/media/formats-two-cards.webp";
const CLOSING_CARD_PHOTO = "/media/closing-glass-card.webp";

const MSG_GENERAL =
  "Здравствуйте! Хочу оформить карту. Расскажите, пожалуйста, подробнее о процессе оформления 💰";
const MSG_VIRTUAL = "Здравствуйте! Расскажите, пожалуйста, подробнее о виртуальной карте 💰";
const MSG_PHYSICAL = "Здравствуйте! Расскажите, пожалуйста, подробнее о физической карте 💰";

const MAIL_SUBJECT = encodeURIComponent("Консультация HolyPlastic");
const MAIL_BODY = encodeURIComponent(
  "Здравствуйте! Хочу оформить карту. Расскажите, пожалуйста, подробнее о процессе оформления.",
);
const MAILTO = `mailto:${EMAIL}?subject=${MAIL_SUBJECT}&body=${MAIL_BODY}`;

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "HolyPlastic — Visa без границ" },
      {
        name: "description",
        content:
          "Дебетовая Visa Великобритании с личным сопровождением: Apple Pay и Google Pay, международные сервисы, доступные переводы. Virtual 11 990 ₽, Physical 14 990 ₽.",
      },
      { property: "og:title", content: "HolyPlastic — Visa без границ" },
      {
        property: "og:description",
        content:
          "Дебетовая Visa Великобритании с личным сопровождением: Apple Pay и Google Pay, международные сервисы, доступные переводы.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://holy-plastic.com/" },
      { property: "og:image", content: "https://holy-plastic.com/media/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "HolyPlastic — дебетовая Visa Великобритании" },
      { name: "twitter:title", content: "HolyPlastic — Visa без границ" },
      {
        name: "twitter:description",
        content:
          "Дебетовая Visa Великобритании с личным сопровождением: Apple Pay и Google Pay, международные сервисы, доступные переводы.",
      },
      { name: "twitter:image", content: "https://holy-plastic.com/media/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://holy-plastic.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://holy-plastic.com/#org",
              name: "HolyPlastic",
              url: "https://holy-plastic.com/",
              logo: "https://holy-plastic.com/media/holyplastic-logo-1024.webp",
              email: EMAIL,
              description:
                "Консультационное сопровождение оформления дебетовой Visa Великобритании. HolyPlastic не является банком, эмитентом или платёжной системой.",
              sameAs: [TELEGRAM],
            },
            {
              "@type": "Service",
              name: "Сопровождение оформления дебетовой Visa",
              serviceType: "Консультационное сопровождение оформления карты",
              provider: { "@id": "https://holy-plastic.com/#org" },
              areaServed: "RU",
              url: "https://holy-plastic.com/",
              offers: [
                {
                  "@type": "Offer",
                  name: "Virtual",
                  price: "11990",
                  priceCurrency: "RUB",
                  url: "https://holy-plastic.com/#pricing",
                },
                {
                  "@type": "Offer",
                  name: "Physical",
                  price: "14990",
                  priceCurrency: "RUB",
                  url: "https://holy-plastic.com/#pricing",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#services", label: "Сервисы" },
  { href: "#features", label: "Возможности" },
  { href: "#security", label: "Прозрачно" },
  { href: "#steps", label: "4 шага" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#contact", label: "Контакты" },
];

const ROW_A: MarqueeItem[] = [
  { name: "ChatGPT", icon: <span className="text-[0.85em] font-black tracking-tight">AI</span> },
  { name: "Claude", icon: <SiAnthropic /> },
  { name: "Netflix", icon: <SiNetflix /> },
  { name: "Spotify", icon: <SiSpotify /> },
  { name: "Apple", icon: <SiApple /> },
  { name: "YouTube", icon: <SiYoutube /> },
];

const ROW_B: MarqueeItem[] = [
  { name: "Google Play", icon: <SiGoogleplay /> },
  { name: "Amazon", icon: <span className="text-[0.85em] font-black tracking-tight">a</span> },
  { name: "Adobe", icon: <span className="text-[0.85em] font-black tracking-tight">A</span> },
  { name: "Steam", icon: <SiSteam /> },
  { name: "Booking.com", icon: <SiBookingdotcom /> },
  { name: "Airbnb", icon: <SiAirbnb /> },
];

function tgHref(message?: string) {
  return message ? `${TELEGRAM}?text=${encodeURIComponent(message)}` : TELEGRAM;
}

function TgLink({
  children,
  className = "",
  label,
  message,
}: {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  message?: string;
}) {
  return (
    <a
      href={tgHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}

const btnLight =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-7 text-[0.78rem] font-bold tracking-[0.16em] text-[color:var(--ink)] uppercase transition-transform duration-300 hover:scale-[1.03]";
const btnGhost =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-current/30 px-7 text-[0.78rem] font-bold tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-current/10";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Open: focus the first item, trap Tab/Shift+Tab inside the panel, lock scroll.
  // Escape closes and returns focus to the toggle.
  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }
    document.body.style.overflow = "hidden";
    const items = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
    items()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const list = items();
      if (list.length === 0) return;
      const first = list[0]!;
      const last = list[list.length - 1]!;
      const active = document.activeElement as HTMLElement | null;
      if (!menuRef.current?.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.removeProperty("overflow");
    };
  }, [open]);


  return (
    <header
      className={`safe-top fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[color:var(--ink)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "h-[74px]" : "h-24 sm:h-28"
        }`}
      >
        <a
          href="#top"
          aria-label="HolyPlastic — в начало"
          className="flex min-h-11 min-w-0 items-center"
        >
          <Logo
            priority
            sizes="(min-width: 640px) 260px, 200px"
            className={`transition-all duration-500 ${scrolled ? "h-11 sm:h-12" : "h-14 sm:h-16"}`}
          />
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="inline-flex min-h-11 items-center px-1 text-[0.68rem] font-semibold tracking-[0.24em] text-white/75 uppercase transition-colors hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>


        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden sm:block">
            <TgLink
              className={`${btnLight} h-11`}
              label="Обсудить оформление в Telegram"
              message={MSG_GENERAL}
            >
              Обсудить оформление
            </TgLink>
          </span>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/25 lg:hidden"
          >
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-5 bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={menuRef}
          id="mobile-nav"
          className="max-h-[70svh] overflow-y-auto border-t border-white/10 bg-[color:var(--ink)]/95 px-5 py-6 backdrop-blur-xl lg:hidden"
        >

          <nav aria-label="Мобильная навигация" className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-white/10 text-[0.8rem] font-semibold tracking-[0.2em] text-white/90 uppercase"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <TgLink
            className={`${btnLight} mt-6 w-full`}
            label="Обсудить оформление в Telegram"
            message={MSG_GENERAL}
          >
            Обсудить оформление
          </TgLink>
        </div>
      )}
    </header>
  );
}

function Hero() {
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
      raf = requestAnimationFrame(() => setY(Math.min(window.scrollY, 900)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [motion]);

  const p = (k: number) => ({ transform: `translate3d(0, ${y * k}px, 0)` });

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 sm:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 text-white">
        <div className="grid-lines absolute inset-0 opacity-70" />
        <div
          className="caustic absolute top-[26%] left-1/2 h-[80vw] w-[80vw] max-w-[1000px] -translate-x-1/2 opacity-45"
          style={motion ? p(0.06) : undefined}
        />
        <SectionOrbits
          className="top-[46%] left-1/2 aspect-square w-[150vw] max-w-[1250px] -translate-x-1/2 -translate-y-1/2"
          rings={4}
          nodes={4}
          opacity={0.5}
        />
        <div
          className="chrome-arc drift absolute top-[18%] left-1/2 aspect-square w-[120vw] max-w-[1500px] -translate-x-1/2"
          style={motion ? p(0.03) : undefined}
        />
        <div
          className="chrome-arc absolute top-[42%] left-1/2 aspect-square w-[70vw] max-w-[900px] -translate-x-1/2 opacity-25"
          style={motion ? p(-0.04) : undefined}
        />
        <img
          src={HERO_WAVE}
          srcSet="/media/hero-chrome-wave-960.webp 960w, /media/hero-chrome-wave-1440.webp 1440w, /media/hero-chrome-wave.webp 1600w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-x-0 top-[8%] h-[70%] w-full object-cover opacity-55 mix-blend-screen"
          style={{
            maskImage:
              "radial-gradient(80% 70% at 50% 45%, black 30%, transparent 78%)",
            ...(motion ? p(0.05) : {}),
          }}
        />
        <TopoLines className="inset-x-0 bottom-0 h-[38%] w-full" opacity={0.22} />
        <div style={motion ? p(0.12) : undefined}>
          <GlassFragment className="top-[26%] left-[4%] size-24 sm:size-36" rotate={-14} />
        </div>
        <div style={motion ? p(-0.14) : undefined}>
          <GlassFragment className="top-[34%] right-[5%] size-20 sm:size-28" rotate={22} delay={3} />
        </div>
        <div style={motion ? p(0.09) : undefined}>
          <GlassFragment
            className="bottom-[16%] left-[16%] hidden size-24 sm:block"
            rotate={8}
            delay={6}
          />
        </div>
      </div>


      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="relative z-10 flex items-baseline justify-between gap-4">
          <h1 className="display h-hero leading-[0.86]">
            <span className="block" style={motion ? p(-0.05) : undefined}>
              Visa
            </span>
            <span
              className="block pl-[8vw] text-white/60 sm:pl-[14vw]"
              style={motion ? p(0.04) : undefined}
            >
              без
            </span>
            <span className="chrome-text block pl-[2vw]" style={motion ? p(-0.02) : undefined}>
              границ
            </span>
          </h1>
          <p className="kicker hidden max-w-[9rem] text-right text-white lg:block">
            UK debit
            <br />
            Visa
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,860px)_minmax(0,1fr)] lg:gap-6">
          <p className="order-2 max-w-sm text-[0.95rem] leading-relaxed text-white/75 lg:order-1 lg:mb-16">
            Дебетовая Visa Великобритании с личным сопровождением — для международных платежей,
            Apple&nbsp;Pay, Google&nbsp;Pay и доступных переводов.
          </p>

          <div className="order-1 -mx-2 lg:order-2 lg:mx-0">
            <HeroLiquidCard className="mx-auto w-full max-w-[860px] lg:w-[46vw] lg:min-w-[620px]" />
          </div>

          <div className="order-3 flex flex-col items-start gap-5 lg:mb-16 lg:items-end">

            <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.24em] text-white/75 uppercase">
              <SiApple aria-hidden="true" /> Apple Pay
              <span aria-hidden="true" className="opacity-40">/</span>
              <SiGooglepay aria-hidden="true" className="text-[1.6em]" /> Google Pay
            </span>
            <TgLink
              className={btnLight}
              label="Обсудить оформление в Telegram"
              message={MSG_GENERAL}
            >
              Обсудить оформление <ArrowUpRight className="size-4" aria-hidden="true" />
            </TgLink>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-white/70">
          <span aria-hidden="true" className="relative block h-6 w-px bg-white/25">
            <span className="scroll-dot absolute top-0 -left-[1.5px] block size-[4px] rounded-full bg-white" />
          </span>
          <span className="kicker text-white">Скролл</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-white/10 py-16 sm:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 text-white">
        <div
          className="absolute inset-x-0 top-1/2 h-[70%] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, white 5%, transparent) 40%, transparent)",
            backdropFilter: "blur(2px)",
          }}
        />
        <ScanBeam className="inset-y-[30%] opacity-30" />
      </div>

      <div className="mx-auto mb-12 grid w-full max-w-[1400px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
        <div>
          <h2 className="display h-section leading-none">Платите глобально</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75">
            Подписки, магазины и поездки по всему миру. Пополнение — банковским переводом или через
            криптовалютный маршрут.
          </p>
        </div>

        <Reveal variant="blur" className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10 opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(50% 50% at 45% 40%, color-mix(in oklab, var(--cyan) 38%, transparent), transparent 72%), radial-gradient(40% 40% at 70% 70%, color-mix(in oklab, var(--magenta) 26%, transparent), transparent 72%)",
            }}
          />
          <img
            src={CRYPTO_PHOTO}
            srcSet="/media/crypto-flow-480.webp 480w, /media/crypto-flow.webp 720w"
            alt="Пополнение карты через криптовалютный маршрут"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 40vw, 92vw"
            className="art-object art-screen art-float relative block aspect-square w-full"
          />
        </Reveal>

      </div>
      <Marquee rowA={ROW_A} rowB={ROW_B} />
    </section>
  );
}



const FEATURES = [
  {
    n: "01",
    word: "Apple Pay + Google Pay",
    text: "Добавьте карту в кошелёк телефона и платите офлайн и онлайн, где принимают Visa.",
    sub: "Международные сервисы и покупки — подписки, магазины, поездки.",
    Scene: SceneWallet,
  },
  {
    n: "02",
    word: "Переводы",
    text: "Доступные переводы из Европы и США по реквизитам счёта.",
    sub: "Есть вариант пополнения через криптовалютный маршрут — условия и доступность определяют провайдеры и правила банка.",
    Scene: SceneRoutes,
  },
  {
    n: "03",
    word: "Virtual / Physical",
    text: "Виртуальная Visa сразу или пластик с доставкой — выбираете формат.",
    sub: "Личное сопровождение от первого сообщения до активации.",
    Scene: SceneFormats,
  },
];

function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <AtmosphericField intensity={0.85} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 text-white">
        <div className="chrome-arc absolute top-[10%] right-[-30%] aspect-square w-[80vw] max-w-[900px] opacity-30" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display h-section max-w-full pr-1 leading-[1.02] break-words hyphens-none">
            Возможности
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 sm:mt-24 sm:gap-36">
          {FEATURES.map((f, i) => {
            const Scene = f.Scene;
            return (
              <Reveal
                key={f.n}
                variant="blur"
                className="grid items-center gap-8 sm:grid-cols-12 sm:gap-10"
              >
                <div
                  className={`relative z-10 sm:col-span-7 ${i % 2 ? "sm:order-2 sm:col-start-6" : ""}`}
                >
                  <span className="kicker text-white">{f.n}</span>
                  <p className="display h-sub mt-4 leading-[0.95]">{f.word}</p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80">{f.text}</p>
                  <p className="mt-3 max-w-md text-xs leading-relaxed text-white/60">{f.sub}</p>
                </div>
                <div className={`sm:col-span-5 ${i % 2 ? "sm:order-1 sm:col-start-1" : ""}`}>
                  <Scene />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const NEEDED = [
  { n: "01", t: "Загранпаспорт или внутренний паспорт РФ / РБ" },
  { n: "02", t: "Email" },
  { n: "03", t: "Телефон" },
];

function Security() {
  return (
    <section id="security" className="scene-milk grain relative overflow-hidden py-24 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-[color:var(--ink)]"
      >
        <div className="grid-lines absolute inset-0 opacity-70" />
        <TopoLines className="inset-x-0 top-0 h-[40%] w-full" opacity={0.12} lines={7} />
        <GlassFragment
          tone="light"
          className="top-[12%] right-[6%] size-24 sm:size-40"
          rotate={16}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display h-section leading-none">Прозрачно</h2>
        </Reveal>

        <Reveal delay={80} className="mt-14 sm:mt-20">
          <p className="kicker text-[color:var(--ink)]">Нужно</p>
          <div className="hairline my-6 text-[color:var(--ink)]" />
          <ol className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {NEEDED.map((item, i) => (
              <li
                key={item.n}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--ink)]/12 bg-white/45 p-6 backdrop-blur-sm sm:p-8"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)" }}
              >
                <span
                  aria-hidden="true"
                  className="emboss pointer-events-none absolute inset-0 text-[color:var(--ink)]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, color-mix(in oklab, var(--violet) 55%, transparent), transparent)",
                  }}
                />
                <span className="kicker relative text-[color:var(--ink)]">{item.n}</span>
                <p className="relative mt-4 text-[1.15rem] leading-tight font-semibold break-words hyphens-auto text-pretty md:text-[1.35rem] lg:text-[1.7rem]">
                  {item.t}
                </p>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 bottom-5 h-px opacity-30"
                  style={{
                    background: `linear-gradient(90deg, color-mix(in oklab, var(--ink) ${18 + i * 6}%, transparent), transparent)`,
                  }}
                />

              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}


const STEPS = [
  { n: "01", t: "Выбор", d: "Обсуждаем сценарий и формат карты." },
  { n: "02", t: "Документы", d: "Собираем паспорт и контактные данные." },
  { n: "03", t: "Подача", d: "Подаём заявку и помогаем пройти проверку KYC." },
  { n: "04", t: "Получение", d: "Активация, кошелёк, первые платежи." },
];

function Steps() {
  return (
    <section id="steps" className="relative overflow-hidden py-24 sm:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 text-white">
        <TopoLines className="inset-x-0 top-[20%] h-[60%] w-full" opacity={0.12} lines={6} />
        <div className="caustic absolute top-[30%] -left-[20%] size-[70vw] max-w-[760px] opacity-20" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display h-section leading-none">4 шага</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16">
          <Reveal variant="blur" className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 -z-10 opacity-80 blur-3xl"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 45%, color-mix(in oklab, var(--violet) 40%, transparent), transparent 72%), radial-gradient(40% 40% at 65% 70%, color-mix(in oklab, var(--cyan) 26%, transparent), transparent 72%)",
                }}
              />
              <img
                src={PASSPORT_PHOTO}
                srcSet="/media/passport-card-480.webp 480w, /media/passport-card.webp 720w"
                alt="Паспорт и карта Visa: проверка документов и KYC"
                width={640}
                height={640}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="art-object art-screen art-float relative block aspect-square w-full"
                style={{ animationDelay: "-6s" }}
              />
            </div>

          </Reveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-[7px] w-px overflow-hidden bg-white/15"
            >
              <span className="rail-pulse absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>

            <ol className="grid gap-12">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 90} className="relative pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute top-[6px] left-0 block size-[15px] rounded-full border border-white/50 bg-[color:var(--ink)]"
                    style={{
                      boxShadow:
                        "0 0 0 5px color-mix(in oklab, white 6%, transparent), 0 0 22px color-mix(in oklab, var(--cyan) 55%, transparent)",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-[11px] left-[5px] block size-[5px] rounded-full bg-white"
                  />
                  <span className="kicker text-white">{s.n}</span>
                  <p className="display mt-3 text-[8vw] leading-none sm:text-[3.4vw] lg:text-[2.6vw]">
                    {s.t}
                  </p>
                  <p className="mt-3 text-sm text-white/75">{s.d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-white/60">
          Оформление обычно занимает до одного дня.
        </p>
      </div>
    </section>
  );
}



function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <h2 className="display h-section leading-none">Два формата</h2>
        </Reveal>

        <Reveal variant="blur" delay={80} className="relative mt-12 sm:mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -top-16 -bottom-16 -z-10 opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(45% 60% at 50% 50%, color-mix(in oklab, var(--magenta) 34%, transparent), transparent 72%), radial-gradient(40% 60% at 20% 60%, color-mix(in oklab, var(--cyan) 30%, transparent), transparent 72%)",
            }}
          />
          <img
            src={CARD_PAIR_PHOTO}
            srcSet="/media/formats-two-cards-600.webp 600w, /media/formats-two-cards-900.webp 900w, /media/formats-two-cards.webp 1100w"
            alt="Виртуальная и физическая карты Visa рядом на пьедестале"
            width={1100}
            height={1118}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 640px) 70vw, 92vw"
            className="art-cutout cutout-float relative mx-auto block h-auto w-[92%] max-w-[720px] sm:w-[70%]"
            style={{ animationDelay: "-4s" }}
          />

        </Reveal>

      </div>

      <div className="mt-14 grid sm:mt-20 lg:grid-cols-2">
        <Reveal className="relative flex min-h-[70svh] flex-col justify-between overflow-hidden px-5 py-16 sm:px-12">
          <div
            aria-hidden="true"
            className="chrome-arc pointer-events-none absolute -top-[40%] -left-[30%] aspect-square w-[120%] opacity-20"
          />
          <span
            aria-hidden="true"
            className="emboss pointer-events-none absolute inset-0 text-white opacity-70"
          />
          <div
            aria-hidden="true"
            className="caustic pointer-events-none absolute -right-[25%] -bottom-[25%] size-[70%] opacity-25"
          />
          <SectionOrbits
            className="top-1/2 left-1/2 aspect-square w-[110%] -translate-x-1/2 -translate-y-1/2 text-white"
            rings={2}
            nodes={2}
            opacity={0.25}
          />
          <GlassFragment className="top-[12%] right-[8%] size-20 sm:size-28" rotate={-18} />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-px lg:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, color-mix(in oklab, var(--cyan) 60%, transparent) 35%, color-mix(in oklab, var(--magenta) 60%, transparent) 70%, transparent)",
            }}
          />
          <div className="relative z-10">
            <p className="kicker text-white">Virtual</p>
            <p className="display price-emboss mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]">
              11 990 ₽
            </p>
            <ul className="mt-10 space-y-3 text-sm text-white/80">
              <li>Виртуальная Visa для онлайн-платежей</li>
              <li>Подключение к кошельку телефона</li>
              <li>Сопровождение до первой операции</li>
            </ul>
          </div>
          <div className="relative z-10 mt-12">
            <TgLink
              className={`${btnLight} w-full sm:w-auto`}
              label="Выбрать виртуальную карту в Telegram"
              message={MSG_VIRTUAL}
            >
              Выбрать виртуальную
            </TgLink>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="scene-milk relative flex min-h-[70svh] flex-col justify-between overflow-hidden px-5 py-16 sm:px-12"
        >
          <span
            aria-hidden="true"
            className="emboss pointer-events-none absolute inset-0 text-[color:var(--ink)] opacity-50"
          />
          <div
            aria-hidden="true"
            className="grid-lines pointer-events-none absolute inset-0 text-[color:var(--ink)] opacity-40"
          />
          <GlassFragment
            tone="light"
            className="right-[8%] bottom-[14%] size-24 sm:size-36"
            rotate={12}
            delay={4}
          />
          <div className="relative z-10">
            <p className="kicker text-[color:var(--ink)]">Physical</p>
            <p
              className="display mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.9), 0 18px 40px rgba(0,0,0,0.16)" }}
            >
              14 990 ₽
            </p>
            <ul className="mt-10 space-y-3 text-sm opacity-85">
              <li>Виртуальная и пластиковая Visa</li>
              <li>Офлайн-платежи и снятие наличных</li>
              <li>Сопровождение до активации пластика</li>
            </ul>
          </div>
          <div className="relative z-10 mt-12">
            <TgLink
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-7 text-[0.78rem] font-bold tracking-[0.16em] text-white uppercase transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
              label="Выбрать физическую карту в Telegram"
              message={MSG_PHYSICAL}
            >
              Выбрать физическую
            </TgLink>
          </div>
        </Reveal>
      </div>

      <Reveal variant="blur" delay={80} className="mx-auto mt-14 max-w-4xl px-5 text-center sm:px-8">
        <p className="text-xs leading-relaxed text-white/55 sm:text-sm">
          Указанная стоимость носит информационный характер и не является публичной офертой.
          Итоговая стоимость и условия оказания услуги согласовываются индивидуально.
        </p>
      </Reveal>

    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(async () => {
    if (timer.current) clearTimeout(timer.current);
    setStatus("copying");

    const withTimeout = (promise: Promise<void>) =>
      Promise.race([
        promise,
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), 1500)),
      ]);

    const legacyCopy = () => {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "0";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, EMAIL.length);
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      document.body.removeChild(ta);
      return ok;
    };

    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await withTimeout(navigator.clipboard.writeText(EMAIL));
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) ok = legacyCopy();

    setStatus(ok ? "copied" : "error");
    timer.current = setTimeout(() => setStatus("idle"), ok ? 1900 : 3000);
  }, []);

  const copied = status === "copied";
  const label =
    status === "copied"
      ? "Скопировано"
      : status === "error"
        ? "Не удалось скопировать"
        : status === "copying"
          ? "Копируем…"
          : "Скопировать почту";

  return (
    <section
      id="contact"
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 py-28 sm:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 text-white">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="caustic absolute bottom-[-20%] left-1/2 h-[80vw] w-[80vw] max-w-[1000px] -translate-x-1/2 opacity-40" />
        <div className="chrome-arc drift absolute bottom-[-30%] left-1/2 aspect-square w-[110vw] max-w-[1200px] -translate-x-1/2" />
        <TopoLines className="inset-x-0 bottom-0 h-[34%] w-full" opacity={0.16} lines={6} />
      </div>

      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <Reveal className="relative z-10 flex w-full flex-col items-center">
          <span className="relative flex items-center justify-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute aspect-square w-[240%] rounded-full border border-white/12"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute aspect-square w-[360%] rounded-full border border-white/8"
            />
            <span
              aria-hidden="true"
              className="lens pointer-events-none absolute aspect-[3/2] w-[170%] opacity-70"
            />
            <Logo className="relative h-20 sm:h-28" />
          </span>

          <div className="relative mt-12 w-full">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 h-[160%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--violet) 34%, transparent), transparent 72%), radial-gradient(closest-side at 30% 60%, color-mix(in oklab, var(--cyan) 26%, transparent), transparent 70%), radial-gradient(closest-side at 72% 40%, color-mix(in oklab, var(--magenta) 24%, transparent), transparent 70%)",
              }}
            />
            <h2 className="display h-hero title-glow relative leading-none lg:-ml-[2vw]">
              Начнём?
            </h2>
          </div>

          <div className="mt-12 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <TgLink
              className={`${btnLight} w-full sm:w-auto`}
              label="Написать в Telegram"
              message={MSG_GENERAL}
            >
              <Send className="size-4" aria-hidden="true" /> Написать в Telegram
            </TgLink>
            <a href={MAILTO} className={`${btnGhost} w-full text-white sm:w-auto`}>
              <Mail className="size-4" aria-hidden="true" /> Написать письмо
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm tracking-[0.08em] text-white/85">{EMAIL}</p>
            <button
              type="button"
              onClick={copy}
              disabled={status === "copying"}
              aria-label={`${label}: ${EMAIL}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-5 text-[0.72rem] font-semibold tracking-[0.18em] text-white/85 uppercase transition-colors hover:bg-white/10"
            >
              {copied ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              {label}
            </button>
            <span aria-live="polite" role="status" className="sr-only">
              {status === "copied"
                ? "Адрес электронной почты скопирован"
                : status === "error"
                  ? "Не удалось скопировать адрес, скопируйте его вручную"
                  : ""}
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal variant="blur" delay={120} className="relative mx-auto mt-16 w-full max-w-[1100px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[120%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 30%, transparent), transparent 72%), radial-gradient(closest-side at 70% 55%, color-mix(in oklab, var(--magenta) 26%, transparent), transparent 70%)",
          }}
        />
        <img
          src={CLOSING_CARD_PHOTO}
          srcSet="/media/closing-glass-card-720.webp 720w, /media/closing-glass-card-1080.webp 1080w, /media/closing-glass-card.webp 1300w"
          alt="Стеклянная карта HolyPlastic с переливающимся свечением — финальный образ бренда"
          width={1300}
          height={867}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 640px) 60vw, 92vw"
          className="art-cutout cutout-float relative mx-auto block h-auto w-[92vw] max-w-[820px] sm:w-[clamp(520px,52vw,820px)]"
        />
      </Reveal>
    </section>


  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-16 pb-28 sm:px-8 lg:pb-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <Logo className="h-14 sm:h-16" />

          <nav aria-label="Навигация в подвале" className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="inline-flex min-h-11 items-center text-[0.68rem] font-semibold tracking-[0.22em] text-white/75 uppercase hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <TgLink
              className="inline-flex min-h-[44px] items-center gap-2 text-white/85 hover:text-white"
              message={MSG_GENERAL}
            >
              <Send className="size-4" aria-hidden="true" /> @holy_plastic
            </TgLink>
            <a
              href={MAILTO}
              className="inline-flex min-h-[44px] items-center gap-2 text-white/85 hover:text-white"
            >
              <Mail className="size-4" aria-hidden="true" /> {EMAIL}
            </a>
          </div>
        </div>

        <div className="hairline my-10 text-white" />

        <p className="max-w-4xl text-xs leading-relaxed text-white/60">
          HolyPlastic — консультационное сопровождение оформления карты. Мы не являемся банком,
          эмитентом или платёжной системой и не выпускаем карты. Условия обслуживания и доступность
          сервисов определяются банком и могут изменяться.
        </p>
        <div className="mt-8 space-y-2 text-xs leading-relaxed text-white/55">
          <p>© 2026 HolyPlastic. Все права защищены.</p>
          <p>
            Информация на сайте не является публичной офертой. Стоимость и условия оказания услуг
            уточняются индивидуально.
          </p>
        </div>
      </div>
    </footer>
  );
}

function StickyCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => setHidden(entries[0]?.isIntersecting ?? false),
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`sticky-cta-safe fixed inset-x-4 z-40 transition-all duration-300 lg:hidden ${
        hidden ? "pointer-events-none translate-y-6 opacity-0" : "opacity-100"
      }`}
    >
      <TgLink
        className={`${btnLight} w-full shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]`}
        label="Написать в Telegram"
        message={MSG_GENERAL}
      >
        <Send className="size-4" aria-hidden="true" /> Написать в Telegram
      </TgLink>
    </div>
  );
}

/**
 * Direct /#steps, /#pricing, /#contact must land at the section on first paint —
 * reveal-animated sections would otherwise delay the jump. Smooth scrolling stays
 * for in-page clicks only.
 */
function useInitialHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const jump = () => {
      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return false;
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      target.scrollIntoView({ block: "start", behavior: "auto" });
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = prev;
      });
      return true;
    };

    if (jump()) return;
    const raf = requestAnimationFrame(() => {
      jump();
    });
    return () => cancelAnimationFrame(raf);
  }, []);
}

function Home() {
  useInitialHashScroll();

  return (

    <div className="relative">
      <a className="skip-link" href="#content">
        Перейти к содержимому
      </a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Hero />
        <Services />
        <Features />
        <Security />
        <Steps />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
