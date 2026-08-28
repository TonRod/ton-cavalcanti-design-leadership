import { ArrowUpRight } from "lucide-react";
import { mentoriaRecursos } from "@/data/mentoria";

export function MentoriaRecursos() {
  return (
    <section id="recursos" tabIndex={-1} className="scroll-mt-20 py-20 outline-none sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Recursos</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">Comece se conhecendo.</h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Diagnósticos e leituras gratuitas para você mapear onde está antes de decidir se precisa
          de mentoria. Este espaço recebe material novo com frequência.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mentoriaRecursos.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-secondary"
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
