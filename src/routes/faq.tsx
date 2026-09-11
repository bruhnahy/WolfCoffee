import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "A Wolf Coffee possui opções vegetarianas?",
    a: "Sim. Todos os nossos doces são vegetarianos e temos salgados como a torta de legumes e o sanduíche artesanal. Itens veganos vêm marcados no cardápio.",
  },
  {
    q: "Posso fazer pedido para retirada?",
    a: "Pode. No checkout escolha “Retirada na cafeteria” e avisamos por e-mail quando o pedido estiver pronto no balcão.",
  },
  {
    q: "Vocês possuem bebidas geladas?",
    a: "Temos uma seção inteira: iced latte, iced mocha, cold brew de 18 horas e o Frappé da Alcateia.",
  },
  {
    q: "Posso personalizar minha bebida?",
    a: "Sim. Na página de cada bebida você escolhe o tamanho e adiciona chantilly, leite vegetal, calda, canela ou raspas de chocolate — o preço atualiza na hora.",
  },
  {
    q: "Vocês aceitam pets?",
    a: "Aceitamos! Somos pet friendly no salão principal e no jardim dos fundos. Tem potinho de água e biscoito de cortesia para os visitantes de quatro patas.",
  },
  {
    q: "Qual o horário de funcionamento?",
    a: "Segunda a sexta das 08h às 22h, sábado das 09h às 23h e domingo das 10h às 20h.",
  },
  {
    q: "Existe opção de leite vegetal?",
    a: "Sim: aveia, amêndoas e soja. Você pode trocar em qualquer bebida na opção “Leite vegetal”.",
  },
  {
    q: "Vocês fazem encomendas?",
    a: "Fazemos bolos, caixas de cookies e kits de café para eventos. Peça com pelo menos 3 dias de antecedência pela página de contato.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes | Wolf Coffee" },
      {
        name: "description",
        content:
          "Dúvidas sobre a Wolf Coffee: opções vegetarianas, leite vegetal, retirada, pets, horários e encomendas.",
      },
      { property: "og:title", content: "Perguntas frequentes | Wolf Coffee" },
      { property: "og:description", content: "As dúvidas mais comuns da alcateia." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHeader
        eyebrow="✦ DÚVIDAS FREQUENTES ✦"
        title="FAQ"
        description="As perguntas que mais chegam no nosso balcão."
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-xl tracking-wide">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="surface-card mt-12 p-6 text-center">
          <h2 className="font-display text-2xl tracking-wide">Não achou sua resposta?</h2>
          <p className="mt-2 text-muted-foreground">
            Manda uma mensagem que a alcateia responde.
          </p>
          <Link
            to="/contato"
            className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 font-display text-lg tracking-wider text-primary-foreground"
          >
            Ir para o contato
          </Link>
        </div>
      </div>
    </>
  );
}
