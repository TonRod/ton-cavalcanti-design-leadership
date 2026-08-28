import type { CSSProperties } from "react";
import { mentoriaDepoimentos } from "@/data/mentoria";

export function MentoriaTestimonials() {
  return (
    <section
      id="depoimentos"
      tabIndex={-1}
      data-revelar
      className="scroll-mt-20 bg-surface-2 py-28 outline-none sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker entra">Depoimentos</p>
        <h2 className="titulo-grande entra mt-6" style={{ "--atraso": "60ms" } as CSSProperties}>
          Quem já passou por aqui.
        </h2>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mentoriaDepoimentos.map((d, i) => (
            <figure
              key={d.author}
              style={{ "--atraso": `${160 + i * 60}ms` } as CSSProperties}
              className="entra flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <blockquote className="font-serif text-base leading-relaxed">“{d.quote}”</blockquote>
              <figcaption className="mt-auto pt-6 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                {d.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
