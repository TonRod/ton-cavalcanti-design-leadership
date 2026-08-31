import type { CSSProperties } from "react";
import type { MentoriaRecursoTipo } from "@/data/mentoria";

/**
 * Desenho de fundo dos cards de Recursos, gerado em SVG.
 *
 * O tipo do recurso escolhe a família, então o desenho informa em vez de
 * decorar: carta celeste para o que mapeia onde você está (diagnóstico e
 * teste), curva de nível para o que faz subir um degrau (artigo).
 *
 * A geometria vem de uma semente, e não de aleatoriedade real — cada card
 * fica diferente do vizinho, mas sempre igual a si mesmo entre recargas.
 */

/** Gerador determinístico simples: mesma semente, mesma sequência. */
function semear(semente: number) {
  let estado = semente * 9301 + 49297;
  return () => {
    estado = (estado * 9301 + 49297) % 233280;
    return estado / 233280;
  };
}

function CartaCeleste({ semente }: { semente: number }) {
  const rnd = semear(semente + 7);
  const estrelas = Array.from({ length: 7 }, (_, i) => ({
    x: 26 + rnd() * 148,
    y: 20 + rnd() * 104,
    r: 1.4 + rnd() * 2,
  }));
  // Liga cada estrela à anterior, com um desvio ocasional — desenho de
  // constelação, não polígono fechado.
  const ligacoes = estrelas.slice(1).map((_, i) => [i, i + 1] as const);
  if (estrelas.length > 4) ligacoes.push([1, 4] as const);

  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
      {ligacoes.map(([a, b], i) => {
        const ea = estrelas[a];
        const eb = estrelas[b];
        if (!ea || !eb) return null;
        const comp = Math.hypot(eb.x - ea.x, eb.y - ea.y);
        return (
          <line
            key={`${a}-${b}`}
            x1={ea.x}
            y1={ea.y}
            x2={eb.x}
            y2={eb.y}
            className="recurso-traco recurso-desenha"
            strokeWidth={1}
            style={{ "--comp": comp, "--atraso": `${i * 110}ms` } as CSSProperties}
          />
        );
      })}
      {estrelas.map((e, i) => (
        <circle
          key={i}
          cx={e.x}
          cy={e.y}
          r={e.r}
          className="recurso-astro recurso-acende"
          style={{ "--atraso": `${180 + i * 90}ms` } as CSSProperties}
        />
      ))}
    </svg>
  );
}

function CurvaDeNivel({ semente }: { semente: number }) {
  const rnd = semear(semente + 13);
  const fase = rnd() * Math.PI * 2;
  const cx = 118 + rnd() * 26;
  const cy = 66 + rnd() * 16;

  const aneis = Array.from({ length: 6 }, (_, i) => {
    const pontos: string[] = [];
    for (let a = 0; a <= 360; a += 15) {
      const rad = (a * Math.PI) / 180;
      const raio =
        (13 + i * 12) *
        (1 + 0.19 * Math.sin(rad * 3 + fase + i * 0.5) + 0.1 * Math.cos(rad * 5 - i * 0.3));
      pontos.push(
        `${(cx + raio * Math.cos(rad) * 1.2).toFixed(1)} ${(cy + raio * Math.sin(rad) * 0.86).toFixed(1)}`,
      );
    }
    return `M ${pontos.join(" L ")} Z`;
  });

  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
      {aneis.map((d, i) => (
        <path
          key={i}
          d={d}
          className="recurso-traco recurso-desenha"
          strokeWidth={i === 0 ? 1.3 : 1}
          style={
            {
              "--comp": 620,
              "--atraso": `${i * 90}ms`,
              opacity: 1 - i * 0.11,
            } as CSSProperties
          }
        />
      ))}
    </svg>
  );
}

export function RecursoArte({ tipo, semente }: { tipo: MentoriaRecursoTipo; semente: number }) {
  return (
    <div className="recurso-arte" aria-hidden="true">
      {tipo === "Artigo" ? <CurvaDeNivel semente={semente} /> : <CartaCeleste semente={semente} />}
    </div>
  );
}
