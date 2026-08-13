import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { contact, siteUrl } from "@/data/portfolio";
import portrait from "@/assets/portrait.jpg.asset.json";

const siteTitle =
  "Éliton Cavalcanti (Ton) — Design Leadership · Product Strategy · Head of Design";
const siteDescription =
  "Ton Cavalcanti · 16 anos em produto, mais de 6 liderando times de design em Try, Bradesco, Globo, Motrix, Natura e Porto Seguro. Cases com resultado medido em CSAT, NPS, tempo de resposta e abandono de jornada.";
const portraitUrl = `${siteUrl}${portrait.url}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Éliton R. Cavalcanti",
  alternateName: "Ton Cavalcanti",
  jobTitle: "Senior Product Designer",
  worksFor: { "@type": "Organization", name: "Porto Seguro" },
  url: siteUrl,
  image: portraitUrl,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressCountry: "BR",
  },
  sameAs: [contact.linkedin, contact.behance],
  alumniOf: [
    { "@type": "Organization", name: "ESPM" },
    { "@type": "Organization", name: "Auckland University of Technology" },
    { "@type": "Organization", name: "Instituto Superior de Tecnologia" },
    { "@type": "Organization", name: "Fundação Eurípides Soares da Rocha" },
  ],
  knowsAbout: [
    "Design Leadership",
    "Product Strategy",
    "Service Design",
    "Design Ops",
    "Pesquisa de Usuário",
    "Design Thinking",
  ],
  description: siteDescription,
};

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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

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
      { title: "Ton Cavalcanti" },
      { name: "description", content: "Personal design leadership portfolio showcasing experience in product strategy and team management." },
      { name: "author", content: "Éliton R. Cavalcanti" },
      { property: "og:title", content: "Ton Cavalcanti" },
      { property: "og:description", content: "Personal design leadership portfolio showcasing experience in product strategy and team management." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: siteUrl },
      { property: "og:site_name", content: "Ton Cavalcanti" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: portraitUrl },
      { property: "og:image:width", content: "768" },
      { property: "og:image:height", content: "1365" },
      {
        property: "og:image:alt",
        content: "Retrato profissional de Éliton (Ton) Cavalcanti",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ton Cavalcanti" },
      { name: "twitter:description", content: "Personal design leadership portfolio showcasing experience in product strategy and team management." },
      { name: "twitter:image", content: portraitUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ton-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
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
