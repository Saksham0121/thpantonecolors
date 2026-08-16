import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-xQyjhL3z.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DTgTiWGV.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Thepantonecolors | Printing & Packaging Inks Manufacturer" },
			{
				name: "description",
				content: "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications."
			},
			{
				name: "keywords",
				content: "printing inks, Pantone matching inks, offset inks, UV flexo inks, pressroom chemicals, packaging inks, screen printing inks, security inks, Pantone color formulation"
			},
			{
				name: "author",
				content: "Thepantonecolors"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				name: "theme-color",
				content: "#0f172a"
			},
			{
				property: "og:title",
				content: "Thepantonecolors | Printing & Packaging Inks"
			},
			{
				property: "og:description",
				content: "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://thepantonecolors.com/"
			},
			{
				property: "og:site_name",
				content: "Thepantonecolors"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Thepantonecolors | Printing & Packaging Inks"
			},
			{
				name: "twitter:description",
				content: "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications."
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://thepantonecolors.com/"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/Favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Thepantonecolors",
				url: "https://thepantonecolors.com",
				logo: "https://thepantonecolors.com/Favicon.png",
				description: "Premium printing and packaging inks, press room chemicals, and consumables for offset, UV, flexo, screen, security, and Pantone printing applications.",
				contactPoint: {
					"@type": "ContactPoint",
					telephone: "+91-9935827275",
					contactType: "sales",
					email: "thepantonecolors@gmail.com",
					areaServed: "IN",
					availableLanguage: ["English", "Hindi"]
				}
			}) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-IcgUUd8K.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Thepantonecolors | Premium Printing & Packaging Inks Manufacturer" },
			{
				name: "description",
				content: "Thepantonecolors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications."
			},
			{
				name: "keywords",
				content: "printing inks, Pantone matching system, offset inks, UV flexo inks, pressroom chemicals, packaging inks, screen printing inks, security inks, Pantone color formulation"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Thepantonecolors | Premium Printing & Packaging Inks"
			},
			{
				property: "og:description",
				content: "Thepantonecolors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://thepantonecolors.com/"
			},
			{
				property: "og:image",
				content: "https://thepantonecolors.com/Favicon.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Thepantonecolors | Premium Printing & Packaging Inks"
			},
			{
				name: "twitter:description",
				content: "Thepantonecolors supplies premium printing and packaging inks, press room chemicals, and consumables for offset, UV sheet-fed, UV flexo, screen, security, and Pantone applications."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://thepantonecolors.com/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
