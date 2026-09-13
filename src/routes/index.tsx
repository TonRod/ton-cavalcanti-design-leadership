import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/data/portfolio";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { LeadershipSection } from "@/components/portfolio/LeadershipSection";
import { CasesSection } from "@/components/portfolio/CasesSection";
import { TimelineSection } from "@/components/portfolio/TimelineSection";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const pageTitle = "Ton Cavalcanti · Liderança de Design e Estratégia de Produto";
const pageDescription =
  "16 anos em produto, mais de 6 liderando times de design em Try, Bradesco, Globo, Motrix, Natura e Porto Seguro. Cases com resultado medido em CSAT, NPS, tempo de resposta e abandono de jornada.";
const pageUrl = `${siteUrl}/`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#conteudo"
        className="sr-only rounded-md focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:outline focus:outline-2 focus:outline-ring"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <LeadershipSection />
        <CasesSection />
        <TimelineSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6">
          <a
            href="/mentoria"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Mentoria para designers · Pinguins que voam
          </a>
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Éliton R. Cavalcanti. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
