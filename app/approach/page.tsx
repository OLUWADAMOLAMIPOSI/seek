import { PageHero, Band } from "@/components/PageShell";
import ApproachTabs from "@/components/Approach";

export const metadata = { title: "Approach | SEEK" };

export default function Page() {
  return (
    <>
      <PageHero title="Three stages, one record" intro="Every engagement follows the same path, so you always know where you are and what comes next." />
      <div className="pt-20"><Band><ApproachTabs /></Band></div>
    </>
  );
}
