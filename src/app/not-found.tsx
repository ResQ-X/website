import Image from "next/image";
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="px-12 py-16">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-16 lg:px-40">
        <div className="flex w-full flex-col items-center text-left lg:w-2/5 lg:items-start">
          <h1 className="mb-4 font-['Raleway'] text-[40px] font-bold leading-[46.96px] tracking-[-2%] text-black">
            Oops....
          </h1>
          <h2 className="mb-[18px] font-['Raleway'] text-[32px] font-semibold leading-[37.57px] tracking-[-2%] text-black">
            Page not found
          </h2>
          <p className="mb-[60px] text-center font-['Raleway'] text-lg font-normal  text-black lg:text-start">
            This Page doesn`t exist or was removed! We suggest you back to home.
          </p>
          <div className="font-raleway relative box-border flex max-h-[60px] w-[200px] flex-row items-center justify-center  gap-2 rounded-[88px] px-1 py-3 text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
            <Image
              height={24}
              width={24}
              alt="Back Arrow Icon"
              src={"/icons/back_arrow_icon.png"}
              className="relative overflow-hidden"
            />
            <p className="text-lg text-white ">Back to home</p>
          </div>
        </div>
        <div className="w-full lg:w-3/5 lg:items-start">
          <Image
            height={214}
            width={214}
            alt="FAQs Image"
            src={"/images/404_image.png"}
            className="relative max-h-full w-full overflow-hidden object-cover"
          />
        </div>
      </div>
    </div>
  );
}
