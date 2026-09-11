import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { itemTotal, useCart } from "@/lib/cart";
import { brl } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Finalizar pedido | Wolf Coffee" },
      {
        name: "description",
        content:
          "Finalize seu pedido na Wolf Coffee: retirada na cafeteria ou entrega, com resumo completo. Checkout demonstrativo, sem pagamento real.",
      },
      { property: "og:title", content: "Finalizar pedido | Wolf Coffee" },
      {
        property: "og:description",
        content: "Checkout simulado da Wolf Coffee, sem cobrança real.",
      },
    ],
  }),
  component: Checkout,
});

const DELIVERY_FEE = 9.9;

type Errors = Record<string, string>;

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [mode, setMode] = useState<"retirada" | "entrega">("retirada");
  const [payment, setPayment] = useState("pix");
  const [errors, setErrors] = useState<Errors>({});
  const [orderId, setOrderId] = useState<string | null>(null);

  const fee = mode === "entrega" ? DELIVERY_FEE : 0;
  const total = subtotal + fee;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const required: [string, string][] = [
      ["nome", "Informe seu nome."],
      ["email", "Informe um e-mail."],
      ["telefone", "Informe um telefone para contato."],
    ];
    if (mode === "entrega") {
      required.push(
        ["rua", "Informe a rua."],
        ["numero", "Informe o número."],
        ["bairro", "Informe o bairro."],
        ["cidade", "Informe a cidade."],
        ["cep", "Informe o CEP."],
      );
    }
    for (const [field, message] of required) {
      if (!String(data.get(field) ?? "").trim()) next[field] = message;
    }
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next["email"] = "E-mail inválido.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setOrderId(`WC-${Math.floor(1000 + Math.random() * 9000)}`);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (orderId) {
    return (
      <>
        <PageHeader eyebrow="✦ TUDO CERTO ✦" title="PEDIDO RECEBIDO" />
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
          <CheckCircle2 className="mx-auto h-16 w-16 text-primary" aria-hidden="true" />
          <h2 className="mt-6 font-display text-4xl tracking-wide">Pedido recebido! 🐺☕</h2>
          <p className="mt-3 text-muted-foreground">
            Seu número de pedido é{" "}
            <strong className="text-foreground">{orderId}</strong>. A alcateia já está
            aquecendo a máquina.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Este é um pedido simulado, criado apenas para demonstração. Nenhuma cobrança
            foi feita.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/cardapio"
              className="rounded-full bg-primary px-6 py-3 font-display text-lg tracking-wider text-primary-foreground"
            >
              Pedir mais
            </Link>
            <Link to="/" className="rounded-full border border-border px-6 py-3 font-bold">
              Voltar ao início
            </Link>
          </div>
        </div>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <PageHeader eyebrow="✦ FINALIZAR PEDIDO ✦" title="CHECKOUT" />
        <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl tracking-wide">
            Não há nada para finalizar ainda
          </h2>
          <p className="mt-2 text-muted-foreground">
            Seu bando está vazio… 🐺 Escolha um café antes de seguir.
          </p>
          <Link
            to="/cardapio"
            className="mt-6 inline-flex rounded-full bg-primary px-7 py-3.5 font-display text-xl tracking-wider text-primary-foreground"
          >
            Ver cardápio
          </Link>
        </div>
      </>
    );
  }

  const field =
    "mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const Error = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1 text-sm font-semibold text-destructive">⚠ {errors[name]}</p>
    ) : null;

  return (
    <>
      <PageHeader
        eyebrow="✦ FINALIZAR PEDIDO ✦"
        title="CHECKOUT"
        description="Pedido demonstrativo: não pedimos dados de cartão e nenhuma cobrança é feita."
      />

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr]"
      >
        <div className="space-y-8">
          <fieldset className="surface-card p-6">
            <legend className="px-2 font-display text-2xl tracking-wide text-primary">
              Seus dados
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="text-sm font-bold">Nome completo</span>
                <input name="nome" className={field} autoComplete="name" />
                <Error name="nome" />
              </label>
              <label className="block">
                <span className="text-sm font-bold">E-mail</span>
                <input name="email" type="email" className={field} autoComplete="email" />
                <Error name="email" />
              </label>
              <label className="block">
                <span className="text-sm font-bold">Telefone</span>
                <input name="telefone" type="tel" className={field} autoComplete="tel" />
                <Error name="telefone" />
              </label>
            </div>
          </fieldset>

          <fieldset className="surface-card p-6">
            <legend className="px-2 font-display text-2xl tracking-wide text-primary">
              Tipo de pedido
            </legend>
            <div className="flex flex-wrap gap-3">
              {(["retirada", "entrega"] as const).map((m) => (
                <label
                  key={m}
                  className={`cursor-pointer rounded-full border px-5 py-3 text-sm font-bold ${
                    mode === m
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary"
                  }`}
                >
                  <input
                    type="radio"
                    name="modo"
                    checked={mode === m}
                    onChange={() => setMode(m)}
                    className="sr-only"
                  />
                  {m === "retirada" ? "Retirada na cafeteria" : `Entrega (+${brl(DELIVERY_FEE)})`}
                </label>
              ))}
            </div>

            {mode === "entrega" ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-sm font-bold">Rua</span>
                  <input name="rua" className={field} autoComplete="address-line1" />
                  <Error name="rua" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold">Número</span>
                  <input name="numero" className={field} />
                  <Error name="numero" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold">Complemento</span>
                  <input name="complemento" className={field} />
                </label>
                <label className="block">
                  <span className="text-sm font-bold">Bairro</span>
                  <input name="bairro" className={field} />
                  <Error name="bairro" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold">Cidade</span>
                  <input name="cidade" className={field} />
                  <Error name="cidade" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold">CEP</span>
                  <input name="cep" className={field} autoComplete="postal-code" />
                  <Error name="cep" />
                </label>
              </div>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                Retirada na Rua da Lua, 666 — Curitiba/PR. Avisamos por e-mail quando
                estiver pronto.
              </p>
            )}
          </fieldset>

          <fieldset className="surface-card p-6">
            <legend className="px-2 font-display text-2xl tracking-wide text-primary">
              Forma de pagamento
            </legend>
            <div className="flex flex-wrap gap-3">
              {[
                { id: "pix", label: "PIX" },
                { id: "cartao", label: "Cartão (na entrega/retirada)" },
                { id: "dinheiro", label: "Dinheiro" },
              ].map((p) => (
                <label
                  key={p.id}
                  className={`cursor-pointer rounded-full border px-5 py-3 text-sm font-bold ${
                    payment === p.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary"
                  }`}
                >
                  <input
                    type="radio"
                    name="pagamento"
                    checked={payment === p.id}
                    onChange={() => setPayment(p.id)}
                    className="sr-only"
                  />
                  {p.label}
                </label>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Projeto demonstrativo: não solicitamos dados de cartão nem processamos
              pagamentos.
            </p>
          </fieldset>
        </div>

        <aside className="surface-card h-fit p-6 lg:sticky lg:top-28">
          <h2 className="font-display text-3xl tracking-wide">Resumo do pedido</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((i) => (
              <li key={i.key} className="flex justify-between gap-3 border-b border-border pb-3">
                <span>
                  <strong>
                    {i.quantity}x {i.name}
                  </strong>
                  {i.size ? (
                    <span className="block text-muted-foreground">{i.size.label}</span>
                  ) : null}
                  {i.extras.length > 0 ? (
                    <span className="block text-muted-foreground">
                      {i.extras.map((e) => e.label).join(", ")}
                    </span>
                  ) : null}
                </span>
                <span className="font-bold">{brl(itemTotal(i))}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd className="font-bold">{brl(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Taxa de entrega</dt>
              <dd className="font-bold">{fee ? brl(fee) : "Grátis"}</dd>
            </div>
          </dl>
          <p className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
            <span className="font-display text-2xl tracking-wide">Total</span>
            <span className="font-display text-4xl text-primary">{brl(total)}</span>
          </p>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[image:var(--gradient-lilac)] px-6 py-3.5 font-display text-xl tracking-wider text-primary-foreground"
          >
            Confirmar pedido
          </button>
          <Link
            to="/carrinho"
            className="mt-3 block rounded-full border border-border px-6 py-3 text-center font-bold"
          >
            Voltar ao carrinho
          </Link>
        </aside>
      </form>
    </>
  );
}
