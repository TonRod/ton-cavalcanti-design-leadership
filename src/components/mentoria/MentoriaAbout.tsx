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
        {/* Título à esquerda, acima da foto; o texto fica na coluna da direita,
            começando na mesma linha do título. A grade tem uma linha para o
            rótulo, uma para título e texto e outra para a foto. No celular tudo
            empilha na ordem do código: título, foto, texto. */}
        <div className="grid md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:gap-x-10 lg:gap-x-16">
          <p className="kicker entra md:col-start-1 md:row-start-1">Sobre mim</p>

          <h2
            className="titulo-grande entra mt-6 max-w-[16ch] md:col-start-1 md:row-start-2"
            style={{ "--atraso": "60ms" } as CSSProperties}
          >
            {mentoriaSobre.title}
          </h2>

          {/* O recorte tem margem transparente dos lados, então a caixa vaza um
              pouco para a esquerda (ver .sobre-foto) para o corpo ocupar a coluna. */}
          <figure
            className="sobre-foto entra mt-12 md:col-start-1 md:row-start-3 md:mt-14"
            style={{ "--atraso": "0ms" } as CSSProperties}
          >
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

          {/* Medida curta: 42ch lê mais rápido que os ~65ch de antes, e o
              texto deixa de parecer coluna de jornal. */}
          <div className="medida-curta mt-12 space-y-7 md:col-start-2 md:row-span-2 md:row-start-2 md:mt-6 md:self-start">
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
    </section>
  );
}
