import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { WolfMark } from "./WolfMark";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <WolfMark className="h-10 w-10 text-primary" />
            <span className="font-display text-2xl tracking-widest">WOLF COFFEE</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Café para noites longas, ideias grandes e lobos famintos. Cafeteria fictícia
            criada como projeto demonstrativo.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Sigam a alcateia (perfis fictícios): @wolfcoffee.br · @wolf.coffee.night
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="font-display text-xl tracking-wider text-primary">Navegar</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/cardapio", label: "Cardápio" },
              { to: "/ofertas", label: "Ofertas" },
              { to: "/novidades", label: "Novidades" },
              { to: "/carrinho", label: "Carrinho" },
              { to: "/checkout", label: "Finalizar pedido" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Institucional">
          <h2 className="font-display text-xl tracking-wider text-primary">A casa</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/sobre", label: "Sobre a Wolf Coffee" },
              { to: "/historia", label: "Nossa história" },
              { to: "/localizacao", label: "Localização" },
              { to: "/faq", label: "FAQ" },
              { to: "/contato", label: "Contato" },
              { to: "/privacidade", label: "Política de privacidade" },
              { to: "/termos", label: "Termos de uso" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xl tracking-wider text-primary">Uive pra gente</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Rua da Lua, 666 — Curitiba, PR
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              Seg a sex 08h–22h · Sáb 09h–23h · Dom 10h–20h
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              (41) 3666-0666
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              alcateia@wolfcoffee.com.br
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Wolf Coffee — cafeteria fictícia. Todos os dados,
        endereços e depoimentos são ilustrativos.
      </div>
    </footer>
  );
}
