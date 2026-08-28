import { ArrowRight, Check } from "lucide-react";
import { mentoriaLinks, mentoriaPlanos } from "@/data/mentoria";

export function MentoriaPlans() {
  return (
    <section id="planos" tabIndex={-1} className="scroll-mt-20 py-20 outline-none sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Planos</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">
          Escolha o plano ideal para acelerar sua carreira.
        </h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Planos criados para te ajudar a construir um perfil profissional maduro no mercado de
          design.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {mentoriaPlanos.map((plano) => (
            <div
              key={plano.name}
              className="flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="display text-2xl">{plano.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{plano.summary}</p>

              <p className="mt-4 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                {plano.format}
              </p>

              <div className="mt-6">
                {plano.price ? (
                  <p className="metric-num tabular-nums text-accent">{plano.price}</p>
                ) : (
                  <p className="font-serif text-base text-muted-foreground">Valor sob consulta</p>
                )}
                {plano.priceNote ? (
                  <p className="mt-2 text-xs tabular-nums text-muted-foreground">
                    {plano.priceNote}
                  </p>
                ) : null}
                <p className="mt-3 inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {plano.payment}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                {plano.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={mentoriaLinks.agendarPlano}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${plano.cta} — ${plano.name} (abre em nova aba)`}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm transition-colors hover:bg-secondary"
                >
                  {plano.cta} <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
