import { Download } from "lucide-react";
import { contact } from "@/data/portfolio";

export function ResumeSection() {
  return (
    <section id="curriculo" className="border-t border-border py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Currículo</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">
          A trajetória completa, em um documento.
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Esta página traz uma seleção. O currículo reúne o histórico completo,
          formação e certificações, no formato que processos seletivos costumam pedir.
        </p>

        <div className="mt-8">
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
    </section>
  );
}
