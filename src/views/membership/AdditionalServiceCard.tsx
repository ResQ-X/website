import { ICoreValue } from "@/lib/models";
import Image from "next/image";

export const AdditionalServiceCard = (value: ICoreValue) => {
  return (
    <div className="h-[30rem] overflow-hidden rounded-lg border-[1px] pb-2 border-orange-500 font-['Raleway'] tracking-[-2%] hover:scale-[1.01] transition-all duration-300">
      <div className="h-[15rem] w-full mb-14">
        <Image
          height={2000}
          width={2000}
          alt={value.title}
          src={value.image}
          className="w-full h-full object-cover hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className="px-6 h-1/2">
        <p className="mb-[17px] text-[28px] font-semibold leading-[32.87px]  text-black">
          {value.title}
        </p>
        <p className="text-start text-lg font-normal leading-[21.13px]">
          {value.description}
        </p>
      </div>
    </div>
  );
};
