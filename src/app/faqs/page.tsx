import Image from "next/image";
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";

export default function Faqs() {
  return (
    <div className="px-12 py-16">
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:px-10">
        <div className="w-full lg:w-2/5 lg:items-start">
          <Image
            height={214}
            width={214}
            alt="FAQs Image"
            src={"/images/faqs_section_image.png"}
            className="relative max-h-full w-full overflow-hidden object-cover"
          />
        </div>
        <div className="h-full w-full text-left lg:max-h-[600px] lg:w-3/5">
          <p className="font-['Inter'] text-[32px] font-bold text-black">
            Frequently Asked Questions
          </p>
          <div className="overflow-y-auto lg:max-h-[400px]">
            {faqsList.map((faq, index) => (
              <div key={index}>
                <FaqsAccordion key={faq.id} {...faq} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
