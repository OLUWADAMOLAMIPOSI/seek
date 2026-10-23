import { PageHero, CardGrid } from "@/components/PageShell";
import { services } from "@/lib/content";

export const metadata = { title: "What we do | SEEK" };

export default function Page() {
  return (
    <>
      <PageHero title="What we do" intro="Four practice areas, each scoped in writing before work begins." />
      <CardGrid items={services} />
    </>
  );
}
