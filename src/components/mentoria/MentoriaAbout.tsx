import type { CSSProperties } from "react";
import { mentoriaSobre } from "@/data/mentoria";

export function MentoriaAbout() {
  return (
    <section
      id="sobre"
      tabIndex={-1}
      data-revelar
      className="scroll-mt-20 py-28 outline-none sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker entra">Sobre mim</p>
        <h2
          className="titulo-grande entra mt-6 max-w-[16ch]"
          style={{ "--atraso": "60ms" } as CSSProperties}
        >
          {mentoriaSobre.title}
        </h2>

        {/* Medida curta: 42ch lê mais rápido que os ~65ch de antes, e o
            texto deixa de parecer coluna de jornal. */}
        <div className="medida-curta mt-14 space-y-7">
          {mentoriaSobre.paragraphs.map((p, i) => (
            <p
              key={p.slice(0, 40)}
              className="entra font-serif text-base leading-relaxed text-muted-foreground"
              style={{ "--atraso": `${140 + i * 70}ms` } as CSSProperties}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
