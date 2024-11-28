import { AboutOverview } from "@/views/about/AboutOverview";
import Faqs from "../faqs/page";
import { AboutHero } from "@/views/about/AboutHero";
import { AboutCoreValues } from "@/views/about/AboutCoreValues";
import { Metadata } from "next";
import { NewsletterSection } from "@/views/about/NewsletterSection";
import { Team } from "@/views/about/Team";

export const metadata: Metadata = {
  title:
    "About - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div className="py-16 lg:py-32 overflow-x-hidden">
      <AboutHero />
      <AboutOverview />
      <AboutCoreValues />
      <Team />
      <Faqs />
      <NewsletterSection />
    </div>
  );
}
