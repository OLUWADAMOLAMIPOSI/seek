"use client";
import { FormEvent, useState } from "react";

const valid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export function WaitlistForm() {
  const [value, setValue] = useState("");
  const [state, setState] = useState<"idle" | "invalid" | "done">("idle");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!valid(value)) return setState("invalid");
    // Connect this to Supabase or your email service here.
    setState("done");
  }

  if (state === "done") return <p className="fade-in rounded-2xl bg-sage/30 p-5 font-medium text-ink">You are on the list. We will write before launch.</p>;

  return (
    <form onSubmit={submit} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input value={value} onChange={(e) => { setValue(e.target.value); setState("idle"); }} type="email" placeholder="you@company.com" aria-label="Email address"
          className="flex-1 rounded-full border border-mist bg-white px-6 py-4 text-ink outline-none focus:border-brand" />
        <button className="rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:bg-ink">Join the list</button>
      </div>
      {state === "invalid" && <p className="mt-3 text-sm text-brand">That does not look like an email address.</p>}
      <p className="mt-3 text-xs text-muted">Free to join. About one email a month. Unsubscribe any time.</p>
    </form>
  );
}

export function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", topic: "Strategy and growth", message: "" });
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);
  const set = (k: string, v: string) => { setF({ ...f, [k]: v }); setErr(""); };

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!f.name.trim()) return setErr("Enter your name.");
    if (!valid(f.email)) return setErr("Enter a valid email address.");
    if (f.message.trim().length < 10) return setErr("Tell us a little more, at least a sentence.");
    // Connect this to Supabase or your email service here.
    setDone(true);
  }

  if (done) return <p className="fade-in rounded-2xl bg-sage/30 p-6 font-medium text-ink">Thank you, {f.name}. We will reply within two working days.</p>;

  const field = "w-full rounded-2xl border border-mist bg-white px-5 py-4 text-ink outline-none focus:border-brand";
  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <input className={field} placeholder="Your name" value={f.name} onChange={(e) => set("name", e.target.value)} />
      <input className={field} placeholder="Email address" type="email" value={f.email} onChange={(e) => set("email", e.target.value)} />
      <select className={field} value={f.topic} onChange={(e) => set("topic", e.target.value)}>
        {["Strategy and growth", "Operations and process", "Digital and technology", "Market entry and policy", "Something else"].map((t) => <option key={t}>{t}</option>)}
      </select>
      <textarea className={field} rows={5} placeholder="What are you trying to decide?" value={f.message} onChange={(e) => set("message", e.target.value)} />
      {err && <p className="text-sm text-brand">{err}</p>}
      <button className="rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:bg-ink">Send message</button>
    </form>
  );
}
