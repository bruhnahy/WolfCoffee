import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Heart, Moon, Music, Sparkles, Star } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import mascot from "@/assets/mascot-wolf.png";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, getProduct, brl } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolf Coffee | Kawaii Goth Coffee House" },
      {
        name: "description",
        content:
          "Wolf Coffee — cafeteria temática de lobos em Curitiba: cafés autorais, doces, salgados e um cantinho aconchegante para noites longas.",
      },
      { property: "og:title", content: "Wolf Coffee | Kawaii Goth Coffee House" },
      {
        property: "og:description",
        content:
          "Café para noites longas, ideias grandes e lobos famintos. Conheça o cardápio da Wolf Coffee.",
      },
    ],
  }),
  component: Home,
});

const highlightIds = [
  "moonlight-latte",
  "dark-forest-mocha",
  "midnight-coffee",
  "purple-night",
  "cookie-da-lua",
  "brownie-alcateia",
];

const testimonials = [
  {
    name: "Lia M.",
    text: "Fui pelo visual e fiquei pelo café. O Moonlight Latte é doce sem enjoar e o lugar é silencioso o suficiente pra estudar.",
    stars: 5,
  },
  {
    name: "Rafa T.",
    text: "Trilha sonora impecável, atendimento simpático e o Cookie da Lua é perigoso. Já virei frequentador de quinta à noite.",
    stars: 5,
  },
  {
    name: "Bel & Nina",
    text: "Levamos nossa cachorra e fomos super bem recebidas. O ambiente é fofo e sombrio ao mesmo tempo, adoramos.",
    stars: 4,
  },
];

function Home() {
  const highlights = highlightIds.map(getProduct).filter(Boolean);
  const special = getProduct("dark-forest-mocha");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroCafe}
          alt="Salão da Wolf Coffee à noite, com luminárias baixas, cortinas de renda e um letreiro de lua em neon lilás"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0 bg-[image:var(--gradient-night)] opacity-85"
          aria-hidden="true"
        />
        <div className="star-field pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-orn text-xs tracking-[0.45em] text-primary">
              ✦ CURITIBA · RUA DA LUA, 666 ✦
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-wide sm:text-8xl lg:text-9xl">
              WOLF
              <br />
              <span className="text-gradient-lilac">COFFEE</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Café para noites longas, ideias grandes e lobos famintos. Uma cafeteria fofa
              por fora, alternativa por dentro — e apaixonada por grão bem torrado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cardapio"
                className="glow-ring inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-lilac)] px-7 py-3.5 font-display text-xl tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Coffee className="h-5 w-5" aria-hidden="true" /> Ver cardápio
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 font-display text-xl tracking-wider text-foreground hover:bg-secondary"
              >
                Conheça a Wolf Coffee
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-primary" aria-hidden="true" /> Aberto até 23h aos sábados
              </li>
              <li className="flex items-center gap-2">
                <Music className="h-4 w-4 text-primary" aria-hidden="true" /> Vinil rodando toda noite
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" aria-hidden="true" /> Pet friendly
              </li>
            </ul>
          </div>

          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute inset-6 rounded-full bg-[image:var(--gradient-lilac)] blur-3xl opacity-40"
              aria-hidden="true"
            />
            <img
              src={mascot}
              alt="Nina, a loba mascote da Wolf Coffee, fofa e de laço lilás, segurando uma caneca de café"
              width={1024}
              height={1024}
              className="float-slow relative w-full drop-shadow-2xl"
            />
          </div>
        </div>

        {/* faixa estilo pôster de banda */}
        <div className="relative overflow-hidden border-y border-border bg-background/80 py-3">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-display text-xl tracking-[0.3em] text-primary">
            {Array.from({ length: 2 }).map((_, block) => (
              <span key={block} className="flex gap-8">
                {[
                  "★ CAFÉ AUTORAL",
                  "☾ NOITES LONGAS",
                  "♥ DOCES ARTESANAIS",
                  "✦ SOM ALTO, LUZ BAIXA",
                  "☕ PET FRIENDLY",
                  "★ LEITE VEGETAL SEM TAXA",
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-orn text-xs tracking-[0.4em] text-primary">✦ QUERIDINHOS DA CASA ✦</p>
            <h2 className="mt-2 font-display text-4xl tracking-wide md:text-6xl">
              Os mais uivados
            </h2>
          </div>
          <Link
            to="/cardapio"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-bold hover:bg-secondary"
          >
            Ver cardápio completo
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((p) => (p ? <ProductCard key={p.id} product={p} /> : null))}
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-4xl tracking-wide md:text-6xl">Nosso cardápio</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Sete categorias, do espresso curto ao combo de madrugada. Escolha por onde começar.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/cardapio"
                  search={{ cat: c.id }}
                  className="surface-card flex items-center gap-4 p-5 transition-colors hover:border-primary"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {c.icon}
                  </span>
                  <span className="font-display text-2xl tracking-wide">{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/cardapio"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 font-display text-xl tracking-wider text-primary-foreground"
            >
              Ver cardápio completo
            </Link>
          </div>
        </div>
      </section>

      {/* MASCOTE */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div className="relative">
          <div
            className="absolute inset-10 rounded-full bg-accent blur-3xl opacity-40"
            aria-hidden="true"
          />
          <img
            src={mascot}
            alt="Ilustração da mascote Nina, loba de estética kawaii e goth lolita, com laço lilás e renda preta"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative mx-auto w-full max-w-md"
          />
        </div>
        <div>
          <p className="font-orn text-xs tracking-[0.4em] text-primary">✦ A MASCOTE ✦</p>
          <h2 className="mt-2 font-display text-4xl tracking-wide md:text-6xl">
            Oi, eu sou a Nina
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Loba de gostos duvidosos em matéria de horário de sono e ótimos em matéria de
            café. Uso laço lilás, colarinho de renda e ouço disco de rock enquanto a
            máquina esquenta.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Minha regra é simples:{" "}
            <strong className="text-foreground">ninguém sai da toca com fome</strong>. Se
            estiver na dúvida, peça o Moonlight Latte e um Cookie da Lua — eu garanto.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["✦ patinha carimbada", "☾ turno da noite", "★ playlist própria", "♥ abraço grátis"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-4 py-2 font-semibold"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ATMOSFERA */}
      <section className="relative overflow-hidden border-y border-border">
        <img
          src={heroCafe}
          alt="Mesas de madeira escura com velas acesas no salão da Wolf Coffee"
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <Sparkles className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-display text-4xl tracking-wide md:text-6xl">
            Nossa atmosfera
          </h2>
          <p className="mt-5 text-xl text-muted-foreground">
            “Um cantinho aconchegante para quem gosta de café, música e noites tranquilas.”
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Para estudar", d: "Tomadas em todas as mesas e wi-fi rápido." },
              { t: "Para conversar", d: "Sofás no mezanino e som em volume gentil." },
              { t: "Para ficar só", d: "Mesinhas de canto com luminária individual." },
            ].map((i) => (
              <li key={i.t} className="surface-card p-6 text-left">
                <h3 className="font-display text-2xl tracking-wide text-primary">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DESTAQUE DA SEMANA */}
      {special ? (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="surface-card grid items-center gap-8 overflow-hidden md:grid-cols-2">
            <img
              src={special.image}
              alt={special.imageAlt}
              loading="lazy"
              width={800}
              height={800}
              className="h-full max-h-96 w-full object-cover"
            />
            <div className="p-8">
              <p className="font-orn text-xs tracking-[0.4em] text-primary">
                ✦ ESPECIAL DA SEMANA ✦
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide md:text-5xl">
                {special.name}
              </h2>
              <p className="mt-4 text-muted-foreground">{special.description}</p>
              <p className="mt-6 font-display text-4xl text-primary">
                {brl(special.price * 0.8)}{" "}
                <span className="font-sans text-base font-semibold text-muted-foreground line-through">
                  {brl(special.price)}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                20% off de terça a quinta, das 18h às 22h.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/produto/$id"
                  params={{ id: special.id }}
                  className="rounded-full bg-primary px-6 py-3 font-display text-lg tracking-wider text-primary-foreground"
                >
                  Quero esse
                </Link>
                <Link
                  to="/ofertas"
                  className="rounded-full border border-border px-6 py-3 font-display text-lg tracking-wider"
                >
                  Todas as ofertas
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 className="font-display text-4xl tracking-wide md:text-6xl">
          O que a alcateia diz
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Avaliações fictícias, criadas para este projeto demonstrativo.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="surface-card p-6">
              <p className="flex gap-1" aria-label={`${t.stars} de 5 estrelas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className={
                      i < t.stars ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-border"
                    }
                  />
                ))}
              </p>
              <p className="mt-4 text-muted-foreground">“{t.text}”</p>
              <p className="mt-4 font-display text-xl tracking-wide">{t.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
