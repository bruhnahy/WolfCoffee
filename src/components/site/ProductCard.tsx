import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { brl, sizeOptions, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const quickAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      unitPrice: product.price,
      quantity: 1,
      ...(product.sizes ? { size: sizeOptions[0] } : {}),
      extras: [],
    });
    toast.success(`${product.name} entrou no carrinho 🐺`);
  };

  return (
    <article className="surface-card group flex flex-col overflow-hidden">
      <Link
        to="/produto/$id"
        params={{ id: product.id }}
        className="relative block aspect-square overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-wider text-primary-foreground">
            {product.badge}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-2xl tracking-wide">
          <Link
            to="/produto/$id"
            params={{ id: product.id }}
            className="hover:text-primary"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{product.short}</p>
        <p className="mt-auto pt-3 font-display text-2xl text-primary">
          {brl(product.price)}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={quickAdd}
            className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-black text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Adicionar ao carrinho
          </button>
          <Link
            to="/produto/$id"
            params={{ id: product.id }}
            className="rounded-full border border-border px-4 py-2.5 text-sm font-bold text-foreground hover:bg-secondary"
          >
            Ver
          </Link>
        </div>
      </div>
    </article>
  );
}
