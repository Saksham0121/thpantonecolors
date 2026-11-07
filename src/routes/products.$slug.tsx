import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import productsImage from "../assets/ink-products.jpg";
import pressSheetsImage from "../assets/press-sheets.jpg";
import { cmyk, SiteFooter, SiteHeader } from "../components/site-chrome";
import { COMPANY, SITE_URL, getProduct, homeProducts, products } from "../data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    const url = `${SITE_URL}/products/${p.slug}`;
    const parent = p.parent ? getProduct(p.parent) : undefined;
    const crumbs = [
      { name: "Home", item: `${SITE_URL}/` },
      { name: "Products", item: `${SITE_URL}/#products` },
      ...(parent ? [{ name: parent.title, item: `${SITE_URL}/products/${parent.slug}` }] : []),
      { name: p.title, item: url },
    ];
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: p.metaTitle,
          description: p.metaDesc,
          inLanguage: "en-IN",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@type": "Thing", name: p.title },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: c.item,
          })),
        },
      ],
    };
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDesc },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.metaTitle },
        { name: "twitter:description", content: p.metaDesc },
        { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const parent = p.parent ? getProduct(p.parent) : undefined;
  const children = products.filter((c) => c.parent === p.slug);
  const related = homeProducts.filter((r) => r.slug !== p.slug && r.slug !== p.parent).slice(0, 3);
  const photo = p.slug.includes("water") || p.child ? pressSheetsImage : productsImage;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="on-navy bg-navy text-primary-foreground">
          <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/70">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link to="/" className="hover:text-primary-foreground">
                      <span className="draw">Home</span>
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <a href="/#products" className="hover:text-primary-foreground">
                      <span className="draw">Products</span>
                    </a>
                  </li>
                  {parent && (
                    <>
                      <li aria-hidden="true">/</li>
                      <li>
                        <Link
                          to="/products/$slug"
                          params={{ slug: parent.slug }}
                          className="hover:text-primary-foreground"
                        >
                          <span className="draw">{parent.title}</span>
                        </Link>
                      </li>
                    </>
                  )}
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-primary-foreground">
                    {p.title}
                  </li>
                </ol>
              </nav>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.02] sm:text-6xl">
                {p.h1}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                {p.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/#contact" className="btn btn-primary">
                  Request a quote
                </a>
                <a href="/#shades" className="btn btn-ghost">
                  See the shade range
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="zoom overflow-hidden rounded-lg lg:col-span-5">
              <img
                src={photo}
                alt={`${p.title} from ${COMPANY}: inks, packs and printed sheets`}
                width={1200}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl lg:col-span-5">
              Where {p.title.toLowerCase()} is used
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {p.uses.map((u, i) => (
                <li
                  key={u}
                  className="lift rounded-lg border border-border bg-card p-5"
                  style={{ borderTop: `3px solid ${cmyk[i % 4]}` }}
                >
                  <span className="font-heading text-lg font-semibold">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {children.length > 0 && (
          <section className="bg-secondary py-16 lg:py-24">
            <div className="wrap">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                Coatings in this range
              </h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-3">
                {children.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/products/$slug"
                      params={{ slug: c.slug }}
                      className="lift group block h-full rounded-lg border border-border bg-card p-6"
                    >
                      <h3 className="font-heading text-xl font-semibold">
                        <span className="draw">{c.title}</span>
                      </h3>
                      <p className="mt-2 text-muted-foreground">{c.text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className={`${children.length > 0 ? "" : "bg-secondary"} py-16 lg:py-24`}>
          <div className="wrap">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Other product lines</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: r.slug }}
                    className="lift block h-full rounded-lg border border-border bg-card p-6"
                  >
                    <h3 className="font-heading text-xl font-semibold">
                      <span className="draw">{r.title}</span>
                    </h3>
                    <p className="mt-2 text-muted-foreground">{r.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="on-navy bg-navy py-16 text-primary-foreground lg:py-20">
          <div className="wrap flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Request a quote for {p.title.toLowerCase()}
            </h2>
            <a href="/#contact" className="btn btn-primary">
              Request a quote
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
