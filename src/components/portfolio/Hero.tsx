import { Mail, Linkedin, Globe } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { contact } from "@/data/portfolio";

const metrics = [
  { label: "NPS · Natura &Co", value: "40 → 60" },
  { label: "Entrega de proposta · Bradesco", value: "24h → 15min" },
  { label: "Tempo de lançamento · Motrix", value: "−30%" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 className="display text-4xl sm:text-6xl">
            Lidero design para transformar estratégia em produtos relevantes e resultados de
            negócio.
          </h1>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ton Cavalcanti · 16 anos em produto, mais de 6 deles liderando times de até 25
            designers em Try, Bradesco, Motrix e Natura. Estruturo a função de design onde ela
            ainda não existe. São Paulo, Brasil.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="bg-surface p-5">
                <p className="metric-num">{m.value}</p>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#cases"
              className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver 3 cases
            </a>
            <a
              href="#contato"
              className="rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Vamos conversar
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="size-4" /> {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a href={contact.behance} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
              <Globe className="size-4" /> Behance
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={portrait}
            alt="Retrato profissional de Éliton (Ton) Cavalcanti"
            width={912}
            height={1104}
            className="w-full rounded-lg border border-border object-cover grayscale-[35%]"
          />
        </div>
      </div>
    </section>
  );
}
