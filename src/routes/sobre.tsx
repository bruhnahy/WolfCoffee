import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Hand, Music, Users } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import mascot from "@/assets/mascot-wolf.png";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Wolf Coffee | Cafeteria kawaii goth" },
      {
        name: "description",
        content:
          "Conheça a proposta da Wolf Coffee: café artesanal, criatividade, música e um ambiente noturno e acolhedor em Curitiba.",
      },
      { property: "og:title", content: "Sobre a Wolf Coffee" },
      {
        property: "og:description",
        content: "Café, criatividade e personalidade dividindo a mesma mesa.",
      },
    ],
  }),
  component: Sobre,
});

const values = [
  { icon: Coffee, t: "Produtos artesanais", d: "Torra própria, doces feitos na casa e pão de fermentação natural." },
  { icon: Music, t: "Música", d: "Curadoria em vinil, do shoegaze ao metal melódico, sempre em volume gentil." },
  { icon: Users, t: "Comunidade", d: "Sarau na última quinta do mês, feira de arte alternativa e clube do livro." },
  { icon: Hand, t: "Conforto", d: "Poltronas, mantas, tomadas e ninguém apressando sua mesa." },
];

function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="✦ QUEM SOMOS ✦"
        title="SOBRE A WOLF COFFEE"
        description="A Wolf Coffee nasceu da ideia de criar um lugar onde café, criatividade e personalidade pudessem dividir a mesma mesa."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <img
          src={heroCafe}
          alt="Ambiente interno da Wolf Coffee com luz baixa, velas e cortinas de renda"
          loading="lazy"
          width={1600}
          height={1008}
          className="surface-card w-full object-cover"
        />
        <div>
          <h2 className="font-display text-4xl tracking-wide md:text-5xl">
            Fofo por fora, alternativo por dentro
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Somos uma cafeteria temática de lobos: laços, renda, luas e patinhas convivendo
            com pôsteres de banda, luz baixa e um som que nunca é genérico. O contraste é
            proposital — dá pra ser delicado e barulhento ao mesmo tempo.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Nosso balcão é levado a sério: grãos de origem, extração cronometrada e
            confeitaria própria. O resto — as almofadas, as velas, o mascote no copo — é
            para você querer ficar.
          </p>
          <Link
            to="/cardapio"
            className="mt-6 inline-flex rounded-full bg-primary px-7 py-3.5 font-display text-xl tracking-wider text-primary-foreground"
          >
            Ver cardápio
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-4xl tracking-wide md:text-5xl">
            O que a gente valoriza
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.t} className="surface-card p-6">
                <v.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl tracking-wide">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
        <img
          src={mascot}
          alt="Nina, a loba mascote da Wolf Coffee"
          loading="lazy"
          width={1024}
          height={1024}
          className="mx-auto w-full max-w-xs"
        />
        <div>
          <h2 className="font-display text-4xl tracking-wide md:text-5xl">
            Experiências diferentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Toda semana tem algo acontecendo: degustação às cegas, noite de cartas, oficina
            de latte art e o nosso “turno das corujas”, quando a casa fica aberta até mais
            tarde e a playlist fica mais pesada.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Também guardamos um mural para desenhos e recadinhos dos clientes — a parede
            mais bonita da cafeteria não fomos nós que fizemos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/historia" className="rounded-full border border-border px-6 py-3 font-bold">
              Nossa história
            </Link>
            <Link to="/localizacao" className="rounded-full border border-border px-6 py-3 font-bold">
              Como chegar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
