import { IconButton } from "@/components/buttons/IconButton";
import { HomeDualPhone } from "@/views/home/HomeDualPhone";
import { HomeFacts } from "@/views/home/HomeFacts";
import { HomeGetAppTabs } from "@/views/home/HomeGetAppTabs";
import { HomeGetMovingSteps } from "@/views/home/HomeGetMovingSteps";
import { HomeHero } from "@/views/home/HomeHero";
import { HomeHowItWorks } from "@/views/home/HomeHowItWorks";
import { HomeSlider } from "@/views/home/HomeSlider";
import { HomeTopTierOfferings } from "@/views/home/HomeTopTierOfferings";

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
      </div>
    </main>
  );
}
