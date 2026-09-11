import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Wolf Coffee" },
      {
        name: "description",
        content:
          "Fale com a Wolf Coffee: envie uma mensagem, tire dúvidas sobre encomendas ou combine um evento na cafeteria.",
      },
      { property: "og:title", content: "Contato | Wolf Coffee" },
      { property: "og:description", content: "Envie uma mensagem para a alcateia." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const [field, message] of [
      ["nome", "Informe seu nome."],
      ["email", "Informe um e-mail."],
      ["assunto", "Informe o assunto."],
      ["mensagem", "Escreva sua mensagem."],
    ] as [string, string][]) {
      if (!String(data.get(field) ?? "").trim()) next[field] = message;
    }
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next["email"] = "E-mail inválido.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    form.reset();
    setSent(true);
    toast.success("Mensagem enviada! Respondemos em até 1 dia útil. 🐺");
  };

  const field =
    "mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <>
      <PageHeader
        eyebrow="✦ FALE COM A ALCATEIA ✦"
        title="CONTATO"
        description="Dúvidas, encomendas, parcerias ou só para elogiar o cookie: escreva pra gente."
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.7fr]">
        <form onSubmit={onSubmit} noValidate className="surface-card p-6 sm:p-8">
          {sent ? (
            <p
              role="status"
              className="mb-6 rounded-xl border border-primary bg-secondary px-4 py-3 font-semibold"
            >
              ✓ Mensagem enviada com sucesso. Este é um formulário demonstrativo — nada é
              realmente enviado.
            </p>
          ) : null}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold">Nome</span>
              <input name="nome" className={field} autoComplete="name" />
              {errors["nome"] ? (
                <span className="mt-1 block text-sm font-semibold text-destructive">
                  ⚠ {errors["nome"]}
                </span>
              ) : null}
            </label>
            <label className="block">
              <span className="text-sm font-bold">E-mail</span>
              <input name="email" type="email" className={field} autoComplete="email" />
              {errors["email"] ? (
                <span className="mt-1 block text-sm font-semibold text-destructive">
                  ⚠ {errors["email"]}
                </span>
              ) : null}
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-bold">Assunto</span>
              <input name="assunto" className={field} />
              {errors["assunto"] ? (
                <span className="mt-1 block text-sm font-semibold text-destructive">
                  ⚠ {errors["assunto"]}
                </span>
              ) : null}
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-bold">Mensagem</span>
              <textarea name="mensagem" rows={6} className={field} />
              {errors["mensagem"] ? (
                <span className="mt-1 block text-sm font-semibold text-destructive">
                  ⚠ {errors["mensagem"]}
                </span>
              ) : null}
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-full bg-[image:var(--gradient-lilac)] px-8 py-3.5 font-display text-xl tracking-wider text-primary-foreground"
          >
            Enviar mensagem
          </button>
        </form>

        <aside className="surface-card h-fit p-6">
          <h2 className="font-display text-3xl tracking-wide">Outros caminhos</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
              <span>
                <strong className="block">Telefone / WhatsApp</strong>
                (41) 3666-0666
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
              <span>
                <strong className="block">E-mail</strong>
                alcateia@wolfcoffee.com.br
              </span>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
              <span>
                <strong className="block">Redes sociais (fictícias)</strong>
                @wolfcoffee.br · @wolf.coffee.night
              </span>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Todos os contatos são fictícios e existem apenas para fins de demonstração.
          </p>
        </aside>
      </div>
    </>
  );
}
