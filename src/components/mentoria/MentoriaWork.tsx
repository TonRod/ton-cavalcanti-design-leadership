import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { mentoria, mentoriaEixos, mentoriaParaQuem } from "@/data/mentoria";

export function MentoriaWork() {
  return (
    <section
      id="trabalho"
      tabIndex={-1}
      data-revelar
      className="scroll-mt-20 bg-surface-2 py-28 outline-none sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker entra">O que vamos trabalhar</p>
        <h2 className="titulo-grande entra mt-6" style={{ "--atraso": "60ms" } as CSSProperties}>
          Três frentes, uma carreira.
        </h2>
        <p
          className="entra medida-curta mt-8 font-serif text-base leading-relaxed text-muted-foreground"
          style={{ "--atraso": "120ms" } as CSSProperties}
        >
          A mentoria foi criada para estudantes e profissionais em início de carreira que querem
          acelerar sua entrada no mercado.
        </p>

        {/* A numeração se justifica: as três frentes têm ordem de maturidade —
            entrar, ganhar confiança, atuar como pleno. */}
        <ol className="mx-auto mt-20 grid max-w-3xl gap-14">
          {mentoriaEixos.map((eixo, i) => (
            <li
              key={eixo.title}
              className="item-ritmo entra"
              style={{ "--atraso": `${200 + i * 70}ms` } as CSSProperties}
            >
              <span className="marcador">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="display text-2xl sm:text-3xl">{eixo.title}</h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                  {eixo.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-24 max-w-3xl">
          <h3 className="display text-2xl">Essa mentoria é para você que:</h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {mentoriaParaQuem.map((item, i) => (
              <li
                key={item}
                className="entra flex items-start gap-3 text-sm leading-relaxed"
                style={{ "--atraso": `${420 + i * 50}ms` } as CSSProperties}
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="fecho-secao entra mt-24" style={{ "--atraso": "700ms" } as CSSProperties}>
          {mentoria.fechoTrabalho}
        </p>
      </div>
    </section>
  );
}
