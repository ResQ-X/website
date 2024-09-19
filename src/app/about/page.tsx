import { AboutOverview } from "@/views/about/AboutOverview";
import Faqs from "../faqs/page";
import { AboutHero } from "@/views/about/AboutHero";
import { AboutCoreValues } from "@/views/about/AboutCoreValues";
import { AboutTeam } from "@/views/about/AboutTeam";

export default function Page() {
  return (
    <div>
      <AboutHero />
      <AboutOverview />
      <AboutCoreValues />
      <AboutTeam />
      <Faqs />
    </div>
  );
}
