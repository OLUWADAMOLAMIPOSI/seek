"use client";
import { useEffect, useState } from "react";

const thoughts = [
  "Good decisions are rarely made in a rush.",
  "The right question is worth more than a fast answer.",
  "Clarity usually arrives when we stop adding and start removing.",
  "Listen first. The problem often explains itself.",
  "Progress is steady, not loud.",
];

export default function Breathe() {
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [n, setN] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p === "in" ? "out" : "in")), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-mist via-white to-sage/30 p-8 md:p-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-4xl font-extrabold text-ink">Take a breath.</h2>
          <p className="mt-4 max-w-md text-muted">
            Big decisions feel heavy. Before we talk about options, we like to slow down and get clear on what matters.
          </p>

          <div className="mt-8 rounded-2xl bg-white/70 p-6 backdrop-blur">
            <p key={n} className="fade-in min-h-[3.5rem] text-xl font-semibold text-ink">{thoughts[n]}</p>
            <button
              onClick={() => setN((n + 1) % thoughts.length)}
              className="mt-4 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Another thought
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-80 md:w-80" aria-live="polite">
          <span className="breathe absolute inset-0 rounded-full bg-sage/20" />
          <span className="breathe absolute inset-6 rounded-full bg-sage/30" style={{ animationDelay: "0.3s" }} />
          <span className="breathe absolute inset-12 rounded-full bg-brand/30" style={{ animationDelay: "0.6s" }} />
          <span className="relative z-10 text-lg font-semibold text-ink">
            {phase === "in" ? "Breathe in" : "Breathe out"}
          </span>
        </div>
      </div>
    </div>
  );
}