import { leadershipProofs } from "@/data/portfolio";

export function LeadershipSection() {
  return (
    <section id="lideranca" className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Liderança</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">Liderança de design, na prática.</h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Respondo pela direção de design: coordeno as frentes, estruturo o processo e desenvolvo
          quem trabalha comigo. Três recortes de como isso aparece.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {leadershipProofs.map((p) => (
            <div key={p.label} className="rounded-lg border border-border bg-surface p-6">
              <p className="kicker">{p.label}</p>
              <p className="display mt-4 text-2xl sm:text-3xl">{p.value}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.context}</p>
              {p.link && (
                <a
                  href={p.link.href}
                  className="mt-4 inline-block text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {p.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
