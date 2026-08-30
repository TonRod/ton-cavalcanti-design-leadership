import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, ArrowLeft, ArrowRight } from "lucide-react";
import { CaseReader } from "@/components/portfolio/CaseReader";
import { cases, type CaseStudy } from "@/data/portfolio";

export function CasesSection() {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [focused, setFocused] = useState<boolean[]>(() => cases.map(() => true));
  const [progress, setProgress] = useState({ ratio: 0, span: 1 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const activeIndex = active ? cases.findIndex((c) => c.id === active.id) : -1;
  const next = activeIndex >= 0 && activeIndex < cases.length - 1 ? cases[activeIndex + 1] : null;

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
      document.getElementById("contato")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
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

        <div
          ref={trackRef}
          role="region"
          aria-label="Cases selecionados, lista deslizável"
          tabIndex={0}
          className="no-scrollbar cases-scroller mt-10 -mb-2 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto py-2 lg:grid lg:grid-cols-3 lg:snap-none lg:overflow-visible"
        >
          {cases.map((c, i) => (
            <div
              key={c.id}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              data-idx={i}
              className={`flex w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-auto lg:shrink lg:opacity-100 lg:[transform:none] ${
                focused[i] ? "opacity-100" : "scale-[.97] opacity-55"
              }`}
              style={{
                transition:
                  "opacity 400ms cubic-bezier(.22,1,.36,1), transform 400ms cubic-bezier(.22,1,.36,1)",
              }}
            >
              <button
                onClick={() => setActive(c)}
                aria-label={`Ver case ${c.title}`}
                className="group relative flex w-full flex-col overflow-hidden rounded-lg border border-border bg-surface text-left transition-transform duration-300 hover:-translate-y-1"
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
            </div>
          ))}
        </div>

        <div className="mt-6 lg:hidden">
          <div className="h-px w-full bg-border" aria-hidden="true">
            <div
              className="h-px bg-foreground transition-[margin] duration-200"
              style={{
                width: `${progress.span * 100}%`,
                marginLeft: `${progress.ratio * (1 - progress.span) * 100}%`,
              }}
            />
          </div>
          <div className="mt-4 hidden justify-end gap-3 sm:flex lg:hidden">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Ver cases anteriores"
              className="rounded-full border border-border p-2 transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Ver próximos cases"
              className="rounded-full border border-border p-2 transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Trajetória completa, incluindo consultorias e atuação anterior, na seção Trajetória
          abaixo.
        </p>
      </div>

      {active && (
        <CaseReader
          caso={active}
          proximo={next}
          onFechar={() => setActive(null)}
          onIrPara={setActive}
          onContato={goToContact}
        />
      )}
    </section>
  );
}
