import Image from "next/image";
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";
import Link from "next/link";

export const AboutOverview = () => {
  return (
    <div className="px-6 py-16 font-['Raleway'] lg:px-6">
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-0 lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <Image
            height={2000}
            width={2000}
            alt="About Overview Image"
            src={"/images/about/about_overview.png"}
            className="relative max-h-full w-full overflow-hidden object-cover"
          />
        </div>
        <div className="w-full text-left lg:ml-[29px] lg:w-2/4">
          <div className="">
            <div className="mb-3 flex flex-row">
              <div></div>
              <p className="text-xl font-semibold leading-[23.48px] tracking-[-2%] text-[#1F1F1F]">
                Who are we?
              </p>
            </div>
            <p className="mb-3 font-['Inter']  text-[40px] font-bold leading-[46.96px] tracking-[-2%]  text-[#1F1F1F]">
              Our Company Overview
            </p>
            <p className="mb-6 text-base font-normal leading-[21.13px] tracking-[-2%] text-[#A89887]">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <div className="mb-12">
              <Link href="/contact">
                <div
                  className={`font-raleway relative box-border flex min-h-[65px] w-[200px] flex-row items-center justify-center gap-2 rounded-[88px] p-[10px] text-lg leading-6 tracking-[-2%] text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]`}
                >
                  <button
                    className={`text-center font-['Raleway'] text-lg font-semibold leading-[21px] tracking-[-2%]`}
                  >
                    Get in touch
                  </button>
                </div>
              </Link>
            </div>
            <p className="mb-6 text-base font-normal leading-[21.13px] tracking-[-2%] text-[#A89887]">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Yorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
