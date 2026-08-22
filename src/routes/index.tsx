import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  SiAirbnb,
  SiAnthropic,
  SiBookingdotcom,
  SiApple,
  SiGoogleplay,
  SiNetflix,
  SiSpotify,
  SiSteam,
  SiYoutube,
} from "react-icons/si";
import { Copy, Check, ArrowUpRight, Send, Mail } from "lucide-react";

import { CardArt } from "@/components/site/CardArt";
import { Logo } from "@/components/site/Logo";
import { Marquee, type MarqueeItem } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";

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
          "Дебетовая Visa Великобритании с личным сопровождением: Apple Pay, международные сервисы, доступные переводы. Virtual 11 990 ₽, Physical 14 990 ₽.",
      },
      { property: "og:title", content: "HolyPlastic — Visa без границ" },
      {
        property: "og:description",
        content:
          "Дебетовая Visa Великобритании с личным сопровождением: Apple Pay, международные сервисы, доступные переводы.",
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
          className="absolute top-[30%] left-1/2 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full opacity-45 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--cyan) 60%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklab, var(--magenta) 55%, transparent), transparent 62%)",
            ...(motion ? p(0.06) : {}),
          }}
        />
        <div
          className="chrome-arc drift absolute top-[18%] left-1/2 aspect-square w-[120vw] max-w-[1500px] -translate-x-1/2"
          style={motion ? p(0.03) : undefined}
        />
        <div
          className="chrome-arc absolute top-[42%] left-1/2 aspect-square w-[70vw] max-w-[900px] -translate-x-1/2 opacity-25"
          style={motion ? p(-0.04) : undefined}
        />
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
            Apple&nbsp;Pay и доступных переводов.
          </p>

          <div className="order-1 lg:order-2" style={motion ? p(-0.08) : undefined}>
            <CardArt className="mx-auto w-full max-w-[560px]" />
          </div>

          <div className="order-3 flex flex-col items-start gap-5 lg:items-end">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.24em] text-white/55 uppercase">
              <SiApple aria-hidden="true" /> Apple Pay
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
    <section id="services" className="relative border-y border-white/10 py-14 sm:py-20">
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
    word: "Apple Pay",
    text: "Добавьте карту в кошелёк телефона и платите офлайн и онлайн, где принимают Visa.",
    sub: "Международные сервисы и покупки — подписки, магазины, поездки.",
  },
  {
    n: "02",
    word: "Переводы",
    text: "Доступные переводы из Европы и США по реквизитам счёта.",
    sub: "Есть вариант пополнения через криптовалютный маршрут — условия и доступность определяют провайдеры и правила банка.",
  },
  {
    n: "03",
    word: "Virtual / Physical",
    text: "Виртуальная Visa сразу или пластик с доставкой — выбираете формат.",
    sub: "Личное сопровождение от первого сообщения до активации.",
  },
];

function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 text-white opacity-40"
      >
        <div className="grid-lines absolute inset-0" />
      </div>
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display h-section leading-none">Возможности</h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 sm:mt-24 sm:gap-40">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.n}
              variant="blur"
              className={`grid gap-6 sm:grid-cols-12 sm:items-end ${i % 2 ? "sm:text-right" : ""}`}
            >
              <span
                className={`kicker text-white sm:col-span-2 ${i % 2 ? "sm:order-3 sm:text-right" : ""}`}
              >
                {f.n}
              </span>
              <div className={`sm:col-span-6 ${i % 2 ? "sm:order-2 sm:col-start-4" : ""}`}>
                <p className="display h-sub leading-[0.95]">{f.word}</p>
              </div>
              <div className={`sm:col-span-4 ${i % 2 ? "sm:order-1" : ""}`}>
                <p className="text-sm leading-relaxed text-white/70">{f.text}</p>
                <p className="mt-3 text-xs leading-relaxed text-white/40">{f.sub}</p>
              </div>
            </Reveal>
          ))}
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
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display h-section leading-none">Прозрачно</h2>
        </Reveal>

        <Reveal delay={80} className="mt-14 sm:mt-20">
          <p className="kicker text-[color:var(--ink)]">Нужно</p>
          <div className="hairline my-6 text-[color:var(--ink)]" />
          <ol className="grid gap-8 sm:grid-cols-3">
            {NEEDED.map((item) => (
              <li key={item.n} className="border-t border-[color:var(--ink)]/15 pt-6">
                <span className="kicker text-[color:var(--ink)]">{item.n}</span>
                <p className="mt-4 text-[1.35rem] leading-tight font-semibold sm:text-[1.8rem]">
                  {item.t}
                </p>
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
    <section id="steps" className="py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display h-section leading-none">4 шага</h2>
        </Reveal>

        <div className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="hairline absolute top-6 right-0 left-0 hidden text-white sm:block"
          />
          <ol className="grid gap-12 sm:grid-cols-4 sm:gap-8">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="relative sm:pt-14">
                <span
                  aria-hidden="true"
                  className="absolute top-[18px] left-0 hidden size-3 rounded-full bg-white sm:block"
                />
                <span className="kicker text-white">{s.n}</span>
                <p className="display mt-3 text-[8vw] leading-none sm:text-[2.4vw]">{s.t}</p>
                <p className="mt-3 text-sm text-white/55">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className="mt-16 max-w-2xl text-xs leading-relaxed text-white/40">
          Оформление обычно занимает до одного дня. Доставка физической пластиковой карты может
          занимать больше одного дня.
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
          <div>
            <p className="kicker text-white">Virtual</p>
            <p className="display mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]">
              11 990 ₽
            </p>
            <ul className="mt-10 space-y-3 text-sm text-white/65">
              <li>Виртуальная Visa для онлайн-платежей</li>
              <li>Подключение к кошельку телефона</li>
              <li>Сопровождение до первой операции</li>
            </ul>
          </div>
          <div className="mt-12">
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
          className="scene-milk flex min-h-[70svh] flex-col justify-between px-5 py-16 sm:px-12"
        >
          <div>
            <p className="kicker text-[color:var(--ink)]">Physical</p>
            <p className="display mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]">
              14 990 ₽
            </p>
            <p className="mt-2 text-sm opacity-60">+ доставка</p>
            <ul className="mt-10 space-y-3 text-sm opacity-70">
              <li>Виртуальная и пластиковая Visa</li>
              <li>Офлайн-платежи и снятие наличных</li>
              <li>Сопровождение до активации пластика</li>
            </ul>
          </div>
          <div className="mt-12">
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
        <div
          className="absolute bottom-[-20%] left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 rounded-full opacity-35 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, color-mix(in oklab, var(--violet) 60%, transparent), transparent 62%), radial-gradient(circle at 70% 60%, color-mix(in oklab, var(--cyan) 45%, transparent), transparent 60%)",
          }}
        />
        <div className="chrome-arc drift absolute bottom-[-30%] left-1/2 aspect-square w-[110vw] max-w-[1200px] -translate-x-1/2" />
      </div>

      <Reveal className="flex flex-col items-center">
        <Logo className="h-20 sm:h-28" />
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
