import { PageHero } from "@/components/PageShell";
import { ContactForm } from "@/components/Forms";
import { email } from "@/lib/content";

export const metadata = { title: "Contact | SEEK" };

export default function Page() {
  return (
    <>
      <PageHero title="Book a consultation" intro="Tell us what you are trying to decide. We reply within two working days." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />
        <div className="rounded-3xl bg-brand p-8 text-white">
          <h3 className="text-2xl font-bold">Prefer email?</h3>
          <p className="mt-3 text-white/80">Write to us directly and a partner will pick it up.</p>
          <a href={`mailto:${email}`} className="mt-6 inline-block font-semibold text-sage">{email}</a>
        </div>
      </section>
    </>
  );
}
