import { Testimonial } from "@/views/tesimonials/Testimonial";
import Faqs from "../faqs/page";
import { PartnerCta } from "@/views/partner/PartnerCta";
import { ApiIntegration } from "@/views/partner/ApiIntegration";
import { PartnerHero } from "@/views/partner/PartnerHero";
import { PartnerBrands } from "@/views/partner/PartnerBrands";
import { KeyBenefits } from "@/views/partner/KeyBenefits";
import { PartnerHowItWorks } from "@/views/partner/PartnerHowItWorks";
import { GetAQuote } from "@/views/partner/GetAQuote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Partner With Us - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <main className="py-16 overflow-x-hidden">
      <div>
        <PartnerHero />
        <PartnerBrands />
        <KeyBenefits />
        <PartnerHowItWorks />
        <ApiIntegration />
        <GetAQuote />
        <PartnerCta />
        <Testimonial heading={["Here’s what our", "partners say"]} />
        <Faqs />
      </div>
    </main>
  );
}
