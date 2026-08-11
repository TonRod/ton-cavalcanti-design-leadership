import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
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

  return (
    <section id="cases" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Cases selecionados</p>
        <h2 className="display mt-4 max-w-2xl text-3xl sm:text-5xl">
          Três iniciativas, diferentes contextos de negócio.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Selecione um case para ver contexto, estratégia, alinhamento e resultados completos.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className={`${c.duotone} group relative flex min-h-72 flex-col justify-between rounded-lg border border-border/60 p-6 text-left transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-foreground/60">
                  CASE {c.index}
                </span>
                <ArrowUpRight className="size-4 text-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground/60">
                  {c.org} · {c.year}
                </p>
                <h3 className="display mt-2 text-2xl">{c.title}</h3>
                <div className="mt-5 border-t border-foreground/15 pt-4">
                  <p className="text-[0.7rem] uppercase tracking-widest text-foreground/60">
                    {c.highlight.label}
                  </p>
                  <p className="metric-num mt-1">{c.highlight.value}</p>
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
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto bg-popover">
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
