import { Pause, Play } from "lucide-react";

import { useMovimento } from "@/hooks/use-movimento";

/**
 * Botão "Pausar movimento": para o vídeo de fundo e as animações contínuas.
 * Escondido quando o sistema já pede menos movimento, porque nesse caso o
 * site já está parado.
 */
export function MovimentoToggle({ className = "" }: { className?: string }) {
  const { pausado, reduzido, alternar } = useMovimento();
  if (reduzido) return null;

  const Icone = pausado ? Play : Pause;
  return (
    <button
      type="button"
      aria-pressed={pausado}
      aria-label="Pausar movimento"
      title="Pausar movimento"
      onClick={alternar}
      className={`alvo-toque-v inline-flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      <Icone className="size-3.5" aria-hidden="true" />
    </button>
  );
}
