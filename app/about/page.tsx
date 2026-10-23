import { PageHero, CardGrid } from "@/components/PageShell";
import { values } from "@/lib/content";

export const metadata = { title: "Why SEEK exists | SEEK" };

export default function Page() {
  return (
    <>
      <PageHero title="Why SEEK exists" intro="We started SEEK to give organisations advice they can understand, defend and act on." />
      <CardGrid items={values} />
    </>
  );
}
