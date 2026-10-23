"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { steps } from "@/lib/content";
import { images } from "@/lib/image";
const DURATION = 7000;

export default function ApproachTabs() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openQ, setOpenQ] = useState<number | null>(0);
  const [reduce, setReduce] = useState(false);
  const s = steps[i];

  function select(n: number) {
    setI(n);
    setOpenQ(0);
  }

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => select((i + 1) % steps.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused, reduce]);

  return (
    <div
      className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="space-y-3">
        {steps.map((t, n) => {
          const active = n === i;
          return (
            <button
              key={t.id}
              onClick={() => select(n)}
              aria-pressed={active}
              className={`relative w-full overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                active ? "bg-brand text-white shadow-lg" : "bg-mist text-ink hover:bg-sage/30"
              }`}
            >
              <span className="text-sm opacity-70">{t.no}</span>
              <span className="block text-xl font-bold">{t.title}</span>
              <span className="block text-sm opacity-80">{t.kicker}</span>
              {active && (
                <span className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
                  <span
                    key={`${i}-${paused}`}
                    className={`block h-full bg-sage ${paused || reduce ? "w-full" : "progress"}`}
                  />
                </span>
              )}
            </button>
          );
        })}
        <p className="px-2 pt-2 text-sm text-muted">Hover to pause. Select a stage to jump to it.</p>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="relative h-56 overflow-hidden bg-ink md:h-64">
          {steps.map((t, n) => (
            <Image
              key={t.id}
              src={images.steps[n]}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={`object-cover transition-all duration-1000 ${n === i ? "scale-110 opacity-100" : "scale-100 opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-brand/30" />
          <span className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            {s.duration}
          </span>
          <span className="absolute bottom-5 left-5 rounded-full bg-sage px-4 py-1.5 text-sm font-semibold text-ink">
            {s.tag}
          </span>
        </div>

        <div key={s.id} className="fade-in p-8 md:p-10">
          <h3 className="text-3xl font-bold text-ink">{s.title}</h3>
          <p className="mt-3 text-muted">{s.text}</p>

          <ul className="mt-6 space-y-3">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink">
                <svg className="h-5 w-5 shrink-0 text-brand" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="#E3EBEC" />
                  <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-mist p-4 text-sm">
            <span className="font-semibold text-ink">You receive: </span>
            <span className="text-muted">{s.deliverable}</span>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm font-semibold text-ink">Questions we ask</p>
            {s.questions.map((item, n) => {
              const isOpen = openQ === n;
              return (
                <div key={item.q} className="border-b border-mist">
                  <button
                    onClick={() => setOpenQ(isOpen ? null : n)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-3 text-left text-ink"
                  >
                    <span className="font-medium">{item.q}</span>
                    <span className={`text-xl text-brand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
                    <p className="min-h-0 overflow-hidden text-sm text-muted">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}