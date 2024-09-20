import Image from "next/image";
import {
  serviceProviderPlayStoreLink,
  serviceProviderAppStoreLink,
} from "@/lib/constants";
import { FlatLeftIconBorderButton } from "@/components/buttons/FlatLeftIconBorderButton";

export const GrowWithUsHero = () => {
  return (
    <div className="mb-[100px] border-t-[2px] border-[#faf8f5] bg-white px-0 pb-0">
      <div className="flex flex-col items-end gap-2 lg:flex-row lg:justify-end lg:gap-2 lg:px-10">
        <div className="mt-20 lg:my-auto lg:w-1/2">
          <div className="w-full">
            <div className="text-center font-['Raleway'] lg:text-start">
              <p className="mb-3 text-[50px] font-bold leading-[72px] tracking-[-4%] text-[#332414] md:text-[64px]">
                <span className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-transparent">
                  Earn
                </span>
                <span>With ResQ-X, Expand Your Reach</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-5 lg:justify-start">
              <a
                href={serviceProviderPlayStoreLink}
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                <FlatLeftIconBorderButton
                  text="Play store"
                  icon="/icons/play_store_logo.png"
                  alt=""
                />
              </a>

              <a
                href={serviceProviderAppStoreLink}
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                <FlatLeftIconBorderButton
                  text="App store"
                  icon="/icons/app_store_logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-0 w-full px-2 lg:w-1/2 lg:px-0">
          <Image
            height={3000}
            width={3000}
            alt="Contact Image"
            src={"/images/growwithus/growwithus_hero_image.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
