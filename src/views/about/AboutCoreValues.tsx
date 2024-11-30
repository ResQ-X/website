import Image from "next/image";
import { AboutCoreValueCard } from "./AboutCoreValuesCard";
import { coreValueList } from "@/lib/values/corevalues.values";
import "@/ui/styles/slider_animation.css";

export const AboutCoreValues = () => {
  return (
    <div className="mx-[20px] mb-[120px] font-['Raleway'] md:mx-[58px]">
      <div className="flex flex-col items-center justify-center font-['Raleway']">
        <p className="text-center text-[50px] font-semibold leading-[75px] text-[#332414] md:text-[64px]">
          Our Core Values
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
      </div>
      <div className="mt-6 overflow-hidden">
        <div
          className={`slider-row flex gap-x-10 md:gap-y-10`}
          style={{ animationDuration: "10s" }} // Adjust speed
        >
          {coreValueList.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <AboutCoreValueCard {...value} />
            </div>
          ))}
          {/* Clone the slides to ensure a smooth loop */}
          {coreValueList.map((value, index) => (
            <div
              key={`clone-${index}`}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <AboutCoreValueCard {...value} />
            </div>
          ))}
          {coreValueList.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <AboutCoreValueCard {...value} />
            </div>
          ))}
          {/* Clone the slides to ensure a smooth loop */}
          {coreValueList.map((value, index) => (
            <div
              key={`clone-${index}`}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <AboutCoreValueCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AboutCoreValuesForGrid = () => {
  return (
    <div className="mx-[20px] mb-[120px] font-['Raleway'] md:mx-[58px]">
      <div className="flex flex-col items-center justify-center font-['Raleway']">
        <p className="text-center text-[50px] font-semibold leading-[75px] text-[#332414] md:text-[64px]">
          Our Core Values
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
      </div>
      <div className="mt-6">
        <div className="grid gap-x-3 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
          {coreValueList.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <AboutCoreValueCard {...value} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
