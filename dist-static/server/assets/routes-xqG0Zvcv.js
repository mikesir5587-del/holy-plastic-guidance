import { useCallback, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { SiAirbnb, SiAnthropic, SiApple, SiBookingdotcom, SiGoogleplay, SiNetflix, SiSpotify, SiSteam, SiYoutube } from "react-icons/si";
import { ArrowUpRight, Check, Copy, Mail, Send } from "lucide-react";
//#region src/components/site/CardArt.tsx
/**
* Liquid-chrome debit card (85.6 x 53.98 ratio).
* No brand name, no bank, no card number, no personal data.
*/
function CardArt({ className = "" }) {
	const ref = useRef(null);
	const [tilt, setTilt] = useState({
		x: 0,
		y: 0
	});
	const [fine, setFine] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
		setFine(mq.matches);
		const onChange = () => setFine(mq.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	useEffect(() => {
		if (!fine) return;
		const onMove = (e) => {
			const el = ref.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
			const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
			setTilt({
				x: Math.max(-1, Math.min(1, dx)) * 9,
				y: Math.max(-1, Math.min(1, dy)) * -7
			});
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [fine]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className,
		"aria-hidden": "true",
		style: { perspective: "1600px" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "card-float sweep relative aspect-[85.6/53.98] w-full rounded-[6.5%] border border-white/25",
			style: {
				transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
				transition: "transform 500ms cubic-bezier(0.22,1,0.36,1)",
				transformStyle: "preserve-3d",
				background: "linear-gradient(140deg, oklch(0.32 0.03 285) 0%, oklch(0.55 0.09 240) 26%, oklch(0.42 0.06 300) 48%, oklch(0.6 0.12 330) 70%, oklch(0.28 0.02 285) 100%)",
				boxShadow: "0 2px 6px oklch(0 0 0 / 0.5), 0 80px 120px -60px oklch(0.7 0.16 300 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.35)"
			},
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-0 rounded-[6.5%]",
					style: {
						background: "radial-gradient(120% 90% at 8% 4%, color-mix(in oklab, var(--cyan) 55%, transparent), transparent 48%), radial-gradient(100% 90% at 96% 98%, color-mix(in oklab, var(--magenta) 55%, transparent), transparent 52%), radial-gradient(70% 60% at 55% 55%, color-mix(in oklab, white 26%, transparent), transparent 62%)",
						mixBlendMode: "screen",
						opacity: .85
					}
				}),
				/* @__PURE__ */ jsx("div", {
					className: "pointer-events-none absolute inset-0 rounded-[6.5%] opacity-60",
					style: {
						background: "conic-gradient(from 210deg at 40% 60%, transparent 0deg, color-mix(in oklab, white 30%, transparent) 70deg, transparent 150deg, color-mix(in oklab, var(--violet) 40%, transparent) 240deg, transparent 330deg)",
						mixBlendMode: "screen"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex flex-col justify-between p-[6%]",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex items-start justify-end",
						children: /* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/40 px-2 py-[2px] text-[0.55rem] font-semibold tracking-[0.24em] text-white/75 uppercase sm:text-[0.62rem]",
							children: "Debit"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ jsx("div", {
							className: "h-7 w-10 rounded-[5px] sm:h-9 sm:w-12",
							style: {
								background: "linear-gradient(135deg, oklch(0.92 0.05 95), oklch(0.72 0.09 85) 50%, oklch(0.95 0.03 100))",
								boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.5)"
							},
							children: /* @__PURE__ */ jsx("div", {
								className: "grid h-full w-full grid-cols-2 grid-rows-3 gap-[2px] p-[3px] opacity-40",
								children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "rounded-[1px] bg-black/50" }, i))
							})
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[1.05rem] font-bold tracking-[0.16em] text-white/90 italic sm:text-[1.5rem]",
							children: "VISA DEBIT"
						})]
					})]
				})
			]
		})
	});
}
var holyplastic_logo_png_asset_default = {
	version: 1,
	asset_id: "76365241-63b7-43c0-922c-50f3f39342f4",
	project_id: "ef523069-8d5c-4a77-a7f7-e90f01ca81bc",
	url: "/__l5e/assets-v1/76365241-63b7-43c0-922c-50f3f39342f4/holyplastic-logo.png",
	r2_key: "a/v1/ef523069-8d5c-4a77-a7f7-e90f01ca81bc/76365241-63b7-43c0-922c-50f3f39342f4/holyplastic-logo.png",
	original_filename: "holyplastic-logo.png",
	size: 714837,
	content_type: "image/png",
	created_at: "2026-08-21T11:12:51Z"
};
var holyplastic_logo_light_png_asset_default = {
	version: 1,
	asset_id: "6d2aeb1e-f6c6-49fa-9fed-d6967407e1bb",
	project_id: "ef523069-8d5c-4a77-a7f7-e90f01ca81bc",
	url: "/__l5e/assets-v1/6d2aeb1e-f6c6-49fa-9fed-d6967407e1bb/holyplastic-logo-light.png",
	r2_key: "a/v1/ef523069-8d5c-4a77-a7f7-e90f01ca81bc/6d2aeb1e-f6c6-49fa-9fed-d6967407e1bb/holyplastic-logo-light.png",
	original_filename: "holyplastic-logo-light.png",
	size: 503015,
	content_type: "image/png",
	created_at: "2026-08-21T11:14:12Z"
};
//#endregion
//#region src/components/site/Logo.tsx
/**
* HolyPlastic lockup. `tone="light"` renders the version tuned for dark scenes.
*/
function Logo({ className = "", imgClassName = "", tone = "light", priority = false }) {
	const src = tone === "light" ? holyplastic_logo_light_png_asset_default.url : holyplastic_logo_png_asset_default.url;
	return /* @__PURE__ */ jsx("span", {
		className: `inline-flex items-center ${className}`,
		children: /* @__PURE__ */ jsx("img", {
			src,
			alt: "HolyPlastic",
			width: 1772,
			height: 886,
			loading: priority ? "eager" : "lazy",
			decoding: "async",
			className: `h-full w-auto object-contain ${imgClassName}`
		})
	});
}
//#endregion
//#region src/components/site/Marquee.tsx
function Row({ items, reverse }) {
	return /* @__PURE__ */ jsx("div", {
		className: "marquee-mask overflow-hidden",
		children: /* @__PURE__ */ jsx("ul", {
			className: reverse ? "marquee-track-rev" : "marquee-track",
			children: [0, 1].map((copy) => /* @__PURE__ */ jsx("li", {
				"aria-hidden": copy === 1,
				className: "flex shrink-0",
				children: /* @__PURE__ */ jsx("ul", {
					className: "flex shrink-0 items-center",
					children: items.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "group flex shrink-0 items-center gap-3 px-6 py-4 sm:px-9",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[1.35rem] text-white/60 transition-colors duration-300 group-hover:text-[color:var(--cyan)] sm:text-[1.7rem]",
							children: item.icon
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[0.72rem] font-semibold tracking-[0.22em] text-white/45 uppercase transition-colors duration-300 group-hover:text-white/85 sm:text-[0.8rem]",
							children: item.name
						})]
					}, item.name))
				})
			}, copy))
		})
	});
}
function Marquee({ rowA, rowB }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "marquee-hold",
		tabIndex: -1,
		children: [
			/* @__PURE__ */ jsx(Row, { items: rowA }),
			/* @__PURE__ */ jsx("div", { className: "hairline my-1 text-white" }),
			/* @__PURE__ */ jsx(Row, {
				items: rowB,
				reverse: true
			})
		]
	});
}
//#endregion
//#region src/components/site/Reveal.tsx
function Reveal({ children, className = "", delay = 0, variant = "blur", as: Tag = "div" }) {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			el.classList.add("is-visible");
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				el.classList.add("is-visible");
				io.unobserve(el);
			}
		}, {
			rootMargin: "0px 0px -8% 0px",
			threshold: .06
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		className: `${variant === "blur" ? "reveal-blur" : "reveal"} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var TELEGRAM = "https://t.me/holy_plastic";
var EMAIL = "holyplastic@yandex.com";
var MAILTO = `mailto:${EMAIL}?subject=%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20HolyPlastic`;
var NAV = [
	{
		href: "#services",
		label: "Сервисы"
	},
	{
		href: "#features",
		label: "Возможности"
	},
	{
		href: "#security",
		label: "Прозрачно"
	},
	{
		href: "#steps",
		label: "4 шага"
	},
	{
		href: "#pricing",
		label: "Тарифы"
	},
	{
		href: "#contact",
		label: "Контакт"
	}
];
var ROW_A = [
	{
		name: "ChatGPT",
		icon: /* @__PURE__ */ jsx("span", {
			className: "text-[0.85em] font-black tracking-tight",
			children: "AI"
		})
	},
	{
		name: "Claude",
		icon: /* @__PURE__ */ jsx(SiAnthropic, {})
	},
	{
		name: "Netflix",
		icon: /* @__PURE__ */ jsx(SiNetflix, {})
	},
	{
		name: "Spotify",
		icon: /* @__PURE__ */ jsx(SiSpotify, {})
	},
	{
		name: "Apple",
		icon: /* @__PURE__ */ jsx(SiApple, {})
	},
	{
		name: "YouTube",
		icon: /* @__PURE__ */ jsx(SiYoutube, {})
	}
];
var ROW_B = [
	{
		name: "Google Play",
		icon: /* @__PURE__ */ jsx(SiGoogleplay, {})
	},
	{
		name: "Amazon",
		icon: /* @__PURE__ */ jsx("span", {
			className: "text-[0.85em] font-black tracking-tight",
			children: "a"
		})
	},
	{
		name: "Adobe",
		icon: /* @__PURE__ */ jsx("span", {
			className: "text-[0.85em] font-black tracking-tight",
			children: "A"
		})
	},
	{
		name: "Steam",
		icon: /* @__PURE__ */ jsx(SiSteam, {})
	},
	{
		name: "Booking.com",
		icon: /* @__PURE__ */ jsx(SiBookingdotcom, {})
	},
	{
		name: "Airbnb",
		icon: /* @__PURE__ */ jsx(SiAirbnb, {})
	}
];
function TgLink({ children, className = "", label }) {
	return /* @__PURE__ */ jsx("a", {
		href: TELEGRAM,
		target: "_blank",
		rel: "noopener noreferrer",
		className,
		"aria-label": label,
		children
	});
}
var btnLight = "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-7 text-[0.78rem] font-bold tracking-[0.16em] text-[color:var(--ink)] uppercase transition-transform duration-300 hover:scale-[1.03]";
var btnGhost = "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-current/30 px-7 text-[0.78rem] font-bold tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-current/10";
function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-[color:var(--ink)]/80 backdrop-blur-xl" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: `mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 ${scrolled ? "h-16" : "h-20 sm:h-24"}`,
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#top",
					"aria-label": "HolyPlastic — в начало",
					className: "flex items-center",
					children: /* @__PURE__ */ jsx(Logo, {
						tone: "light",
						priority: true,
						className: `transition-all duration-500 ${scrolled ? "h-8" : "h-10 sm:h-12"}`
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Основная навигация",
					className: "hidden items-center gap-8 lg:flex",
					children: NAV.map((n) => /* @__PURE__ */ jsx("a", {
						href: n.href,
						className: "text-[0.68rem] font-semibold tracking-[0.24em] text-white/60 uppercase transition-colors hover:text-white",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "hidden sm:block",
						children: /* @__PURE__ */ jsx(TgLink, {
							className: `${btnLight} h-11`,
							label: "Обсудить оформление в Telegram",
							children: "Обсудить оформление"
						})
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						className: "inline-flex size-11 items-center justify-center rounded-full border border-white/20 lg:hidden",
						children: [/* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: "Меню"
						}), /* @__PURE__ */ jsxs("span", {
							"aria-hidden": "true",
							className: "flex flex-col gap-[5px]",
							children: [
								/* @__PURE__ */ jsx("span", { className: `block h-px w-5 bg-white transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}` }),
								/* @__PURE__ */ jsx("span", { className: `block h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}` }),
								/* @__PURE__ */ jsx("span", { className: `block h-px w-5 bg-white transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}` })
							]
						})]
					})]
				})
			]
		}), open && /* @__PURE__ */ jsxs("div", {
			id: "mobile-nav",
			className: "border-t border-white/10 bg-[color:var(--ink)]/95 px-5 py-6 backdrop-blur-xl lg:hidden",
			children: [/* @__PURE__ */ jsx("nav", {
				"aria-label": "Мобильная навигация",
				className: "flex flex-col",
				children: NAV.map((n) => /* @__PURE__ */ jsx("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "flex min-h-[48px] items-center border-b border-white/10 text-[0.8rem] font-semibold tracking-[0.2em] text-white/80 uppercase",
					children: n.label
				}, n.href))
			}), /* @__PURE__ */ jsx(TgLink, {
				className: `${btnLight} mt-6 w-full`,
				label: "Обсудить оформление в Telegram",
				children: "Обсудить оформление"
			})]
		})]
	});
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
	const p = (k) => ({ transform: `translate3d(0, ${y * k}px, 0)` });
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 sm:pt-32",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 -z-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute left-1/2 top-[34%] h-[70vw] w-[70vw] -translate-x-1/2 rounded-full opacity-45 blur-[110px]",
					style: {
						background: "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--cyan) 60%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklab, var(--magenta) 55%, transparent), transparent 62%)",
						...motion ? p(.06) : {}
					}
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto w-full max-w-[1400px] px-5 sm:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative z-10 flex items-baseline justify-between",
					children: [/* @__PURE__ */ jsxs("h1", {
						className: "display text-[15vw] leading-[0.86] sm:text-[11vw] lg:text-[7.4vw]",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "block",
								style: motion ? p(-.05) : void 0,
								children: "Visa"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "block pl-[8vw] text-white/45 sm:pl-[14vw]",
								style: motion ? p(.04) : void 0,
								children: "без"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "chrome-text block pl-[2vw]",
								style: motion ? p(-.02) : void 0,
								children: "границ"
							})
						]
					}), /* @__PURE__ */ jsxs("p", {
						className: "kicker hidden max-w-[9rem] text-right text-white lg:block",
						children: [
							"UK debit",
							/* @__PURE__ */ jsx("br", {}),
							"Visa"
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid items-end gap-10 lg:grid-cols-[1fr_minmax(0,560px)_1fr]",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "order-2 max-w-sm text-[0.95rem] leading-relaxed text-white/65 lg:order-1",
							children: "Дебетовая Visa Великобритании с личным сопровождением — для международных платежей, Apple\xA0Pay и доступных переводов."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "order-1 lg:order-2",
							style: motion ? p(-.08) : void 0,
							children: /* @__PURE__ */ jsx(CardArt, { className: "mx-auto w-full max-w-[560px]" })
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "order-3 flex flex-col items-start gap-5 lg:items-end",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.24em] text-white/55 uppercase",
								children: [/* @__PURE__ */ jsx(SiApple, { "aria-hidden": "true" }), " Apple Pay · если доступно"]
							}), /* @__PURE__ */ jsxs(TgLink, {
								className: btnLight,
								label: "Обсудить оформление в Telegram",
								children: ["Обсудить оформление ", /* @__PURE__ */ jsx(ArrowUpRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-10 flex items-center gap-3 text-white/40",
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: "relative block h-6 w-px bg-white/25",
						children: /* @__PURE__ */ jsx("span", { className: "scroll-dot absolute -left-[1.5px] top-0 block size-[4px] rounded-full bg-white" })
					}), /* @__PURE__ */ jsx("span", {
						className: "kicker text-white",
						children: "Скролл"
					})]
				})]
			})
		]
	});
}
function Services() {
	return /* @__PURE__ */ jsxs("section", {
		id: "services",
		className: "border-y border-white/10 py-14 sm:py-20",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto mb-8 w-full max-w-[1400px] px-5 sm:px-8",
				children: /* @__PURE__ */ jsx("h2", {
					className: "display text-[10vw] leading-none sm:text-[5.5vw]",
					children: "Платите глобально"
				})
			}),
			/* @__PURE__ */ jsx(Marquee, {
				rowA: ROW_A,
				rowB: ROW_B
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto mt-8 w-full max-w-[1400px] px-5 sm:px-8",
				children: /* @__PURE__ */ jsx("p", {
					className: "max-w-2xl text-xs leading-relaxed text-white/40",
					children: "Бренды приведены как примеры и не являются партнёрами HolyPlastic. Оплата и доступность зависят от правил сервиса, региона и карты."
				})
			})
		]
	});
}
var FEATURES = [
	{
		n: "01",
		word: "Apple Pay",
		text: "Добавьте карту в кошелёк телефона и платите офлайн и онлайн, где принимают Visa.",
		sub: "Международные сервисы и покупки — подписки, магазины, поездки."
	},
	{
		n: "02",
		word: "Переводы",
		text: "Доступные переводы из Европы и США по реквизитам счёта.",
		sub: "Есть вариант пополнения через криптовалютный маршрут — условия, комиссии и доступность определяют провайдеры и правила банка."
	},
	{
		n: "03",
		word: "Virtual / Physical",
		text: "Виртуальная Visa сразу или пластик с доставкой — выбираете формат.",
		sub: "Личное сопровождение от первого сообщения до активации."
	}
];
function Features() {
	return /* @__PURE__ */ jsx("section", {
		id: "features",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 sm:px-8",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", {
				className: "display text-[12vw] leading-none sm:text-[6vw]",
				children: "Возможности"
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-16 flex flex-col gap-24 sm:mt-24 sm:gap-40",
				children: FEATURES.map((f, i) => /* @__PURE__ */ jsxs(Reveal, {
					variant: "blur",
					className: `grid gap-6 sm:grid-cols-12 sm:items-end ${i % 2 ? "sm:text-right" : ""}`,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: `kicker text-white sm:col-span-2 ${i % 2 ? "sm:order-3 sm:text-right" : ""}`,
							children: f.n
						}),
						/* @__PURE__ */ jsx("div", {
							className: `sm:col-span-6 ${i % 2 ? "sm:order-2 sm:col-start-4" : ""}`,
							children: /* @__PURE__ */ jsx("p", {
								className: "display text-[11vw] leading-[0.95] sm:text-[4.6vw]",
								children: f.word
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: `sm:col-span-4 ${i % 2 ? "sm:order-1" : ""}`,
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-white/70",
								children: f.text
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-3 text-xs leading-relaxed text-white/40",
								children: f.sub
							})]
						})
					]
				}, f.n))
			})]
		})
	});
}
function Security() {
	return /* @__PURE__ */ jsx("section", {
		id: "security",
		className: "scene-milk grain py-24 sm:py-36",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", {
					className: "display text-[13vw] leading-none sm:text-[7vw]",
					children: "Прозрачно"
				}) }),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-14 grid gap-12 sm:mt-20 sm:grid-cols-2",
					children: [/* @__PURE__ */ jsxs(Reveal, {
						delay: 80,
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "kicker text-[color:var(--ink)]",
								children: "Нужно"
							}),
							/* @__PURE__ */ jsx("div", { className: "hairline my-5 text-[color:var(--ink)]" }),
							/* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 text-[1.35rem] leading-tight font-semibold sm:text-[2vw]",
								children: [
									/* @__PURE__ */ jsx("li", { children: "Загранпаспорт или внутренний паспорт РФ / РБ" }),
									/* @__PURE__ */ jsx("li", { children: "Email" }),
									/* @__PURE__ */ jsx("li", { children: "Телефон" })
								]
							})
						]
					}), /* @__PURE__ */ jsxs(Reveal, {
						delay: 160,
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "kicker text-[color:var(--ink)]",
								children: "Не запрашиваем"
							}),
							/* @__PURE__ */ jsx("div", { className: "hairline my-5 text-[color:var(--ink)]" }),
							/* @__PURE__ */ jsxs("ul", {
								className: "space-y-4 text-[1.35rem] leading-tight font-semibold opacity-45 sm:text-[2vw]",
								children: [
									/* @__PURE__ */ jsx("li", { children: "PIN" }),
									/* @__PURE__ */ jsx("li", { children: "CVV" }),
									/* @__PURE__ */ jsx("li", { children: "Пароль от банка" }),
									/* @__PURE__ */ jsx("li", { children: "Коды после выдачи карты" })
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs(Reveal, {
					delay: 220,
					children: [/* @__PURE__ */ jsx("div", { className: "hairline mt-16 text-[color:var(--ink)]" }), /* @__PURE__ */ jsxs("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-base font-semibold",
							children: "Решение о выпуске принимает банк."
						}), /* @__PURE__ */ jsx("p", {
							className: "text-base opacity-60",
							children: "Работаем только с достоверными данными и в рамках правил банка."
						})]
					})]
				})
			]
		})
	});
}
var STEPS = [
	{
		n: "01",
		t: "Выбор",
		d: "Обсуждаем сценарий и формат карты."
	},
	{
		n: "02",
		t: "Документы",
		d: "Собираем паспорт и контактные данные."
	},
	{
		n: "03",
		t: "Подача",
		d: "Оформляем заявку и сопровождаем проверку."
	},
	{
		n: "04",
		t: "Получение",
		d: "Активация, кошелёк, первые платежи."
	}
];
function Steps() {
	return /* @__PURE__ */ jsx("section", {
		id: "steps",
		className: "py-24 sm:py-36",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", {
					className: "display text-[13vw] leading-none sm:text-[7vw]",
					children: "4 шага"
				}) }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative mt-16 sm:mt-24",
					children: [/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "hairline absolute top-6 right-0 left-0 hidden text-white sm:block"
					}), /* @__PURE__ */ jsx("ol", {
						className: "grid gap-12 sm:grid-cols-4 sm:gap-8",
						children: STEPS.map((s, i) => /* @__PURE__ */ jsxs(Reveal, {
							as: "li",
							delay: i * 90,
							className: "relative sm:pt-14",
							children: [
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									className: "absolute top-[18px] left-0 hidden size-3 rounded-full bg-white sm:block"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "kicker text-white",
									children: s.n
								}),
								/* @__PURE__ */ jsx("p", {
									className: "display mt-3 text-[8vw] leading-none sm:text-[2.4vw]",
									children: s.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-white/55",
									children: s.d
								})
							]
						}, s.n))
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-16 max-w-2xl text-xs leading-relaxed text-white/40",
					children: "Подача и сопровождение обычно занимают до одного дня. Проверка банка и доставка пластика могут занять больше времени."
				})
			]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ jsxs("section", {
		id: "pricing",
		className: "border-t border-white/10",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto w-full max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32",
			children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", {
				className: "display text-[13vw] leading-none sm:text-[7vw]",
				children: "Два формата"
			}) })
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-14 grid sm:mt-20 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "flex min-h-[70svh] flex-col justify-between px-5 py-16 sm:px-12",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "kicker text-white",
						children: "Virtual"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "display mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]",
						children: "12 000 ₽"
					}),
					/* @__PURE__ */ jsxs("ul", {
						className: "mt-10 space-y-3 text-sm text-white/65",
						children: [
							/* @__PURE__ */ jsx("li", { children: "Виртуальная Visa для онлайн-платежей" }),
							/* @__PURE__ */ jsx("li", { children: "Подключение к кошельку телефона" }),
							/* @__PURE__ */ jsx("li", { children: "Сопровождение до первой операции" })
						]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ jsx(TgLink, {
						className: `${btnLight} w-full sm:w-auto`,
						label: "Выбрать виртуальную карту в Telegram",
						children: "Выбрать виртуальную"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-6 text-xs text-white/40",
						children: "Возможны комиссии банка и провайдеров пополнения — уточняем до оплаты."
					})]
				})]
			}), /* @__PURE__ */ jsxs(Reveal, {
				delay: 120,
				className: "scene-milk flex min-h-[70svh] flex-col justify-between px-5 py-16 sm:px-12",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "kicker text-[color:var(--ink)]",
						children: "Physical"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "display mt-6 text-[13vw] leading-none sm:text-[6vw] lg:text-[4.4vw]",
						children: "15 000 ₽"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm opacity-60",
						children: "+ доставка"
					}),
					/* @__PURE__ */ jsxs("ul", {
						className: "mt-10 space-y-3 text-sm opacity-70",
						children: [
							/* @__PURE__ */ jsx("li", { children: "Виртуальная и пластиковая Visa" }),
							/* @__PURE__ */ jsx("li", { children: "Офлайн-платежи и снятие наличных" }),
							/* @__PURE__ */ jsx("li", { children: "Сопровождение до активации пластика" })
						]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ jsx(TgLink, {
						className: "inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-7 text-[0.78rem] font-bold tracking-[0.16em] text-white uppercase transition-transform duration-300 hover:scale-[1.03] sm:w-auto",
						label: "Выбрать физическую карту в Telegram",
						children: "Выбрать физическую"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-6 text-xs opacity-50",
						children: "Стоимость и срок доставки зависят от направления; возможны комиссии банка и провайдеров."
					})]
				})]
			})]
		})]
	});
}
function Contact() {
	const [copied, setCopied] = useState(false);
	const timer = useRef(null);
	useEffect(() => () => {
		if (timer.current) clearTimeout(timer.current);
	}, []);
	const copy = useCallback(async () => {
		try {
			if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(EMAIL);
			else {
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
			timer.current = setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
			window.prompt("Скопируйте адрес почты", EMAIL);
		}
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-28 text-center sm:px-8",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 -z-10",
			children: /* @__PURE__ */ jsx("div", {
				className: "absolute bottom-[-20%] left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 rounded-full opacity-35 blur-[120px]",
				style: { background: "radial-gradient(circle at 40% 40%, color-mix(in oklab, var(--violet) 60%, transparent), transparent 62%), radial-gradient(circle at 70% 60%, color-mix(in oklab, var(--cyan) 45%, transparent), transparent 60%)" }
			})
		}), /* @__PURE__ */ jsxs(Reveal, {
			className: "flex flex-col items-center",
			children: [
				/* @__PURE__ */ jsx(Logo, {
					tone: "light",
					className: "h-14 sm:h-20"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "display mt-10 text-[18vw] leading-none sm:text-[9vw]",
					children: "Начнём?"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-md text-sm text-white/60",
					children: "Напишите в Telegram — разберём ваш сценарий и подберём формат карты."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 flex flex-col items-center gap-4 sm:flex-row",
					children: [/* @__PURE__ */ jsxs(TgLink, {
						className: btnLight,
						label: "Написать в Telegram",
						children: [/* @__PURE__ */ jsx(Send, {
							className: "size-4",
							"aria-hidden": "true"
						}), " Написать в Telegram"]
					}), /* @__PURE__ */ jsxs("a", {
						href: MAILTO,
						className: `${btnGhost} text-white`,
						children: [/* @__PURE__ */ jsx(Mail, {
							className: "size-4",
							"aria-hidden": "true"
						}), " Написать письмо"]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-sm tracking-[0.08em] text-white/70",
							children: EMAIL
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: copy,
							className: "inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-5 text-[0.72rem] font-semibold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10",
							children: [copied ? /* @__PURE__ */ jsx(Check, {
								className: "size-4",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ jsx(Copy, {
								className: "size-4",
								"aria-hidden": "true"
							}), copied ? "Скопировано" : "Скопировать почту"]
						}),
						/* @__PURE__ */ jsx("span", {
							"aria-live": "polite",
							className: "sr-only",
							children: copied ? "Адрес скопирован" : ""
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-10 max-w-sm text-xs text-white/35",
					children: "Не отправляйте паспорт, данные карты или коды в первом сообщении."
				})
			]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-white/10 px-5 py-16 pb-28 sm:px-8 lg:pb-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-[1400px]",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between",
					children: [
						/* @__PURE__ */ jsx(Logo, {
							tone: "light",
							className: "h-10 sm:h-12"
						}),
						/* @__PURE__ */ jsx("nav", {
							"aria-label": "Навигация в подвале",
							className: "flex flex-wrap gap-x-8 gap-y-3",
							children: NAV.map((n) => /* @__PURE__ */ jsx("a", {
								href: n.href,
								className: "text-[0.68rem] font-semibold tracking-[0.22em] text-white/50 uppercase hover:text-white",
								children: n.label
							}, n.href))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-3 text-sm",
							children: [/* @__PURE__ */ jsxs(TgLink, {
								className: "inline-flex min-h-[44px] items-center gap-2 text-white/80 hover:text-white",
								children: [/* @__PURE__ */ jsx(Send, {
									className: "size-4",
									"aria-hidden": "true"
								}), " @holy_plastic"]
							}), /* @__PURE__ */ jsxs("a", {
								href: MAILTO,
								className: "inline-flex min-h-[44px] items-center gap-2 text-white/80 hover:text-white",
								children: [
									/* @__PURE__ */ jsx(Mail, {
										className: "size-4",
										"aria-hidden": "true"
									}),
									" ",
									EMAIL
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "hairline my-10 text-white" }),
				/* @__PURE__ */ jsx("p", {
					className: "max-w-4xl text-xs leading-relaxed text-white/35",
					children: "HolyPlastic — консультационное сопровождение оформления карты. Мы не являемся банком, эмитентом или платёжной системой и не выпускаем карты. Решение о выпуске принимает банк по результатам собственных проверок KYC/AML. Условия обслуживания, комиссии и доступность сервисов определяются банком и могут изменяться."
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-xs text-white/25",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" HolyPlastic"
					]
				})
			]
		})
	});
}
function StickyCta() {
	const [hidden, setHidden] = useState(false);
	useEffect(() => {
		const footer = document.querySelector("footer");
		if (!footer || typeof IntersectionObserver === "undefined") return;
		const io = new IntersectionObserver((entries) => setHidden(entries[0]?.isIntersecting ?? false), { rootMargin: "0px 0px -10% 0px" });
		io.observe(footer);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		className: `fixed inset-x-4 bottom-4 z-40 transition-all duration-300 lg:hidden ${hidden ? "pointer-events-none translate-y-6 opacity-0" : "opacity-100"}`,
		children: /* @__PURE__ */ jsxs(TgLink, {
			className: `${btnLight} w-full shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]`,
			label: "Написать в Telegram",
			children: [/* @__PURE__ */ jsx(Send, {
				className: "size-4",
				"aria-hidden": "true"
			}), " Написать в Telegram"]
		})
	});
}
function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Services, {}),
				/* @__PURE__ */ jsx(Features, {}),
				/* @__PURE__ */ jsx(Security, {}),
				/* @__PURE__ */ jsx(Steps, {}),
				/* @__PURE__ */ jsx(Pricing, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(StickyCta, {})
		]
	});
}
//#endregion
export { Home as component };
