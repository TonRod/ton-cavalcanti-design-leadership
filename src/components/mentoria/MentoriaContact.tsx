import { CalendarCheck, ClipboardCheck, Instagram, Mail, MessageCircle } from "lucide-react";
import { mentoriaLinks } from "@/data/mentoria";

export function MentoriaContact() {
  return (
    <section
      id="contato"
      tabIndex={-1}
      className="flex min-h-[calc(100svh-5rem)] scroll-mt-20 items-center bg-surface-2 py-20 outline-none sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Contato</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">Vamos conversar sobre seu momento?</h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Agende uma conversa inicial para entendermos onde você está e definirmos como posso
          ajudar. Sem custo, sem compromisso.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={mentoriaLinks.agendarConversa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <CalendarCheck className="size-4" aria-hidden="true" /> Agendar conversa
          </a>
          <a
            href={mentoriaLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <a
            href={`mailto:${mentoriaLinks.email}`}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="size-4" aria-hidden="true" /> {mentoriaLinks.email}
          </a>
          <a
            href={mentoriaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Instagram className="size-4" aria-hidden="true" /> {mentoriaLinks.instagramLabel}
          </a>
          <a
            href={mentoriaLinks.diagnostico}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <ClipboardCheck className="size-4" aria-hidden="true" /> Diagnóstico de competências
          </a>
        </div>
      </div>
    </section>
  );
}
