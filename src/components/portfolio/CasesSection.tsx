import { useCallback, useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, ArrowLeft, ArrowRight } from "lucide-react";
import { cases, type CaseStudy } from "@/data/portfolio";


function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-4">
      <p className="kicker mb-2">{label}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function CasesSection() {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [focused, setFocused] = useState<boolean[]>(() => cases.map(() => true));
  const [progress, setProgress] = useState({ ratio: 0, span: 1 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const activeIndex = active ? cases.findIndex((c) => c.id === active.id) : -1;
  const prev = activeIndex > 0 ? cases[activeIndex - 1] : null;
  const next =
    activeIndex >= 0 && activeIndex < cases.length - 1 ? cases[activeIndex + 1] : null;

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [active?.id]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prev) setActive(prev);
      if (e.key === "ArrowRight" && next) setActive(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, prev, next]);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress({
      ratio: max > 0 ? el.scrollLeft / max : 0,
      span: max > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1,
    });
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(max <= 1 || el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;

    const disable = () => {
      observer?.disconnect();
      observer = null;
      setFocused(cases.map(() => true));
    };

    const enable = () => {
      if (observer) return;
      observer = new IntersectionObserver(
        (entries) => {
          setFocused((current) => {
            const nextState = [...current];
            for (const entry of entries) {
              const i = Number((entry.target as HTMLElement).dataset["idx"]);
              if (!Number.isNaN(i)) nextState[i] = entry.intersectionRatio >= 0.9;
            }
            return nextState;
          });
        },
        { root: el, threshold: [0, 0.9, 1] },
      );
      cardRefs.current.forEach((node) => node && observer?.observe(node));
    };

    const sync = () => {
      if (desktop.matches || reduced.matches) disable();
      else enable();
      updateScrollState();
    };

    sync();
    desktop.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      desktop.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      observer?.disconnect();
    };
  }, [updateScrollState]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = cardRefs.current[0];
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.82) + 20;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * amount, behavior: reduced ? "auto" : "smooth" });
  };

  const goToContact = () => {
    setActive(null);
    setTimeout(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById("contato")
        ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    }, 250);
  };



  return (
    <section id="cases" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Cases selecionados</p>
        <h2 className="display mt-4 max-w-2xl text-3xl sm:text-5xl">
          Cinco iniciativas em diferentes contextos de negócio.
        </h2>
        <p className="mt-4 max-w-xl font-serif text-sm leading-relaxed text-muted-foreground">
          Selecione um case para ver contexto, estratégia, alinhamento e resultados completos.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              aria-label={`Ver case ${c.title}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={c.cover}
                  alt={`Capa do case ${c.title} — ${c.org}`}
                  loading="lazy"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105 dark:invert dark:brightness-[0.88] dark:contrast-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.org} · {c.year}
                  </p>
                  <h3 className="display mt-2 text-2xl">{c.title}</h3>
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                    {c.highlight.label}
                  </p>
                  <p className="metric-num mt-1">{c.highlight.value}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    <Maximize2 className="size-3.5" aria-hidden="true" />
                    Ver case
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Trajetória completa, incluindo consultorias e atuação anterior, na seção Trajetória
          abaixo.
        </p>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent ref={scrollRef} className="max-h-[88vh] max-w-2xl overflow-y-auto bg-popover">
          {active && (
            <>
              <DialogHeader>
                <p className="kicker">
                  Case {active.index} · {active.org} · {active.year}
                </p>
                <DialogTitle className="display text-left text-3xl">{active.title}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{active.role}</p>

              <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {active.metricas.map((m) => (
                  <div key={m.label} className="rounded-md border border-border bg-surface p-3">
                    <p className="font-display text-lg leading-tight">{m.value}</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-5">
                <Block label="Contexto de negócio">{active.contexto}</Block>
                <Block label="Problema">{active.problema}</Block>
                <Block label="Escopo">{active.escopo}</Block>
                <Block label="Estratégia">{active.estrategia}</Block>
                <Block label="Alinhamento">{active.alinhamento}</Block>
                {active.solucao && <Block label="Solução">{active.solucao}</Block>}
                <Block label="Resultados">{active.resultados}</Block>
                {active.aprendizado && <Block label="Aprendizado">{active.aprendizado}</Block>}
              </div>

              <div className="mt-8 border-t border-border pt-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {prev ? (
                    <button
                      onClick={() => setActive(prev)}
                      aria-label={`Ver case anterior: ${prev.title}`}
                      className="flex items-start gap-3 rounded-md border border-border p-3 text-left transition-colors hover:bg-secondary"
                    >
                      <ArrowLeft className="mt-0.5 size-4 shrink-0" />
                      <span>
                        <span className="kicker block">Anterior</span>
                        <span className="mt-1 block text-sm">{prev.title}</span>
                      </span>
                    </button>
                  ) : (
                    <span className="hidden sm:block" />
                  )}
                  {next && (
                    <button
                      onClick={() => setActive(next)}
                      aria-label={`Ver próximo case: ${next.title}`}
                      className="flex items-start justify-end gap-3 rounded-md border border-border p-3 text-right transition-colors hover:bg-secondary"
                    >
                      <span>
                        <span className="kicker block">Próximo</span>
                        <span className="mt-1 block text-sm">{next.title}</span>
                      </span>
                      <ArrowRight className="mt-0.5 size-4 shrink-0" />
                    </button>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                  <p className="text-xs text-muted-foreground">
                    Quer entender como aplico isso no seu contexto?
                  </p>
                  <button
                    onClick={goToContact}
                    className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Vamos conversar
                  </button>
                </div>
              </div>
            </>
          )}

        </DialogContent>
      </Dialog>
    </section>
  );
}
