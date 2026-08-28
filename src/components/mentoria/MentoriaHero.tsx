import type { CSSProperties } from "react";
import { CalendarCheck, ClipboardCheck } from "lucide-react";
import { mentoria, mentoriaLinks } from "@/data/mentoria";

export function MentoriaHero() {
  return (
    <section id="top" data-revelar className="hero-ceu">
      {/* Céu: nuvens de dia, aurora austral à noite. Decorativo. */}
      <div className="ceu" aria-hidden="true">
        <div className="ceu-camada ceu-dia">
          <span className="nuvem nuvem-1" />
          <span className="nuvem nuvem-2" />
          <span className="nuvem nuvem-3" />
        </div>
        <div className="ceu-noite">
          <span className="ceu-estrelas" />
          <div className="ceu-camada">
            <span className="cortina cortina-1" />
            <span className="cortina cortina-2" />
            <span className="cortina cortina-3" />
          </div>
        </div>
        <span className="ceu-veu" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-36">
        <p className="kicker entra">{mentoria.brand}</p>

        {/* O gesto forte da página, usado uma vez só: as linhas sobem de
            dentro da máscara, com 110ms entre elas. */}
        <h1 className="titulo-grande mt-8 max-w-[18ch]">
          {mentoria.titleLines.map((linha, i) => (
            <span key={linha} className="linha-mascara">
              <span style={{ "--atraso": `${i * 110}ms` } as CSSProperties}>{linha}</span>
            </span>
          ))}
        </h1>

        <p
          className="entra medida-curta mt-12 font-serif text-base leading-relaxed text-muted-foreground"
          style={{ "--atraso": "420ms" } as CSSProperties}
        >
          {mentoria.intro}
        </p>

        <div
          className="entra mt-14 flex flex-wrap gap-3"
          style={{ "--atraso": "520ms" } as CSSProperties}
        >
          <a
            href={mentoriaLinks.agendarConversa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <CalendarCheck className="size-4" aria-hidden="true" /> Agendar conversa inicial
          </a>
          <a
            href={mentoriaLinks.diagnostico}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <ClipboardCheck className="size-4" aria-hidden="true" /> Fazer diagnóstico gratuito
          </a>
        </div>

        <p
          className="entra mt-16 max-w-xl border-l-2 border-border pl-4 font-serif text-sm italic leading-relaxed text-muted-foreground"
          style={{ "--atraso": "600ms" } as CSSProperties}
        >
          {mentoria.proof}
        </p>
      </div>
    </section>
  );
}
