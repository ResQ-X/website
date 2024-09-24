import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Network Error - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function NetworkError() {
  return (
    <div className="px-12 py-16">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-16 lg:px-40">
        <div className="flex w-full flex-col items-center text-center lg:w-2/5 lg:items-start lg:text-left">
          <h1 className="mb-4 font-['Raleway'] text-[40px] font-bold leading-[46.96px] tracking-[-2%] text-black">
            Oops....
          </h1>
          <h2 className="mb-[18px]  font-['Raleway'] text-[32px] font-semibold leading-[37.57px] tracking-[-2%] text-black">
            Looks like you're offline.
          </h2>
          <p className="mb-[60px] text-center font-['Raleway'] text-lg font-normal  text-black lg:text-start">
            It seems you’ve lost your internet connection. Please check your
            connection and try again. We’ll be here when you’re back online!
          </p>
          <div className="font-raleway relative box-border flex max-h-[60px] w-[200px] flex-row items-center justify-center  gap-2 rounded-[88px] px-1 py-3 text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
            <Image
              height={24}
              width={24}
              alt="Refresh Icon"
              src={"/icons/refresh_icon.png"}
              className="relative overflow-hidden"
            />
            <p className="text-lg text-white ">Reload page</p>
          </div>
        </div>
        <div className="w-full lg:w-3/5 lg:items-start">
          <Image
            height={214}
            width={214}
            alt="Network Error Image"
            src={"/images/network_error_image.png"}
            className="relative max-h-full w-full overflow-hidden object-cover"
          />
        </div>
      </div>
    </div>
  );
}
