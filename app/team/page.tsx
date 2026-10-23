import { PageHero, CardGrid } from "@/components/PageShell";
import { team } from "@/lib/content";

export const metadata = { title: "The people behind SEEK | SEEK" };

export default function Page() {
  return (
    <>
      <PageHero title="The people behind SEEK" intro="A small senior team that stays on your engagement from start to finish." />
      <CardGrid items={team} />
    </>
  );
}
