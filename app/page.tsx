import Link from "next/link";
import Reveal from "@/components/Reveal";
import ApproachTabs from "@/components/Approach";
import Image from "next/image";
import Compare from "@/components/Compare";
import { WaitlistForm } from "@/components/Forms";
import { explore, sectors } from "@/lib/content";
import Planner from "@/components/Planner";
import Breathe from "@/components/Breathe";
import { Testimonial, TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=faces&auto=format`;

const testimonials: Testimonial[] = [
  { text: "I understood the whole process in two minutes. No guessing, no back-and-forth.", image: u("photo-1507003211169-0a1dd7228f2d"), name: "Tunde B.", role: "Verified customer" },
  { text: "Everything is exactly where you expect it to be. It just works.", image: u("photo-1494790108377-be9c29b29330"), name: "Adaeze O.", role: "Repeat buyer" },
  { text: "Fast, clear and honest. I recommended it to my whole family.", image: u("photo-1500648767791-00dcc994a43e"), name: "Chidi E.", role: "Verified customer" },
  { text: "From browsing to checkout, nothing felt confusing. Delivery updates were a nice touch.", image: u("photo-1438761681033-6461ffad8d80"), name: "Ngozi A.", role: "Repeat buyer" },
  { text: "The experience feels premium without being complicated.", image: u("photo-1472099645785-5658abf4ff4e"), name: "Emeka U.", role: "Verified customer" },
  { text: "I got answers quickly and my order arrived exactly as described.", image: u("photo-1544005313-94ddf0286df2"), name: "Halima Y.", role: "First-time buyer" },
  { text: "Clean, simple and trustworthy. That's rare online.", image: u("photo-1531427186611-ecfd6d936c79"), name: "Funke A.", role: "Repeat buyer" },
  { text: "I came for one thing and stayed to explore everything else.", image: u("photo-1506794778202-cad84cf45f1d"), name: "Ibrahim S.", role: "Verified customer" },
];

const colA = testimonials.slice(0, 4);
const colB = testimonials.slice(4, 8);


const commitments = ["Written scope", "Fixed timeline", "Named team", "Plain-language reports"];

export default function Home() {
  return (
    <>
      <section className="px-4 pt-24 pb-6 md:px-6">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
          <Image src="/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-brand/60" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-white md:text-7xl">
                Clear answers for the decisions that matter.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/80">
                SEEK is a consultancy that pairs sharp analysis with hands-on delivery, so a good recommendation becomes a result you can measure.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-sage px-8 py-4 font-semibold text-ink transition hover:bg-white">
                  Book a consultation
                </Link>
                <Link href="/approach" className="rounded-full bg-white/15 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/25">
                  See how we work
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
              <span className="pulse-ring absolute inset-8 rounded-full border-2 border-sage" />
              <span className="pulse-ring absolute inset-8 rounded-full border-2 border-sage" style={{ animationDelay: "1.8s" }} />
              <div className="float flex h-44 w-44 items-center justify-center rounded-[2.5rem] bg-brand shadow-xl md:h-56 md:w-56">
                <svg viewBox="0 0 38 38" className="h-24 w-24 md:h-32 md:w-32" fill="none">
                  <circle className="draw" cx="17" cy="17" r="8" stroke="#fff" strokeWidth="2.2" />
                  <path className="draw" d="M23 23 L30 30" stroke="#8DB8AB" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M17 12 L20 17 L17 22 L14 17 Z" fill="#8DB8AB" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Soothing breathing section */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal><Breathe /></Reveal>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="max-w-2xl text-4xl font-extrabold text-ink">Consulting you can plan around.</h2>
            <p className="mt-4 max-w-2xl text-muted">Scope, price and timeline are agreed before work starts. Every engagement leaves a written record you can show your board. Pick a size to see how it plays out.</p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Reveal><Planner /></Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-ink">How we compare</h3>
                <Compare />
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, n) => (
              <Reveal key={c} delay={n * 70}>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-5">
                  <svg className="h-6 w-6 shrink-0 text-brand" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="#E3EBEC" />
                    <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-semibold text-ink">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    

  <section className="mx-auto max-w-6xl px-6 py-24">
    <Reveal>
      <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-brand p-8 text-white md:p-14 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-sm text-white/80">
            Real people
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Don&apos;t take our word for it.
          </h2>
          <p className="mt-4 max-w-md text-white/80">
            Here&apos;s what customers say once they&apos;ve seen how it all works.
          </p>
        </div>

        <div className="flex max-h-[560px] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsColumn testimonials={colA} duration={22} />
          <TestimonialsColumn testimonials={colB} duration={28} className="hidden sm:block" />
        </div>
      </div>
    </Reveal>
  </section>
      <section id="early-access" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-28 text-center">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-ink">Hear it first when we go live.</h2>
          <p className="mt-4 text-muted">Leave your email and we will tell you the moment SEEK opens its doors.</p>
          <div className="mt-8 text-left"><WaitlistForm /></div>
        </Reveal>
      </section>
    </>
  );
}