import { MembershipHero } from "@/views/membership/MembershipHero";
import { MembershipPlans } from "@/views/membership/MembershipPlans";

export default function Page() {
  return (
    <main>
      <div>
        <MembershipHero />
        <MembershipPlans />
      </div>
    </main>
  );
}
