import { additionalServiceList } from "@/lib/values/additionalservices.values.ts";
import { KeyBenefitsCard } from "./KeyBenefitsCard";
import { keyBenefitList } from "@/lib/values/keybenefits.values";

export const KeyBenefits = () => {
  return (
    <div className="mx-4 mb-[120px] lg:mx-[55px]">
      <div className="mb-6 font-['Raleway']">
        <p className="mb:10 text-center  text-[50px] font-bold leading-[55px] text-[#1F1F1F] md:mb-16 md:text-[75px] md:leading-[75.14px]">
          Key Benefits
        </p>
      </div>
      <div className="mt-6">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 md:gap-y-10 lg:grid-cols-3">
          {keyBenefitList.map((value, index) => (
            <KeyBenefitsCard key={index} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
};
