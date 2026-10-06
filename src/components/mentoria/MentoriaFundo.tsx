import { useEffect, useRef, useState } from "react";

/**
 * Fundo contínuo da página de mentoria: uma camada fixa, atrás de tudo,
 * que troca de vídeo (em preto e branco) conforme a seção sob a linha dos
 * 45% da tela. O layout não muda; o texto fica sobre um véu da cor do
 * fundo, calculado para manter o texto cinza acima de 5,5:1 (ver styles.css).
 *
 * O hero tem o próprio céu e fica de fora; "sobre" fica sem vídeo, porque a
 * foto do Ton faz parte do conteúdo da seção (MentoriaAbout).
 */
const SECOES = ["trabalho", "recursos", "planos", "depoimentos", "sobre", "contato"] as const;
type Secao = (typeof SECOES)[number];
type Clipe = Exclude<Secao, "sobre">;

/** `largo`: o texto ocupa a largura toda, então o véu cobre tudo e a imagem ganha 3px de desfoque. */
const CLIPES: ReadonlyArray<{ id: Clipe; largo: boolean }> = [
  { id: "trabalho", largo: true },
  { id: "recursos", largo: false },
  { id: "planos", largo: false },
  { id: "depoimentos", largo: true },
  { id: "contato", largo: false },
];

const BASE = "/mentoria/fundo";

export function MentoriaFundo() {
  const [ativo, setAtivo] = useState<Secao | null>(null);
  const [carregados, setCarregados] = useState<ReadonlySet<Secao>>(() => new Set());
  const [parado, setParado] = useState(false);
  const videos = useRef<Partial<Record<Clipe, HTMLVideoElement | null>>>({});

  // Sem movimento quando a pessoa pede menos animação ou está em economia de dados.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const conexao = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const atualizar = () => setParado(mq.matches || Boolean(conexao?.saveData));
    atualizar();
    mq.addEventListener("change", atualizar);
    return () => mq.removeEventListener("change", atualizar);
  }, []);

  // Seção ativa: a que cruza a linha dos 45% da altura da tela.
  useEffect(() => {
    const alvos = SECOES.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const sobLinha = new Set<string>();
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) sobLinha.add(e.target.id);
          else sobLinha.delete(e.target.id);
        }
        setAtivo(SECOES.find((id) => sobLinha.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -55% 0px" },
    );
    alvos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Baixa o vídeo da seção ativa e o da próxima, para a troca não esperar a rede.
  useEffect(() => {
    if (!ativo) return;
    const i = SECOES.indexOf(ativo);
    const proximos = [ativo, SECOES[i + 1]].filter((s): s is Secao => Boolean(s));
    setCarregados((atual) => {
      if (proximos.every((s) => atual.has(s))) return atual;
      return new Set([...atual, ...proximos]);
    });
  }, [ativo]);

  // Só o vídeo ativo toca; os outros ficam pausados.
  useEffect(() => {
    for (const { id } of CLIPES) {
      const v = videos.current[id];
      if (!v) continue;
      if (id === ativo && !parado) void v.play().catch(() => {});
      else v.pause();
    }
  }, [ativo, parado, carregados]);

  return (
    <div className="fundo" data-ativo={ativo ?? "nenhum"} aria-hidden="true">
      {CLIPES.map(({ id, largo }) => (
        <div
          key={id}
          className="fundo-cam"
          data-on={ativo === id ? "" : undefined}
          data-largo={largo ? "" : undefined}
        >
          {parado ? (
            <img src={`${BASE}/${id}.jpg`} alt="" decoding="async" />
          ) : (
            <video
              ref={(el) => {
                videos.current[id] = el;
              }}
              src={carregados.has(id) ? `${BASE}/${id}.mp4` : undefined}
              poster={`${BASE}/${id}.jpg`}
              muted
              loop
              playsInline
              preload="none"
            />
          )}
        </div>
      ))}

      <div className="fundo-veu" />
    </div>
  );
}
