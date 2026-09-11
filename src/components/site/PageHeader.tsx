import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card/40">
      <div className="star-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        {eyebrow ? (
          <p className="font-orn text-xs tracking-[0.4em] text-primary">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 font-display text-5xl tracking-wide md:text-7xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
