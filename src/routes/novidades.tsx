import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/novidades")({
  head: () => ({
    meta: [
      { title: "Novidades | Wolf Coffee" },
      {
        name: "description",
        content:
          "Lançamentos e eventos da Wolf Coffee: Purple Night no cardápio, turno das corujas, oficina de latte art e sarau mensal.",
      },
      { property: "og:title", content: "Novidades | Wolf Coffee" },
      { property: "og:description", content: "O que está acontecendo na cafeteria." },
    ],
  }),
  component: Novidades,
});

const news = [
  {
    tag: "Novo no cardápio",
    date: "Esta semana",
    title: "Purple Night chegou",
    text: "Creme de ube, um sussurro de lavanda e espresso. Doce, floral e absurdamente roxo — já é a bebida mais fotografada da casa.",
    productId: "purple-night",
  },
  {
    tag: "Evento",
    date: "Toda última quinta",
    title: "Sarau da Alcateia",
    text: "Microfone aberto para poesia, música e leitura. Começa às 20h, entrada gratuita, cookie por conta da casa para quem se apresentar.",
  },
  {
    tag: "Oficina",
    date: "Sábados, 10h",
    title: "Latte art para iniciantes",
    text: "Duas horas de prática com nossa barista-chefe. Vagas limitadas a 8 pessoas, inscrição pela página de contato.",
  },
  {
    tag: "Horário estendido",
    date: "Sextas e sábados",
    title: "Turno das corujas",
    text: "A casa fica aberta até mais tarde, a luz baixa mais um pouco e a playlist fica bem mais pesada. Café preto ilimitado por R$ 25.",
  },
];

function Novidades() {
  return (
    <>
      <PageHeader
        eyebrow="✦ O QUE ESTÁ ROLANDO ✦"
        title="NOVIDADES"
        description="Lançamentos, eventos e mudanças no cardápio da Wolf Coffee."
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ul className="space-y-6">
          {news.map((n) => {
            const product = n.productId ? getProduct(n.productId) : undefined;
            return (
              <li key={n.title} className="surface-card flex flex-col gap-5 p-6 sm:flex-row">
                {product ? (
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-40 w-full shrink-0 rounded-xl object-cover sm:w-40"
                  />
                ) : null}
                <div>
                  <p className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-primary px-3 py-1 font-black uppercase tracking-wider text-primary-foreground">
                      {n.tag}
                    </span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </p>
                  <h2 className="mt-3 font-display text-3xl tracking-wide">{n.title}</h2>
                  <p className="mt-2 text-muted-foreground">{n.text}</p>
                  {product ? (
                    <Link
                      to="/produto/$id"
                      params={{ id: product.id }}
                      className="mt-4 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-bold hover:bg-secondary"
                    >
                      Ver produto
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
