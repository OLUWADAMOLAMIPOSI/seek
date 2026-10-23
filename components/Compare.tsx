"use client";
import { useInView } from "./Reveal";
import { compare } from "@/lib/content";

export default function Compare() {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="space-y-8">
      {compare.map((c) => (
        <div key={c.label}>
          <p className="mb-3 font-semibold text-ink">{c.label}</p>
          {[{ n: "Typical engagement", v: c.typical, cls: "bg-muted/40" }, { n: "SEEK", v: c.seek, cls: "bg-brand" }].map((b) => (
            <div key={b.n} className="mb-2 flex items-center gap-4">
              <span className="w-36 text-sm text-muted">{b.n}</span>
              <div className="h-3 flex-1 rounded-full bg-mist">
                <div className={`h-3 rounded-full transition-all duration-1000 ease-out ${b.cls}`} style={{ width: seen ? `${b.v}%` : "0%" }} />
              </div>
            </div>
          ))}
        </div>
      ))}
      <p className="text-xs text-muted">Illustrative comparison. Replace with your own measured figures before launch.</p>
    </div>
  );
}
