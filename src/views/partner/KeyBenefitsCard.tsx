import { IKeyBenefit } from "@/lib/models";
import Image from "next/image";

export const KeyBenefitsCard = (value: IKeyBenefit) => {
  return (
    <div className="rounded-md bg-gradient-to-b from-[#ff8500] to-[#995000] p-[2px]">
      <div className="h-full min-w-[300px] rounded-md bg-white font-['Raleway'] tracking-[-2%] md:min-w-[450px]">
        <div className="px-10 pt-5">
          <Image
            height={2000}
            width={2000}
            alt={value.title}
            src={value.image}
            className="w-full object-cover"
          />
        </div>
        <div className="px-6 py-3 font-['Raleway']  ">
          <p className="mb-[17px] text-center text-[30px] font-semibold leading-[46.96px] tracking-[-2%] text-black">
            {value.title}
          </p>
          <p className="text-center text-[18px] font-normal leading-[28.18px] text-[#736250]">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const KeyBenefitsCardForGrid = (value: IKeyBenefit) => {
  return (
    <div className="rounded-md bg-gradient-to-b from-[#ff8500] to-[#995000] p-[2px]">
      <div className="h-full  rounded-md bg-white font-['Raleway'] tracking-[-2%]">
        <div className="px-20 pt-8">
          <Image
            height={2000}
            width={2000}
            alt={value.title}
            src={value.image}
            className="w-full object-cover"
          />
        </div>
        <div className="px-6 py-6 font-['Raleway']  ">
          <p className="mb-[17px] text-center text-[40px] font-semibold leading-[46.96px] tracking-[-2%] text-black">
            {value.title}
          </p>
          <p className="text-center text-[24px] font-normal leading-[28.18px] text-[#736250]">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};
