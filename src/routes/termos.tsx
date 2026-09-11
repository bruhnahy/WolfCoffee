import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de uso | Wolf Coffee" },
      {
        name: "description",
        content:
          "Termos de uso do site demonstrativo da Wolf Coffee: cafeteria, produtos, preços e depoimentos são fictícios.",
      },
      { property: "og:title", content: "Termos de uso | Wolf Coffee" },
      { property: "og:description", content: "Regras de uso deste site demonstrativo." },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <>
      <PageHeader eyebrow="✦ REGRAS DA CASA ✦" title="TERMOS DE USO" />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-muted-foreground sm:px-6">
        <h2 className="font-display text-3xl tracking-wide text-foreground">
          Natureza do projeto
        </h2>
        <p>
          A Wolf Coffee é uma cafeteria fictícia. Nome, endereço, telefones, redes sociais,
          preços, produtos, depoimentos e promoções foram criados apenas para demonstrar a
          estrutura de um site de cafeteria com pedidos.
        </p>
        <h2 className="font-display text-3xl tracking-wide text-foreground">Pedidos</h2>
        <p>
          O carrinho e a finalização de pedido funcionam de forma simulada. Nenhum pedido
          é produzido, entregue ou cobrado, e nenhum pagamento real é processado.
        </p>
        <h2 className="font-display text-3xl tracking-wide text-foreground">
          Identidade visual
        </h2>
        <p>
          A marca, a mascote Nina e todas as ilustrações foram criadas originalmente para
          este projeto, sem reproduzir personagens, logotipos ou identidades de marcas
          existentes.
        </p>
        <h2 className="font-display text-3xl tracking-wide text-foreground">Conteúdo</h2>
        <p>
          As imagens de produtos são ilustrativas. As informações sobre ingredientes e
          alergênicos são exemplos e não devem ser usadas como referência alimentar real.
        </p>
      </div>
    </>
  );
}
