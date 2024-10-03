import { ServiceHero } from "@/views/services/ServiceHero";
import { ServiceList } from "@/views/services/ServiceList";
import Faqs from "../faqs/page";
import { HomeCtaSection } from "@/views/home/HomeCtaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <ServiceHero />
      <ServiceList />
      <HomeCtaSection />
      <Faqs />
    </div>
  );
}
