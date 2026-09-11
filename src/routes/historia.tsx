import { createFileRoute, Link } from "@tanstack/react-router";
import mascot from "@/assets/mascot-wolf.png";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Nossa história | Wolf Coffee" },
      {
        name: "description",
        content:
          "Como a Wolf Coffee surgiu: uma cafeteira velha, madrugadas de estudo, um caderno de desenhos e uma loba chamada Nina.",
      },
      { property: "og:title", content: "Nossa história | Wolf Coffee" },
      {
        property: "og:description",
        content: "A origem fictícia da cafeteria kawaii goth mais noturna de Curitiba.",
      },
    ],
  }),
  component: Historia,
});

const timeline = [
  {
    year: "2019",
    title: "A madrugada que começou tudo",
    text: "Duas amigas de faculdade dividiam uma cafeteira velha e noites de estudo até tarde. O café ruim virou piada, e a piada virou obsessão por aprender a fazer café bom.",
  },
  {
    year: "2021",
    title: "Por que um lobo",
    text: "Quem vira a noite acaba virando bicho noturno. O lobo apareceu como símbolo disso: alguém que anda no escuro sem medo, mas que só é feliz junto da alcateia.",
  },
  {
    year: "2022",
    title: "Kawaii encontra goth",
    text: "Nos cadernos de desenho, os lobos ganharam laços, renda e luas. Ninguém quis escolher entre fofo e sombrio — e essa recusa virou a identidade da marca.",
  },
  {
    year: "2023",
    title: "Nina ganha nome",
    text: "A mascote nasceu de um rabisco na margem de uma prova. Ganhou colarinho de renda, brinco de lua e um copo de café sempre na pata.",
  },
  {
    year: "2024",
    title: "A porta abre na Rua da Lua",
    text: "Um salão pequeno, luz baixa, cortinas de renda e um letreiro de lua em neon lilás. A primeira semana teve fila — e a primeira reclamação foi que o cookie acabou cedo demais.",
  },
];

function Historia() {
  return (
    <>
      <PageHeader
        eyebrow="✦ COMO TUDO COMEÇOU ✦"
        title="NOSSA HISTÓRIA"
        description="História fictícia, criada para dar alma a este projeto — mas contada com o carinho de quem realmente gosta de café."
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_0.6fr]">
        <ol className="relative space-y-10 border-l border-border pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span
                className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground"
                aria-hidden="true"
              >
                ☾
              </span>
              <p className="font-orn text-xs tracking-[0.4em] text-primary">{t.year}</p>
              <h2 className="mt-2 font-display text-3xl tracking-wide">{t.title}</h2>
              <p className="mt-2 text-lg text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>

        <aside className="h-fit lg:sticky lg:top-28">
          <img
            src={mascot}
            alt="Ilustração da mascote Nina com laço lilás e caneca de café"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto w-56"
          />
          <blockquote className="surface-card mt-6 p-6 text-center">
            <p className="font-orn text-lg text-foreground">
              “Café bom é o que faz você querer ficar mais um pouco.”
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">— lema da casa</footer>
          </blockquote>
          <Link
            to="/cardapio"
            className="mt-6 block rounded-full bg-primary px-6 py-3.5 text-center font-display text-xl tracking-wider text-primary-foreground"
          >
            Ver cardápio
          </Link>
        </aside>
      </div>
    </>
  );
}
