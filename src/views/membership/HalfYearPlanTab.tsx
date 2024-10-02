import { halfYearPlanList } from "@/lib/values/membershipPlanList";
import { PricingCard } from "./PricingCard";

export const HalfYearPlanTab = () => {
  return (
    <div className="">
      <div className="mx-4 flex flex-col gap-6 lg:mx-24 lg:mb-[-330px] lg:flex-row lg:items-end lg:justify-center">
        {halfYearPlanList.map((plan, index) => (
          <div key={index}>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
      <div className="display:none hidden h-[427px] w-full bg-[#07016C] lg:block "></div>
    </div>
  );
};
