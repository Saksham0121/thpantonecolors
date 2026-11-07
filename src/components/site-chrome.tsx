import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logoImage from "../assets/pantonecolors-logo.png";
import { COMPANY, CONTACT_EMAIL, PHONE_HREF, PHONE_LABEL, homeProducts } from "../data/products";
import { ScrollEffects } from "./fx";

export const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Shades", href: "/#shades" },
  { label: "Matching", href: "/#matching" },
  { label: "Quality", href: "/#quality" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const cmyk = [
  "var(--ink-cyan)",
  "var(--ink-magenta)",
  "var(--ink-yellow)",
  "var(--ink-black)",
];

export function RegBar() {
  return (
    <div className="reg" aria-hidden="true">
      {cmyk.map((c) => (
        <span key={c} style={{ background: c }} />
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollEffects />
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="relative">
          <div className="opacity-25">
            <RegBar />
          </div>
          <div id="scroll-progress" className="scroll-progress" aria-hidden="true">
            <RegBar />
          </div>
        </div>
        <div className="wrap flex h-[68px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label={`${COMPANY} home`}>
            <img
              src={logoImage}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-heading text-lg font-bold tracking-tight">{COMPANY}</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/75 hover:text-foreground"
              >
                <span className="draw">{link.label}</span>
              </a>
            ))}
            <a href="/#contact" className="btn btn-primary !h-10 !px-5 !text-sm">
              Request a quote
            </a>
          </nav>

          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="wrap flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-1 py-3 text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                className="btn btn-primary mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                Request a quote
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <RegBar />
      <div className="wrap py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src={logoImage}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 object-contain"
              />
              <span className="font-heading text-lg font-bold tracking-tight">{COMPANY}</span>
            </div>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              Printing and packaging inks, specialty coatings, press room chemicals and consumables
              for presses across India.
            </p>
            <address className="mt-5 space-y-1 text-[0.95rem] not-italic">
              <a href={PHONE_HREF} className="block text-foreground">
                <span className="draw">{PHONE_LABEL}</span>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block text-foreground">
                <span className="draw">{CONTACT_EMAIL}</span>
              </a>
            </address>
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
          <nav className="lg:col-span-4" aria-label="Products">
            <h4 className="font-heading text-sm font-semibold">Products</h4>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-1">
              {homeProducts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="text-[0.95rem] text-muted-foreground hover:text-foreground"
                  >
                    <span className="draw">{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {COMPANY}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
