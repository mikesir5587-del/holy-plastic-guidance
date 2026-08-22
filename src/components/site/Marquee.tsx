import { useEffect, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

export type MarqueeItem = { name: string; icon: ReactNode };

function Row({ items, reverse }: { items: MarqueeItem[]; reverse?: boolean }) {
  const track = reverse ? "marquee-track-rev" : "marquee-track";
  return (
    <div className="marquee-mask overflow-hidden" aria-hidden="true">
      <ul className={track}>
        {[0, 1].map((copy) => (
          <li key={copy} className="flex shrink-0">
            <ul className="flex shrink-0 items-center">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="group flex shrink-0 items-center gap-3 px-6 py-4 sm:px-9"
                >
                  <span className="text-[1.35rem] text-white/70 transition-colors duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-[color:var(--cyan)] sm:text-[1.7rem]">
                    {item.icon}
                  </span>
                  <span className="text-[0.72rem] font-semibold tracking-[0.22em] text-white/70 uppercase transition-colors duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-white sm:text-[0.8rem]">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Waveform() {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className="my-1 h-6 w-full text-white/35"
    >
      <path
        d="M0 12 H320 C340 12, 344 2, 360 2 S 380 22, 400 22 S 420 12, 440 12 H760 C780 12, 784 4, 800 4 S 820 20, 840 20 S 860 12, 880 12 H1200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="220 260"
        className="dash-flow"
      />
    </svg>
  );
}

export function Marquee({ rowA, rowB }: { rowA: MarqueeItem[]; rowB: MarqueeItem[] }) {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setPaused(true);
  }, []);

  const names = [...rowA, ...rowB].map((i) => i.name);

  return (
    <div className="marquee-hold relative" data-paused={paused ? "true" : "false"}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 inset-y-2 rounded-3xl border border-white/8"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, white 5%, transparent), transparent 55%, color-mix(in oklab, white 4%, transparent))",
          boxShadow: "inset 0 1px 0 color-mix(in oklab, white 14%, transparent)",
        }}
      />
      <div className="relative">
        <p className="sr-only">
          Сервисы, которыми можно пользоваться с картой: {names.join(", ")}.
        </p>
        <Row items={rowA} />
        <Waveform />
        <Row items={rowB} reverse />
      </div>

      <div className="mt-3 flex justify-center sm:justify-end sm:pr-4">
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-pressed={paused}
          className="inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] text-white/80 uppercase transition-colors hover:bg-white/10"
        >
          {paused ? (
            <Play className="size-4" aria-hidden="true" />
          ) : (
            <Pause className="size-4" aria-hidden="true" />
          )}
          {paused ? "Возобновить анимацию" : "Остановить анимацию"}
        </button>
      </div>
    </div>
  );
}
