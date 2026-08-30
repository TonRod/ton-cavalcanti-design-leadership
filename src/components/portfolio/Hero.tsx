import { hero } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16 sm:pt-24">
      {/* A banda dá o fundo do texto; a figura sai dela por cima e por baixo. */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-lg bg-surface-2 px-7 pb-10 pt-12 sm:px-12 sm:pb-14 sm:pt-16 lg:min-h-[32.5rem] lg:overflow-visible lg:pb-14 lg:pr-[36rem] lg:pt-10">
          <p className="kicker relative z-10">{hero.kicker}</p>

          <h1 className="display relative z-10 mt-5 max-w-[15ch] text-4xl sm:text-5xl lg:mt-4 lg:text-[3.4rem]">
            {hero.title}
          </h1>

          <p className="rise relative z-10 mt-6 max-w-[38ch] font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
            {hero.support}
          </p>

          {/* No celular e no tablet a foto entra por trás do título, no canto
              superior direito, e se dissolve antes do parágrafo — atrás dele
              nem 10% de opacidade passaria no contraste. A partir de lg ela
              aparece inteira, opaca, ao lado do texto. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 w-[70%] opacity-[0.28] [mask-image:linear-gradient(215deg,#000_18%,transparent_68%)] lg:bottom-0 lg:right-8 lg:top-auto lg:h-[35rem] lg:w-auto lg:opacity-100 lg:[mask-image:none]"
          >
            <picture>
              <source srcSet={hero.portrait.webp} type="image/webp" />
              <img
                src={hero.portrait.png}
                alt={hero.portrait.alt}
                width={1012}
                height={1056}
                className="aspect-[5/4] w-full select-none object-cover object-top grayscale lg:aspect-auto lg:h-full lg:w-auto lg:object-contain"
              />
            </picture>
          </div>

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
