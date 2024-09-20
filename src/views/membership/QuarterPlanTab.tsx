import { quaterlyPlanList } from "@/lib/values/membershipPlanList";
import { PricingCard } from "./PricingCard";

export const QuarterPlanTab = () => {
  return (
    <div className="">
      <div className="mx-4 flex flex-col gap-10 lg:mx-24 lg:mb-[-330px] lg:flex-row lg:items-end lg:justify-center">
        {quaterlyPlanList.map((plan, index) => (
          <div key={index}>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
      <div className="display:none hidden h-[427px] w-full bg-[#06013C] lg:block "></div>
    </div>
  );
};
