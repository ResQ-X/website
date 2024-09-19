import { AboutOverview } from "@/views/about/AboutOverview";
import Faqs from "../faqs/page";
import { AboutHero } from "@/views/about/AboutHero";
import { AboutCoreValues } from "@/views/about/AboutCoreValues";

export default function Page() {
  return (
    <div>
      <AboutHero />
      <AboutOverview />
      <AboutCoreValues />
      <Faqs />
    </div>
  );
}
