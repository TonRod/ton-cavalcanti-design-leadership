import { hero } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16 sm:pt-24">
      {/* A banda dá o fundo do texto; a figura sai dela por cima e por baixo. */}
      <div className="relative">
        <div className="relative rounded-lg bg-surface-2 px-7 pb-10 pt-12 sm:px-12 sm:pb-14 sm:pt-16 md:min-h-[24rem] md:pb-12 md:pr-[27rem] md:pt-9 lg:min-h-[32.5rem] lg:pb-14 lg:pr-[36rem] lg:pt-10">
          <p className="kicker relative z-10">{hero.kicker}</p>

          <h1 className="display relative z-10 mt-5 max-w-[15ch] text-4xl sm:text-5xl md:mt-4 md:text-3xl lg:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="rise relative z-10 mt-6 max-w-[38ch] font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
            {hero.support}
          </p>

          <div className="rise relative z-10 mt-9 flex flex-wrap gap-3 [animation-delay:90ms]">
            <a
              href="#cases"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Ver cases
            </a>
            <a
              href="#contato"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Vamos conversar
            </a>
          </div>

          {/* Sem foto no celular, por ora: nenhuma das saídas testadas ficou
              boa em 390px. A partir de md ela aparece na lateral, inteira,
              com a base rente à banda e a cabeça ultrapassando o topo — que é
              o gesto que sustenta a composição. */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden md:absolute md:bottom-0 md:right-6 md:block md:h-[28rem] md:w-auto lg:right-8 lg:h-[35rem]"
          >
            <picture>
              <source srcSet={hero.portrait.webp} type="image/webp" />
              <img
                src={hero.portrait.png}
                alt={hero.portrait.alt}
                width={1012}
                height={1056}
                className="h-full w-auto select-none object-contain grayscale"
              />
            </picture>
          </div>
        </div>

        {/* Só a partir de lg a figura ultrapassa a banda: abaixo disso o texto
            ocupa a largura toda e a sobreposição atrapalharia a leitura. */}
      </div>

      <div className="mt-10 grid border-t border-border sm:grid-cols-3">
        {hero.metrics.map((m) => (
          <div
            key={m.label}
            className="border-b border-border py-5 sm:border-b-0 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
          >
            <p className="display text-2xl sm:text-3xl">{m.value}</p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-5">
        <span className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
          Passagens
        </span>
        {hero.companies.map((c) => {
          if (!c.logo) {
            return (
              <span key={c.nome} className="display text-base text-muted-foreground">
                {c.nome}
              </span>
            );
          }
          // O logo é máscara, não imagem: pinta com a cor do texto e acompanha o tema.
          const altura = c.altura ?? 24;
          const mascara = `url(${c.logo}) center / contain no-repeat`;
          return (
            <span
              key={c.nome}
              role="img"
              aria-label={c.nome}
              title={c.nome}
              className="block shrink-0 bg-muted-foreground transition-colors hover:bg-foreground"
              style={{
                width: `${Math.round(altura * (c.proporcao ?? 1))}px`,
                height: `${altura}px`,
                mask: mascara,
                WebkitMask: mascara,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
