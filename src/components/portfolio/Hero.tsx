import { hero } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16 sm:pt-24">
      {/* A banda dá o fundo do texto; a figura sai dela por cima e por baixo. */}
      <div className="relative">
        <div className="relative rounded-lg bg-surface-2 px-7 py-10 sm:px-12 sm:py-14 lg:pr-[27rem]">
          <p className="kicker">{hero.kicker}</p>

          <h1 className="display mt-5 max-w-[15ch] text-4xl sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="rise mt-6 max-w-[38ch] font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
            {hero.support}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:90ms]">
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
        </div>

        {/* Só a partir de lg a figura ultrapassa a banda: abaixo disso o texto
            ocupa a largura toda e a sobreposição atrapalharia a leitura. */}
        <div
          aria-hidden="true"
          className="pointer-events-none mx-auto mt-[-2rem] w-[16rem] sm:w-[19rem] lg:absolute lg:bottom-[-1.5rem] lg:right-6 lg:mt-0 lg:w-[26rem]"
        >
          {/* Halo: no tema escuro o suéter marinho quase encosta no fundo. */}
          <div className="halo-retrato">
            <picture>
              <source srcSet={hero.portrait.webp} type="image/webp" />
              <img
                src={hero.portrait.png}
                alt={hero.portrait.alt}
                width={1012}
                height={1056}
                className="w-full select-none"
              />
            </picture>
          </div>
        </div>
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

      <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-border pt-5">
        <span className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
          Passagens
        </span>
        {hero.companies.map((c) => (
          <span key={c} className="display text-base text-muted-foreground">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
