import { mentoriaSobre } from "@/data/mentoria";

export function MentoriaAbout() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Sobre mim</p>
        <h2 className="display mt-4 max-w-3xl text-3xl sm:text-5xl">{mentoriaSobre.title}</h2>

        <div className="mt-8 max-w-2xl space-y-5">
          {mentoriaSobre.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
