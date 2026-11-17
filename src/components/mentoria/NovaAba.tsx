/** Aviso para leitor de tela em links que abrem em outra aba; não muda o visual. */
export function NovaAba() {
  return <span className="sr-only">{" (abre em nova aba)"}</span>;
}
