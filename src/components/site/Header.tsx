import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { WolfMark } from "./WolfMark";

const links = [
  { to: "/cardapio", label: "Cardápio" },
  { to: "/ofertas", label: "Ofertas" },
  { to: "/novidades", label: "Novidades" },
  { to: "/sobre", label: "Sobre" },
  { to: "/historia", label: "História" },
  { to: "/localizacao", label: "Localização" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <WolfMark className="h-10 w-10 text-primary" />
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-widest text-foreground">
              WOLF COFFEE
            </span>
            <span className="block font-orn text-[10px] tracking-[0.35em] text-primary">
              KAWAII GOTH CAFÉ
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <Link
            to="/carrinho"
            aria-label={`Carrinho com ${count} ${count === 1 ? "item" : "itens"}`}
            className="relative inline-flex h-11 items-center gap-2 rounded-full border border-border bg-secondary px-4 text-sm font-bold text-foreground transition-colors hover:bg-accent"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Carrinho</span>
            <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-xs font-black text-primary-foreground">
              {count}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-border bg-card/95 xl:hidden"
        >
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
