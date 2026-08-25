import { timeline } from "@/data/portfolio";

export function TimelineSection() {
  return (
    <section id="trajetoria" className="bg-surface-2 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Trajetória</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">16 anos, em ordem.</h2>

        <ol className="lista-trajetoria relative mt-12">
          {timeline.map((item, i) => {
            const isLast = i === timeline.length - 1;
            return (
              <li key={`${item.period}-${i}`} className="item-trajetoria relative pb-10 pl-8">
                {/* Segmento de trilho: do centro do ponto deste item ao centro do próximo */}
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[11px] h-full w-px bg-border"
                    />
                    <span
                      aria-hidden="true"
                      className="linha-trajetoria absolute left-0 top-[11px] h-full w-px bg-accent"
                    />
                  </>
                )}

                <span className="ponto-trajetoria absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent" />

                <p className="font-serif text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.period}
                </p>
                <h3 className="mt-2 text-base font-medium sm:text-lg">
                  {item.role}
                  <span className="text-muted-foreground"> · {item.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
