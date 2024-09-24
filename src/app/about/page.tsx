import { AboutOverview } from "@/views/about/AboutOverview";
import Faqs from "../faqs/page";
import { AboutHero } from "@/views/about/AboutHero";
import { AboutCoreValues } from "@/views/about/AboutCoreValues";
import { AboutTeam } from "@/views/about/AboutTeam";
import { Metadata } from "next";
import { NewsletterSection } from "@/views/about/NewsletterSection";

export const metadata: Metadata = {
  title:
    "About - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <AboutHero />
      <AboutOverview />
      <AboutCoreValues />
      <AboutTeam />
      <Faqs />
      <NewsletterSection />
    </div>
  );
}
