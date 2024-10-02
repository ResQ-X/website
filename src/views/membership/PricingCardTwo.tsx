import { IMembershipPlan } from "@/lib/models";
import Image from "next/image";
import Link from "next/link";

export const PricingCardTwo = (plan: IMembershipPlan) => {
  return (
    <div className="w-full shrink-0 font-['Raleway'] ">
      <div
        className={`flex flex-col rounded-lg bg-white shadow-2xl`}
        style={{
          paddingTop: plan.paddingTop ? plan.paddingTop : `41px`,
          paddingBottom: plan.paddingBottom ? plan.paddingBottom : `52px`,
        }}
      >
        <div className="mb-[29px] flex flex-row items-center justify-between pl-3 pr-0">
          <p className="text-[24px] font-semibold leading-[28.18px] tracking-[-2%] text-[#736250]">
            {plan.price}
            <span className="text-base font-bold leading-[18.78px]  text-[#736250]">
              /qtr
            </span>
          </p>
          <PlanTypeButtonTwo
            text={plan.type}
            url={plan.url}
            customClassName={plan.customClassName}
          />
        </div>
        <div className="pl-[27px] pr-16">
          {plan.benefitList.map((value, index) => (
            <div
              key={index}
              className="mb-4 flex flex-row items-center justify-start"
            >
              <div className="mr-2 w-4">
                <Image
                  height={3000}
                  width={3000}
                  alt="Check Icon"
                  src={"/icons/check_icon.png"}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-[14px] font-bold leading-[24px] text-[#736250]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PlanTypeButtonProps {
  customClassName?: string;
  text: string;
  url: string;
}

export const PlanTypeButtonTwo = ({
  text,
  url,
  customClassName,
}: PlanTypeButtonProps) => {
  return (
    <div className="">
      <Link href={url}>
        <div
          className={`font-raleway relative box-border flex min-h-[65px] w-[140px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-s-[88px] p-[10px] text-lg leading-6 tracking-[-2%] text-white md:w-[188px] ${customClassName}`}
        >
          <button
            className={`text-center font-['Raleway'] text-[24px] font-semibold leading-[37.57px] md:text-[32px]`}
          >
            {text}
          </button>
        </div>
      </Link>
    </div>
  );
};
