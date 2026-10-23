"use client";
import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/image";

const phases = ["Discover", "Design", "Deliver"];
const phaseColors = ["bg-brand", "bg-sage", "bg-muted/50"];

const engagements = [
  {
    id: "sprint", name: "Sprint", length: "2 to 4 weeks", pos: "20% 60%", split: [40, 40, 20],
    best: "One urgent question that needs a clear answer fast.",
    team: "1 partner and 1 consultant",
    gets: ["A clear problem statement", "Two costed options", "A recommendation memo"],
  },
  {
    id: "project", name: "Project", length: "6 to 12 weeks", pos: "80% 45%", split: [25, 35, 40],
    best: "A defined change, such as a new market, system or structure.",
    team: "1 partner and 2 to 3 consultants",
    gets: ["Full fact base and analysis", "Options paper with risks", "Delivery plan and weekly reports", "Handover pack and training"],
  },
  {
    id: "partnership", name: "Partnership", length: "6 months or more", pos: "65% 10%", split: [15, 25, 60],
    best: "Ongoing support through a larger transformation.",
    team: "A named senior team on call",
    gets: ["Quarterly strategy reviews", "Embedded delivery support", "Board-ready progress reports", "Capability building for your team"],
  },
];

export default function Planner() {
  const [i, setI] = useState(1);
  const e = engagements[i];

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="relative h-44 overflow-hidden bg-ink">
        {engagements.map((x, n) => (
          <Image
                key={x.id}
                src={images.planner[n]}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`object-cover transition-all duration-1000 ${n === i ? "scale-110 opacity-100" : "scale-100 opacity-0"}`}
            />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-brand/30" />
        <p className="absolute bottom-5 left-6 text-sm font-medium text-white/80">Pick the size of your engagement</p>
      </div>

      <div className="p-6 md:p-8">
        <div role="tablist" className="flex gap-2 rounded-full bg-mist p-1">
          {engagements.map((x, n) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={n === i}
              onClick={() => setI(n)}
              className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition ${n === i ? "bg-brand text-white shadow" : "text-muted hover:text-ink"}`}
            >
              {x.name}
            </button>
          ))}
        </div>

        <div key={e.id} className="fade-in mt-6">
          <p className="text-ink">{e.best}</p>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-mist p-4">
              <p className="text-xs text-muted">Typical length</p>
              <p className="mt-1 font-bold text-ink">{e.length}</p>
            </div>
            <div className="rounded-2xl bg-mist p-4">
              <p className="text-xs text-muted">Team</p>
              <p className="mt-1 font-bold text-ink">{e.team}</p>
            </div>
          </div>

          <p className="mb-2 mt-6 text-sm font-semibold text-ink">Where the time goes</p>
          <div className="flex h-4 gap-1 overflow-hidden rounded-full">
            {e.split.map((p, n) => (
              <div key={n} className={`${phaseColors[n]} transition-all duration-700`} style={{ width: `${p}%` }} />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
            {phases.map((p, n) => (
              <span key={p} className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${phaseColors[n]}`} />
                {p} {e.split[n]}%
              </span>
            ))}
          </div>

          <p className="mb-2 mt-6 text-sm font-semibold text-ink">What you get</p>
          <ul className="space-y-2">
            {e.gets.map((g) => (
              <li key={g} className="flex items-center gap-3 text-sm text-ink">
                <span className="h-2 w-2 rounded-full bg-sage" />
                {g}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-xs text-muted">Indicative only. Final scope, price and timeline are agreed in writing before work starts.</p>
      </div>
    </div>
  );
}