import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BRIxpIko2.mjs";
import { _ as ChevronRight, a as Phone, c as Menu, d as Layers, f as FlaskConical, g as CircleAlert, h as CircleCheck, i as ShieldCheck, l as Mail, m as Droplets, n as Sparkles, o as Palette, p as Factory, r as ShoppingCart, s as Paintbrush, t as X, u as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-IcgUUd8K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_ink_facility_default = "/assets/hero-ink-facility-CMDrC1j5.jpg";
var ink_products_default = "/assets/ink-products-NCvopkif.jpg";
var press_machinery_default = "/assets/press-machinery-B_s3_Em8.jpg";
var press_sheets_default = "/assets/press-sheets-O6YTb0_b.jpg";
var pantonecolors_logo_default = "/assets/pantonecolors-logo-D3KKQnVT.png";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var sendInquiryEmail = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("34f1eaf6a46862558f0defb8995d3ed48031a8621afa0339c7adacff7adbf498"));
var companyName = "Thepantonecolors";
var tagline = "Premium Inks for Printing & Packaging";
var navLinks = [
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Products",
		href: "#products"
	},
	{
		label: "Shades",
		href: "#shades"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var shadeCards = [
	{
		family: "Process Colours",
		note: "Standard CMYK set for four-colour offset and packaging work.",
		shades: [
			{
				code: "Process Cyan",
				hex: "#009EE0"
			},
			{
				code: "Process Magenta",
				hex: "#E5007E"
			},
			{
				code: "Process Yellow",
				hex: "#FFED00"
			},
			{
				code: "Process Black",
				hex: "#1A1A1A"
			}
		]
	},
	{
		family: "Warm Spot Shades",
		note: "High-strength reds and oranges for vibrant carton printing.",
		shades: [
			{
				code: "Bright Red",
				hex: "#E1251B"
			},
			{
				code: "Warm Orange",
				hex: "#F57C20"
			},
			{
				code: "Rubine Red",
				hex: "#CE0058"
			},
			{
				code: "Deep Maroon",
				hex: "#7B2233"
			}
		]
	},
	{
		family: "Cool Spot Shades",
		note: "Blues, greens and violets matched to brand standards.",
		shades: [
			{
				code: "Reflex Blue",
				hex: "#001489"
			},
			{
				code: "Sky Blue",
				hex: "#0087C8"
			},
			{
				code: "Leaf Green",
				hex: "#00A551"
			},
			{
				code: "Violet",
				hex: "#6E2585"
			}
		]
	},
	{
		family: "Metallics & Specials",
		note: "Metallic, pastel and security shades for premium packaging.",
		shades: [
			{
				code: "Rich Gold",
				hex: "#C9A227"
			},
			{
				code: "Bright Silver",
				hex: "#B4B8BC"
			},
			{
				code: "Pastel Pink",
				hex: "#F6C1CE"
			},
			{
				code: "UV Invisible",
				hex: "#5C6BC0"
			}
		]
	}
];
var services = [
	{
		title: "Offset Conventional Ink",
		description: "High-quality conventional inks engineered for sharp detail, consistent density, and reliable performance on sheet-fed offset presses.",
		icon: Layers
	},
	{
		title: "UV Sheet Fed Inks",
		description: "Instant-curing UV inks that deliver brilliant color, excellent adhesion, and high productivity for premium sheet-fed applications.",
		icon: Sparkles
	},
	{
		title: "UV Flexo Inks",
		description: "Flexible, durable UV flexo inks designed for labels, packaging, and narrow-web printing with outstanding printability.",
		icon: Droplets
	},
	{
		title: "Security Inks",
		description: "Specialized security inks including UV-fluorescent, thermochromic, and anti-counterfeit formulations for protected documents.",
		icon: ShieldCheck
	},
	{
		title: "Screen Inks",
		description: "Versatile screen printing inks for textiles, glass, metal, plastics, and specialty substrates with superior opacity and finish.",
		icon: Paintbrush
	},
	{
		title: "Pantone Inks",
		description: "Accurate Pantone-matched mixing services and ready-to-use spot colors for brand-consistent commercial printing.",
		icon: Palette
	},
	{
		title: "Press Room Chemicals",
		description: "Complete range of fountain solutions, washes, roller deglazers, and press maintenance chemicals to keep production running.",
		icon: FlaskConical
	},
	{
		title: "Consumables Products",
		description: "Essential pressroom consumables including blankets, rollers, dampening covers, and spare parts for uninterrupted output.",
		icon: ShoppingCart
	},
	{
		title: "Other Allied Products",
		description: "A comprehensive portfolio of allied printing products and custom formulations tailored to your specific production needs.",
		icon: Factory
	}
];
var accents = [
	{
		chip: "bg-ink-cyan/15 text-ink-cyan",
		bar: "bg-ink-cyan"
	},
	{
		chip: "bg-ink-magenta/15 text-ink-magenta",
		bar: "bg-ink-magenta"
	},
	{
		chip: "bg-ink-yellow/20 text-ink-yellow",
		bar: "bg-ink-yellow"
	},
	{
		chip: "bg-ink-violet/15 text-ink-violet",
		bar: "bg-ink-violet"
	},
	{
		chip: "bg-ink-teal/15 text-ink-teal",
		bar: "bg-ink-teal"
	},
	{
		chip: "bg-ink-orange/15 text-ink-orange",
		bar: "bg-ink-orange"
	}
];
var CONTACT_EMAIL = "thepantonecolors@gmail.com";
function Index() {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		setErrorMessage("");
		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = String(formData.get("name") ?? "");
		const email = String(formData.get("email") ?? "");
		const company = String(formData.get("company") ?? "");
		const message = String(formData.get("message") ?? "");
		try {
			await sendInquiryEmail({ data: {
				name,
				email,
				company,
				message
			} });
			setStatus("success");
		} catch (err) {
			console.error("Form submit error:", err);
			const msg = err instanceof Error ? err.message : "Failed to send inquiry. Please try again.";
			setErrorMessage(msg);
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-gradient-to-r from-ink-cyan via-ink-magenta to-ink-yellow" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/",
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: pantonecolors_logo_default,
									alt: `${companyName} logo`,
									width: 36,
									height: 36,
									className: "h-9 w-9 object-contain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-heading text-lg font-semibold tracking-tight text-foreground",
									children: companyName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "hidden items-center gap-8 md:flex",
								children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
									children: link.label
								}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
									children: "Get a quote"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden",
								onClick: () => setMobileMenuOpen(!mobileMenuOpen),
								"aria-label": "Toggle menu",
								children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
							})
						]
					}),
					mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border/60 bg-background md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1 px-4 py-4",
							children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
								onClick: () => setMobileMenuOpen(false),
								children: link.label
							}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "mt-4 block rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-primary-foreground",
								onClick: () => setMobileMenuOpen(false),
								children: "Get a quote"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-secondary/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ink-cyan/20 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-ink-magenta/15 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-ink-cyan" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-ink-magenta" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-ink-yellow" })
											]
										}), "Industrial Ink Specialists"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
										children: tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
										children: "Leading supplier of high-performance printing and packaging inks, press room chemicals, and consumables for commercial, packaging, and security printers across India."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#services",
											className: "inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90",
											children: "Explore services"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
											children: ["Contact us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-2 h-4 w-4" })]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex items-center justify-center lg:justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-xl lg:max-w-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: hero_ink_facility_default,
										alt: "Modern ink manufacturing facility with precision printing machinery",
										width: 1920,
										height: 1088,
										fetchPriority: "high",
										decoding: "async",
										className: "h-auto w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" })]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "services",
					className: "py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
								children: "Our Services & Products"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "A complete range of printing inks, chemicals, and consumables to power every stage of your production line."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: services.map((service, i) => {
								const accent = accents[i % accents.length] ?? accents[0];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-x-0 top-0 h-1 ${accent.bar}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `flex h-12 w-12 items-center justify-center rounded-lg ${accent.chip}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, { className: "h-6 w-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 font-heading text-lg font-semibold text-card-foreground",
											children: service.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: service.description
										})
									]
								}, service.title);
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "products",
					className: "bg-secondary/30 py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-12 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "order-2 lg:order-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ink_products_default,
									alt: "Premium printing ink products, color swatches, and packaging containers",
									width: 1200,
									height: 800,
									loading: "lazy",
									className: "rounded-2xl border border-border shadow-lg"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "order-1 lg:order-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
										children: "Engineered for Quality, Delivered with Consistency"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-lg text-muted-foreground",
										children: "From standard process colors to highly specialized security formulations, every product is manufactured under strict quality controls to ensure batch-to-batch consistency."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-8 space-y-4",
										children: [
											"ISO-compliant manufacturing processes",
											"Custom color matching and formulation support",
											"Fast, reliable supply across India",
											"Technical assistance for press setup and troubleshooting"
										].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: item
											})]
										}, item))
									})
								]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "shades",
					className: "py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
									children: "Shade Cards"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg text-muted-foreground",
									children: "Standard process shades and popular spot colours, matched and reproduced batch after batch. Custom shades developed on request."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
								children: shadeCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-40",
										children: card.shades.map((shade) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1",
											style: { backgroundColor: shade.hex },
											title: `${shade.code} · ${shade.hex}`
										}, shade.code))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-heading text-base font-semibold text-card-foreground",
												children: card.family
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: card.note
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 space-y-1",
												children: card.shades.map((shade) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-xs text-muted-foreground",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "h-3 w-3 shrink-0 rounded-sm border border-border",
															style: { backgroundColor: shade.hex }
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-foreground",
															children: shade.code
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "ml-auto tabular-nums",
															children: shade.hex
														})
													]
												}, shade.code))
											})
										]
									})]
								}, card.family))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-center text-sm text-muted-foreground",
								children: "Screen colours are indicative. Ask for a printed shade card for accurate matching."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-secondary/30 py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
								children: "Built for Heavy Production"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "Our inks run day and night on multi-colour offset, flexo, and UV presses, holding density and shade across long packaging runs."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-2xl border border-border bg-card shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: press_machinery_default,
									alt: "Multi-colour offset printing press delivering colourful printed sheets in a factory",
									width: 1408,
									height: 912,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "border-t border-border p-4 text-sm text-muted-foreground",
									children: "Multi-colour sheet-fed offset lines running full-colour packaging work."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-2xl border border-border bg-card shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: press_sheets_default,
									alt: "CMYK ink rollers on a press with a stack of freshly printed colourful sheets",
									width: 1408,
									height: 912,
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "border-t border-border p-4 text-sm text-muted-foreground",
									children: "Cyan, magenta, yellow and black rollers charged for a long production run."
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "about",
					className: "py-20 sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-3xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
									children: ["About ", companyName]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg leading-relaxed text-muted-foreground",
									children: "We are a trusted partner to the printing and packaging industry. With deep expertise in ink chemistry and print production, we help our customers achieve sharper prints, faster makereadies, and lower total cost of ownership."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid grid-cols-2 gap-6 sm:grid-cols-2",
									children: [{
										value: "15+",
										label: "Years Experience"
									}, {
										value: "9",
										label: "Product Lines"
									}].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-muted p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-heading text-2xl font-bold text-foreground",
											children: stat.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-sm text-muted-foreground",
											children: stat.label
										})]
									}, stat.label))
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "contact",
					className: "bg-primary py-20 text-primary-foreground sm:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-12 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-heading text-3xl font-bold tracking-tight sm:text-4xl",
									children: "Let's discuss your ink requirements"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg text-primary-foreground/80",
									children: "Tell us about your press, substrate, and application. Our team will recommend the right product and provide a competitive quote."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-primary-foreground/70",
											children: "Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: "+91 99358 27275"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-primary-foreground/70",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: "thepantonecolors@gmail.com"
										})] })]
									})]
								})
							] }), status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center rounded-2xl bg-primary-foreground p-8 text-center text-foreground shadow-xl sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-heading text-2xl font-bold tracking-tight",
										children: "Inquiry Sent Successfully!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-base text-muted-foreground",
										children: [
											"Thank you for reaching out. Your message has been sent directly to",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-foreground",
												children: CONTACT_EMAIL
											}),
											". We will respond to your email shortly."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setStatus("idle"),
										className: "mt-6 inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
										children: "Send Another Inquiry"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "rounded-2xl bg-primary-foreground p-6 text-foreground shadow-xl sm:p-8",
								children: [
									status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5 flex items-center gap-3 rounded-lg bg-destructive/10 p-4 text-sm text-destructive border border-destructive/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "name",
													className: "text-sm font-medium",
													children: "Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "name",
													name: "name",
													type: "text",
													required: true,
													disabled: status === "submitting",
													placeholder: "Your name",
													className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-cyan disabled:opacity-60"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "email",
													className: "text-sm font-medium",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "email",
													name: "email",
													type: "email",
													required: true,
													disabled: status === "submitting",
													placeholder: "you@company.com",
													className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-magenta disabled:opacity-60"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2 sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "company",
													className: "text-sm font-medium",
													children: "Company"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "company",
													name: "company",
													type: "text",
													disabled: status === "submitting",
													placeholder: "Your company name",
													className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-violet disabled:opacity-60"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2 sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													htmlFor: "message",
													className: "text-sm font-medium",
													children: "Message"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: "message",
													name: "message",
													rows: 4,
													required: true,
													disabled: status === "submitting",
													placeholder: "Tell us about your requirements...",
													className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-teal disabled:opacity-60"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: status === "submitting",
										className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-ink-cyan via-ink-violet to-ink-magenta px-6 py-3 text-base font-medium text-primary-foreground shadow-md transition-all hover:opacity-90 disabled:opacity-60",
										children: status === "submitting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sending Inquiry..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Inquiry" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-center text-xs text-muted-foreground",
										children: [
											"Submissions are delivered directly to ",
											CONTACT_EMAIL,
											". No email application required."
										]
									})
								]
							})]
						})
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-background py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2 lg:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: pantonecolors_logo_default,
										alt: `${companyName} logo`,
										width: 32,
										height: 32,
										loading: "lazy",
										className: "h-8 w-8 object-contain"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-heading text-lg font-semibold tracking-tight",
										children: companyName
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
									children: "Premium printing and packaging inks, press room chemicals, and consumables for the printing and packaging industry."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-heading text-sm font-semibold text-foreground",
								children: "Quick Links"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
									children: link.label
								}) }, link.href))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-heading text-sm font-semibold text-foreground",
								children: "Products"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: services.slice(0, 5).map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: service.title
								}) }, service.title))
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							companyName,
							". All rights reserved."
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
