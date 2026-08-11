import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { LeadershipSection } from "@/components/portfolio/LeadershipSection";
import { CasesSection } from "@/components/portfolio/CasesSection";
import { TimelineSection } from "@/components/portfolio/TimelineSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const title = "Éliton Cavalcanti (Ton) — Design Leadership · Product Strategy · Head of Design";
const description =
  "Portfólio de liderança de design de Ton Cavalcanti: 16 anos em produto, times de até 25 designers, cases com NPS 40→60, −50% de abandono e −30% no tempo de lançamento.";

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
      <SiteHeader />
      <main>
        <Hero />
        <LeadershipSection />
        <CasesSection />
        <TimelineSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto w-full max-w-6xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Éliton R. Cavalcanti. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
