import Image from "next/image";
import {
  serviceProviderPlayStoreLink,
  serviceProviderAppStoreLink,
} from "@/lib/constants";
import { FlatLeftIconBorderButton } from "@/components/buttons/FlatLeftIconBorderButton";
import Link from "next/link";

export const PartnerHero = () => {
  return (
    <div className="mb-[100px] border-t-[2px] border-[#faf8f5] bg-white px-0 pb-0">
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-2 lg:px-10 lg:py-20">
        <div className="mt-14 pb-10 lg:my-auto lg:w-3/5 lg:pb-0">
          <div className="w-full">
            <div className="mb-8 text-center font-['Raleway'] lg:text-start">
              <p className="mb-3 px-3 text-[40px] font-bold leading-[72px] tracking-[-4%] text-[#332414] md:text-[64px] lg:px-0">
                <span className="text-[#407BFF]">Maximize </span>
                <span>Fleet Uptime, Minimize Vehicle Hassles: ResQ-X for </span>
                <span className="bg-gradient-to-b from-[#407BFF] to-[#332414] bg-clip-text text-transparent">
                  Business
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-5 lg:justify-start">
              <Link href="/contact">
                <div
                  className={`font-raleway relative box-border flex min-h-[60px] w-[250px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[88px] p-[10px] text-lg leading-6 tracking-[-2%] text-white [background:linear-gradient(180deg,_#407BFF,_#332414)]`}
                >
                  <button
                    className={`text-center font-['Raleway'] text-base font-semibold leading-[21px] tracking-[-2%]`}
                  >
                    Get a quote
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-0 w-full px-2 lg:w-2/5 lg:px-0">
          <Image
            height={3000}
            width={3000}
            alt="Contact Image"
            src={"/images/partner/partner_hero_image.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
