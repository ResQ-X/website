import { quaterlyPlanList } from "@/lib/values/membershipPlanList";
import { PricingCard } from "./PricingCard";

export const QuarterPlanTab = () => {
  return (
    <div className="mx-4 lg:mx-10">
      <div className="flex flex-col gap-10 lg:flex-row">
        {quaterlyPlanList.map((plan, index) => (
          <div key={index}>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
};
