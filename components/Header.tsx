"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { email, nav } from "@/lib/content";

const buttonStyle =
  "rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = nav.filter((n) => n.href !== "/contact");

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled && !open ? "bg-paper/90 shadow-sm backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" aria-label="SEEK home" className="justify-self-start">
            <Logo light={open} />
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-ink/15 bg-white/50 p-1 backdrop-blur lg:flex"
            aria-label="Main"
          >
            {links.map((n) => {
              const active = path === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-mist hover:text-ink ${
                    active ? "text-ink" : "text-muted"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 lg:justify-self-end">
            <div className="hidden items-center gap-3 lg:flex">
              <Link href="/contact" className={buttonStyle}>
                Contact
              </Link>
              <Link href="/#early-access" className={buttonStyle}>
                Join the waitlist
              </Link>
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition lg:hidden ${
                open ? "bg-white/15 text-white" : "bg-mist text-ink"
              }`}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 text-white transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          {links.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              tabIndex={open ? 0 : -1}
              className={`flex items-center justify-between border-b border-white/10 py-4 text-3xl font-bold transition-colors hover:text-sage ${
                path === n.href ? "text-sage" : "text-white"
              } ${open ? "fade-in" : ""}`}
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              {n.label}
              <span className="text-sm font-medium text-white/40">{`0${i + 1}`}</span>
            </Link>
          ))}
        </nav>

        <div className="space-y-5">
          <a href={`mailto:${email}`} className="block text-lg font-semibold text-sage">
            {email}
          </a>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/contact"
              tabIndex={open ? 0 : -1}
              className="rounded-full bg-sage py-4 text-center font-semibold text-ink transition hover:bg-white"
            >
              Contact
            </Link>
            <Link
              href="/#early-access"
              tabIndex={open ? 0 : -1}
              className="rounded-full bg-sage py-4 text-center font-semibold text-ink transition hover:bg-white"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}