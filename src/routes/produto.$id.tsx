import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { brl, extraOptions, getProduct, products, sizeOptions } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/produto/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Produto indisponível | Wolf Coffee" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} | Wolf Coffee` },
        { name: "description", content: product.description },
        { property: "og:title", content: `${product.name} | Wolf Coffee` },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProdutoPage,
});

function ProdutoPage() {
  const { product } = Route.useLoaderData();
  const { addItem } = useCart();
  const [sizeId, setSizeId] = useState(sizeOptions[0]!.id);
  const [extras, setExtras] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const size = sizeOptions.find((s) => s.id === sizeId)!;
  const chosenExtras = extraOptions.filter((e) => extras.includes(e.id));
  const unit =
    product.price +
    (product.sizes ? size.delta : 0) +
    (product.extras ? chosenExtras.reduce((s, e) => s + e.price, 0) : 0);

  const toggleExtra = (id: string) =>
    setExtras((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]));

  const add = () => {
    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      unitPrice: product.price,
      quantity,
      ...(product.sizes ? { size } : {}),
      extras: product.extras ? chosenExtras : [],
    });
    toast.success(`${quantity}x ${product.name} no carrinho 🐺☕`);
  };

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <nav aria-label="Trilha de navegação" className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Início
        </Link>{" "}
        /{" "}
        <Link to="/cardapio" className="hover:text-primary">
          Cardápio
        </Link>{" "}
        / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="surface-card overflow-hidden">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          {product.badge ? (
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground">
              {product.badge}
            </span>
          ) : null}
          <h1 className="mt-3 font-display text-5xl tracking-wide md:text-7xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>

          <h2 className="mt-8 font-display text-2xl tracking-wide text-primary">
            Ingredientes
          </h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {product.ingredients.map((i) => (
              <li
                key={i}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm"
              >
                {i}
              </li>
            ))}
          </ul>

          {product.sizes ? (
            <fieldset className="mt-8">
              <legend className="font-display text-2xl tracking-wide text-primary">
                Tamanho
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {sizeOptions.map((s) => (
                  <label
                    key={s.id}
                    className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm font-bold transition-colors ${
                      sizeId === s.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-secondary hover:border-primary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="tamanho"
                      value={s.id}
                      checked={sizeId === s.id}
                      onChange={() => setSizeId(s.id)}
                      className="sr-only"
                    />
                    {s.label}
                    {s.delta > 0 ? ` +${brl(s.delta)}` : ""}
                  </label>
                ))}
              </div>
            </fieldset>
          ) : null}

          {product.extras ? (
            <fieldset className="mt-8">
              <legend className="font-display text-2xl tracking-wide text-primary">
                Adicionais
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {extraOptions.map((e) => (
                  <label
                    key={e.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                      extras.includes(e.id)
                        ? "border-primary bg-secondary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={extras.includes(e.id)}
                      onChange={() => toggleExtra(e.id)}
                      className="h-4 w-4 accent-[oklch(0.8_0.11_300)]"
                    />
                    <span className="flex-1">{e.label}</span>
                    <span className="text-muted-foreground">+{brl(e.price)}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ) : null}

          <div className="surface-card mt-8 flex flex-wrap items-center gap-4 p-5">
            <div className="flex items-center gap-3">
              <span className="sr-only" id="lbl-qtd">
                Quantidade
              </span>
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary"
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
              </button>
              <span aria-live="polite" className="w-8 text-center font-display text-2xl">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((q) => q + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="font-display text-4xl text-primary">{brl(unit * quantity)}</p>
            <button
              type="button"
              onClick={add}
              className="ml-auto rounded-full bg-[image:var(--gradient-lilac)] px-7 py-3.5 font-display text-xl tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="font-display text-3xl tracking-wide md:text-5xl">
            Combina com isso
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
