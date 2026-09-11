import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { mentoriaLinks, mentoriaRecursos } from "@/data/mentoria";
import { RecursoArte } from "@/components/mentoria/RecursoArte";

/**
 * Recursos em carrossel horizontal.
 *
 * Com o diagnóstico mais todos os artigos do Medium, a grade de três colunas
 * virava uma parede de cards. Na pista horizontal o diagnóstico continua
 * primeiro, à vista, e os artigos se estendem para o lado — o card que fica
 * cortado na borda direita é o que avisa que há mais.
 *
 * A roda do mouse não é remapeada aqui, ao contrário do leitor de cases:
 * esta pista vive no meio de uma página que rola na vertical, e sequestrar a
 * roda prenderia quem só quer passar pela seção. Quem usa mouse avança pelas
 * setas; trackpad e toque deslizam de lado naturalmente.
 */
export function MentoriaRecursos() {
  const pistaRef = useRef<HTMLDivElement>(null);
  const [progresso, setProgresso] = useState({ razao: 0, janela: 1 });
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);

  const medir = useCallback(() => {
    const el = pistaRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgresso({
      razao: max > 0 ? el.scrollLeft / max : 0,
      janela: max > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1,
    });
    setNoInicio(el.scrollLeft <= 1);
    setNoFim(max <= 1 || el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = pistaRef.current;
    if (!el) return;
    medir();
    el.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      el.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, [medir]);

  const deslizar = (direcao: 1 | -1) => {
    const el = pistaRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const passo = (card?.offsetWidth ?? el.clientWidth * 0.8) + 20;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direcao * passo, behavior: reduzido ? "auto" : "smooth" });
  };

  return (
    <section
      id="recursos"
      tabIndex={-1}
      data-revelar
      className="scroll-mt-20 py-28 outline-none sm:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker entra">Recursos</p>
        <h2 className="titulo-grande entra mt-6" style={{ "--atraso": "60ms" } as CSSProperties}>
          Comece se conhecendo.
        </h2>
        <p
          className="entra medida-curta mt-8 font-serif text-base leading-relaxed text-muted-foreground"
          style={{ "--atraso": "120ms" } as CSSProperties}
        >
          Um diagnóstico gratuito para você mapear onde está, e tudo o que já escrevi sobre produto,
          carreira e processo de design.
        </p>

        <div
          ref={pistaRef}
          role="region"
          aria-label="Recursos, lista deslizável"
          tabIndex={0}
          className="no-scrollbar -mx-6 mt-16 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-2 pt-1 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {mentoriaRecursos.map((r, i) => (
            <a
              key={r.url}
              data-card
              style={{ "--atraso": `${200 + Math.min(i, 4) * 70}ms` } as CSSProperties}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="recurso-card entra group relative isolate flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:bg-secondary sm:w-[46%] lg:w-[30.5%]"
            >
              <RecursoArte tipo={r.tipo} semente={i + 1} />

              <div className="relative z-10 flex items-baseline justify-between gap-3">
                <span className="kicker">{r.tipo}</span>
                <span className="text-xs text-muted-foreground">{r.meta}</span>
              </div>

              <h3 className="relative z-10 display mt-4 text-2xl">{r.title}</h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>

              <span className="relative z-10 mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-accent">
                {r.cta}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}

          {/* Fecho da pista: o perfil inteiro, para o que ainda não entrou na lista. */}
          <a
            data-card
            href={mentoriaLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="entra group flex w-[82%] shrink-0 snap-start flex-col justify-between rounded-lg border border-dashed border-border p-6 transition-colors hover:bg-secondary sm:w-[46%] lg:w-[30.5%]"
            style={{ "--atraso": "480ms" } as CSSProperties}
          >
            <span className="kicker">Medium</span>
            <span className="display mt-10 text-2xl">Todos os artigos no Medium</span>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-accent">
              Abrir o perfil
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <div className="h-px flex-1 bg-border" aria-hidden="true">
            <div
              className="h-px bg-foreground transition-[margin] duration-200"
              style={{
                width: `${progresso.janela * 100}%`,
                marginLeft: `${progresso.razao * (1 - progresso.janela) * 100}%`,
              }}
            />
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => deslizar(-1)}
              disabled={noInicio}
              aria-label="Ver recursos anteriores"
              className="rounded-full border border-border p-2 transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => deslizar(1)}
              disabled={noFim}
              aria-label="Ver próximos recursos"
              className="rounded-full border border-border p-2 transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
