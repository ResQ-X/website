import { Button } from "@/components/buttons/Button";
import { ButtonExternal } from "@/components/buttons/ButtonExternal";
import Image from "next/image";

export const ApiIntegration = () => {
  return (
    <div className="mb-[100px] lg:mb-[200px]">
      <div className="h-[576px] w-full bg-[#031846] font-['Raleway'] ">
        <div className="h-10"></div>
        <p className="text-center text-[45px] font-semibold leading-[55px] text-white md:text-[64px] md:leading-[75.14px]">
          API Integration
        </p>
        <p className="text-center text-lg font-normal text-[#FAF8F5]">
          Integrate ResqX directly into your fleet management software
        </p>
      </div>
      <div className="mx-4 mt-[-380px] flex flex-col items-center rounded-[12px] border-[5px] border-[#736250] bg-white px-6 lg:mx-[50px] lg:flex-row lg:px-[27px] lg:py-14 ">
        <div className="mt-10 flex flex-col items-center text-center lg:mt-0 lg:w-2/3 lg:items-start lg:justify-start lg:pr-20 lg:text-start">
          <p className="mb-8 text-[50px] font-semibold leading-[55px] text-[#332414] md:text-[64px] md:leading-[75.14px]">
            Real-time Data Sync
          </p>
          <p className="mb-6  text-base font-normal leading-[24px] text-[#333333] lg:pr-24 ">
            Instantly synchronize your fleet management data with ResQ-X for
            up-to-date information on all roadside assistance activities.
          </p>
          <ButtonExternal
            text={"Explore API Documentation"}
            url={"/contact"}
            className="w-[250px]"
          />
        </div>
        <div className="lg:w-1/3">
          <Image
            height={1200}
            width={1200}
            alt="What You Gain Phones Image"
            src={"/images/partner/api_integration_image.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
