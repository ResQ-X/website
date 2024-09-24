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
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <div className="">
            <div className="mb-3 flex flex-row items-center gap-2">
              <div className="rounded-lg bg-[#ffce99] p-2">
                <Image
                  height={1200}
                  width={1200}
                  alt="Contact Image"
                  src={"/icons/diagonal_icon.png"}
                  className="w-4 object-cover"
                />
              </div>
              <p className="text-xl font-semibold leading-[23.48px] tracking-[-2%] text-[#1F1F1F]">
                Who are we?
              </p>
            </div>
            <p className="mb-3 text-[40px] font-bold leading-[46.96px] tracking-[-2%]  text-[#1F1F1F]">
              Our Company Overview
            </p>
            <p className="mb-6 text-base font-normal leading-[21.13px] tracking-[-2%] text-[#A89887]">
              ResQ-x is more than just a roadside assistance service; we are
              your trusted partner in ensuring safety and reliability on Lagos
              roads. Founded in December 2023 by Nosa Okoroji and Tomachi Ajoku,
              ResQ-x was born out of the need to bring structure and
              dependability to Nigeria's vehicle breakdown industry. Our
              services go beyond basic assistance, offering a seamless,
              customer-centric experience that guarantees peace of mind for
              vehicle owners.
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
              ResQ-x is a Lagos-based breakdown cover service that aims to
              redefine the roadside assistance experience in Nigeria. Since our
              inception, we’ve built a reputation for being reliable,
              affordable, and fast—attributes that are often missing in the
              local market. We provide comprehensive solutions, from towing to
              key replacements, for individual motorists and businesses with
              vehicle fleets. Leveraging technology and a network of trained
              professionals, our services are designed to get drivers back on
              the road quickly, safely, and with as little stress as possible.
              We continue to set new standards in vehicle emergency care, with a
              focus on accessibility, innovation, and community-driven service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
