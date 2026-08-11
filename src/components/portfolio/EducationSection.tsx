import { useState } from "react";
import { GraduationCap, BadgeCheck, ChevronDown } from "lucide-react";
import { certifications, education, skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function EducationSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? certifications : certifications.slice(0, 4);

  return (
    <section id="formacao" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Formação</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">Formação e certificações.</h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Da base em design gráfico à estratégia de produto em instituições como ESPM, AUT e MIT.
        </p>

        {/* Formação acadêmica */}
        <h3 className="mt-14 font-serif text-base text-foreground sm:text-lg">
          Formação acadêmica
        </h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <div
              key={`${e.degree}-${e.institution}`}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <GraduationCap className="size-5 text-accent" aria-hidden />
              <p className="display mt-4 text-xl leading-snug sm:text-2xl">{e.degree}</p>
              <p className="mt-2 text-sm text-foreground">{e.institution}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
              <p className="mt-4 font-serif text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                {e.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certificações */}
        <h3 className="mt-16 font-serif text-base text-foreground sm:text-lg">
          Certificações e cursos livres
        </h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {visible.map((c) => (
            <li
              key={c.title}
              className="flex gap-3 rounded-md border border-border p-4"
            >
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <div>
                <p className="text-sm font-medium leading-snug">{c.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.institution} · {c.location}
                </p>
                <p className="mt-1 font-serif text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {certifications.length > 4 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
          >
            {expanded ? "Mostrar menos" : `Mostrar mais (${certifications.length - 4})`}
            <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} />
          </button>
        )}

        {/* Competências */}
        <h3 className="mt-16 font-serif text-base text-foreground sm:text-lg">
          Competências e idiomas
        </h3>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p className="kicker">{g.label}</p>
              {g.display === "list" ? (
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
