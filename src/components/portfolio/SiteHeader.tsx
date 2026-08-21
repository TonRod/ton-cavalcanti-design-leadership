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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="display text-lg tracking-tight">
          Ton Cavalcanti
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  isActive
                    ? "text-foreground underline decoration-accent underline-offset-8"
                    : "text-muted-foreground"
                )}
              >
                {l.label}
              </a>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="p-1.5"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden"
        >
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
        </nav>
      )}
    </header>
  );
}
