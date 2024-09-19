import { offeringList } from "@/lib/values/offerings.values";
import Image from "next/image";

export const HomeTopTierOfferings = () => {
  return (
    <div className="mx-[20px] mb-[120px] font-['Raleway'] md:mx-[58px]">
      <div className="flex flex-col items-center justify-center font-['Raleway']">
        <p className="text-center text-[50px] font-semibold leading-[75px] text-[#332414] md:text-[64px]">
          Our Top-Tier Offerings
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
          We provide your vehicle roadside assistance safely and efficiently
        </p>
      </div>
      <div className="mt-20">
        <div className="grid gap-x-[175px] gap-y-[68px] md:grid-cols-2 lg:grid-cols-3">
          {offeringList.map((offering, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <div className="p-2">
                <Image
                  height={2000}
                  width={2000}
                  alt={offering.title}
                  src={offering.image}
                  className="h-[61px] max-w-[110px] object-cover"
                />
              </div>
              <p className="text-25px mb-[17px] font-semibold leading-[29px] text-black">
                {offering.title}
              </p>
              <p className="text-base font-normal leading-[24px]">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
