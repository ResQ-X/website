import { CareerContact } from "@/views/careers/CareerContact";
import { CareerHero } from "@/views/careers/CareerHero";
import { CareerImages } from "@/views/careers/CareerImages";
import { VacancySection } from "@/views/careers/VacancySection";
import { WhyWorkWithUs } from "@/views/careers/WhyWorkWithUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <CareerHero />
      <CareerImages />
      <WhyWorkWithUs />
      <VacancySection />
      <CareerContact />
    </div>
  );
}
