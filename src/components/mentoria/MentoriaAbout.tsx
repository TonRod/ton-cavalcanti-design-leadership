import type { CSSProperties } from "react";
import { mentoriaSobre } from "@/data/mentoria";

export function MentoriaAbout() {
  return (
    <section
      id="sobre"
      tabIndex={-1}
      data-revelar
      className="scroll-mt-20 overflow-x-clip py-28 outline-none sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Foto na coluna da esquerda, texto à direita, alinhados pela base: a
            foto termina junto com o último parágrafo. O recorte tem margem
            transparente dos lados, então a caixa vaza um pouco para a esquerda
            para o corpo ocupar a coluna inteira. */}
        <div className="grid items-end gap-12 md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:gap-10 lg:gap-16">
          <figure className="sobre-foto entra" style={{ "--atraso": "0ms" } as CSSProperties}>
            <img
              src="/mentoria/ton-sobre.webp"
              srcSet="/mentoria/ton-sobre-600.webp 600w, /mentoria/ton-sobre.webp 1189w"
              sizes="(min-width: 768px) 40vw, 80vw"
              width={1189}
              height={1323}
              alt="Ton Cavalcanti, Product Designer"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div>
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
        </div>
      </div>
    </section>
  );
}
