import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader, type SiteHeaderLink } from "@/components/portfolio/SiteHeader";
import { MentoriaHero } from "@/components/mentoria/MentoriaHero";
import { MentoriaWork } from "@/components/mentoria/MentoriaWork";
import { MentoriaRecursos } from "@/components/mentoria/MentoriaRecursos";
import { MentoriaPlans } from "@/components/mentoria/MentoriaPlans";
import { MentoriaTestimonials } from "@/components/mentoria/MentoriaTestimonials";
import { MentoriaAbout } from "@/components/mentoria/MentoriaAbout";
import { MentoriaContact } from "@/components/mentoria/MentoriaContact";
import { useRevelar } from "@/components/mentoria/useRevelar";
import { mentoria } from "@/data/mentoria";
import { siteUrl } from "@/data/portfolio";

/** Escopo de módulo: referência estável para o observer da nav. */
const links: SiteHeaderLink[] = [
  { href: "#trabalho", label: "A mentoria" },
  { href: "#recursos", label: "Recursos" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const pageTitle = "Mentoria em Product Design · Pinguins que voam — Ton Cavalcanti";
const pageDescription =
  "Mentoria para estudantes e designers em início de carreira: portfólio que demonstra raciocínio, confiança para defender decisões e visão estratégica. Com Ton Cavalcanti, 16 anos em produto.";

export const Route = createFileRoute("/mentoria")({
  component: Mentoria,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/mentoria` },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
  }),
});

function Mentoria() {
  useRevelar();

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#conteudo"
        className="sr-only rounded-md focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:outline focus:outline-2 focus:outline-ring"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader brand={mentoria.brand} links={links} imersivo />
      <main id="conteudo">
        <MentoriaHero />
        <MentoriaWork />
        <MentoriaRecursos />
        <MentoriaPlans />
        <MentoriaTestimonials />
        <MentoriaAbout />
        <MentoriaContact />
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6">
          <a
            href="/"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver o portfólio de liderança de design de Ton Cavalcanti
          </a>
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Éliton R. Cavalcanti. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
