import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
      { title: "Thepantonecolors | Printing & Packaging Inks Manufacturer" },
      {
        name: "description",
        content:
          "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications.",
      },
      {
        name: "keywords",
        content:
          "printing inks, Pantone matching inks, offset inks, UV flexo inks, pressroom chemicals, packaging inks, screen printing inks, security inks, Pantone color formulation",
      },
      { name: "author", content: "Thepantonecolors" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0f172a" },
      { property: "og:title", content: "Thepantonecolors | Printing & Packaging Inks" },
      {
        property: "og:description",
        content:
          "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thepantonecolors.com/" },
      { property: "og:site_name", content: "Thepantonecolors" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Thepantonecolors | Printing & Packaging Inks" },
      {
        name: "twitter:description",
        content:
          "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://thepantonecolors.com/" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/Favicon.png", type: "image/png" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap",
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
    "@type": "Organization",
    name: "Thepantonecolors",
    url: "https://thepantonecolors.com",
    logo: "https://thepantonecolors.com/Favicon.png",
    description:
      "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9935827275",
      contactType: "sales",
      email: "thepantonecolors@gmail.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html lang="en">
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
