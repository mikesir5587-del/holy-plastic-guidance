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
const MAILTO = `mailto:${EMAIL}?subject=%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20HolyPlastic`;

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "HolyPlastic — Visa без границ" },
      {
        name: "description",
        content:
          "Дебетовая Visa Великобритании с личным сопровождением: Apple Pay, международные сервисы, доступные переводы. Virtual 12 000 ₽, Physical 15 000 ₽.",
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
  { href: "#contact", label: "Контакт" },
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

function TgLink({
  children,
  className = "",
  label,
}: {
  children?: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={TELEGRAM}
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
        className={`mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "h-16" : "h-20 sm:h-24"
        }`}
      >
        <a href="#top" aria-label="HolyPlastic — в начало" className="flex items-center">
          <Logo
            tone="light"
            priority
            className={`transition-all duration-500 ${scrolled ? "h-7" : "h-9 sm:h-11"}`}
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

        <div className="flex items-center gap-3">
          <TgLink className={`${btnLight} hidden h-11 sm:inline-flex`} label="Обсудить оформление в Telegram">
            Обсудить оформление
          </TgLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
          >
            <span className="sr-only">Меню</span>
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-5 bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span className={`block h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
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
          <TgLink className={`${btnLight} mt-6 w-full`} label="Обсудить оформление в Telegram">
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
    <section id="top" className="grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 sm:pt-32">
      {/* chrome light field */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[34%] h-[70vw] w-[70vw] -translate-x-1/2 rounded-full opacity-45 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--cyan) 60%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklab, var(--magenta) 55%, transparent), transparent 62%)",
            ...(motion ? p(0.06) : {}),
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="flex items-baseline justify-between">
          <h1 className="display text-[15vw] leading-[0.86] sm:text-[11vw] lg:text-[8.5vw]">
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
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_minmax(0,620px)_1fr]">
          <p className="order-2 max-w-sm text-[0.95rem] leading-relaxed text-white/65 lg:order-1">
            Дебетовая Visa Великобритании с личным сопровождением — для международных платежей,
            Apple&nbsp;Pay и доступных переводов.
          </p>

          <div className="order-1 lg:order-2" style={motion ? p(-0.08) : undefined}>
            <CardArt className="mx-auto w-full max-w-[620px]" />
          </div>

          <div className="order-3 flex flex-col items-start gap-5 lg:items-end">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.24em] text-white/55 uppercase">
              <SiApple aria-hidden="true" /> Apple Pay · если доступно
            </span>
            <TgLink className={btnLight} label="Обсудить оформление в Telegram">
              Обсудить оформление <ArrowUpRight className="size-4" aria-hidden="true" />
            </TgLink>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-white/40">
          <span aria-hidden="true" className="relative block h-6 w-px bg-white/25">
            <span className="scroll-dot absolute -left-[1.5px] top-0 block size-[4px] rounded-full bg-white" />
          </span>
          <span className="kicker text-white">Скролл</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-y border-white/10 py-14 sm:py-20">
      <div className="mx-auto mb-8 w-full max-w-[1400px] px-5 sm:px-8">
        <h2 className="display text-[10vw] leading-none sm:text-[5.5vw]">Платите глобально</h2>
      </div>
      <Marquee rowA={ROW_A} rowB={ROW_B} />
      <div className="mx-auto mt-8 w-full max-w-[1400px] px-5 sm:px-8">
        <p className="max-w-2xl text-xs leading-relaxed text-white/40">
          Бренды приведены как примеры и не являются партнёрами HolyPlastic. Оплата и доступность
          зависят от правил сервиса, региона и карты.
        </p>
      </div>
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
    sub: "Есть вариант пополнения через криптовалютный маршрут — условия, комиссии и доступность определяют провайдеры и правила банка.",
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
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display text-[12vw] leading-none sm:text-[6vw]">Возможности</h2>
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
                <p className="display text-[11vw] leading-[0.95] sm:text-[4.6vw]">{f.word}</p>
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

function Security() {
  return (
    <section id="security" className="scene-milk grain py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display text-[13vw] leading-none sm:text-[7vw]">Прозрачно</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:mt-20 sm:grid-cols-2">
          <Reveal delay={80}>
            <p className="kicker text-[color:var(--ink)]">Нужно</p>
            <div className="hairline my-5 text-[color:var(--ink)]" />
            <ul className="space-y-4 text-[1.35rem] leading-tight font-semibold sm:text-[2vw]">
              <li>Загранпаспорт или внутренний паспорт РФ / РБ</li>
              <li>Email</li>
              <li>Телефон</li>
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <p className="kicker text-[color:var(--ink)]">Не запрашиваем</p>
            <div className="hairline my-5 text-[color:var(--ink)]" />
            <ul className="space-y-4 text-[1.35rem] leading-tight font-semibold opacity-45 sm:text-[2vw]">
              <li>PIN</li>
              <li>CVV</li>
              <li>Пароль от банка</li>
              <li>Коды после выдачи карты</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="hairline mt-16 text-[color:var(--ink)]" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <p className="text-base font-semibold">Решение о выпуске принимает банк.</p>
            <p className="text-base opacity-60">
              Работаем только с достоверными данными и в рамках правил банка.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Выбор", d: "Обсуждаем сценарий и формат карты." },
  { n: "02", t: "Документы", d: "Собираем паспорт и контактные данные." },
  { n: "03", t: "Подача", d: "Оформляем заявку и сопровождаем проверку." },
  { n: "04", t: "Получение", d: "Активация, кошелёк, первые платежи." },
];

function Steps() {
  return (
    <section id="steps" className="py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display text-[13vw] leading-none sm:text-[7vw]">4 шага</h2>
        </Reveal>

        <div className="relative mt-16 sm:mt-24">
          <div aria-hidden="true" className="hairline absolute top-6 right-0 left-0 hidden text-white sm:block" />
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
          Подача и сопровождение обычно занимают до одного дня. Проверка банка и доставка пластика
          могут занять больше времени.
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
          <h2 className="display text-[13vw] leading-none sm:text-[7vw]">Два формата</h2>
        </Reveal>
      </div>

      <div className="mt-14 grid sm:mt-20 lg:grid-cols-2">
        <Reveal className="flex min-h-[70svh] flex-col justify-between px-5 py-16 sm:px-12">
          <div>
            <p className="kicker text-white">Virtual</p>
            <p className="display mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]">
              12 000 ₽
            </p>
            <ul className="mt-10 space-y-3 text-sm text-white/65">
              <li>Виртуальная Visa для онлайн-платежей</li>
              <li>Подключение к кошельку телефона</li>
              <li>Сопровождение до первой операции</li>
            </ul>
          </div>
          <div className="mt-12">
            <TgLink className={`${btnLight} w-full sm:w-auto`} label="Выбрать виртуальную карту в Telegram">
              Выбрать виртуальную
            </TgLink>
            <p className="mt-6 text-xs text-white/40">
              Возможны комиссии банка и провайдеров пополнения — уточняем до оплаты.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="scene-milk flex min-h-[70svh] flex-col justify-between px-5 py-16 sm:px-12"
        >
          <div>
            <p className="kicker text-[color:var(--ink)]">Physical</p>
            <p className="display mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]">
              15 000 ₽
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
            >
              Выбрать физическую
            </TgLink>
            <p className="mt-6 text-xs opacity-50">
              Стоимость и срок доставки зависят от направления; возможны комиссии банка и
              провайдеров.
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

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute bottom-[-20%] left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 rounded-full opacity-35 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, color-mix(in oklab, var(--violet) 60%, transparent), transparent 62%), radial-gradient(circle at 70% 60%, color-mix(in oklab, var(--cyan) 45%, transparent), transparent 60%)",
          }}
        />
      </div>

      <Reveal className="flex flex-col items-center">
        <Logo tone="light" className="h-14 sm:h-20" />
        <h2 className="display mt-10 text-[18vw] leading-none sm:text-[9vw]">Начнём?</h2>
        <p className="mt-6 max-w-md text-sm text-white/60">
          Напишите в Telegram — разберём ваш сценарий и подберём формат карты.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <TgLink className={btnLight} label="Написать в Telegram">
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
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copied ? "Скопировано" : "Скопировать почту"}
          </button>
          <span aria-live="polite" className="sr-only">
            {copied ? "Адрес скопирован" : ""}
          </span>
        </div>

        <p className="mt-10 max-w-sm text-xs text-white/35">
          Не отправляйте паспорт, данные карты или коды в первом сообщении.
        </p>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-16 pb-28 sm:px-8 lg:pb-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <Logo tone="light" className="h-10 sm:h-12" />

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
            <TgLink className="inline-flex min-h-[44px] items-center gap-2 text-white/80 hover:text-white">
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
          эмитентом или платёжной системой и не выпускаем карты. Решение о выпуске принимает банк по
          результатам собственных проверок KYC/AML. Условия обслуживания, комиссии и доступность
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
    const io = new IntersectionObserver((entries) => setHidden(entries[0]?.isIntersecting ?? false), {
      rootMargin: "0px 0px -10% 0px",
    });
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-40 transition-all duration-300 lg:hidden ${
        hidden ? "pointer-events-none translate-y-6 opacity-0" : "opacity-100"
      }`}
    >
      <TgLink className={`${btnLight} w-full shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]`} label="Написать в Telegram">
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
