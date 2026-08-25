import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#lideranca", label: "Liderança" },
  { href: "#cases", label: "Cases" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="display text-lg tracking-tight">
          Ton Cavalcanti
        </a>

        <nav
          ref={navRef}
          className="relative hidden items-center gap-6 xl:gap-8 lg:flex"
        >
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
                  isActive ? "text-foreground" : "text-muted-foreground"
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

      {/* Painel mobile: altura animada pela técnica de grid (0fr → 1fr) */}
      <div
        className={cn(
          "grid overflow-hidden lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
            open ? "border-t border-border" : "border-t border-transparent"
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
                    isActive ? "text-foreground" : "text-muted-foreground"
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
