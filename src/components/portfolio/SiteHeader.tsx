import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { cn } from "@/lib/utils";

export interface SiteHeaderLink {
  href: string;
  label: string;
}

const defaultLinks: SiteHeaderLink[] = [
  { href: "#lideranca", label: "Liderança" },
  { href: "#cases", label: "Cases" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export interface SiteHeaderProps {
  /** Nome exibido à esquerda. */
  brand?: string;
  /** Destino do nome — âncora no topo por padrão. */
  homeHref?: string;
  /**
   * Links da nav. Defina em escopo de módulo (não inline) para manter a
   * referência estável entre renders — o observer depende disso.
   */
  links?: SiteHeaderLink[];
  /**
   * Header sem borda, com fundo mais translúcido que se dissolve na base.
   * O conteúdo passa por baixo perdendo o desfoque aos poucos, sem aresta —
   * a página não parece começar depois da barra, parece continuar sob ela.
   */
  imersivo?: boolean;
}

export function SiteHeader({
  brand = "Ton Cavalcanti",
  homeHref = "#top",
  links = defaultLinks,
  imersivo = false,
}: SiteHeaderProps = {}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Seção ativa = a última cujo início já passou logo abaixo do header.
  // Cálculo direto, e não IntersectionObserver: o callback do observer só
  // recebe as seções que mudaram de estado, então quando uma sai da faixa
  // sem que outra entre no mesmo evento, o item ativo trava no anterior.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    if (!ids.length) return;

    let frame = 0;

    const calcular = () => {
      frame = 0;
      // Meio da janela: medido contra a geometria real das duas páginas, é o
      // ponto que menos diverge da seção que ocupa a maior área da tela
      // (3–5% na mentoria e 11% na home, contra 13–25% com um ponto fixo).
      const marca = window.scrollY + window.innerHeight * 0.5;
      let atual: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= marca) atual = id;
      }

      // No fim da página a rolagem acaba antes da última seção chegar ao topo;
      // sem esta regra o indicador nunca alcançaria o último item.
      const noFim =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (noFim) {
        const ultimo = ids[ids.length - 1];
        if (ultimo && document.getElementById(ultimo)) atual = ultimo;
      }

      setActiveId(atual);
    };

    const agendar = () => {
      if (!frame) frame = requestAnimationFrame(calcular);
    };

    calcular();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [links]);

  // Indicador deslizante da nav desktop: mede o link ativo e move o traço
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);

  const measure = useCallback(() => {
    if (!activeId) {
      setIndicator(null);
      return;
    }
    const el = linkRefs.current[activeId];
    if (!el) {
      setIndicator(null);
      return;
    }
    setIndicator({ x: el.offsetLeft, w: el.offsetWidth });
  }, [activeId]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure();
    });
    return () => {
      cancelled = true;
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        !imersivo && "border-b border-border bg-background/85 backdrop-blur-md",
      )}
    >
      <div className="relative">
        {/*
          Camada de fundo só da barra. A máscara apaga o desfoque de cima para
          baixo, então não existe linha onde o header termina: o conteúdo vai
          ficando nítido conforme sobe. Fica atrás do conteúdo porque este é
          posicionado (relative) e pinta depois.
        */}
        {imersivo && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-background/60 backdrop-blur-xl"
            style={{
              maskImage: "linear-gradient(to bottom, black 58%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 58%, transparent)",
            }}
          />
        )}
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href={homeHref} className="display text-lg tracking-tight">
            {brand}
          </a>

          <nav ref={navRef} className="relative hidden items-center gap-6 xl:gap-8 lg:flex">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = activeId === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  ref={(el) => {
                    linkRefs.current[id] = el;
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-sm transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {l.label}
                </a>
              );
            })}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-6px] left-0 h-px w-px origin-left bg-foreground"
              style={{
                opacity: indicator ? 1 : 0,
                transform: `translateX(${indicator?.x ?? 0}px) scaleX(${indicator?.w ?? 0})`,
                transition:
                  "transform var(--dur-state) var(--ease-soft), opacity var(--dur-state) var(--ease-soft)",
              }}
            />
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="relative size-8 p-1.5"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              {/* Ícones empilhados: giram e trocam de opacidade */}
              <Menu
                className="absolute left-1.5 top-1.5 size-5"
                style={{
                  opacity: open ? 0 : 1,
                  transform: open ? "rotate(90deg) scale(0.7)" : "none",
                  transition:
                    "transform var(--dur-micro) var(--ease-soft), opacity var(--dur-micro) var(--ease-soft)",
                }}
              />
              <X
                className="absolute left-1.5 top-1.5 size-5"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "rotate(-90deg) scale(0.7)",
                  transition:
                    "transform var(--dur-micro) var(--ease-soft), opacity var(--dur-micro) var(--ease-soft)",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Painel mobile: altura animada pela técnica de grid (0fr → 1fr).
          No modo imersivo ganha fundo próprio: a máscara da barra pararia no
          meio do menu e os itens ficariam sobre conteúdo em movimento. */}
      <div
        className={cn(
          "grid overflow-hidden lg:hidden",
          imersivo && "bg-background/95 backdrop-blur-xl",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        style={{
          transition: "grid-template-rows var(--dur-state) var(--ease-soft)",
        }}
      >
        <nav
          id="menu-mobile"
          inert={!open}
          className={cn(
            "min-h-0 overflow-hidden px-6",
            open ? "border-t border-border" : "border-t border-transparent",
          )}
        >
          <div className="flex flex-col gap-1 py-4">
            {links.map((l) => {
              const isActive = activeId === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "py-2 text-sm",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {l.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
