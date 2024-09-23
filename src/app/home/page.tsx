import { IconButton } from "@/components/buttons/IconButton";
import { HomeBlogSection } from "@/views/home/HomeBlogSection";
import { HomeDualPhone } from "@/views/home/HomeDualPhone";
import { HomeFacts } from "@/views/home/HomeFacts";
import { HomeGetAppTabs } from "@/views/home/HomeGetAppTabs";
import { HomeGetMovingSteps } from "@/views/home/HomeGetMovingSteps";
import { HomeHero } from "@/views/home/HomeHero";
import { HomeHowItWorks } from "@/views/home/HomeHowItWorks";
import { HomeSlider } from "@/views/home/HomeSlider";
import { HomeTopTierOfferings } from "@/views/home/HomeTopTierOfferings";
import { Testimonial } from "@/views/tesimonials/Testimonial";
import Faqs from "../faqs/page";
import { HomeCtaSection } from "@/views/home/HomeCtaSection";

export default function Home() {
  return (
    <main>
      <div>
        <HomeHero />
        <HomeFacts />
        <HomeDualPhone />
        <HomeHowItWorks />
        <HomeTopTierOfferings />
        <HomeSlider />
        <HomeGetAppTabs />
        <HomeGetMovingSteps />
        <HomeBlogSection />
        <Testimonial />
        <Faqs />
        <HomeCtaSection />
      </div>
    </main>
  );
}
