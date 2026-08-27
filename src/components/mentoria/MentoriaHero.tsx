import { CalendarCheck, ClipboardCheck } from "lucide-react";
import { mentoria, mentoriaLinks } from "@/data/mentoria";

export function MentoriaHero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <p className="kicker">{mentoria.brand}</p>
      <h1 className="display mt-4 max-w-4xl text-4xl sm:text-6xl">{mentoria.title}</h1>
      <p className="rise mt-8 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
        {mentoria.intro}
      </p>

      <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:90ms]">
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

      <p className="rise mt-8 max-w-xl border-l-2 border-border pl-4 font-serif text-sm italic leading-relaxed text-muted-foreground [animation-delay:180ms]">
        {mentoria.proof}
      </p>
    </section>
  );
}
