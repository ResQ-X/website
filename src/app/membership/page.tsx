import { AdditionalServices } from "@/views/membership/AdditionalServices";
import { MembershipHero } from "@/views/membership/MembershipHero";
import { MembershipPlans } from "@/views/membership/MembershipPlans";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Membership - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <main>
      <div>
        <MembershipHero />
        <MembershipPlans />
        <AdditionalServices />
      </div>
    </main>
  );
}
