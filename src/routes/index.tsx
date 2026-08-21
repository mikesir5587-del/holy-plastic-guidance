import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  CreditCard,
  Globe,
  Mail,
  Menu,
  Plane,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";

import { CardArt } from "@/components/site/CardArt";
import { Reveal } from "@/components/site/Reveal";

const EMAIL = "holyplastic@yandex.com";

function mailto(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const MAIN_MAILTO = mailto(
  "Консультация HolyPlastic",
  "Здравствуйте! Хочу уточнить условия оформления карты. Карта нужна для: ",
);
const VIRTUAL_MAILTO = mailto(
  "Консультация HolyPlastic — Virtual",
  "Здравствуйте! Интересует формат Virtual (12 000 ₽). Карта нужна для: ",
);
const PHYSICAL_MAILTO = mailto(
  "Консультация HolyPlastic — Virtual + Physical",
  "Здравствуйте! Интересует формат Virtual + Physical (15 000 ₽). Карта нужна для: ",
);

const NAV = [
  { href: "#zachem", label: "Зачем" },
  { href: "#produkt", label: "Продукт" },
  { href: "#tarify", label: "Тарифы" },
  { href: "#process", label: "Как проходит" },
  { href: "#prozrachnost", label: "Прозрачность" },
  { href: "#faq", label: "Вопросы" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HolyPlastic — сопровождение оформления зарубежной дебетовой Visa" },
      {
        name: "description",
        content:
          "Сопровождаю оформление собственной дебетовой Visa в банке Великобритании. Virtual — 12 000 ₽, Virtual + Physical — 15 000 ₽. Консультация до оформления.",
      },
      {
        property: "og:title",
        content: "HolyPlastic — ваша Visa для международных платежей",
      },
      {
        property: "og:description",
        content:
          "Консультационное и организационное сопровождение оформления собственной дебетовой Visa в банке Великобритании. Два формата, честная цена, сопровождение до активации.",
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
          "@type": "Service",
          name: "HolyPlastic",
          serviceType:
            "Консультационное и организационное сопровождение оформления зарубежной дебетовой карты",
          areaServed: ["RU", "BY"],
          email: EMAIL,
          description:
            "Сопровождение при оформлении собственной дебетовой Visa в банке Великобритании: подготовка, регистрация, активация.",
          offers: [
            { "@type": "Offer", name: "Virtual", price: "12000", priceCurrency: "RUB" },
            {
              "@type": "Offer",
              name: "Virtual + Physical",
              price: "15000",
              priceCurrency: "RUB",
            },
          ],
        }),
      },
    ],
  }),
  component: HolyPlastic,
});

function HolyPlastic() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <main id="top">
        <Hero />
        <Autonomy />
        <UseCases />
        <Product />
        <Pricing />
        <Roles />
        <Process />
        <Transparency />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}

/* ------------------------------------------------------------------ header */

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "glass" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-4 px-4 sm:px-6 lg:h-[72px]">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-foreground"
          >
            <CreditCard className="size-4 text-background" strokeWidth={2.2} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[1.0625rem] leading-none font-extrabold tracking-tight">
              HolyPlastic
            </span>
            <span className="mt-1 hidden text-[0.6875rem] tracking-[0.14em] text-muted-foreground uppercase sm:block">
              international card service
            </span>
          </span>
        </a>

        <nav aria-label="Основная навигация" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex h-10 items-center rounded-full px-3 text-[0.9375rem] font-medium text-secondary-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <a href={MAIN_MAILTO} className="hidden sm:inline-flex">
            <PrimaryButton compact>Получить консультацию</PrimaryButton>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-surface lg:hidden">
          <nav aria-label="Мобильная навигация" className="mx-auto max-w-[1240px] px-4 py-3">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center justify-between border-b border-border/70 text-base font-medium"
                  >
                    {item.label}
                    <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={MAIN_MAILTO}
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 block"
            >
              <PrimaryButton full>Узнать, подходит ли мне карта</PrimaryButton>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ----------------------------------------------------------------- buttons */

function PrimaryButton({
  children,
  full,
  compact,
}: {
  children: React.ReactNode;
  full?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-foreground font-semibold text-background shadow-[var(--shadow-soft)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-[1px] hover:bg-[oklch(0.26_0.03_268)] active:translate-y-0 ${
        compact ? "h-10 px-4 text-[0.9375rem]" : "h-12 px-6 text-base"
      } ${full ? "w-full" : ""}`}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </span>
  );
}

function GhostButton({
  children,
  full,
}: {
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <span
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 text-base font-semibold text-foreground transition-colors duration-200 hover:bg-secondary ${
        full ? "w-full" : ""
      }`}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------- hero */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-14 sm:pt-28 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 78% 12%, color-mix(in oklab, var(--ice) 20%, transparent), transparent 60%), radial-gradient(70% 55% at 8% 0%, color-mix(in oklab, var(--violet) 14%, transparent), transparent 62%), linear-gradient(180deg, oklch(1 0 0) 0%, var(--background) 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[42%] -z-10 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--blue) 35%, transparent) 35%, color-mix(in oklab, var(--pink) 30%, transparent) 65%, transparent)",
        }}
      />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Visa</span>
              <span aria-hidden="true">·</span>
              <span>банк Великобритании</span>
            </p>
            <h1 className="mt-4 text-[2.25rem] leading-[1.05] font-extrabold sm:text-[3.25rem] lg:text-[4.25rem]">
              Ваша Visa для
              <br className="hidden sm:block" /> <span className="spectral-text">международных</span>{" "}
              платежей
            </h1>
            <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-relaxed text-secondary-foreground sm:text-[1.1875rem]">
              Сопровождаю оформление виртуальной или физической дебетовой карты на ваше имя.
              Самостоятельная оплата зарубежных сервисов, поездки и поддерживаемые поступления из
              Европы и США.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={MAIN_MAILTO} className="sm:w-auto">
                <PrimaryButton full>Узнать, подходит ли мне карта</PrimaryButton>
              </a>
              <a href="#process" className="sm:w-auto">
                <GhostButton full>Как проходит оформление</GhostButton>
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.9375rem] text-secondary-foreground">
              {[
                "Обычно в течение дня",
                "Virtual / Physical",
                "Сопровождение до активации",
              ].map((fact) => (
                <li key={fact} className="flex items-center gap-2">
                  <Check className="size-4 text-blue" aria-hidden="true" strokeWidth={2.5} />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <CardArt className="mx-auto w-full max-w-[420px] lg:max-w-none" />
            <p className="mt-5 text-center text-[0.8125rem] leading-relaxed text-muted-foreground lg:text-left">
              Карта оформляется на вас и выпускается банком. HolyPlastic — сопровождение, а не банк
              и не эмитент.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- autonomy */

function Autonomy() {
  const points = [
    {
      icon: Wallet,
      title: "Реквизиты вводите вы",
      text: "Оплата проходит с вашей карты и вашего счёта, без передачи чужому плательщику.",
    },
    {
      icon: ShieldCheck,
      title: "Аккаунты остаются вашими",
      text: "Не нужно давать логин и пароль от сервисов постороннему человеку ради разовой оплаты.",
    },
    {
      icon: Sparkles,
      title: "Подписки под контролем",
      text: "Регулярные списания видны в банковском приложении, продление зависит от вас.",
    },
  ];

  return (
    <section id="zachem" className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Новый уровень самостоятельности</p>
          <h2 className="mt-4 max-w-[20ch] text-[1.75rem] leading-tight font-bold sm:text-[2.5rem]">
            Собственная карта — вместо посредника для каждой операции.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-relaxed text-secondary-foreground">
            Один платёжный инструмент закрывает несколько международных сценариев: рабочие сервисы,
            поездки, покупки и подписки. Вы решаете, что и когда оплачивать.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <p.icon className="size-5 text-blue" aria-hidden="true" strokeWidth={2} />
              <h3 className="mt-3 text-[1.0625rem] font-semibold">{p.title}</h3>
              <p className="mt-2 max-w-[42ch] text-[0.9375rem] leading-relaxed text-secondary-foreground">
                {p.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- use cases */

function UseCases() {
  const cases = [
    {
      icon: Globe,
      title: "Международные выплаты за работу",
      text: "Поступления из Европы и США — в пределах маршрутов и отправителей, которые поддерживает банк. Проверяем ваш сценарий до оформления.",
      wide: true,
    },
    {
      icon: Sparkles,
      title: "Рабочие AI-сервисы и софт",
      text: "Самостоятельная оплата инструментов, облаков и профессиональных подписок.",
    },
    {
      icon: Plane,
      title: "Поездки и бронирования",
      text: "Оплата жилья, билетов и покупок за рубежом.",
    },
    {
      icon: CreditCard,
      title: "Приложения, игры и медиа",
      text: "Регулярные подписки оплачиваются вашей картой, без разовых просьб к знакомым.",
    },
    {
      icon: Smartphone,
      title: "Apple Pay",
      text: "Поддержка Apple Pay уточняется по актуальным условиям банка перед оформлением.",
    },
  ];

  const services = [
    "ChatGPT",
    "Claude",
    "Adobe",
    "Figma",
    "Steam",
    "PlayStation",
    "App Store",
    "Spotify",
    "Booking",
    "Netflix",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Для чего подходит</p>
          <h2 className="mt-4 max-w-[24ch] text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
            Сценарии, ради которых люди оформляют карту
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 60}
              className={c.wide ? "lg:col-span-3" : "lg:col-span-1"}
            >
              <article
                className={`h-full rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)] ${
                  c.wide ? "lg:p-8" : ""
                }`}
              >
                <c.icon className="size-5 text-blue" aria-hidden="true" strokeWidth={2} />
                <h3
                  className={`mt-4 font-semibold ${c.wide ? "text-xl sm:text-2xl" : "text-[1.0625rem]"}`}
                >
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-secondary-foreground">
                  {c.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-10 text-[0.8125rem] text-muted-foreground">
            Названия сервисов приведены как примеры пользовательских сценариев и не означают
            партнёрства.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {services.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-3 py-1.5 text-[0.8125rem] font-medium text-secondary-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- product */

function Product() {
  const confirmed = [
    ["Тип карты", "Дебетовая Visa, оформляется на ваше имя"],
    ["Форматы", "Virtual или Virtual + Physical"],
    ["Страна банка", "Великобритания"],
    ["Аудитория", "Граждане РФ и РБ, если это допускают правила банка"],
    ["Для старта", "Паспорт РФ или РБ, email, российский номер телефона"],
    ["Срок", "Ориентир — в течение дня после подготовки данных"],
  ];

  const toConfirm = [
    "Валюта и валюты счёта",
    "Банковское приложение и вход",
    "3-D Secure при оплатах",
    "Поддержка Apple Pay",
    "Реквизиты и правила входящих переводов",
    "Срок действия карты",
    "Обслуживание и комиссии банка",
    "Ограничения по использованию",
    "Стоимость и срок доставки пластика",
  ];

  return (
    <section id="produkt" className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Что именно вы получаете</p>
          <h2 className="mt-4 max-w-[26ch] text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
            Продукт предметно: подтверждённое и то, что уточняем до оформления
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h3 className="text-[0.8125rem] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
              Подтверждено
            </h3>
            <dl className="mt-4">
              {confirmed.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-1 gap-1 border-t border-border py-4 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-6"
                >
                  <dt className="text-[0.9375rem] text-muted-foreground">{k}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-[1.0625rem] font-semibold">Что уточним на консультации</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-secondary-foreground">
                Эти условия определяет банк, и они могут меняться. Не хочу обещать их заранее —
                сверяем перед началом оформления.
              </p>
              <ul className="mt-4 space-y-2.5">
                {toConfirm.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.9375rem] text-secondary-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-violet"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- pricing */

function Pricing() {
  const plans = [
    {
      name: "Virtual",
      price: "12 000 ₽",
      note: "Виртуальная карта",
      items: [
        "Виртуальная дебетовая Visa на ваше имя",
        "Сопровождение оформления и регистрации",
        "Помощь с активацией и первым входом",
        "Ответы на вопросы по сценарию использования",
      ],
      cta: { label: "Уточнить условия Virtual", href: VIRTUAL_MAILTO },
      accent: false,
    },
    {
      name: "Virtual + Physical",
      price: "15 000 ₽",
      note: "Виртуальная + пластик",
      items: [
        "Виртуальная и физическая дебетовая Visa",
        "Сопровождение оформления и регистрации",
        "Помощь с активацией и первым входом",
        "Доставка пластика в РФ — стоимость и срок уточняются",
      ],
      cta: { label: "Уточнить условия с пластиком", href: PHYSICAL_MAILTO },
      accent: true,
    },
  ];

  return (
    <section id="tarify" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Два формата</p>
          <h2 className="mt-4 text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
            Стоимость сопровождения
          </h2>
          <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-relaxed text-secondary-foreground">
            Это цена моей работы: консультация, подготовка, сопровождение регистрации и активации.
            Тарифы, обслуживание и комиссии банка в неё не входят.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
                  plan.accent
                    ? "border-transparent bg-surface shadow-[var(--shadow-lift)]"
                    : "border-border bg-surface"
                }`}
                style={
                  plan.accent
                    ? {
                        backgroundImage:
                          "linear-gradient(oklch(1 0 0), oklch(1 0 0)), var(--chrome-edge)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                        borderWidth: "1px",
                      }
                    : undefined
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <span className="rounded-full border border-border px-3 py-1 text-[0.75rem] font-medium text-muted-foreground">
                    {plan.note}
                  </span>
                </div>
                <p className="mt-5 text-[2.25rem] leading-none font-extrabold tracking-tight sm:text-[2.75rem]">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-blue"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <span className="text-secondary-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.cta.href} className="mt-8 block">
                  {plan.accent ? (
                    <PrimaryButton full>{plan.cta.label}</PrimaryButton>
                  ) : (
                    <GhostButton full>{plan.cta.label}</GhostButton>
                  )}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-6 max-w-[70ch] text-[0.9375rem] leading-relaxed text-secondary-foreground">
            До начала оформления уточним условия банка, обслуживание и возможные комиссии. Расходы
            на стороне банка — активация, обслуживание, конвертация, пополнение и доставка —
            оплачиваются по его тарифам и в стоимость сопровождения не входят.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- roles */

function Roles() {
  const roles = [
    {
      who: "HolyPlastic",
      items: [
        "Отвечаю на вопросы до оплаты",
        "Помогаю подготовиться и выбрать формат",
        "Сопровождаю регистрацию и активацию",
        "Объясняю следующий шаг простым языком",
      ],
    },
    {
      who: "Банк / эмитент",
      items: [
        "Проводит идентификацию и проверку",
        "Принимает решение о выпуске карты",
        "Устанавливает тарифы, лимиты и правила",
        "Обслуживает карту и счёт",
      ],
    },
    {
      who: "Клиент",
      items: [
        "Предоставляет достоверные данные",
        "Проходит KYC самостоятельно",
        "Подтверждает операции",
        "Соблюдает правила банка и сервисов",
      ],
    },
  ];

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Кто за что отвечает</p>
          <h2 className="mt-4 max-w-[26ch] text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
            Границы ответственности заранее, а не после оплаты
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-10 lg:grid-cols-3">
          {roles.map((role, i) => (
            <Reveal key={role.who} delay={i * 80}>
              <div className="chrome-rule w-full" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold">{role.who}</h3>
              <ul className="mt-4 space-y-2.5">
                {role.items.map((item) => (
                  <li
                    key={item}
                    className="text-[0.9375rem] leading-relaxed text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- process */

function Process() {
  const steps = [
    {
      title: "Консультация и проверка сценария",
      text: "Разбираем, для чего нужна карта, и подходит ли формат под вашу задачу.",
    },
    {
      title: "Подготовка данных и контактов",
      text: "Готовим то, что понадобится банку: документ, email, номер телефона.",
    },
    {
      title: "Регистрация и проверка банка",
      text: "Вы проходите регистрацию и идентификацию, я подсказываю на каждом шаге.",
    },
    {
      title: "Активация и первый вход",
      text: "Помогаю активировать карту, войти в приложение и сделать первую оплату.",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Как проходит оформление</p>
          <h2 className="mt-4 text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
            Четыре шага
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ol className="relative">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 70}>
                  <div className="relative flex gap-4 pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-2.5 shrink-0 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, var(--ice), var(--violet))",
                        }}
                      />
                      {i < steps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="mt-1 w-px flex-1"
                          style={{
                            background:
                              "linear-gradient(180deg, color-mix(in oklab, var(--violet) 40%, transparent), transparent)",
                          }}
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[1.0625rem] font-semibold">{step.title}</h3>
                      <p className="mt-1.5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-secondary-foreground">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-[1.0625rem] font-semibold">Для старта</h3>
              <ul className="mt-4 space-y-3">
                {["Паспорт РФ или РБ", "Действующий email", "Российский номер телефона"].map(
                  (item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem]">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-blue"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <span className="text-secondary-foreground">{item}</span>
                    </li>
                  ),
                )}
              </ul>
              <div className="chrome-rule my-6 w-full" aria-hidden="true" />
              <p className="text-[0.9375rem] leading-relaxed text-secondary-foreground">
                Обычно оформление занимает до одного дня после подготовки данных. Итоговый срок и
                выпуск зависят от проверки банка.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ transparency */

function Transparency() {
  const items = [
    {
      q: "На чьё имя оформляется карта",
      a: "Карта и счёт оформляются на вас. Я не открываю счёт от своего имени и не оформляю карту на третьих лиц.",
    },
    {
      q: "Где проходит идентификация",
      a: "Проверку личности вы проходите сами, на стороне банка, по его процедуре KYC.",
    },
    {
      q: "Кто имеет доступ к счёту",
      a: "Доступом к счёту и приложению распоряжаетесь вы. Логины, пароли и коды подтверждения остаются у вас.",
    },
    {
      q: "Какие данные нужны мне и зачем",
      a: "Для консультации достаточно описания задачи. Данные, которые нужны банку, вы вводите самостоятельно в его формах.",
    },
    {
      q: "Через какой канал не стоит передавать документы",
      a: "Не отправляйте сканы паспорта и коды подтверждения в открытые чаты и посторонним лицам. На сайте нет формы, которая собирает документы.",
    },
    {
      q: "Что происходит при отказе банка",
      a: "Решение о выпуске принимает банк, и отказ возможен. Порядок действий и условия возврата в этом случае обсуждаем до оплаты [ПОДТВЕРДИТЬ].",
    },
    {
      q: "Когда и за что вносится оплата",
      a: "Стоимость сопровождения фиксируется до начала работы, после консультации и подтверждения формата. Порядок оплаты — [ПОДТВЕРДИТЬ].",
    },
    {
      q: "Поддержка после активации",
      a: "После выпуска помогаю разобраться с активацией, первым входом и типовыми вопросами по использованию карты.",
    },
  ];

  return (
    <section
      id="prozrachnost"
      className="border-y border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Прозрачность</p>
          <h2 className="mt-4 max-w-[28ch] text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
            Ответы на вопросы, которые обычно решают, платить или нет
          </h2>
          <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
            Пометка «[ПОДТВЕРДИТЬ]» означает, что условие обсуждается индивидуально и я не готов
            обещать его текстом на сайте.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={(i % 2) * 60}>
              <h3 className="text-[1.0625rem] font-semibold">{item.q}</h3>
              <p className="mt-2 max-w-[56ch] text-[0.9375rem] leading-relaxed text-secondary-foreground">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- faq */

function Faq() {
  const faq = [
    {
      q: "HolyPlastic — это банк?",
      a: "Нет. Я оказываю консультационное и организационное сопровождение. Карту и счёт выпускает банк, он же принимает решение и устанавливает тарифы.",
    },
    {
      q: "На кого оформляется карта и счёт?",
      a: "На вас. Вы проходите проверку банка самостоятельно и сами распоряжаетесь счётом.",
    },
    {
      q: "Можно ли оформить только виртуальную карту?",
      a: "Да, это формат Virtual за 12 000 ₽. Физическую карту можно рассмотреть отдельно, в формате Virtual + Physical.",
    },
    {
      q: "Поддерживается ли Apple Pay?",
      a: "Apple Pay доступен там, где эту функцию действительно поддерживает банк и ваш регион. Проверяем актуальный статус до оформления.",
    },
    {
      q: "Подходит ли карта для получения выплат из Европы и США?",
      a: "Входящие поступления возможны в пределах маршрутов и отправителей, которые поддерживает банк. Универсальную совместимость не обещаю — сверяем ваш конкретный сценарий.",
    },
    {
      q: "Какие документы нужны?",
      a: "Паспорт РФ или РБ, действующий email и российский номер телефона. Документы вы вводите на стороне банка.",
    },
    {
      q: "Сколько занимает оформление?",
      a: "Ориентир — в течение дня после подготовки данных. Итоговый срок зависит от проверки и решения банка.",
    },
    {
      q: "Что входит в 12 000 ₽ и 15 000 ₽?",
      a: "Стоимость сопровождения: консультация, подготовка, помощь при регистрации и активации. Для формата с пластиком — сопровождение выпуска физической карты. Тарифы банка сюда не входят.",
    },
    {
      q: "Есть ли банковские комиссии и обслуживание?",
      a: "Комиссии, обслуживание и условия конвертации определяет банк. Их актуальные значения уточняем до начала оформления, чтобы не было сюрпризов.",
    },
    {
      q: "Как доставляется физическая карта?",
      a: "Доставка в РФ возможна; стоимость и срок подтверждаются индивидуально перед оформлением [ПОДТВЕРДИТЬ].",
    },
    {
      q: "Что если банк запросит дополнительные данные или откажет?",
      a: "Банк вправе запросить уточнения или отказать. В этом случае подскажу, что можно скорректировать; условия возврата обсуждаем до оплаты [ПОДТВЕРДИТЬ].",
    },
    {
      q: "Будет ли поддержка после выпуска?",
      a: "Да. Помогаю с активацией, первым входом и типовыми вопросами по использованию карты.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Вопросы</p>
          <h2 className="mt-4 text-[1.75rem] leading-tight font-bold sm:text-[2.25rem]">
            Частые вопросы
          </h2>
        </Reveal>

        <div className="mt-8 max-w-[820px]">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 6) * 40}>
              <details className="group border-t border-border last:border-b">
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1.0625rem] font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="relative grid size-8 shrink-0 place-items-center rounded-full border border-border transition-colors group-open:bg-secondary"
                  >
                    <span className="absolute h-px w-3 bg-foreground" />
                    <span className="absolute h-3 w-px bg-foreground transition-opacity group-open:opacity-0" />
                  </span>
                </summary>
                <p className="max-w-[68ch] pr-10 pb-5 text-[0.9375rem] leading-relaxed text-secondary-foreground">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- final cta */

function FinalCta() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="kontakty" className="pb-28 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-6 sm:p-10 lg:p-14"
            style={{
              background:
                "radial-gradient(90% 120% at 85% 0%, color-mix(in oklab, var(--ice) 16%, transparent), transparent 55%), radial-gradient(80% 100% at 0% 100%, color-mix(in oklab, var(--violet) 14%, transparent), transparent 60%), oklch(1 0 0)",
            }}
          >
            <h2 className="max-w-[22ch] text-[1.75rem] leading-tight font-bold sm:text-[2.5rem]">
              Сначала проверим, подходит ли карта под вашу задачу.
            </h2>
            <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-relaxed text-secondary-foreground">
              Напишите, для чего нужна карта: международные выплаты, рабочие сервисы, поездки или
              регулярные подписки. Я уточню формат, условия и следующий шаг.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={MAIN_MAILTO}>
                <PrimaryButton full>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="size-4" aria-hidden="true" />
                    Написать на почту
                  </span>
                </PrimaryButton>
              </a>
              <button type="button" onClick={copy} className="sm:w-auto">
                <GhostButton full>
                  {copied ? (
                    <Check className="size-4 text-blue" aria-hidden="true" strokeWidth={2.5} />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                  <span aria-live="polite">{copied ? "Адрес скопирован" : EMAIL}</span>
                </GhostButton>
              </button>
            </div>

            <p className="mt-6 text-[0.8125rem] text-muted-foreground">
              Форм с персональными данными на сайте нет: документы вы передаёте только банку.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ footer */

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface pb-[calc(96px+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-lg font-extrabold tracking-tight">HolyPlastic</p>
            <p className="mt-1 text-[0.8125rem] tracking-[0.14em] text-muted-foreground uppercase">
              international card service
            </p>
            <a
              href={MAIN_MAILTO}
              className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-medium underline underline-offset-4 hover:text-blue"
            >
              <Mail className="size-4" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>

          <div className="lg:col-span-7">
            <p className="max-w-[70ch] text-[0.9375rem] leading-relaxed text-secondary-foreground">
              HolyPlastic предоставляет консультационное и организационное сопровождение и не
              является банком, платёжной системой Visa или их официальным представительством.
              Решение о выпуске, тарифы, лимиты и доступность функций определяются банком/эмитентом
              и могут меняться.
            </p>
            <p className="mt-4 text-[0.8125rem] text-muted-foreground">
              © {new Date().getFullYear()} HolyPlastic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------- mobile CTA bar */

function MobileCtaBar() {
  return (
    <div
      className="glass fixed inset-x-0 bottom-0 z-40 px-4 pt-3 lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a href={MAIN_MAILTO} className="block">
        <PrimaryButton full>Узнать, подходит ли мне карта</PrimaryButton>
      </a>
    </div>
  );
}
