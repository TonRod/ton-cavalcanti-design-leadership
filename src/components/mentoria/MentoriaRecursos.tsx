import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { mentoriaRecursos } from "@/data/mentoria";

export function MentoriaRecursos() {
  return (
    <section
      id="recursos"
      tabIndex={-1}
      data-revelar
      className="scroll-mt-20 py-28 outline-none sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker entra">Recursos</p>
        <h2 className="titulo-grande entra mt-6" style={{ "--atraso": "60ms" } as CSSProperties}>
          Comece se conhecendo.
        </h2>
        <p
          className="entra medida-curta mt-8 font-serif text-base leading-relaxed text-muted-foreground"
          style={{ "--atraso": "120ms" } as CSSProperties}
        >
          Diagnósticos e leituras gratuitas para você mapear onde está antes de decidir se precisa
          de mentoria. Este espaço recebe material novo com frequência.
        </p>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mentoriaRecursos.map((r, i) => (
            <a
              key={r.url}
              style={{ "--atraso": `${200 + i * 70}ms` } as CSSProperties}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="entra group flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-secondary"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="kicker">{r.tipo}</span>
                <span className="text-xs text-muted-foreground">{r.meta}</span>
              </div>

              <h3 className="display mt-4 text-2xl">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.description}</p>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-accent">
                {r.cta}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
