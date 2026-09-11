import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products, type CategoryId } from "@/lib/products";

type MenuSearch = { cat?: CategoryId | "todos" };

export const Route = createFileRoute("/cardapio")({
  validateSearch: (search: Record<string, unknown>): MenuSearch => {
    const cat = search["cat"];
    const valid = categories.some((c) => c.id === cat);
    return valid ? { cat: cat as CategoryId } : {};
  },
  head: () => ({
    meta: [
      { title: "Cardápio | Wolf Coffee" },
      {
        name: "description",
        content:
          "Cafés, bebidas temáticas, geladas, chás, doces, salgados e combos da Wolf Coffee. Filtre por categoria e monte seu pedido.",
      },
      { property: "og:title", content: "Cardápio | Wolf Coffee" },
      {
        property: "og:description",
        content: "Conheça todos os cafés e doces autorais da Wolf Coffee.",
      },
    ],
  }),
  component: Cardapio,
});

function Cardapio() {
  const { cat } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState("");
  const active: CategoryId | "todos" = cat ?? "todos";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okCat = active === "todos" || p.category === active;
      const okQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.ingredients.join(" ").toLowerCase().includes(q);
      return okCat && okQuery;
    });
  }, [active, query]);

  const grouped = categories
    .map((c) => ({ ...c, items: filtered.filter((p) => p.category === c.id) }))
    .filter((c) => c.items.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="✦ CARDÁPIO COMPLETO ✦"
        title="CARDÁPIO"
        description="Tudo o que sai do nosso balcão — do espresso curto ao combo de madrugada. Preços em reais, para consumo no local, retirada ou entrega."
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="surface-card sticky top-24 z-30 flex flex-col gap-4 p-4">
          <label className="relative block">
            <span className="sr-only">Buscar produto</span>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome ou ingrediente…"
              className="w-full rounded-full border border-input bg-background py-3 pl-12 pr-4 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
            <button
              type="button"
              aria-pressed={active === "todos"}
              onClick={() => navigate({ search: {} })}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                active === "todos"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-secondary text-foreground hover:border-primary"
              }`}
            >
              Tudo
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={active === c.id}
                onClick={() => navigate({ search: { cat: c.id } })}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  active === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-secondary text-foreground hover:border-primary"
                }`}
              >
                <span aria-hidden="true">{c.icon}</span> {c.label}
              </button>
            ))}
          </div>
        </div>

        {grouped.length === 0 ? (
          <p className="mt-16 text-center text-lg text-muted-foreground">
            Nada encontrado por aqui 🐺 — tente outra palavra ou volte para “Tudo”.
          </p>
        ) : (
          grouped.map((c) => (
            <section key={c.id} className="mt-14" aria-labelledby={`cat-${c.id}`}>
              <h2
                id={`cat-${c.id}`}
                className="font-display text-3xl tracking-wide md:text-5xl"
              >
                <span aria-hidden="true">{c.icon}</span> {c.label}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
}
