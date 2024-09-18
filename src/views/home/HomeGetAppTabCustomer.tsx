import { FlatLeftIconButton } from "@/components/buttons/FlatLeftIconButton";
import Image from "next/image";

export const HomeGetAppTabCustomer = () => {
  return (
    <div className="mt-40 bg-[#4B2E2A] pb-20 lg:mt-0">
      <div className="flex lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-x-[70px] px-20 lg:flex-row">
          <div className="mt-[-100px] w-full">
            <Image
              height={2000}
              width={2000}
              alt="Customer Phone Image"
              src={"/images/home/customer_app_image.png"}
              className="w-auto object-cover md:h-[763px]"
            />
          </div>
          <div className="flex flex-col justify-center pt-[32px]">
            <p className="font-['Raleway'] text-lg font-normal leading-[21px] text-white">
              We provide reliable roadside assistance at your fingertips. From
              towing to tire changes, our services are just a tap away. Download
              the ResQ-X app and drive with confidence!
            </p>

            <div className="grid grid-cols-1 gap-y-[44px] lg:grid-cols-2 ">
              <HomeGetAppCard
                image="/images/home/3000+_users.png"
                text="3000+ Users"
              />
              <HomeGetAppCard
                image="/images/home/easy_to_use.png"
                text="Easy to use"
              />
              <HomeGetAppCard
                image="/images/home/swift_access.png"
                text="Swift access"
              />
              <HomeGetAppCard
                image="/images/home/affordable_services.png"
                text="Affordable services"
              />
            </div>
            <div className="mt-5 flex flex-col items-start justify-start gap-10 lg:mt-0 lg:flex-row lg:gap-x-6">
              <FlatLeftIconButton
                text="Play store"
                icon="/icons/play_store_logo.png"
                alt=""
              />
              <FlatLeftIconButton
                text="App store"
                icon="/icons/app_store_logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeGetAppCard = ({
  image,
  text,
}: {
  image: string;
  text: string;
}) => {
  return (
    <div className="mt-6 flex justify-start">
      <div className="mb-11 flex flex-col items-center justify-center gap-4">
        <Image
          height={1200}
          width={1200}
          alt="Customer Phone Image"
          src={image}
          className="h-[144px] w-auto max-w-[200px] object-cover"
        />
        <p className="font-['Raleway'] text-[24px] font-semibold leading-[28.18px] tracking-[-2%] text-[#FAF8F5]">
          {text}
        </p>
      </div>
    </div>
  );
};
