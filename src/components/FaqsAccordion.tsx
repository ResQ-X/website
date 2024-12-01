import { FaqModel } from "@/lib/models/faq.model";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const FaqsAccordion = (faq: FaqModel) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-orange-200">
      <div
        className="flex justify-between items-center bg-white py-6 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h6 className="text-lg font-medium text-black">{faq.question}</h6>
        {isOpen ? (
          <ChevronUp className="text-black transform transition-transform duration-300" />
        ) : (
          <ChevronDown className="text-black transform transition-transform duration-300" />
        )}
      </div>
      {isOpen && (
        <div className="py-4 text-sm text-black">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};
