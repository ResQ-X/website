import { coreValueList } from "@/lib/values/corevalues.values";
import Image from "next/image";
import { AdditionalServiceCard } from "./AdditionalServiceCard";
import { additionalServiceList } from "@/lib/values/additionalservices.values.ts";

export const AdditionalServices = () => {
  return (
    <div className="mx-[20px] mb-[120px] font-['Raleway'] md:mx-[58px]">
      <div className="flex flex-col items-center justify-center font-['Raleway']">
        <p className="text-center text-[50px] font-semibold leading-[75px] text-[#332414] md:text-[64px]">
          Additional Services
        </p>
        <div className="rounded-full p-2">
          <Image
            height={2000}
            width={2000}
            alt="Underline Image"
            src={"/images/underline_image.png"}
            className="h-[37px] w-[223px] object-cover"
          />
        </div>
        <p className=" text-center text-lg font-normal text-[#333333]">
          You can also choose to add any of these services along with your
          breakdown cover
        </p>
      </div>
      <div className="mt-6">
        <div className="grid gap-x-3 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
          {additionalServiceList.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <AdditionalServiceCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
