import { KeyBenefitsCard } from "./KeyBenefitsCard";
import { keyBenefitList } from "@/lib/values/keybenefits.values";
import "@/ui/styles/partner_logo_animation.css";

export const KeyBenefits = () => {
  return (
    <div className="mx-4 mb-[120px] lg:mx-[55px]">
      <div className="mb-6 font-['Raleway']">
        <p className="mb:10 text-center  text-[50px] font-bold leading-[55px] text-[#1F1F1F] md:mb-16 md:text-[75px] md:leading-[75.14px]">
          Key Benefits
        </p>
      </div>
      <div className="overflow-hidden">
        <div
          className={`logo-row flex gap-x-10 md:gap-y-10`}
          style={{ animationDuration: "20s" }} // Adjust speed
        >
          {keyBenefitList.map((value, index) => (
            <KeyBenefitsCard key={index} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const KeyBenefitsForGrid = () => {
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
