import { Mail, Linkedin, Globe } from "lucide-react";
import portrait from "@/assets/portrait.jpg.asset.json";
import { contact } from "@/data/portfolio";

const metrics = [
  { label: "CSAT · Natura &Co", value: "40% → 80%" },
  { label: "Tempo de resposta ao cliente · Bradesco", value: "24h → 15min" },
  { label: "Tempo de produção · Motrix", value: "−30%" },
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
          <p className="rise mt-8 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ton Cavalcanti · 16 anos em produto, mais de 6 deles liderando times de design.
            Passagens por Try, Bradesco, Globo, Motrix, Natura e hoje Porto Seguro. Estruturo a
            função de design onde ela ainda não existe. São Paulo, Brasil.
          </p>
        </div>

        <div className="rise relative [animation-delay:70ms]">

          <img
            src={portrait.url}
            alt="Retrato profissional de Éliton (Ton) Cavalcanti"
            width={768}
            height={1365}
            className="mx-auto aspect-[768/1365] w-[70%] rounded-lg border border-border object-cover object-center"
          />
        </div>
      </div>

      <div className="rise mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border [animation-delay:140ms] sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col bg-surface p-5">
            <p className="metric-num text-accent">{m.value}</p>
            <p className="mt-auto pt-3 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:210ms]">
        <a
          href="#cases"
          className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Ver cases
        </a>
        <a
          href="#contato"
          className="rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Vamos conversar
        </a>
      </div>

      <div className="rise mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground [animation-delay:280ms]">
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
    </section>
  );
}
