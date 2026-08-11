import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
import { cases, type CaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

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
          Quatro iniciativas, diferentes contextos de negócio.
        </h2>
        <p className="mt-4 max-w-xl font-serif text-sm leading-relaxed text-muted-foreground">
          Selecione um case para ver contexto, estratégia, alinhamento e resultados completos.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c)}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={cn(
                  "relative aspect-[4/3] w-full overflow-hidden",
                  c.id === "livelo-design-servicos" && "bg-surface p-8 sm:p-12"
                )}
              >
                <img
                  src={c.cover}
                  alt={`Capa do case ${c.title} — ${c.org}`}
                  loading="lazy"
                  className={cn(
                    "size-full object-center transition-transform duration-500 group-hover:scale-105",
                    c.id === "livelo-design-servicos" ? "object-contain" : "object-cover"
                  )}
                />
                <ArrowUpRight className="absolute right-4 top-4 size-4 text-foreground/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
