import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { CaseEvidence, CaseStudy } from "@/data/portfolio";

/**
 * Leitura do case em percurso horizontal.
 *
 * O modal anterior rolava na vertical, então o botão de fechar subia junto
 * com o texto e sumia. Aqui a moldura fica parada — fechar, título e
 * progresso sempre à vista — e só o conteúdo desliza de lado.
 *
 * Cada capítulo ocupa um painel de 46ch, a mesma medida curta usada na
 * página de mentoria: o respiro faz a pausa que a régua de um bloco único
 * não fazia.
 */

type Painel =
  | { tipo: "abertura" }
  | { tipo: "texto"; rotulo: string; texto: string; imagens: CaseEvidence[] }
  | { tipo: "metricas" }
  | { tipo: "fim" };

const CAPITULOS: { chave: keyof CaseStudy; rotulo: string }[] = [
  { chave: "contexto", rotulo: "Contexto de negócio" },
  { chave: "problema", rotulo: "Problema" },
  { chave: "escopo", rotulo: "Escopo" },
  { chave: "estrategia", rotulo: "Estratégia" },
  { chave: "alinhamento", rotulo: "Alinhamento" },
  { chave: "solucao", rotulo: "Solução" },
  { chave: "resultados", rotulo: "Resultados" },
  { chave: "aprendizado", rotulo: "Aprendizado" },
];

function montarPaineis(c: CaseStudy): Painel[] {
  const lista: Painel[] = [{ tipo: "abertura" }];
  const usadas = new Set<CaseEvidence>();
  for (const { chave, rotulo } of CAPITULOS) {
    const texto = c[chave];
    if (typeof texto !== "string" || !texto) continue;
    const imagens = c.evidencias?.filter((e) => e.apos === chave) ?? [];
    imagens.forEach((e) => usadas.add(e));
    lista.push({ tipo: "texto", rotulo, texto, imagens });
    if (chave === "resultados" && c.metricas.length) lista.push({ tipo: "metricas" });
  }
  // Nenhuma evidência pode sumir: se `apos` apontar para um capítulo que o
  // case não tem, a imagem entra no último painel de texto montado.
  const orfas = c.evidencias?.filter((e) => !usadas.has(e)) ?? [];
  if (orfas.length) {
    const ultimoTexto = [...lista].reverse().find((p) => p.tipo === "texto");
    if (ultimoTexto && ultimoTexto.tipo === "texto") ultimoTexto.imagens.push(...orfas);
  }
  lista.push({ tipo: "fim" });
  return lista;
}

export function CaseReader({
  caso,
  proximo,
  entradaSimples = false,
  onFechar,
  onIrPara,
  onContato,
}: {
  caso: CaseStudy;
  proximo: CaseStudy | null;
  /** Sem View Transition disponível: entra só com um fade curto. */
  entradaSimples?: boolean;
  onFechar: () => void;
  onIrPara: (c: CaseStudy) => void;
  onContato: () => void;
}) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);
  const [atual, setAtual] = useState(0);
  const paineis = useMemo(() => montarPaineis(caso), [caso]);
  const total = paineis.length;

  const semMovimento = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const irPara = useCallback(
    (i: number) => {
      const pista = pistaRef.current;
      if (!pista) return;
      const alvo = pista.children[Math.max(0, Math.min(total - 1, i))] as HTMLElement | undefined;
      if (!alvo) return;
      pista.scrollTo({
        left: alvo.offsetLeft - (pista.clientWidth - alvo.clientWidth) / 2,
        behavior: semMovimento() ? "auto" : "smooth",
      });
    },
    [total],
  );

  // Volta ao início ao trocar de case, sem animar o trajeto inteiro.
  useEffect(() => {
    setAtual(0);
    if (pistaRef.current) pistaRef.current.scrollLeft = 0;
    fecharRef.current?.focus();
  }, [caso.id]);

  // Trava a rolagem da página atrás do leitor.
  useEffect(() => {
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = anterior;
    };
  }, []);

  // O painel mais próximo do centro é o painel atual.
  useEffect(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    let quadro = 0;
    const medir = () => {
      quadro = 0;
      const centro = pista.scrollLeft + pista.clientWidth / 2;
      let melhor = 0;
      let dist = Infinity;
      Array.from(pista.children).forEach((filho, i) => {
        const el = filho as HTMLElement;
        const c = el.offsetLeft + el.clientWidth / 2;
        if (Math.abs(c - centro) < dist) {
          dist = Math.abs(c - centro);
          melhor = i;
        }
      });
      setAtual((antes) => (antes === melhor ? antes : melhor));
    };
    const aoRolar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };
    pista.addEventListener("scroll", aoRolar, { passive: true });
    return () => {
      pista.removeEventListener("scroll", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [caso.id]);

  // Roda vertical do mouse vira avanço horizontal — sem isso, quem não tem
  // giro lateral fica preso no primeiro painel. O painel que transborda rola
  // por dentro primeiro.
  useEffect(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    const aoGirar = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const painel = (e.target as HTMLElement).closest<HTMLElement>("[data-painel]");
      if (painel && painel.scrollHeight > painel.clientHeight + 2) {
        const noTopo = painel.scrollTop === 0 && e.deltaY < 0;
        const noFim =
          Math.ceil(painel.scrollTop + painel.clientHeight) >= painel.scrollHeight && e.deltaY > 0;
        if (!noTopo && !noFim) return;
      }
      e.preventDefault();
      pista.scrollLeft += e.deltaY;
    };
    pista.addEventListener("wheel", aoGirar, { passive: false });
    return () => pista.removeEventListener("wheel", aoGirar);
  }, []);

  // Teclado: fechar, andar, ir ao início e ao fim. Tab fica preso no leitor.
  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onFechar();
      if (e.key === "ArrowRight") {
        e.preventDefault();
        return irPara(atual + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        return irPara(atual - 1);
      }
      if (e.key === "Home") return irPara(0);
      if (e.key === "End") return irPara(total - 1);
      if (e.key !== "Tab") return;

      const foco = document.getElementById("leitor-case");
      if (!foco) return;
      const alvos = foco.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!alvos.length) return;
      const primeiro = alvos[0];
      const ultimo = alvos[alvos.length - 1];
      if (!primeiro || !ultimo) return;
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [atual, total, irPara, onFechar]);

  return (
    <div
      id="leitor-case"
      role="dialog"
      aria-modal="true"
      aria-label={`Case ${caso.index}: ${caso.title}`}
      className={`fixed inset-0 z-50 flex flex-col bg-background ${entradaSimples ? "leitor-fade" : ""}`}
      // Mesmo nome do card clicado: o navegador anima um virando o outro.
      style={{ viewTransitionName: "case-moldura" } as CSSProperties}
    >
      {/* Moldura fixa: some do caminho da leitura, nunca da tela. */}
      <div className="shrink-0 border-b border-border px-6 pt-4">
        <div className="flex items-center justify-between gap-5">
          <div className="flex min-w-0 items-baseline gap-3">
            <span className="display text-sm text-muted-foreground">{caso.index}</span>
            <h2 className="display truncate text-base sm:text-lg">{caso.title}</h2>
            <span className="hidden whitespace-nowrap text-xs text-muted-foreground sm:inline">
              {caso.org} · {caso.year}
            </span>
          </div>
          <button
            ref={fecharRef}
            type="button"
            onClick={onFechar}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
          >
            <X className="size-4" aria-hidden="true" /> Fechar
          </button>
        </div>

        <div className="flex gap-1 py-3">
          {paineis.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => irPara(i)}
              aria-label={`Ir ao capítulo ${i + 1} de ${total}`}
              aria-current={i === atual}
              className={`h-[3px] flex-1 rounded-full transition-colors ${
                i === atual ? "bg-foreground" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        ref={pistaRef}
        className="no-scrollbar flex flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        {paineis.map((p, i) => (
          <section
            key={i}
            data-painel
            className={`flex w-[min(48ch,90vw)] shrink-0 snap-center flex-col justify-start overflow-y-auto px-8 py-[6vh] sm:px-10 ${
              i > 0 ? "border-l border-border" : ""
            }`}
          >
            {p.tipo === "abertura" && (
              <>
                <p className="display text-5xl leading-none text-muted-foreground">{caso.index}</p>
                <h3 className="display mt-5 text-3xl sm:text-4xl">{caso.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {caso.org} · {caso.year}
                </p>
                <p className="mt-7 font-serif text-sm leading-relaxed text-muted-foreground">
                  {caso.role}
                </p>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="metric-num">{caso.highlight.value}</p>
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {caso.highlight.label}
                  </p>
                </div>
              </>
            )}

            {p.tipo === "texto" && (
              <>
                <p className="kicker mb-5">{p.rotulo}</p>
                <p className="font-serif text-base leading-relaxed sm:text-lg">{p.texto}</p>
                {p.imagens.length > 0 && (
                  <div className="mt-7 grid gap-6">
                    {p.imagens.map((ev, idx) => (
                      <figure key={idx}>
                        <div className={ev.par ? "grid grid-cols-2 items-start gap-3" : undefined}>
                          <img
                            src={ev.src}
                            alt={ev.alt ?? ev.caption}
                            loading="lazy"
                            className="w-full rounded-md border border-border"
                          />
                          {ev.par && (
                            <img
                              src={ev.par.src}
                              alt={ev.par.alt}
                              loading="lazy"
                              className="w-full rounded-md border border-border"
                            />
                          )}
                        </div>
                        <figcaption className="mt-2 text-xs text-muted-foreground">
                          {ev.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </>
            )}

            {p.tipo === "metricas" && (
              <>
                <p className="kicker mb-5">Em números</p>
                <div className="grid gap-4">
                  {caso.metricas.map((m) => (
                    <div key={m.label} className="border-t border-border pt-3">
                      <p className="display text-2xl">{m.value}</p>
                      <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {p.tipo === "fim" && (
              <>
                {proximo ? (
                  <>
                    <p className="kicker mb-5">Próximo case</p>
                    <h3 className="display text-2xl">{proximo.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {proximo.org} · {proximo.year}
                    </p>
                    <button
                      type="button"
                      onClick={() => onIrPara(proximo)}
                      className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-secondary"
                    >
                      Abrir {proximo.index} <ArrowRight className="size-4" aria-hidden="true" />
                    </button>
                  </>
                ) : (
                  <p className="kicker mb-5">Fim dos cases</p>
                )}

                <div className="mt-10 border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground">
                    Quer entender como aplico isso no seu contexto?
                  </p>
                  <button
                    type="button"
                    onClick={onContato}
                    className="mt-4 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Vamos conversar
                  </button>
                </div>
              </>
            )}
          </section>
        ))}
      </div>

      <div className="flex shrink-0 items-center justify-between gap-4 border-t border-border px-6 py-3">
        <span className="text-xs tabular-nums text-muted-foreground">
          {String(atual + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="hidden text-xs text-muted-foreground sm:block">
          Use as setas do teclado ou role o mouse
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => irPara(atual - 1)}
            disabled={atual === 0}
            aria-label="Capítulo anterior"
            className="rounded-full border border-border p-2 transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => irPara(atual + 1)}
            disabled={atual === total - 1}
            aria-label="Próximo capítulo"
            className="rounded-full border border-border p-2 transition-colors hover:bg-secondary disabled:opacity-40"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
