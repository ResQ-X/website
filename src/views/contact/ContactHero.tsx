import Image from "next/image";
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const ContactHero = () => {
  return (
    <div className="bg-[#000B28] px-0 pb-0 pt-16">
      <div className="flex flex-col items-end lg:flex-row lg:justify-end lg:gap-16">
        <div className="lg:w-2/4"></div>
        <div className="mx-0 w-full px-2 lg:w-2/4 lg:px-0">
          <Image
            height={2000}
            width={2000}
            alt="Contact Image"
            src={"/images/contact/contact_image_group.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
