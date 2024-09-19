import { FlatLeftIconButton } from "@/components/buttons/FlatLeftIconButton";
import {
  customerAppStoreLink,
  customerPlayStoreLink,
  serviceProviderAppStoreLink,
  serviceProviderPlayStoreLink,
} from "@/lib/constants";
import Image from "next/image";
import { HomeGetAppCard } from "./HomeGetAppCard";

export const HomeGetAppTabServiceProvider = () => {
  return (
    <div className="mt-40 bg-[#332414] pb-20 lg:mt-0">
      <div className="flex lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-x-[70px] px-20 lg:flex-row">
          <div className="mt-[-100px] flex w-full items-center justify-center lg:items-start lg:justify-start">
            <Image
              height={2000}
              width={2000}
              alt="Service Provider Phone Image"
              src={"/images/home/service_provider_app_image.png"}
              className="w-auto object-cover md:h-[763px]"
            />
          </div>
          <div className="lg flex flex-col items-center justify-center pt-[32px] lg:items-start">
            <p className="text-center font-['Raleway'] text-lg font-normal leading-[21px] text-white lg:text-start">
              We provide reliable roadside assistance at your fingertips. From
              towing to tire changes, our services are just a tap away. Download
              the ResQ-X app and drive with confidence!
            </p>

            <div className="grid grid-cols-1 gap-y-[44px] md:grid-cols-2 ">
              <HomeGetAppCard
                image="/images/home/50+_partners.png"
                text="50+ Partners"
              />
              <HomeGetAppCard
                image="/images/home/weekly_earnings.png"
                text="Weekly earnings"
              />
              <HomeGetAppCard
                image="/images/home/easy_management.png"
                text="Easy management"
              />
              <HomeGetAppCard
                image="/images/home/500+_service_providers.png"
                text="500+ Service providers"
              />
            </div>
            <div className="mt-5 flex flex-col items-start justify-start gap-10 md:flex-row md:gap-x-6 lg:mt-0">
              <a
                href={serviceProviderPlayStoreLink}
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                <FlatLeftIconButton
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
                <FlatLeftIconButton
                  text="App store"
                  icon="/icons/app_store_logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
