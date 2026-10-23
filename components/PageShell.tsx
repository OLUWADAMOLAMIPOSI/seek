import { ReactNode } from "react";
import Reveal from "./Reveal";

export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="bg-mist pt-40 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
      </div>
    </section>
  );
}

export function CardGrid({ items }: { items: { title?: string; role?: string; text: string }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it, n) => (
          <Reveal key={n} delay={n * 80}>
            <div className="h-full rounded-3xl bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl font-bold text-ink">{it.title ?? it.role}</h3>
              <p className="mt-3 text-muted">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Band({ children }: { children: ReactNode }) {
  return <section className="mx-auto max-w-6xl px-6 pb-20">{children}</section>;
}
