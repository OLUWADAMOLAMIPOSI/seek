import Link from "next/link";
import Logo from "./Logo";
import { email } from "@/lib/content";

const cols = [
  { h: "Company", l: [["About", "/about"], ["Approach", "/approach"], ["Team", "/team"]] },
  { h: "Work", l: [["Services", "/services"], ["Clients", "/clients"]] },
  { h: "Talk to us", l: [["Book a consultation", "/contact"], ["Join the list", "/#early-access"]] },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm text-white/70">Clear advice for organisations making big decisions. Launching 2026.</p>
          <a href={`mailto:${email}`} className="mt-4 inline-block text-sm text-sage">{email}</a>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="text-sm font-semibold text-sage">{c.h}</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {c.l.map(([t, h]) => (<li key={t}><Link href={h} className="hover:text-white">{t}</Link></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">&copy; 2026 SEEK Consulting Limited. Privacy. Terms.</div>
    </footer>
  );
}
