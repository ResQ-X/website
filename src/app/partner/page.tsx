import { Testimonial } from "@/views/tesimonials/Testimonial";
import Faqs from "../faqs/page";
import { PartnerCta } from "@/views/partner/PartnerCta";
import { ApiIntegration } from "@/views/partner/ApiIntegration";
import { PartnerHero } from "@/views/partner/PartnerHero";
import { PartnerBrands } from "@/views/partner/PartnerBrands";
import { KeyBenefits } from "@/views/partner/KeyBenefits";
import { PartnerHowItWorks } from "@/views/partner/PartnerHowItWorks";
import { GetAQuote } from "@/views/partner/GetAQuote";

export default function Page() {
  return (
    <main>
      <div>
        <PartnerHero />
        <PartnerBrands />
        <KeyBenefits />
        <PartnerHowItWorks />
        <ApiIntegration />
        <GetAQuote />
        <PartnerCta />
        <Testimonial />
        <Faqs />
      </div>
    </main>
  );
}
