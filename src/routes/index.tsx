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

import heroWave from "@/assets/hero-chrome-wave.webp.asset.json";
import cryptoPhoto from "@/assets/crypto-flow.webp.asset.json";
import passportPhoto from "@/assets/passport-card.webp.asset.json";
import handsPhoto from "@/assets/guardian-hands.webp.asset.json";
import cardPairPhoto from "@/assets/card-pair.webp.asset.json";
import { CardArt } from "@/components/site/CardArt";
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
const EMAIL = "holyplastic@yandex.com";

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
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
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
        <a href="#top" aria-label="HolyPlastic — в начало" className="flex min-w-0 items-center">
          <Logo
            priority
            className={`transition-all duration-500 ${scrolled ? "h-11 sm:h-12" : "h-14 sm:h-16"}`}
          />
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.68rem] font-semibold tracking-[0.24em] text-white/60 uppercase transition-colors hover:text-white"
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
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 lg:hidden"
          >
            <span className="sr-only">Меню</span>
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
          id="mobile-nav"
          className="border-t border-white/10 bg-[color:var(--ink)]/95 px-5 py-6 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Мобильная навигация" className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-white/10 text-[0.8rem] font-semibold tracking-[0.2em] text-white/80 uppercase"
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
          src={heroWave.url}
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
              className="block pl-[8vw] text-white/45 sm:pl-[14vw]"
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
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_minmax(0,560px)_1fr]">
          <p className="order-2 max-w-sm text-[0.95rem] leading-relaxed text-white/65 lg:order-1">
            Дебетовая Visa Великобритании с личным сопровождением — для международных платежей,
            Apple&nbsp;Pay, Google&nbsp;Pay и доступных переводов.
          </p>

          <div className="order-1 lg:order-2" style={motion ? p(-0.08) : undefined}>
            <CardArt className="mx-auto w-full max-w-[560px]" />
          </div>

          <div className="order-3 flex flex-col items-start gap-5 lg:items-end">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.24em] text-white/55 uppercase">
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

        <div className="mt-10 flex items-center gap-3 text-white/40">
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
    <section id="services" className="relative overflow-hidden border-y border-white/10 py-14 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 text-white">
        <div
          className="absolute inset-x-0 top-1/2 h-[70%] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, white 5%, transparent) 40%, transparent)",
            backdropFilter: "blur(2px)",
          }}
        />
        <ScanBeam className="inset-y-[30%] opacity-45" />
        <img
          src={cryptoPhoto.url}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute top-1/2 left-[-6%] hidden aspect-square w-[26vw] max-w-[320px] -translate-y-1/2 object-cover opacity-30 mix-blend-screen lg:block"
          style={{ maskImage: "radial-gradient(58% 58% at 50% 50%, black 28%, transparent 74%)" }}
        />
      </div>
      <div className="mx-auto mb-8 w-full max-w-[1400px] px-5 sm:px-8">
        <h2 className="display h-section leading-none">Платите глобально</h2>
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
          <h2 className="display h-section leading-none">Возможности</h2>
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
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">{f.text}</p>
                  <p className="mt-3 max-w-md text-xs leading-relaxed text-white/40">{f.sub}</p>
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
        <TopoLines className="inset-x-0 top-[20%] h-[60%] w-full" opacity={0.14} lines={6} />
        <div className="caustic absolute top-[30%] -left-[20%] size-[70vw] max-w-[760px] opacity-20" />
        <img
          src={passportPhoto.url}
          alt=""
          aria-hidden="true"
          width={640}
          height={640}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 38vw, 0px"
          className="absolute top-[4%] right-[-6%] hidden aspect-square w-[36vw] max-w-[400px] object-cover opacity-40 mix-blend-screen lg:block"
          style={{ maskImage: "radial-gradient(60% 60% at 50% 50%, black 30%, transparent 76%)" }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display h-section leading-none">4 шага</h2>
        </Reveal>

        <div className="relative mt-16 sm:mt-24">
          {/* glass rail: vertical on mobile, horizontal from sm */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[7px] w-px overflow-hidden bg-white/15 sm:top-6 sm:right-0 sm:bottom-auto sm:left-0 sm:h-px sm:w-auto"
          >
            <span className="rail-pulse absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white to-transparent sm:hidden" />
            <span className="rail-pulse-x absolute inset-y-0 hidden w-40 bg-gradient-to-r from-transparent via-white to-transparent sm:block" />
          </div>

          <ol className="grid gap-12 sm:grid-cols-4 sm:gap-8">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="relative pl-8 sm:pt-14 sm:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute top-[6px] left-0 block size-[15px] rounded-full border border-white/50 bg-[color:var(--ink)] sm:top-[17px]"
                  style={{
                    boxShadow:
                      "0 0 0 5px color-mix(in oklab, white 6%, transparent), 0 0 22px color-mix(in oklab, var(--cyan) 55%, transparent)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute top-[11px] left-[5px] block size-[5px] rounded-full bg-white sm:top-[22px]"
                />
                <span className="kicker text-white">{s.n}</span>
                <p className="display mt-3 text-[8vw] leading-none sm:text-[2.4vw]">{s.t}</p>
                <p className="mt-3 text-sm text-white/55">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-white/40">
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
          <img
            src={cardPairPhoto.url}
            alt=""
            aria-hidden="true"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 640px) 30vw, 62vw"
            className="pointer-events-none absolute right-[-10%] bottom-[2%] aspect-square w-[62vw] max-w-[360px] object-cover opacity-40 mix-blend-screen sm:right-[4%] sm:bottom-[8%] sm:w-[30vw]"
            style={{ maskImage: "radial-gradient(62% 62% at 50% 50%, black 30%, transparent 76%)" }}
          />
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
            <ul className="mt-10 space-y-3 text-sm text-white/65">
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
            <p className="mt-2 text-sm opacity-60">+ доставка</p>
            <ul className="mt-10 space-y-3 text-sm opacity-70">
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
            <p className="mt-6 text-xs opacity-50">
              Доставка физической пластиковой карты может занимать больше одного дня.
            </p>
          </div>
        </Reveal>
      </div>

    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const ta = document.createElement("textarea");
        ta.value = EMAIL;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      window.prompt("Скопируйте адрес почты", EMAIL);
    }
  }, []);

  return (
    <section
      id="contact"
      className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-28 text-center sm:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 text-white">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="caustic absolute bottom-[-20%] left-1/2 h-[80vw] w-[80vw] max-w-[1000px] -translate-x-1/2 opacity-40" />
        <SectionOrbits
          className="top-[38%] left-1/2 aspect-square w-[150vw] max-w-[1150px] -translate-x-1/2 -translate-y-1/2"
          rings={4}
          nodes={3}
          opacity={0.45}
        />
        <div className="chrome-arc drift absolute bottom-[-30%] left-1/2 aspect-square w-[110vw] max-w-[1200px] -translate-x-1/2" />
        <TopoLines className="inset-x-0 bottom-0 h-[34%] w-full" opacity={0.16} lines={6} />
        <img
          src={handsPhoto.url}
          alt=""
          aria-hidden="true"
          width={720}
          height={720}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 640px) 46vw, 88vw"
          className="absolute top-[16%] left-1/2 aspect-square w-[88vw] max-w-[520px] -translate-x-1/2 object-cover opacity-30 mix-blend-screen sm:w-[46vw]"
          style={{ maskImage: "radial-gradient(58% 62% at 50% 50%, black 26%, transparent 74%)" }}
        />
        <GlassFragment className="top-[22%] left-[8%] hidden size-28 sm:block" rotate={-20} />
        <GlassFragment
          className="right-[9%] bottom-[26%] hidden size-24 sm:block"
          rotate={18}
          delay={5}
        />
      </div>

      <Reveal className="relative z-10 flex flex-col items-center">
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
        <h2 className="display h-hero mt-10 leading-none">Начнём?</h2>


        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <TgLink className={btnLight} label="Написать в Telegram" message={MSG_GENERAL}>
            <Send className="size-4" aria-hidden="true" /> Написать в Telegram
          </TgLink>
          <a href={MAILTO} className={`${btnGhost} text-white`}>
            <Mail className="size-4" aria-hidden="true" /> Написать письмо
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-sm tracking-[0.08em] text-white/70">{EMAIL}</p>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-5 text-[0.72rem] font-semibold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10"
          >
            {copied ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <Copy className="size-4" aria-hidden="true" />
            )}
            {copied ? "Скопировано" : "Скопировать почту"}
          </button>
          <span aria-live="polite" className="sr-only">
            {copied ? "Адрес скопирован" : ""}
          </span>
        </div>
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
                className="text-[0.68rem] font-semibold tracking-[0.22em] text-white/50 uppercase hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <TgLink
              className="inline-flex min-h-[44px] items-center gap-2 text-white/80 hover:text-white"
              message={MSG_GENERAL}
            >
              <Send className="size-4" aria-hidden="true" /> @holy_plastic
            </TgLink>
            <a
              href={MAILTO}
              className="inline-flex min-h-[44px] items-center gap-2 text-white/80 hover:text-white"
            >
              <Mail className="size-4" aria-hidden="true" /> {EMAIL}
            </a>
          </div>
        </div>

        <div className="hairline my-10 text-white" />

        <p className="max-w-4xl text-xs leading-relaxed text-white/35">
          HolyPlastic — консультационное сопровождение оформления карты. Мы не являемся банком,
          эмитентом или платёжной системой и не выпускаем карты. Условия обслуживания и доступность
          сервисов определяются банком и могут изменяться.
        </p>
        <p className="mt-6 text-xs text-white/25">© {new Date().getFullYear()} HolyPlastic</p>
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
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 lg:hidden ${
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

function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
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
