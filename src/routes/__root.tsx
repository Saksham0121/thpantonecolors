import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  type ErrorComponentProps,
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Pantone Colors | Printing & Packaging Inks Manufacturer" },
      {
        name: "description",
        content:
          "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, water base, specialty coatings, screen, security, and Pantone printing applications.",
      },
      {
        name: "keywords",
        content:
          "printing inks, Pantone matching inks, offset inks, UV flexo inks, pressroom chemicals, packaging inks, screen printing inks, security inks, Pantone color formulation",
      },
      { name: "author", content: "The Pantone Colors" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0b1536" },
      { property: "og:title", content: "The Pantone Colors | Printing & Packaging Inks" },
      {
        property: "og:description",
        content:
          "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, water base, specialty coatings, screen, security, and Pantone printing applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Pantone Colors" },
      { property: "og:locale", content: "en_IN" },
      { name: "geo.region", content: "IN" },
      { name: "geo.placename", content: "India" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Pantone Colors | Printing & Packaging Inks" },
      {
        name: "twitter:description",
        content:
          "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, water base, specialty coatings, screen, security, and Pantone printing applications.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/Favicon.png", type: "image/png" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thepantonecolors.com/#organization",
        name: "The Pantone Colors",
        alternateName: ["Thepantonecolors", "Pantone Colors"],
        url: "https://thepantonecolors.com",
        logo: "https://thepantonecolors.com/Favicon.png",
        image: "https://thepantonecolors.com/og-image.jpg",
        description:
          "Supplier of printing and packaging inks, specialty coatings, press room chemicals and consumables for printers across India.",
        email: "thepantonecolors@gmail.com",
        telephone: "+91-9794210537",
        areaServed: { "@type": "Country", name: "India" },
        knowsAbout: [
          "Offset printing ink",
          "UV sheet fed ink",
          "UV flexo ink",
          "Water base flexo ink",
          "Water base ink for craft and paper",
          "Barrier coating for tea cups",
          "Pearl coating",
          "Fragrance coating",
          "Pantone colour matching",
          "Security ink",
          "Screen printing ink",
          "Press room chemicals",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9794210537",
          contactType: "sales",
          email: "thepantonecolors@gmail.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://thepantonecolors.com/#website",
        url: "https://thepantonecolors.com/",
        name: "The Pantone Colors",
        inLanguage: "en-IN",
        publisher: { "@id": "https://thepantonecolors.com/#organization" },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
