import { Metadata } from "next";
import HeroSection from "@/components/emergency/HeroSection";
import TabsSection from "@/components/emergency/TabSection";
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'
// import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Rescue me - ResQX | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "ResQX Website",
};

export default function RescueMe() {


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HeroSection />
      {/* Tabs Section */}
      <TabsSection />
      <DownloadApp />
      <FAQSection />
    </div>
  );
}

