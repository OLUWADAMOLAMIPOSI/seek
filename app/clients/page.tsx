import { PageHero, CardGrid } from "@/components/PageShell";
import { clients } from "@/lib/content";

export const metadata = { title: "Who we work with | SEEK" };

export default function Page() {
  return (
    <>
      <PageHero title="Who we work with" intro="Organisations of different sizes, all facing a decision that is hard to get wrong." />
      <CardGrid items={clients} />
    </>
  );
}
