import { Testimonial } from "@/views/tesimonials/Testimonial";
import Faqs from "../faqs/page";
import { PartnerCta } from "@/views/partner/PartnerCta";
import { ApiIntegration } from "@/views/partner/ApiIntegration";
import { PartnerHero } from "@/views/partner/PartnerHero";

export default function Page() {
  return (
    <main>
      <div>
        <PartnerHero />
        <ApiIntegration />
        <PartnerCta />
        <Testimonial />
        <Faqs />
      </div>
    </main>
  );
}
