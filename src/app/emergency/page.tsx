import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { Metadata } from "next";
import HeroSection from "@/views/emergency/HeroSection";
import TabsSection from "@/views/emergency/TabSection";
import WhyResQX from "@/views/emergency/WhyUS";
import DummyContent from "@/views/emergency/DummyContext";
import { ResQXFeatures } from "@/views/emergency/ResQXFeatures";
// import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Rescue me - ResQX | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "ResQX Website",
};

export default function RescueMe() {


  return (
    <div className="min-h-screen lg:px-8 py-32 w-full flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HeroSection />
      {/* Tabs Section */}
      <TabsSection />
      <WhyResQX />
      <ResQXFeatures />
    </div>
  );
}

