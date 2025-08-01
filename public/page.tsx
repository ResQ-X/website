import type { Metadata } from "next";
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
import DownloadApp from "@/components/home/DownloadApp";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Resqx",
  description: "Your site description goes here",
  keywords: [
    "tow truck service",
    "emergency towing",
    "24/7 towing service",
    "car towing near me",
    "roadside towing",
    "ResQ-X towing services",
    "breakdown towing",
    "accident towing",
    "affordable towing",
    "ResQ-X tow truck",
    "rescue",
    "rescue company",
    "rescue company in lagos",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Dead Battery? ResQ-X Gets You Going!"
        description="Don’t let a dead battery slow you down. ResQ-X offers fast, safe jump start services to get you back on the road."
      />
      <Services title={"Why Drivers Rely on ResQ-X "} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}
