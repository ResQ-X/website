import { ICoreValue } from "@/lib/models";
import Image from "next/image";

export const AboutCoreValueCard = (value: ICoreValue) => {
  return (
    <div className="h-full min-w-[300px] rounded-lg border-[3px] border-[#332414] font-['Raleway'] tracking-[-2%] md:min-w-[450px]">
      <div className="">
        <Image
          height={2000}
          width={2000}
          alt={value.title}
          src={value.image}
          className="w-full object-cover"
        />
      </div>
      <div className="px-6 py-6">
        <p className="text-28px mb-[17px] font-semibold leading-[32.87px]  text-black">
          {value.title}
        </p>
        <p className="text-start text-lg font-normal leading-[21.13px]">
          {value.description}
        </p>
      </div>
    </div>
  );
};

export const AboutCoreValueCardForGrid = (value: ICoreValue) => {
  return (
    <div className="rounded-lg border-[3px] border-[#332414] font-['Raleway'] tracking-[-2%]">
      <div className="">
        <Image
          height={2000}
          width={2000}
          alt={value.title}
          src={value.image}
          className="w-full object-cover"
        />
      </div>
      <div className="px-6 py-6">
        <p className="text-28px mb-[17px] font-semibold leading-[32.87px]  text-black">
          {value.title}
        </p>
        <p className="text-start text-lg font-normal leading-[21.13px]">
          {value.description}
        </p>
      </div>
    </div>
  );
};
