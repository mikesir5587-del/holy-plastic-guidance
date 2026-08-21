import type { ReactNode } from "react";

export type MarqueeItem = { name: string; icon: ReactNode };

function Row({ items, reverse }: { items: MarqueeItem[]; reverse?: boolean }) {
  const track = reverse ? "marquee-track-rev" : "marquee-track";
  return (
    <div className="marquee-mask overflow-hidden">
      <ul className={track}>
        {[0, 1].map((copy) => (
          <li key={copy} aria-hidden={copy === 1} className="flex shrink-0">
            <ul className="flex shrink-0 items-center">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="group flex shrink-0 items-center gap-3 px-6 py-4 sm:px-9"
                >
                  <span className="text-[1.35rem] text-white/60 transition-colors duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-[color:var(--cyan)] sm:text-[1.7rem]">
                    {item.icon}
                  </span>
                  <span className="text-[0.72rem] font-semibold tracking-[0.22em] text-white/45 uppercase transition-colors duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-white/85 sm:text-[0.8rem]">
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

export function Marquee({ rowA, rowB }: { rowA: MarqueeItem[]; rowB: MarqueeItem[] }) {
  return (
    <div className="marquee-hold">
      <Row items={rowA} />
      <div className="hairline my-1 text-white" />
      <Row items={rowB} reverse />
    </div>
  );
}
