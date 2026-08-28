import { useEffect } from "react";

/**
 * Marca cada seção com `data-revelar` como revelada quando ela entra na
 * tela. O CSS cuida da animação; aqui só cai a classe.
 *
 * Uma vez só, de propósito: elemento que reanima a cada rolagem cansa na
 * segunda visita. Por isso o observer para de observar depois de revelar.
 */
export function useRevelar() {
  useEffect(() => {
    const secoes = Array.from(document.querySelectorAll<HTMLElement>("[data-revelar]"));
    if (!secoes.length) return;

    const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (menosMovimento) {
      secoes.forEach((s) => s.classList.add("revelada"));
      return;
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("revelada");
          observer.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    secoes.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}
