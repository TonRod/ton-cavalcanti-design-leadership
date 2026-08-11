import { Menu } from "lucide-react";
import { useState } from "react";
import { contact } from "@/data/portfolio";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const links = [
  { href: "#lideranca", label: "Liderança" },
  { href: "#cases", label: "Cases" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="display text-lg tracking-tight">
          Ton Cavalcanti
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contact.cv}
            className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
          >
            Baixar CV
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-1.5"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <a href={contact.cv} className="py-2 text-sm">
            Baixar CV
          </a>
        </nav>
      )}
    </header>
  );
}
