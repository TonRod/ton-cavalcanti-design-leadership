import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

export type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "ton-theme";

export function applyTheme(theme: Theme) {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
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

  // Revela o tema novo em círculo, crescendo do centro do botão clicado
  const select = useCallback(
    (value: Theme, event: React.MouseEvent<HTMLButtonElement>) => {
      setTheme(value);

      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const startViewTransition = (
        document as Document & {
          startViewTransition?: (cb: () => void) => { ready: Promise<void> };
        }
      ).startViewTransition?.bind(document);

      if (!startViewTransition || reduced) {
        applyTheme(value);
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const raio = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transicao = startViewTransition(() => {
        // Precisa ser síncrono: troca a classe direto no documentElement
        applyTheme(value);
      });

      transicao.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${raio}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 520,
              easing: "cubic-bezier(.22,1,.36,1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {});
    },
    []
  );

  return (
    <div
      role="radiogroup"
      aria-label="Tema"
      className={`inline-flex items-center gap-0.5 rounded-md border border-border p-0.5 ${className}`}
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

            className={`rounded-[0.25rem] p-1.5 transition-colors ${
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
