import { ServiceHero } from "@/views/services/ServiceHero";
import { ServiceList } from "@/views/services/ServiceList";
import Faqs from "../faqs/page";
import { HomeCtaSection } from "@/views/home/HomeCtaSection";

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
