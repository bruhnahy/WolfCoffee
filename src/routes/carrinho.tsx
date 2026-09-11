import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import mascot from "@/assets/mascot-wolf.png";
import { itemTotal, useCart } from "@/lib/cart";
import { brl } from "@/lib/products";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Carrinho | Wolf Coffee" },
      {
        name: "description",
        content:
          "Revise os itens do seu pedido na Wolf Coffee, ajuste quantidades e siga para a finalização.",
      },
      { property: "og:title", content: "Carrinho | Wolf Coffee" },
      {
        property: "og:description",
        content: "Revise seu pedido antes de finalizar na Wolf Coffee.",
      },
    ],
  }),
  component: Carrinho,
});

function Carrinho() {
  const { items, subtotal, setQuantity, removeItem, clear } = useCart();

  return (
    <>
      <PageHeader eyebrow="✦ SEU PEDIDO ✦" title="CARRINHO" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {items.length === 0 ? (
          <div className="surface-card mx-auto max-w-xl p-10 text-center">
            <img
              src={mascot}
              alt="Mascote Nina esperando um pedido"
              loading="lazy"
              width={1024}
              height={1024}
              className="mx-auto w-40"
            />
            <h2 className="mt-4 font-display text-3xl tracking-wide">
              Seu bando está vazio… 🐺
            </h2>
            <p className="mt-2 text-muted-foreground">Que tal escolher um café?</p>
            <Link
              to="/cardapio"
              className="mt-6 inline-flex rounded-full bg-primary px-7 py-3.5 font-display text-xl tracking-wider text-primary-foreground"
            >
              Ver cardápio
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.key} className="surface-card flex gap-4 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-28 w-28 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="font-display text-2xl tracking-wide">{item.name}</h2>
                        {item.size ? (
                          <p className="text-sm text-muted-foreground">
                            Tamanho: {item.size.label}
                          </p>
                        ) : null}
                        {item.extras.length > 0 ? (
                          <p className="text-sm text-muted-foreground">
                            Adicionais:{" "}
                            {item.extras.map((e) => `${e.label} (+${brl(e.price)})`).join(", ")}
                          </p>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remover ${item.name} do carrinho`}
                        className="rounded-full border border-border p-2 text-muted-foreground hover:border-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Diminuir quantidade de ${item.name}`}
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary"
                        >
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <span className="w-8 text-center font-display text-xl">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Aumentar quantidade de ${item.name}`}
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary"
                        >
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                      <p className="font-display text-2xl text-primary">
                        {brl(itemTotal(item))}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={clear}
                  className="text-sm font-semibold text-muted-foreground underline hover:text-destructive"
                >
                  Esvaziar carrinho
                </button>
              </li>
            </ul>

            <aside className="surface-card h-fit p-6 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl tracking-wide">Resumo</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd className="font-bold">{brl(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Entrega</dt>
                  <dd className="text-muted-foreground">calculada na finalização</dd>
                </div>
              </dl>
              <p className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                <span className="font-display text-2xl tracking-wide">Total</span>
                <span className="font-display text-4xl text-primary">{brl(subtotal)}</span>
              </p>
              <Link
                to="/checkout"
                className="mt-6 block rounded-full bg-[image:var(--gradient-lilac)] px-6 py-3.5 text-center font-display text-xl tracking-wider text-primary-foreground"
              >
                Finalizar pedido
              </Link>
              <Link
                to="/cardapio"
                className="mt-3 block rounded-full border border-border px-6 py-3 text-center font-bold"
              >
                Continuar comprando
              </Link>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
