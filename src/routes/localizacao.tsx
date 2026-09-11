import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, Car, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização e horários | Wolf Coffee" },
      {
        name: "description",
        content:
          "Wolf Coffee fica na Rua da Lua, 666, Curitiba - PR. Veja horários de funcionamento e como chegar.",
      },
      { property: "og:title", content: "Localização e horários | Wolf Coffee" },
      {
        property: "og:description",
        content: "Rua da Lua, 666 — Curitiba/PR. Aberto todos os dias.",
      },
    ],
  }),
  component: Localizacao,
});

const hours = [
  { d: "Segunda a sexta", h: "08h às 22h" },
  { d: "Sábado", h: "09h às 23h" },
  { d: "Domingo", h: "10h às 20h" },
];

function Localizacao() {
  return (
    <>
      <PageHeader
        eyebrow="✦ VENHA UIVAR CONOSCO ✦"
        title="LOCALIZAÇÃO"
        description="Endereço fictício, criado para este projeto demonstrativo."
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl tracking-wide">Onde estamos</h2>
          <address className="mt-4 not-italic text-lg text-muted-foreground">
            <span className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Rua da Lua, 666
                <br />
                Curitiba — PR
              </span>
            </span>
          </address>

          <h2 className="mt-10 font-display text-4xl tracking-wide">Horários</h2>
          <dl className="mt-4 divide-y divide-border">
            {hours.map((h) => (
              <div key={h.d} className="flex justify-between py-3">
                <dt className="font-semibold">{h.d}</dt>
                <dd className="text-muted-foreground">{h.h}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-display text-4xl tracking-wide">Como chegar</h2>
          <ul className="mt-4 space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <Bus className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              Duas quadras do terminal central, com ponto de ônibus na esquina.
            </li>
            <li className="flex gap-3">
              <Car className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              Estacionamento conveniado ao lado, com desconto para clientes.
            </li>
          </ul>

          <Link
            to="/contato"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 font-display text-xl tracking-wider text-primary-foreground"
          >
            Falar com a gente
          </Link>
        </div>

        <div className="surface-card relative flex min-h-80 items-center justify-center overflow-hidden p-8 text-center">
          <div className="star-field absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <MapPin className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
            <p className="mt-4 font-display text-3xl tracking-wide">Espaço para o mapa</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Área reservada para incorporar um mapa interativo. Como o endereço é
              fictício, deixamos o espaço preparado para receber o mapa real quando a
              cafeteria existir de verdade.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
