import { useState } from "react";
import { Download, GraduationCap } from "lucide-react";
import { contact } from "@/data/portfolio";
import { EducationDialog } from "@/components/portfolio/EducationDialog";

export function ResumeSection() {
  const [eduOpen, setEduOpen] = useState(false);

  return (
    <section id="curriculo" className="border-t border-border py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Currículo e formação</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">
          Para quem quer o histórico completo.
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Esta página traz uma seleção. Aqui está o resto — o histórico profissional completo e a
          formação acadêmica.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col rounded-lg border border-border bg-surface p-6">
            <Download className="size-5" aria-hidden="true" />
            <h3 className="display mt-4 text-2xl">Currículo</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Histórico profissional completo, no formato que processos seletivos costumam pedir.
            </p>
            <div className="mt-auto pt-6">
              <a
                href={contact.cv}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baixar currículo em PDF, 940 KB (abre em nova aba)"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm transition-colors hover:bg-secondary"
              >
                <Download className="size-4" /> Baixar currículo
              </a>
              <p className="mt-3 text-xs text-muted-foreground">PDF · 940 KB</p>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-border bg-surface p-6">
            <GraduationCap className="size-5" aria-hidden="true" />
            <h3 className="display mt-4 text-2xl">Formação e certificações</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              MBA, pós-graduação, formação executiva e certificações.
            </p>
            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => setEduOpen(true)}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm transition-colors hover:bg-secondary"
              >
                <GraduationCap className="size-4" /> Ver formação
              </button>
              <p className="mt-3 text-xs text-muted-foreground">&nbsp;</p>
            </div>
          </div>
        </div>
      </div>

      <EducationDialog open={eduOpen} onOpenChange={setEduOpen} />
    </section>
  );
}
