import type { CSSProperties } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { mentoriaEmpresas, mentoriaLinks } from "@/data/mentoria";

/**
 * Bloco B2B. Fica depois dos planos de propósito: quem compra para si já
 * decidiu ali, e quem compra para um time chega aqui sem passar por preço
 * de sessão avulsa — que faria a mentoria de um time inteiro parecer pequena.
 */
export function MentoriaEmpresas() {
  return (
    <section
      id="empresas"
      tabIndex={-1}
      data-revelar
      className="scroll-mt-20 py-28 outline-none sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker entra">{mentoriaEmpresas.kicker}</p>
        <h2 className="titulo-grande entra mt-6" style={{ "--atraso": "60ms" } as CSSProperties}>
          {mentoriaEmpresas.title}
        </h2>
        <p
          className="entra medida-curta mt-8 font-serif text-base leading-relaxed text-muted-foreground"
          style={{ "--atraso": "120ms" } as CSSProperties}
        >
          {mentoriaEmpresas.intro}
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {mentoriaEmpresas.formatos.map((formato, i) => (
            <div
              key={formato.title}
              style={{ "--atraso": `${200 + i * 80}ms` } as CSSProperties}
              className="entra flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="display text-2xl">{formato.title}</h3>
              <p className="mt-4 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                {formato.duracao}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {formato.description}
              </p>
              <p className="mt-auto border-t border-border pt-5 text-sm leading-relaxed">
                {formato.entrega}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="entra" style={{ "--atraso": "440ms" } as CSSProperties}>
            <h3 className="display text-2xl">{mentoriaEmpresas.fatoresTitle}</h3>
            <ul className="mt-6 space-y-3">
              {mentoriaEmpresas.fatores.map((fator) => (
                <li key={fator} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{fator}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {mentoriaEmpresas.comoComeca}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{mentoriaEmpresas.nota}</p>
          </div>

          <div className="entra" style={{ "--atraso": "520ms" } as CSSProperties}>
            <p className="font-serif text-base leading-relaxed text-muted-foreground">
              {mentoriaEmpresas.prova}
            </p>
            <a
              href={mentoriaEmpresas.provaLink.href}
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {mentoriaEmpresas.provaLink.label}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={mentoriaLinks.agendarConversa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${mentoriaEmpresas.ctaPrimario} (abre em nova aba)`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {mentoriaEmpresas.ctaPrimario}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${mentoriaLinks.email}?subject=${encodeURIComponent("Mentoria para o time de design")}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-secondary"
              >
                <Mail className="size-4" aria-hidden="true" />
                {mentoriaEmpresas.ctaSecundario}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
