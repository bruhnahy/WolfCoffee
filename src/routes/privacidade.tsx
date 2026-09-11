import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade | Wolf Coffee" },
      {
        name: "description",
        content:
          "Como a Wolf Coffee trata dados neste projeto demonstrativo: nada é enviado a servidores e o carrinho fica salvo apenas no seu navegador.",
      },
      { property: "og:title", content: "Política de privacidade | Wolf Coffee" },
      {
        property: "og:description",
        content: "Informações sobre dados neste site demonstrativo.",
      },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <>
      <PageHeader eyebrow="✦ TRANSPARÊNCIA ✦" title="POLÍTICA DE PRIVACIDADE" />
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-muted-foreground sm:px-6">
        <p>
          Este site é um projeto demonstrativo de uma cafeteria fictícia. Nenhuma
          informação preenchida nos formulários é enviada, armazenada em servidores ou
          compartilhada com terceiros.
        </p>
        <h2 className="font-display text-3xl tracking-wide text-foreground">
          Dados do carrinho
        </h2>
        <p>
          Os itens que você adiciona ao carrinho ficam salvos apenas no armazenamento local
          do seu próprio navegador, para que o pedido não se perca ao navegar entre as
          páginas. Você pode apagá-los esvaziando o carrinho ou limpando os dados do
          navegador.
        </p>
        <h2 className="font-display text-3xl tracking-wide text-foreground">Formulários</h2>
        <p>
          Os formulários de contato e de finalização de pedido validam os campos apenas no
          seu dispositivo e exibem uma mensagem de sucesso simulada. Não solicitamos dados
          de cartão de crédito.
        </p>
        <h2 className="font-display text-3xl tracking-wide text-foreground">Cookies</h2>
        <p>
          Não utilizamos cookies de rastreamento nem ferramentas de publicidade neste
          projeto.
        </p>
      </div>
    </>
  );
}
