import Image from "next/image";
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const MembershipHero = () => {
  return (
    <div className="mb-[55px] bg-[#faf8f5] px-0 pb-0">
      <div className="flex flex-col items-end gap-2 lg:flex-row lg:justify-end lg:gap-2 lg:px-10">
        <div className="mt-20 lg:my-auto lg:w-4/6">
          <div className="w-full">
            <div className="text-center font-['Raleway'] lg:text-start">
              <p className="mb-3 text-[50px] font-bold leading-[72px] tracking-[-4%] text-[#332414] md:text-[64px]">
                <span>Protect What Matters Most: Your </span>
                <span className="text-[#FF8500]">Family</span>
                <span className="text-[#332414]">, Your </span>
                <span className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-transparent">
                  Car
                </span>
                <span className="text-[#332414]">, Your </span>
                <span className="text-[#FF8500]">Time</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-0 w-full px-2 lg:w-2/6 lg:px-0">
          <Image
            height={3000}
            width={3000}
            alt="Contact Image"
            src={"/images/membership/membership_hero_image.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
