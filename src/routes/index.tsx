import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  SiApple,
  SiSpotify,
  SiNetflix,
  SiSteam,
  SiBookingdotcom,
  SiAirbnb,
  SiClaude,
} from "react-icons/si";
import {
  ArrowUpRight,
  Check,
  CreditCard,
  Globe2,
  Landmark,
  Menu,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";

import { CardArt } from "@/components/site/CardArt";
import { Logo } from "@/components/site/Logo";
import { Orbs } from "@/components/site/Orbs";
import { Reveal } from "@/components/site/Reveal";

const TG = "https://t.me/holy_plastic";
const MAIL = "mailto:holyplastic@yandex.com?subject=%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20HolyPlastic";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "HolyPlastic — сопровождение оформления дебетовой Visa" },
      {
        name: "description",
        content:
          "Личное сопровождение оформления виртуальной или физической дебетовой Visa в банке Великобритании: международные платежи, Apple Pay, прозрачная цена 12 000 ₽ и 15 000 ₽.",
      },
      {
        property: "og:title",
        content: "HolyPlastic — сопровождение оформления дебетовой Visa",
      },
      {
        property: "og:description",
        content:
          "Помогаю пройти оформление виртуальной или физической Visa в банке Великобритании — с сопровождением на каждом этапе.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "HolyPlastic",
          description:
            "Информационно-консультационное сопровождение оформления дебетовой Visa в банке Великобритании.",
          areaServed: "RU",
          url: "/",
        }),
      },
    ],
  }),
});

const NAV = [
  { href: "#services", label: "Сервисы" },
  { href: "#features", label: "Возможности" },
  { href: "#safety", label: "Безопасность" },
  { href: "#steps", label: "Этапы" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
];

function TgLink({
  children,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-foreground text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]"
      : "glass text-foreground hover:bg-white/80";
  return (
    <a
      href={TG}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`glass mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? "px-3 py-1.5 sm:px-4" : "px-4 py-3 sm:px-5"
        }`}
      >
        <a href="#top" className="flex items-center" aria-label="HolyPlastic — на главную">
          <Logo className={`transition-all duration-500 ${scrolled ? "h-11" : "h-14 sm:h-16"}`} imgClassName="scale-[1.35]" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="story-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <TgLink className="hidden sm:inline-flex">
            <Send className="size-4" aria-hidden="true" />
            Обсудить оформление
          </TgLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="glass flex size-11 items-center justify-center rounded-xl text-foreground lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="glass animate-fade-in mx-auto mt-2 w-full max-w-6xl rounded-2xl p-3 lg:hidden"
        >
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
              className="flex size-11 items-center justify-center rounded-xl text-muted-foreground hover:text-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="grid gap-1" aria-label="Мобильная навигация">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-foreground hover:bg-white/70"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <TgLink className="mt-3 w-full">
            <Send className="size-4" aria-hidden="true" />
            Написать @holy_plastic
          </TgLink>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const chips = ["Подача обычно за 1 день", "Виртуальная или физическая", "Личное сопровождение"];
  return (
    <Section id="top" className="pt-32 sm:pt-36 lg:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Личное сопровождение • Visa Debit • UK</p>
          <h1 className="mt-4 text-[2rem] leading-[1.06] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Международная дебетовая{" "}
            <span className="spectral-text">Visa</span> — с сопровождением на каждом этапе
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Помогаю пройти оформление виртуальной или физической карты в банке Великобритании — для
            международных платежей, Apple Pay и доступных переводов из Европы и США.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <TgLink>
              <Send className="size-4" aria-hidden="true" />
              Обсудить оформление
            </TgLink>
            <a
              href={MAIL}
              className="glass inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80"
            >
              Написать на почту
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="glass rounded-full px-4 py-2 text-xs font-medium text-foreground/80 sm:text-sm"
              >
                {c}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-muted-foreground sm:text-sm">
            Решение о выпуске принимает банк после проверки документов.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <CardArt />
            <div className="glass mx-auto mt-5 flex w-fit items-center gap-2 rounded-2xl px-4 py-3 sm:absolute sm:-bottom-8 sm:right-[-4%] sm:mt-0">
              <SiApple className="size-5" aria-hidden="true" />
              <span className="text-sm font-semibold">Apple&nbsp;Pay</span>
              <span className="text-[0.65rem] whitespace-nowrap text-muted-foreground">если доступно</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const SERVICES: { label: string; Icon?: React.ComponentType<{ className?: string }> }[] = [
  { label: "Apple", Icon: SiApple },
  { label: "Spotify", Icon: SiSpotify },
  { label: "Netflix", Icon: SiNetflix },
  { label: "Adobe" },
  { label: "Steam", Icon: SiSteam },
  { label: "Booking.com", Icon: SiBookingdotcom },
  { label: "Airbnb", Icon: SiAirbnb },
  { label: "Amazon" },
  { label: "ChatGPT" },
  { label: "Claude", Icon: SiClaude },
];

function Services() {
  return (
    <Section id="services">
      <Reveal>
        <p className="eyebrow">Международные сервисы</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Когда российская карта упирается в границу
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Одна международная карта — привычный способ оплачивать поддерживаемые зарубежные сервисы и
          покупки.
        </p>
      </Reveal>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.label} delay={i * 45}>
            <div className="glass hover-scale flex h-full min-h-[104px] flex-col items-center justify-center gap-2 rounded-2xl px-3 py-5 text-center">
              {s.Icon ? (
                <s.Icon className="size-7 text-foreground/70" aria-hidden="true" />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex size-7 items-center justify-center rounded-lg border border-hairline text-sm font-bold text-foreground/60"
                >
                  {s.label[0]}
                </span>
              )}
              <span className="text-xs font-semibold text-foreground/80 sm:text-sm">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Бренды приведены как примеры и не являются партнёрами HolyPlastic. Карта решает вопрос
          способа оплаты, но доступность сервиса зависит от его правил, страны аккаунта и
          местоположения пользователя.
        </p>
      </Reveal>
    </Section>
  );
}

const FEATURES = [
  {
    Icon: Wallet,
    title: "Apple Pay",
    text: "Добавление в Wallet, если доступно для выпущенной карты и региона аккаунта.",
    span: "lg:col-span-3",
  },
  {
    Icon: Globe2,
    title: "Международные платежи",
    text: "Поддерживаемые сервисы, программы, бронирования и покупки.",
    span: "lg:col-span-3",
  },
  {
    Icon: Landmark,
    title: "Доступные переводы из Европы и США",
    text: "Реквизиты и ограничения уточняются до оформления.",
    span: "lg:col-span-2",
  },
  {
    Icon: CreditCard,
    title: "Виртуальная и физическая Visa",
    text: "Выбираете формат под свой сценарий: только онлайн или пластик в руках.",
    span: "lg:col-span-2",
  },
  {
    Icon: Sparkles,
    title: "Вариант пополнения через криптовалютный маршрут",
    text: "Способ, комиссии и ограничения объясняются заранее; доступность зависит от провайдеров и применимых правил.",
    span: "lg:col-span-2",
  },
  {
    Icon: Smartphone,
    title: "Личное сопровождение",
    text: "От документов до получения и базовой активации — на связи по каждому шагу.",
    span: "lg:col-span-6",
  },
];

function Features() {
  return (
    <Section id="features">
      <Reveal>
        <p className="eyebrow">Возможности</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Что даёт карта и что делаю я
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-6">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 60} className={f.span}>
            <article className="glass grain group h-full overflow-hidden rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white/70 text-foreground shadow-[var(--shadow-soft)]">
                <f.Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Safety() {
  const need = ["Заграничный или внутренний паспорт РФ/РБ", "Email", "Номер телефона"];
  const never = [
    "PIN-код",
    "CVV",
    "Пароль от банка",
    "Коды подтверждения после выдачи",
  ];
  const badges = [
    "Цена известна заранее",
    "Статус по каждому этапу",
    "Без гарантии одобрения — решение принимает банк",
  ];
  return (
    <Section id="safety">
      <Reveal>
        <p className="eyebrow">Безопасность</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Без тумана вокруг денег и документов
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold">Что потребуется</h3>
            <ul className="mt-4 space-y-3">
              {need.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--blue)]" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass h-full rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold">Чего HolyPlastic не запрашивает</h3>
            <ul className="mt-4 space-y-3">
              {never.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm text-foreground/80">
                  <X className="mt-0.5 size-4 shrink-0 text-[var(--pink)]" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {badges.map((b, i) => (
          <Reveal as="li" key={b} delay={i * 70}>
            <div className="glass flex h-full items-center gap-3 rounded-2xl px-5 py-4 text-sm font-medium text-foreground/80">
              <ShieldCheck className="size-4 shrink-0 text-[var(--violet)]" aria-hidden="true" />
              {b}
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Клиент предоставляет только достоверные данные и соблюдает правила банка, платёжной системы
          и применимое законодательство.
        </p>
      </Reveal>
    </Section>
  );
}

const STEPS = [
  { n: "01", title: "Консультация", text: "Разбираем сценарий и отвечаем, подходит ли вариант." },
  { n: "02", title: "Документы", text: "Собираем минимальный комплект и проверяем данные." },
  { n: "03", title: "Подача с сопровождением", text: "Проходим оформление вместе, шаг за шагом." },
  { n: "04", title: "Получение и активация", text: "Помогаю с получением карты и базовой активацией." },
];

function Steps() {
  return (
    <Section id="steps">
      <Reveal>
        <p className="eyebrow">Этапы</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          От сообщения до готовой карты
        </h2>
      </Reveal>

      <div className="relative mt-10">
        <div
          aria-hidden="true"
          className="chrome-rule absolute inset-x-0 top-[42px] hidden md:block"
        />
        <ol className="grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 110}>
              <div className="glass h-full rounded-3xl p-6">
                <span className="spectral-text text-2xl font-extrabold tracking-tight">{s.n}</span>
                <h3 className="mt-3 text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={100}>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Подача и сопровождение обычно занимают до одного дня. Проверка банка и доставка физической
          карты могут занять больше времени.
        </p>
      </Reveal>
    </Section>
  );
}

const PLANS = [
  {
    title: "Виртуальная Visa",
    price: "12 000 ₽",
    cta: "Выбрать виртуальную",
    items: [
      "Сопровождение оформления",
      "Виртуальный формат карты",
      "Инструкция по активации и пополнению",
      "Поддержка по этапам",
    ],
  },
  {
    title: "Физическая Visa",
    price: "15 000 ₽",
    suffix: "+ доставка",
    cta: "Выбрать физическую",
    items: [
      "Всё из тарифа «Виртуальная Visa»",
      "Выпуск пластиковой карты",
      "Помощь с организацией доставки",
    ],
  },
];

function Pricing() {
  return (
    <Section id="pricing">
      <Reveal>
        <p className="eyebrow">Тарифы</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Понятная цена за сопровождение
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {PLANS.map((p, i) => (
          <Reveal key={p.title} delay={i * 110}>
            <div className="glass grain flex h-full flex-col rounded-3xl p-7 sm:p-8">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">{p.price}</span>
                {p.suffix && (
                  <span className="text-sm font-medium text-muted-foreground">{p.suffix}</span>
                )}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--blue)]" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
              <TgLink className="mt-7 w-full">
                {p.cta}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </TgLink>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Итоговые комиссии банка, платежных провайдеров и доставки, если они возникают, уточняются
          до начала оформления.
        </p>
      </Reveal>
    </Section>
  );
}

const FAQ = [
  {
    q: "Какие документы нужны?",
    a: "Заграничный или внутренний паспорт РФ/РБ, email и номер телефона. Точный комплект подтверждаем на консультации до начала оформления.",
  },
  {
    q: "Сколько занимает оформление?",
    a: "Подача и сопровождение обычно занимают до одного дня. Проверка банка и доставка физической карты могут занять больше времени.",
  },
  {
    q: "Можно ли добавить карту в Apple Pay?",
    a: "Добавление в Wallet возможно, если оно доступно для выпущенной карты и региона вашего аккаунта. Гарантию по этому пункту не даю.",
  },
  {
    q: "Как пополнять карту?",
    a: "Доступные способы пополнения, включая вариант криптовалютного маршрута, разбираем заранее: объясняю порядок, комиссии и ограничения. Доступность зависит от провайдеров и применимых правил.",
  },
  {
    q: "Можно ли получать переводы из Европы и США?",
    a: "Такой сценарий возможен, но конкретные реквизиты, условия и ограничения уточняются до оформления и зависят от правил банка.",
  },
  {
    q: "Как доставляется физическая карта?",
    a: "Помогаю организовать доставку выпущенного пластика. Стоимость и сроки зависят от маршрута и обсуждаются до оплаты сопровождения.",
  },
  {
    q: "Гарантирован ли выпуск?",
    a: "Нет. Решение об открытии счёта и выпуске карты принимает банк после проверки документов (KYC/AML).",
  },
  {
    q: "HolyPlastic — это банк?",
    a: "Нет. HolyPlastic оказывает информационно-консультационное сопровождение и не является банком, эмитентом или платежной системой.",
  },
];

function Faq() {
  return (
    <Section id="faq">
      <Reveal>
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Частые вопросы
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-3">
        {FAQ.map((f, i) => (
          <Reveal key={f.q} delay={i * 40}>
            <details className="glass group rounded-2xl px-5 py-1 sm:px-6">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-foreground sm:text-base">
                {f.q}
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="glass grain relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Сначала разберём ваш сценарий — потом оформляем
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Напишите, для чего нужна карта: подписки, путешествия, работа, переводы или повседневные
            международные платежи. Я заранее скажу, подходит ли вам этот вариант и какие будут
            расходы.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TgLink>
              <Send className="size-4" aria-hidden="true" />
              Написать @holy_plastic
            </TgLink>
            <a
              href={MAIL}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-hairline bg-white/70 px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              holyplastic@yandex.com
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Не отправляйте паспорт, данные карты или коды в первом сообщении.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-5 pb-32 sm:px-8 sm:pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="chrome-rule mb-10" />
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo className="h-24" imgClassName="scale-[1.2]" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Личное сопровождение оформления международной дебетовой Visa.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Контакты</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={TG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-link inline-flex min-h-[44px] items-center text-muted-foreground hover:text-foreground"
                >
                  Telegram · @holy_plastic
                </a>
              </li>
              <li>
                <a
                  href={MAIL}
                  className="story-link inline-flex min-h-[44px] items-center text-muted-foreground hover:text-foreground"
                >
                  holyplastic@yandex.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold">Навигация</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs">
          HolyPlastic оказывает информационно-консультационное сопровождение и не является банком,
          эмитентом Visa, платежной системой, финансовым учреждением или представителем перечисленных
          брендов. Решение об открытии счёта и выпуске карты принимает соответствующий банк после
          KYC/AML-проверки. Условия, комиссии, лимиты, сроки, способы пополнения, Apple Pay и
          географическая доступность могут меняться и уточняются до оформления. Visa и Apple Pay —
          товарные знаки соответствующих правообладателей.
        </p>
        <p className="mt-4 text-[0.7rem] text-muted-foreground">© {year} HolyPlastic</p>
      </div>
    </footer>
  );
}

function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(12px,env(safe-area-inset-bottom))] sm:hidden">
      <TgLink className="w-full shadow-[var(--shadow-lift)]">
        <Send className="size-4" aria-hidden="true" />
        Написать в Telegram
      </TgLink>
    </div>
  );
}

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Orbs />
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Safety />
        <Steps />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
