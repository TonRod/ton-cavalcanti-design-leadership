import { mentoriaDepoimentos } from "@/data/mentoria";

export function MentoriaTestimonials() {
  return (
    <section
      id="depoimentos"
      tabIndex={-1}
      className="scroll-mt-20 bg-surface-2 py-20 outline-none sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Depoimentos</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">Quem já passou por aqui.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mentoriaDepoimentos.map((d) => (
            <figure
              key={d.author}
              className="flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <blockquote className="font-serif text-base leading-relaxed">
                “{d.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6 text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                {d.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
