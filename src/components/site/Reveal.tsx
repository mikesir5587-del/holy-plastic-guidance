import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll reveal. Any focus that lands inside an unrevealed block reveals it
 * immediately and scrolls the focused element into view, so keyboard users
 * never focus something invisible or far outside the viewport.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "blur",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "blur" | "plain";
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    const onFocusIn = (event: FocusEvent) => {
      show();
      const target = event.target;
      if (target instanceof HTMLElement) {
        const rect = target.getBoundingClientRect();
        const outside = rect.top < 96 || rect.bottom > window.innerHeight - 16;
        if (outside) {
          target.scrollIntoView({ block: "center", behavior: "auto" });
        }
      }
    };
    el.addEventListener("focusin", onFocusIn);

    if (typeof IntersectionObserver === "undefined") {
      show();
      return () => el.removeEventListener("focusin", onFocusIn);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      el.removeEventListener("focusin", onFocusIn);
    };
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variant === "blur" ? "reveal-blur" : "reveal"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
