import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { brl, getProduct } from "@/lib/products";

export const Route = createFileRoute("/ofertas")({
  head: () => ({
    meta: [
      { title: "Ofertas da semana | Wolf Coffee" },
      {
        name: "description",
        content:
          "Promoções da Wolf Coffee: happy hour noturno, combo de estudo, terça do cookie e desconto para quem traz a própria caneca.",
      },
      { property: "og:title", content: "Ofertas da semana | Wolf Coffee" },
      { property: "og:description", content: "Descontos noturnos e combos da alcateia." },
    ],
  }),
  component: Ofertas,
});

const offers = [
  {
    id: "dark-forest-mocha",
    title: "Happy hour noturno",
    rule: "Terça a quinta, das 18h às 22h",
    text: "20% off no Dark Forest Mocha e em todas as bebidas temáticas.",
    discount: 0.2,
  },
  {
    id: "combo-madrugada",
    title: "Combo estudo",
    rule: "Todos os dias, das 14h às 18h",
    text: "Café preto + brownie com preço fechado para quem fica na mesa trabalhando.",
    discount: 0.15,
  },
  {
    id: "cookie-da-lua",
    title: "Terça do cookie",
    rule: "Toda terça-feira",
    text: "Leve 3 Cookies da Lua e pague 2 — sim, o cookie some rápido.",
    discount: 0.33,
  },
];

function Ofertas() {
  return (
    <>
      <PageHeader
        eyebrow="✦ PROMOÇÕES ✦"
        title="OFERTAS"
        description="Descontos fictícios da nossa cafeteria fictícia — mas o carrinho funciona de verdade."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-3">
          {offers.map((o) => {
            const product = getProduct(o.id);
            if (!product) return null;
            return (
              <li key={o.title} className="surface-card overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <p className="font-orn text-xs tracking-[0.35em] text-primary">{o.rule}</p>
                  <h2 className="mt-2 font-display text-3xl tracking-wide">{o.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
                  <p className="mt-4 font-display text-3xl text-primary">
                    {brl(product.price * (1 - o.discount))}{" "}
                    <span className="font-sans text-sm font-semibold text-muted-foreground line-through">
                      {brl(product.price)}
                    </span>
                  </p>
                  <Link
                    to="/produto/$id"
                    params={{ id: product.id }}
                    className="mt-5 block rounded-full bg-primary px-5 py-3 text-center font-display text-lg tracking-wider text-primary-foreground"
                  >
                    Ver {product.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <section className="surface-card mt-12 p-8 text-center">
          <h2 className="font-display text-3xl tracking-wide">Trouxe sua caneca?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Quem traz a própria caneca ganha R$ 2 de desconto em qualquer café quente,
            todos os dias. Menos descartável, mais café.
          </p>
          <Link
            to="/cardapio"
            className="mt-6 inline-flex rounded-full border border-border px-6 py-3 font-bold"
          >
            Ver cardápio
          </Link>
        </section>
      </div>
    </>
  );
}
