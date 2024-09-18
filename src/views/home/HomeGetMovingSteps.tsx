import Image from "next/image";
import { HomeStepsSlider } from "./HomeStepsSlider";

export const HomeGetMovingSteps = () => {
  return (
    <div className="mb-20">
      <div className="mb-[30px] px-6 text-center">
        <p className=" font-['Raleway] text-[32px] font-semibold leading-[37.57px] tracking-[-2%] text-[#736250]">
          Stuck on the Road?
        </p>
        <p className="font-['Raleway] text-[64px] font-bold leading-[75.14px] tracking-[-2%] text-[#332414]">
          Get Moving in 3 Steps
        </p>
      </div>
      <div className="mb-[-390px] flex w-full justify-center">
        <HomeStepsSlider />
      </div>
      <div className="bg-[#000B28]">
        <div className="flex flex-col items-end justify-center px-[100px] pb-9 pt-[400px] text-center">
          <p className="font-['Raleway] text-[32px] font-semibold leading-[37.57px] tracking-[-2%] text-white">
            Our goal is to provide reliable roadside assistance with a quick
            response time within 15 minutes, using the latest technology.
          </p>
          <div className="mt-2 flex w-full content-end items-center justify-center">
            <Image
              height={2000}
              width={2000}
              alt="Customer Phone Image"
              src={"/images/underline_image_2.png"}
              className="w-48 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
