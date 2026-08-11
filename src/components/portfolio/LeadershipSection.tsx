const proofs = [
  {
    kicker: "Time",
    value: "25 designers",
    text: "Liderados em 2019–2020, no Bradesco.",
  },
  {
    kicker: "Processo",
    value: "−30% no tempo de lançamento",
    text: "Design reviews semanais, ritual de handoff com engenharia, onboarding de designers e operação de pesquisa — estruturados na Motrix.",
  },
  {
    kicker: "Pessoas",
    value: "6 contratações",
    text: "4 no Bradesco, 2 na Motrix.",
  },
];

export function LeadershipSection() {
  return (
    <section id="lideranca" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="kicker">Liderança</p>
        <h2 className="display mt-4 text-3xl sm:text-5xl">Liderança, em números.</h2>
        <p className="mt-4 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground">
          Três recortes da liderança que exerci — pessoas, processo e time — com o número que
          sustenta cada um.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {proofs.map((p) => (
            <div key={p.kicker} className="rounded-lg border border-border bg-surface p-6">
              <p className="kicker">{p.kicker}</p>
              <p className="display mt-4 text-2xl sm:text-3xl">{p.value}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
