import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Globe, MapPin, Copy, Check, Briefcase } from "lucide-react";
import { contact } from "@/data/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard indisponível");
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setMessage("E-mail copiado para a área de transferência.");
    } catch {
      setCopied(false);
      setMessage("Não foi possível copiar. Selecione o e-mail manualmente.");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setCopied(false);
      setMessage("");
    }, 2000);
  };

  return (
    <section id="contato" className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Contato</p>
        <h2 className="display mt-4 max-w-2xl text-3xl sm:text-5xl">
          Vamos construir produtos e times melhores?
        </h2>
        <p className="mt-4 max-w-xl font-serif text-sm leading-relaxed text-muted-foreground">
          Aberto a conversas sobre liderança de design, transformação de produto e consultoria
          estratégica.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            Aberto a propostas
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" /> São Paulo, Brasil
          </span>
          <span className="flex items-center gap-2">
            <Briefcase className="size-4" /> CLT ou PJ · Remoto, híbrido ou presencial
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
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

        <div className="mt-4">
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copiar endereço de e-mail"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copiado!" : "Copiar e-mail"}
          </button>
        </div>

        <p aria-live="polite" className="mt-2 min-h-5 text-xs text-muted-foreground">
          {message}
        </p>

      </div>
    </section>
  );
}
