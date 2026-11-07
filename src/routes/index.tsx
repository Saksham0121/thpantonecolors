import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
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
      { title: "The Pantone Colors | Premium Printing & Packaging Inks Manufacturer" },
      {
        name: "description",
        content:
          "The Pantone Colors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications.",
      },
      {
        name: "keywords",
        content:
          "printing inks, Pantone matching system, offset inks, UV flexo inks, pressroom chemicals, packaging inks, screen printing inks, security inks, Pantone color formulation",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "The Pantone Colors | Premium Printing & Packaging Inks" },
      {
        property: "og:description",
        content:
          "The Pantone Colors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thepantonecolors.com/" },
      { property: "og:image", content: "https://thepantonecolors.com/Favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Pantone Colors | Premium Printing & Packaging Inks" },
      {
        name: "twitter:description",
        content:
          "The Pantone Colors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications.",
      },
    ],
    links: [{ rel: "canonical", href: "https://thepantonecolors.com/" }],
  }),
  component: Index,
});

const companyName = "The Pantone Colors";
const CONTACT_EMAIL = "thepantonecolors@gmail.com";
const PHONE_LABEL = "+91 99358 27275";
const PHONE_HREF = "tel:+919935827275";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Shades", href: "#shades" },
  { label: "Matching", href: "#matching" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

const heroFacts = [
  { value: "15+", label: "years in ink" },
  { value: "9", label: "product lines" },
  { value: "India", label: "wide supply" },
];

const products = [
  {
    title: "Offset Conventional Ink",
    text: "Sharp detail and steady density on sheet-fed offset presses.",
  },
  {
    title: "UV Sheet Fed Inks",
    text: "Instant-curing inks with strong adhesion for premium sheet-fed work.",
  },
  {
    title: "UV Flexo Inks",
    text: "Durable inks for labels, packaging and narrow-web flexo lines.",
  },
  {
    title: "Security Inks",
    text: "UV-fluorescent, thermochromic and anti-counterfeit inks for protected documents.",
  },
  { title: "Screen Inks", text: "Opaque inks for textiles, glass, metal and plastics." },
  { title: "Pantone Inks", text: "Pantone-matched mixing and ready-to-use spot colours." },
  {
    title: "Press Room Chemicals",
    text: "Fountain solutions, washes and roller deglazers for steady production.",
  },
  { title: "Consumables", text: "Blankets, rollers, dampening covers and spare parts." },
  { title: "Allied Products", text: "Custom formulations built around your production needs." },
];

const cmyk = ["var(--ink-cyan)", "var(--ink-magenta)", "var(--ink-yellow)", "var(--ink-black)"];

const shadeCards = [
  {
    family: "Process colours",
    note: "The CMYK set for four-colour offset and packaging work.",
    shades: [
      { code: "Process Cyan", hex: "#009EE0" },
      { code: "Process Magenta", hex: "#E5007E" },
      { code: "Process Yellow", hex: "#FFED00" },
      { code: "Process Black", hex: "#1A1A1A" },
    ],
  },
  {
    family: "Warm spot shades",
    note: "High-strength reds and oranges for vibrant cartons.",
    shades: [
      { code: "Bright Red", hex: "#E1251B" },
      { code: "Warm Orange", hex: "#F57C20" },
      { code: "Rubine Red", hex: "#CE0058" },
      { code: "Deep Maroon", hex: "#7B2233" },
    ],
  },
  {
    family: "Cool spot shades",
    note: "Blues and greens matched to brand standards.",
    shades: [
      { code: "Reflex Blue", hex: "#001489" },
      { code: "Sky Blue", hex: "#0087C8" },
      { code: "Leaf Green", hex: "#00A551" },
      { code: "Deep Teal", hex: "#00756F" },
    ],
  },
  {
    family: "Metallics and specials",
    note: "Metallic, pastel and security shades for premium packs.",
    shades: [
      { code: "Rich Gold", hex: "#C9A227" },
      { code: "Bright Silver", hex: "#B4B8BC" },
      { code: "Pastel Pink", hex: "#F6C1CE" },
      { code: "UV Invisible", hex: "#DDE3EA" },
    ],
  },
] as const;

const steps = [
  {
    title: "Tell us your press",
    text: "Share the press, substrate and application, plus the Pantone reference.",
  },
  {
    title: "We match the shade",
    text: "We formulate the colour and recommend the right ink for the job.",
  },
  { title: "We quote and supply", text: "You get a quote, then batches delivered across India." },
];

const quality = [
  {
    title: "Controlled manufacturing",
    text: "ISO-compliant processes keep every batch consistent.",
  },
  { title: "Colour matching", text: "Custom shades formulated to your brand standard." },
  {
    title: "Supply across India",
    text: "Dependable dispatch to commercial, packaging and security printers.",
  },
  { title: "Press support", text: "Technical help with press setup and troubleshooting." },
];

const inputClass =
  "w-full rounded-md border border-input bg-background px-3.5 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ink-cyan focus:ring-2 focus:ring-ink-cyan/40 disabled:opacity-60";

function RegBar() {
  return (
    <div className="reg" aria-hidden="true">
      {cmyk.map((c) => (
        <span key={c} style={{ background: c }} />
      ))}
    </div>
  );
}

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
      console.log("ServerFn submit error, falling back to direct browser fetch...", err);
      try {
        const clientRes = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            company: company || "N/A",
            message,
            _subject: `New Inquiry from ${name}${company ? ` (${company})` : ""}`,
            _template: "table",
          }),
        });

        const clientData = (await clientRes.json().catch(() => ({}))) as {
          success?: string | boolean;
          message?: string;
        };

        if (clientData.success === "true" || clientData.success === true || clientRes.ok) {
          setStatus("success");
          return;
        }

        setErrorMessage(clientData.message || "Failed to deliver inquiry email. Please try again.");
        setStatus("error");
      } catch (clientErr: unknown) {
        console.error("Direct fetch error:", clientErr);
        const msg =
          clientErr instanceof Error
            ? clientErr.message
            : "Failed to send inquiry. Please try again.";
        setErrorMessage(msg);
        setStatus("error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <RegBar />
        <div className="wrap flex h-[68px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={logoImage}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-lg font-bold tracking-tight">{companyName}</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/75 hover:text-foreground"
              >
                <span className="draw">{link.label}</span>
              </a>
            ))}
            <a href="#contact" className="btn btn-primary !h-10 !px-5 !text-sm">
              Request a quote
            </a>
          </nav>

          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="wrap flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-1 py-3 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary mt-3 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a quote
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="on-navy bg-navy text-primary-foreground lg:flex lg:min-h-[calc(100svh-72px)] lg:items-center">
          <div className="wrap grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
            <div className="lg:col-span-5">
              <h1 className="font-heading text-[2.6rem] font-bold leading-[1.02] sm:text-6xl">
                Printing and packaging inks for presses across India
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/80">
                Offset, UV, flexo, screen and security inks, Pantone-matched shades and press room
                chemicals from one supplier.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn btn-primary">
                  Request a quote
                </a>
                <a href="#shades" className="btn btn-ghost">
                  See the shade range
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
                {heroFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-heading text-3xl font-bold sm:text-4xl">{f.value}</dt>
                    <dd className="mt-1 text-sm text-primary-foreground/70">{f.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="zoom overflow-hidden rounded-lg lg:col-span-7">
              <img
                src={productsImage}
                alt="Black ink pails, bottles, tins and pouches in cyan, magenta, yellow and black beside Pantone shade fans"
                width={1200}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="aspect-[3/2] h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Product range */}
        <section id="products" className="scroll-mt-16 py-20 lg:py-28">
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="zoom self-start overflow-hidden rounded-lg lg:col-span-5">
              <img
                src={heroImage}
                alt="Blue ink on the rollers of a press with an open ink pail in the foreground"
                width={1920}
                height={1088}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover object-[78%_50%] lg:aspect-[4/5]"
              />
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Nine ink and press room product lines
              </h2>
              <ul className="mt-8 border-t border-border">
                {products.map((p, i) => (
                  <li key={p.title} className="group relative border-b border-border">
                    <span
                      className="absolute inset-y-0 left-0 w-0 transition-[width] duration-300 group-hover:w-1"
                      style={{ background: cmyk[i % 4] }}
                      aria-hidden="true"
                    />
                    <a
                      href="#contact"
                      className="grid grid-cols-[2rem_1fr] items-baseline gap-x-4 gap-y-1 py-3.5 transition-[padding] duration-300 group-hover:pl-3 sm:grid-cols-[2rem_15rem_1fr_1rem]"
                    >
                      <span className="text-sm tabular-nums text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-lg font-semibold">
                        <span className="draw">{p.title}</span>
                      </span>
                      <span className="col-start-2 text-[0.95rem] leading-snug text-muted-foreground sm:col-start-auto">
                        {p.text}
                      </span>
                      <ArrowUpRight className="hidden h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Shades */}
        <section id="shades" className="scroll-mt-16 bg-secondary py-20 lg:py-28">
          <div className="wrap">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Shade cards for process and spot colours
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Batch after batch, matched to the same standard. Custom shades on request.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {shadeCards.map((card) => (
                <article
                  key={card.family}
                  className="lift overflow-hidden rounded-lg border border-border bg-card"
                >
                  <div className="swatch-strip">
                    {card.shades.map((shade) => (
                      <span
                        key={shade.code}
                        style={{ backgroundColor: shade.hex }}
                        title={`${shade.code} ${shade.hex}`}
                      />
                    ))}
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold">{card.family}</h3>
                    <p className="mt-1 text-[0.95rem] text-muted-foreground">{card.note}</p>
                    <ul className="mt-4 space-y-1.5">
                      {card.shades.map((shade) => (
                        <li key={shade.code} className="flex items-center gap-2.5 text-sm">
                          <span
                            className="h-3.5 w-3.5 shrink-0 rounded-sm border border-border"
                            style={{ backgroundColor: shade.hex }}
                          />
                          <span className="font-medium">{shade.code}</span>
                          <span className="ml-auto tabular-nums text-muted-foreground">
                            {shade.hex}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Screen colours are indicative. Ask for a printed shade card for accurate matching.
            </p>
          </div>
        </section>

        {/* Pantone matching */}
        <section
          id="matching"
          className="scroll-mt-16 py-20 lg:flex lg:min-h-[calc(100svh-72px)] lg:items-center lg:py-24"
        >
          <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Pantone colour matching in three steps
              </h2>
              <ol className="mt-10 space-y-8">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md font-heading text-lg font-bold"
                      style={{ background: cmyk[i], color: i === 2 ? "var(--navy)" : "#fff" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                      <p className="mt-1 text-muted-foreground">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="zoom overflow-hidden rounded-lg lg:col-span-6">
              <img
                src={pressSheetsImage}
                alt="Cyan, magenta, yellow and black ink rollers beside a stack of freshly printed sheets"
                width={1408}
                height={912}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Quality */}
        <section id="quality" className="scroll-mt-16 bg-card py-20 lg:py-28">
          <div className="wrap">
            <h2 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
              Built for heavy production runs
            </h2>
            <div className="zoom mt-10 overflow-hidden rounded-lg">
              <img
                src={pressMachineryImage}
                alt="Multi-colour offset press delivering colourful printed sheets"
                width={1408}
                height={912}
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full object-cover object-[50%_40%] lg:aspect-[21/8]"
              />
            </div>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {quality.map((q, i) => (
                <li key={q.title} className="border-t-2 pt-5" style={{ borderColor: cmyk[i] }}>
                  <h3 className="font-heading text-xl font-semibold">{q.title}</h3>
                  <p className="mt-2 text-muted-foreground">{q.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="on-navy scroll-mt-16 bg-navy py-20 text-primary-foreground lg:py-28"
        >
          <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
                Request a quote for your press room
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/80">
                Tell us your press, substrate and application. We recommend the ink and send a
                quote.
              </p>
              <div className="mt-10 space-y-5">
                <a href={PHONE_HREF} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-primary-foreground/70">Phone</span>
                    <span className="draw text-lg font-medium">{PHONE_LABEL}</span>
                  </span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-primary-foreground/70">Email</span>
                    <span className="draw text-lg font-medium">{CONTACT_EMAIL}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              {status === "success" ? (
                <div className="flex h-full flex-col items-start justify-center rounded-lg bg-background p-8 text-foreground sm:p-10">
                  <CheckCircle2 className="h-10 w-10 text-ink-cyan" />
                  <h3 className="mt-4 font-heading text-2xl font-bold">Quote request sent</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you. We received your message at{" "}
                    <span className="font-semibold text-foreground">{CONTACT_EMAIL}</span> and will
                    reply by email shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn btn-ghost mt-6 text-foreground"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg bg-background p-6 text-foreground sm:p-8"
                >
                  {status === "error" && (
                    <div
                      className="mb-5 flex items-center gap-3 rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive"
                      role="alert"
                    >
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
                        autoComplete="name"
                        disabled={status === "submitting"}
                        placeholder="Your name"
                        className={inputClass}
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
                        autoComplete="email"
                        disabled={status === "submitting"}
                        placeholder="you@company.com"
                        className={inputClass}
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
                        autoComplete="organization"
                        disabled={status === "submitting"}
                        placeholder="Your press or company name"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Press, substrate and ink needed
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        disabled={status === "submitting"}
                        placeholder="For example: 4-colour offset, coated board, Pantone 286 C"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary mt-6 w-full sm:w-auto"
                    style={{ background: "var(--navy)", color: "var(--background)" }}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending</span>
                      </>
                    ) : (
                      <span>Request a quote</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <RegBar />
        <div className="wrap py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2.5">
                <img
                  src={logoImage}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  className="h-9 w-9 object-contain"
                />
                <span className="font-heading text-lg font-bold tracking-tight">{companyName}</span>
              </div>
              <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
                Printing and packaging inks, press room chemicals and consumables for presses across
                India.
              </p>
            </div>
            <nav className="lg:col-span-3" aria-label="Footer">
              <h4 className="font-heading text-sm font-semibold">Pages</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[0.95rem] text-muted-foreground hover:text-foreground"
                    >
                      <span className="draw">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="lg:col-span-3">
              <h4 className="font-heading text-sm font-semibold">Products</h4>
              <ul className="mt-4 space-y-2">
                {products.slice(0, 5).map((p) => (
                  <li key={p.title} className="text-[0.95rem] text-muted-foreground">
                    {p.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
