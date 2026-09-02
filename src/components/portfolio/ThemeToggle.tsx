import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Monitor, Moon, Sun } from "lucide-react";

export type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "ton-theme";

export function applyTheme(theme: Theme) {
  const prefersDark =
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
}

const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Tema claro", Icon: Sun },
  { value: "dark", label: "Tema escuro", Icon: Moon },
  { value: "system", label: "Preferência do sistema", Icon: Monitor },
];

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    setTheme(stored ?? "system");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => theme === "system" && applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme, mounted]);

  // Conta as trocas para que uma varredura antiga não limpe a bandeira de uma
  // nova: em dois cliques seguidos o navegador descarta a primeira transição, e
  // a promessa dela resolve no meio da segunda.
  const trocaRef = useRef(0);

  // Revela o tema novo em círculo, crescendo do centro do botão clicado.
  // A animação é declarada em CSS (::view-transition-new(root)); aqui só passamos
  // centro e raio por variáveis, porque nem todo navegador aceita `pseudoElement`
  // em Element.animate().
  const select = useCallback((value: Theme, event: MouseEvent<HTMLButtonElement>) => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startViewTransition = (
      document as Document & {
        startViewTransition?: (cb: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      }
    ).startViewTransition?.bind(document);

    if (!startViewTransition || reduced) {
      setTheme(value);
      applyTheme(value);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const raio = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const raiz = document.documentElement;
    raiz.style.setProperty("--vt-x", `${x}px`);
    raiz.style.setProperty("--vt-y", `${y}px`);
    raiz.style.setProperty("--vt-r", `${raio}px`);

    // Antes de abrir a transição, e não depois: o navegador tira a foto da tela
    // no próximo quadro, então o céu já precisa estar pausado e as transições de
    // cor já desligadas quando ele for capturar e montar as camadas.
    const troca = ++trocaRef.current;
    raiz.dataset.trocandoTema = "";

    const limpar = () => {
      if (trocaRef.current !== troca) return;
      delete raiz.dataset.trocandoTema;
      raiz.style.removeProperty("--vt-x");
      raiz.style.removeProperty("--vt-y");
      raiz.style.removeProperty("--vt-r");
    };

    const vt = startViewTransition(() => {
      flushSync(() => setTheme(value));
      applyTheme(value);
    });

    // `finished`, e não `ready`: `ready` rejeita quando a transição é descartada
    // (outra troca por cima, aba escondida) e a bandeira ficaria presa, travando
    // as transições do site inteiro.
    vt.finished.then(limpar, limpar);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Tema"
      className={`inline-flex items-center gap-0.5 rounded-full border border-border p-0.5 ${className}`}
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={(e) => select(value, e)}

            className={`rounded-full p-1.5 transition-colors ${
              active
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="size-3.5" />
          </button>
        );
      })}
    </div>
  );
}
