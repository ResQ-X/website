import { ContactHero } from "@/views/contact/ContactHero";
import Faqs from "../faqs/page";
import { ContactSection } from "@/views/contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <Faqs />
    </div>
  );
}
