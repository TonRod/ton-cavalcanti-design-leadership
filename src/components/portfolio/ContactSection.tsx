import { Mail, Linkedin, Globe } from "lucide-react";
import { contact } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contato" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Contato</p>
        <h2 className="display mt-4 max-w-2xl text-3xl sm:text-5xl">
          Vamos construir produtos e times melhores?
        </h2>
        <p className="mt-4 max-w-xl font-serif text-sm leading-relaxed text-muted-foreground">
          Aberto a conversas sobre liderança de design, transformação de produto e consultoria
          estratégica.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" /> {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm transition-colors hover:bg-secondary"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href={contact.behance}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm transition-colors hover:bg-secondary"
          >
            <Globe className="size-4" /> Behance
          </a>
        </div>
      </div>
    </section>
  );
}
