import { whyWorkList } from "@/lib/values/whywork.values";
import { WhyWorkWithUsCard } from "./WhyWorkWithUsCard";

export const WhyWorkWithUs = () => {
  return (
    <div className="mb-[60px] flex flex-col items-center px-6 font-['Raleway'] text-[50px] leading-[55px] md:mb-[120px] md:text-[64px] lg:mx-[70px] lg:leading-[75.14px]">
      <p className="mb-6 text-center font-semibold">Why WOrk With Us?</p>
      <div className="lg:gap-x-[187px] grid grid-cols-1 gap-y-16  mt-5 md:grid-cols-2 md:gap-x-[100px] lg:grid-cols-3">
        {whyWorkList.map((value, index) => (
          <WhyWorkWithUsCard
            key={index}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
};
