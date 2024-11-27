import { FaqModel } from "@/lib/models/faq.model";
import Image from "next/image";

export const FaqsAccordion = (faq: FaqModel) => {
  return (
    <div className="">
      <div className="collapse collapse-plus bg-white py-1 hover:text-xl">
        <input type="radio" name="my-accordion-3" />
        <h6 className="collapse-title mx-0 px-0 text-left text-lg font-medium text-black ">
          {faq.question}
        </h6>
        <div className="collapse-content mx-0 px-0 text-sm text-black">
          <p>{faq.answer}</p>
        </div>
        <div className="border-b w-full rounded-b-xl border-b-orange-200">
          {/* <Image
            height={214}
            width={214}
            alt="Logo"
            src={"/images/divider.png"}
            className="relative h-full w-full overflow-hidden object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
};
