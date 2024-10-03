import { ServiceList } from "@/views/services/ServiceList";
import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title:
    "Privacy Policy - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <PageHero
        image="/images/services/service_hero_image.jpeg"
        title="Privacy Policy"
      />
      <ServiceList />
    </div>
  );
}
