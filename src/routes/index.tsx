import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, GraduationCap } from "lucide-react";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { LeadershipSection } from "@/components/portfolio/LeadershipSection";
import { CasesSection } from "@/components/portfolio/CasesSection";
import { TimelineSection } from "@/components/portfolio/TimelineSection";
import { EducationDialog } from "@/components/portfolio/EducationDialog";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { contact } from "@/data/portfolio";

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
  const [eduOpen, setEduOpen] = useState(false);

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
        <ContactSection />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar CV em PDF, 940 KB (abre em nova aba)"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm leading-tight transition-colors hover:bg-secondary"
            >
              <Download className="size-4" /> Baixar CV{" "}
              <span className="text-xs text-muted-foreground">PDF · 940 KB</span>
            </a>
            <button
              type="button"
              onClick={() => setEduOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
            >
              <GraduationCap className="size-4" /> Formação e certificações
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Éliton R. Cavalcanti. Todos os direitos reservados.
          </p>
        </div>
      </footer>
      <EducationDialog open={eduOpen} onOpenChange={setEduOpen} />
    </div>
  );
}
