import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { LeadershipSection } from "@/components/portfolio/LeadershipSection";
import { CasesSection } from "@/components/portfolio/CasesSection";
import { TimelineSection } from "@/components/portfolio/TimelineSection";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { ContactSection } from "@/components/portfolio/ContactSection";



const title = "Éliton Cavalcanti (Ton) — Design Leadership · Product Strategy · Head of Design";
const description =
  "Ton Cavalcanti · 16 anos em produto, mais de 6 liderando times de design em Try, Bradesco, Globo, Motrix, Natura e Porto Seguro. Cases com resultado medido em CSAT, NPS, tempo de resposta e abandono de jornada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
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
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Éliton R. Cavalcanti. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
