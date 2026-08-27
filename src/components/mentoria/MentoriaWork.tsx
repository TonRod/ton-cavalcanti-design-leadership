import { Check } from "lucide-react";
import { mentoriaEixos, mentoriaParaQuem } from "@/data/mentoria";

export function MentoriaWork() {
  return (
    <section id="trabalho" className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">O que vamos trabalhar</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">Três frentes, uma carreira.</h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          A mentoria foi criada para estudantes e profissionais em início de carreira que querem
          acelerar sua entrada no mercado.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {mentoriaEixos.map((eixo) => (
            <div key={eixo.title} className="rounded-lg border border-border bg-surface p-6">
              <p className="kicker">{eixo.label}</p>
              <h3 className="display mt-4 text-2xl">{eixo.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {eixo.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface p-6 sm:p-8">
          <h3 className="display text-2xl">Essa mentoria é para você que:</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {mentoriaParaQuem.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
