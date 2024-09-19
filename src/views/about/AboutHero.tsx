import Image from "next/image";
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const AboutHero = () => {
  return (
    <div className="mb-[55px] bg-[#faf8f5] px-0 pb-0">
      <div className="flex flex-col items-end lg:flex-row lg:justify-end lg:gap-16">
        <div className="my-[96px] lg:w-3/5">
          <div className="w-full px-5 lg:pl-10">
            <div className="text-center font-['Raleway'] lg:text-start">
              <p className="mb-3 text-[50px] font-bold leading-[72px] tracking-[-4%] text-[#332414] md:text-[64px]">
                Providing Quality Breakdown Services
              </p>
              <p className="mb-5 font-medium leading-[23.48px] tracking-[-2%] text-[#33141C]">
                At ResQX, we are focused on bringing quality vehicle services to
                you
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-2 lg:justify-start">
              <div>
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
              <div className="">
                <div className="flex items-center justify-center">
                  <button className="btn btn-outline flex h-[60px] flex-row items-center justify-center rounded-[99px] px-6 py-2 font-['Raleway'] text-base font-bold text-[#FF8500]">
                    <p>How it works</p>
                    <div className="rounded-full bg-[#faeddd] p-2">
                      <Image
                        height={1200}
                        width={1200}
                        alt="Contact Image"
                        src={"/icons/play_arrow.png"}
                        className="w-4 object-cover"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-0 w-full px-2 lg:w-2/5 lg:px-0">
          <Image
            height={3000}
            width={3000}
            alt="Contact Image"
            src={"/images/about/about_hero_image.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
