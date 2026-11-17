import { useCallback, useEffect, useSyncExternalStore } from "react";

/**
 * Preferência "pausar movimento" (WCAG 2.2.2): vale para o vídeo de fundo e
 * para as animações que não terminam sozinhas (céu do hero, arte dos
 * recursos). Fica no localStorage e vira `html[data-movimento="parado"]`,
 * que o CSS usa para congelar as animações. Quem já pede menos movimento no
 * sistema (`prefers-reduced-motion`) não precisa do botão: o site já respeita.
 */
const CHAVE = "ton-movimento";
const REDUZIDO = "(prefers-reduced-motion: reduce)";

const ouvintes = new Set<() => void>();

function lerPausado(): boolean {
  try {
    return localStorage.getItem(CHAVE) === "parado";
  } catch {
    return false;
  }
}

// O localStorage pode lançar (janela privada, dados bloqueados); então a
// escolha também fica em memória até a página fechar.
let memoria: boolean | null = null;

function pausadoAgora(): boolean {
  return memoria ?? lerPausado();
}

function escolher(pausado: boolean) {
  memoria = pausado;
  try {
    localStorage.setItem(CHAVE, pausado ? "parado" : "normal");
  } catch {
    /* sem armazenamento: vale só nesta visita */
  }
  ouvintes.forEach((fn) => fn());
}

function assinarPausado(fn: () => void) {
  ouvintes.add(fn);
  return () => {
    ouvintes.delete(fn);
  };
}

function assinarReduzido(fn: () => void) {
  const mq = window.matchMedia(REDUZIDO);
  mq.addEventListener("change", fn);
  return () => mq.removeEventListener("change", fn);
}

export function useMovimento() {
  const pausado = useSyncExternalStore(assinarPausado, pausadoAgora, () => false);
  const reduzido = useSyncExternalStore(
    assinarReduzido,
    () => window.matchMedia(REDUZIDO).matches,
    () => false,
  );

  // Espelha no <html> para o CSS; sai quando a pessoa deixa a página.
  useEffect(() => {
    const raiz = document.documentElement;
    if (pausado) raiz.dataset.movimento = "parado";
    else delete raiz.dataset.movimento;
    return () => {
      delete raiz.dataset.movimento;
    };
  }, [pausado]);

  const alternar = useCallback(() => escolher(!pausadoAgora()), []);

  return { pausado, reduzido, alternar };
}
