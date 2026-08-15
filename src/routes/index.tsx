import { createFileRoute } from "@tanstack/react-router";
import {
  FlaskConical,
  Droplets,
  ShieldCheck,
  Paintbrush,
  Palette,
  Factory,
  ShoppingCart,
  Layers,
  Sparkles,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

import heroImage from "../assets/hero-ink-facility.jpg";
import productsImage from "../assets/ink-products.jpg";
import pressMachineryImage from "../assets/press-machinery.jpg";
import pressSheetsImage from "../assets/press-sheets.jpg";
import logoImage from "../assets/pantonecolors-logo.png";
import { sendInquiryEmail } from "../server/send-inquiry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thepantonecolors | Printing & Packaging Inks" },
      {
        name: "description",
        content:
          "Thepantonecolors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications.",
      },
      {
        property: "og:title",
        content: "Thepantonecolors | Printing & Packaging Inks",
      },
      {
        property: "og:description",
        content:
          "Thepantonecolors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const companyName = "Thepantonecolors";
const tagline = "Premium Inks for Printing & Packaging";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Shades", href: "#shades" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const shadeCards = [
  {
    family: "Process Colours",
    note: "Standard CMYK set for four-colour offset and packaging work.",
    shades: [
      { code: "Process Cyan", hex: "#009EE0" },
      { code: "Process Magenta", hex: "#E5007E" },
      { code: "Process Yellow", hex: "#FFED00" },
      { code: "Process Black", hex: "#1A1A1A" },
    ],
  },
  {
    family: "Warm Spot Shades",
    note: "High-strength reds and oranges for vibrant carton printing.",
    shades: [
      { code: "Bright Red", hex: "#E1251B" },
      { code: "Warm Orange", hex: "#F57C20" },
      { code: "Rubine Red", hex: "#CE0058" },
      { code: "Deep Maroon", hex: "#7B2233" },
    ],
  },
  {
    family: "Cool Spot Shades",
    note: "Blues, greens and violets matched to brand standards.",
    shades: [
      { code: "Reflex Blue", hex: "#001489" },
      { code: "Sky Blue", hex: "#0087C8" },
      { code: "Leaf Green", hex: "#00A551" },
      { code: "Violet", hex: "#6E2585" },
    ],
  },
  {
    family: "Metallics & Specials",
    note: "Metallic, pastel and security shades for premium packaging.",
    shades: [
      { code: "Rich Gold", hex: "#C9A227" },
      { code: "Bright Silver", hex: "#B4B8BC" },
      { code: "Pastel Pink", hex: "#F6C1CE" },
      { code: "UV Invisible", hex: "#5C6BC0" },
    ],
  },
] as const;

const services = [
  {
    title: "Offset Conventional Ink",
    description:
      "High-quality conventional inks engineered for sharp detail, consistent density, and reliable performance on sheet-fed offset presses.",
    icon: Layers,
  },
  {
    title: "UV Sheet Fed Inks",
    description:
      "Instant-curing UV inks that deliver brilliant color, excellent adhesion, and high productivity for premium sheet-fed applications.",
    icon: Sparkles,
  },
  {
    title: "UV Flexo Inks",
    description:
      "Flexible, durable UV flexo inks designed for labels, packaging, and narrow-web printing with outstanding printability.",
    icon: Droplets,
  },
  {
    title: "Security Inks",
    description:
      "Specialized security inks including UV-fluorescent, thermochromic, and anti-counterfeit formulations for protected documents.",
    icon: ShieldCheck,
  },
  {
    title: "Screen Inks",
    description:
      "Versatile screen printing inks for textiles, glass, metal, plastics, and specialty substrates with superior opacity and finish.",
    icon: Paintbrush,
  },
  {
    title: "Pantone Inks",
    description:
      "Accurate Pantone-matched mixing services and ready-to-use spot colors for brand-consistent commercial printing.",
    icon: Palette,
  },
  {
    title: "Press Room Chemicals",
    description:
      "Complete range of fountain solutions, washes, roller deglazers, and press maintenance chemicals to keep production running.",
    icon: FlaskConical,
  },
  {
    title: "Consumables Products",
    description:
      "Essential pressroom consumables including blankets, rollers, dampening covers, and spare parts for uninterrupted output.",
    icon: ShoppingCart,
  },
  {
    title: "Other Allied Products",
    description:
      "A comprehensive portfolio of allied printing products and custom formulations tailored to your specific production needs.",
    icon: Factory,
  },
];

const accents = [
  { chip: "bg-ink-cyan/15 text-ink-cyan", bar: "bg-ink-cyan" },
  { chip: "bg-ink-magenta/15 text-ink-magenta", bar: "bg-ink-magenta" },
  { chip: "bg-ink-yellow/20 text-ink-yellow", bar: "bg-ink-yellow" },
  { chip: "bg-ink-violet/15 text-ink-violet", bar: "bg-ink-violet" },
  { chip: "bg-ink-teal/15 text-ink-teal", bar: "bg-ink-teal" },
  { chip: "bg-ink-orange/15 text-ink-orange", bar: "bg-ink-orange" },
] as const;

const CONTACT_EMAIL = "thepantonecolors@gmail.com";

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      await sendInquiryEmail({
        data: { name, email, company, message },
      });
      setStatus("success");
    } catch (err: unknown) {
      console.error("Form submit error:", err);
      const msg = err instanceof Error ? err.message : "Failed to send inquiry. Please try again.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="h-1 w-full bg-gradient-to-r from-ink-cyan via-ink-magenta to-ink-yellow" />
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logoImage}
              alt={`${companyName} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />

            <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
              {companyName}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a quote
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 block rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary/30">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ink-cyan/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-ink-magenta/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-ink-cyan" />
                  <span className="h-2 w-2 rounded-full bg-ink-magenta" />
                  <span className="h-2 w-2 rounded-full bg-ink-yellow" />
                </span>
                Industrial Ink Specialists
              </div>

              <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Leading supplier of high-performance printing and packaging inks, press room
                chemicals, and consumables for commercial, packaging, and security printers across
                India.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Explore services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Contact us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-xl lg:max-w-none">
                <img
                  src={heroImage}
                  alt="Modern ink manufacturing facility with precision printing machinery"
                  width={1920}
                  height={1088}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Services & Products
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A complete range of printing inks, chemicals, and consumables to power every stage
                of your production line.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const accent = accents[i % accents.length] ?? accents[0];
                return (
                  <div
                    key={service.title}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} />
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${accent.chip}`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 font-heading text-lg font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products / Applications */}
        <section id="products" className="bg-secondary/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <img
                  src={productsImage}
                  alt="Premium printing ink products, color swatches, and packaging containers"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="rounded-2xl border border-border shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Engineered for Quality, Delivered with Consistency
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  From standard process colors to highly specialized security formulations, every
                  product is manufactured under strict quality controls to ensure batch-to-batch
                  consistency.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "ISO-compliant manufacturing processes",
                    "Custom color matching and formulation support",
                    "Fast, reliable supply across India",
                    "Technical assistance for press setup and troubleshooting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Shade cards */}
        <section id="shades" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Shade Cards
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Standard process shades and popular spot colours, matched and reproduced batch after
                batch. Custom shades developed on request.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {shadeCards.map((card) => (
                <div
                  key={card.family}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-40">
                    {card.shades.map((shade) => (
                      <div
                        key={shade.code}
                        className="flex-1"
                        style={{ backgroundColor: shade.hex }}
                        title={`${shade.code} · ${shade.hex}`}
                      />
                    ))}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold text-card-foreground">
                      {card.family}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{card.note}</p>
                    <div className="mt-4 space-y-1">
                      {card.shades.map((shade) => (
                        <div
                          key={shade.code}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <span
                            className="h-3 w-3 shrink-0 rounded-sm border border-border"
                            style={{ backgroundColor: shade.hex }}
                          />
                          <span className="font-medium text-foreground">{shade.code}</span>
                          <span className="ml-auto tabular-nums">{shade.hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Screen colours are indicative. Ask for a printed shade card for accurate matching.
            </p>
          </div>
        </section>

        {/* Press room in action */}
        <section className="bg-secondary/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Built for Heavy Production
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our inks run day and night on multi-colour offset, flexo, and UV presses, holding
                density and shade across long packaging runs.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                <img
                  src={pressMachineryImage}
                  alt="Multi-colour offset printing press delivering colourful printed sheets in a factory"
                  width={1408}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <figcaption className="border-t border-border p-4 text-sm text-muted-foreground">
                  Multi-colour sheet-fed offset lines running full-colour packaging work.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                <img
                  src={pressSheetsImage}
                  alt="CMYK ink rollers on a press with a stack of freshly printed colourful sheets"
                  width={1408}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <figcaption className="border-t border-border p-4 text-sm text-muted-foreground">
                  Cyan, magenta, yellow and black rollers charged for a long production run.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About {companyName}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We are a trusted partner to the printing and packaging industry. With deep expertise
                in ink chemistry and print production, we help our customers achieve sharper prints,
                faster makereadies, and lower total cost of ownership.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-2">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "9", label: "Product Lines" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-muted p-4">
                    <div className="font-heading text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-primary py-20 text-primary-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Let&apos;s discuss your ink requirements
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  Tell us about your press, substrate, and application. Our team will recommend the
                  right product and provide a competitive quote.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Phone</div>
                      <div className="font-medium">+91 99358 27275</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70">Email</div>
                      <div className="font-medium">thepantonecolors@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-primary-foreground p-8 text-center text-foreground shadow-xl sm:p-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    Thank you for reaching out. Your message has been sent directly to{" "}
                    <span className="font-semibold text-foreground">{CONTACT_EMAIL}</span>. We will
                    respond to your email shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-primary-foreground p-6 text-foreground shadow-xl sm:p-8"
                >
                  {status === "error" && (
                    <div className="mb-5 flex items-center gap-3 rounded-lg bg-destructive/10 p-4 text-sm text-destructive border border-destructive/20">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={status === "submitting"}
                        placeholder="Your name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-cyan disabled:opacity-60"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={status === "submitting"}
                        placeholder="you@company.com"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-magenta disabled:opacity-60"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        disabled={status === "submitting"}
                        placeholder="Your company name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-violet disabled:opacity-60"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        disabled={status === "submitting"}
                        placeholder="Tell us about your requirements..."
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ink-teal disabled:opacity-60"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-ink-cyan via-ink-violet to-ink-magenta px-6 py-3 text-base font-medium text-primary-foreground shadow-md transition-all hover:opacity-90 disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <span>Send Inquiry</span>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Submissions are delivered directly to {CONTACT_EMAIL}. No email application
                    required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2">
                <img
                  src={logoImage}
                  alt={`${companyName} logo`}
                  width={32}
                  height={32}
                  loading="lazy"
                  className="h-8 w-8 object-contain"
                />
                <span className="font-heading text-lg font-semibold tracking-tight">
                  {companyName}
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Premium printing and packaging inks, press room chemicals, and consumables for the
                printing and packaging industry.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground">Products</h4>
              <ul className="mt-4 space-y-2">
                {services.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <span className="text-sm text-muted-foreground">{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
