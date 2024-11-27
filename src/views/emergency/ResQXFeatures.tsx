"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { faqsList } from "@/lib/values/faqs.values";
import { FaqsAccordion } from "@/components/FaqsAccordion";

const content = [
  {
    title: "24/7 Support on WhatsApp",
    description:
      "We’re available on WhatsApp anytime, just a few taps away to help you in emergencies. Our team is dedicated to ensuring your safety and convenience.",
    content: (
        <Image src="/images/customer.jpg" layout="fill" alt="gas deliver" className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white object-cover" />
    ),
  },
  {
    title: "Expert Assistance",
    description:
      "Our team of professionals is dedicated to ensuring top-notch service for every request. We guarantee reliable and knowledgeable support for all your needs.",
    content: (
      <Image src="/images/assistance.jpg" layout="fill" alt="gas deliver" className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white object-cover" />
    ),
  },
  {
    title: "Quick Response Time",
    description:
      "We guarantee arrival at your location within 30 minutes, no matter where you are. Experience fast, reliable service designed to meet your urgent needs.",
    content: (
        <Image src="/images/response.jpg" layout="fill" alt="gas deliver" className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center object-cover text-white" />
    ),
  },
  {
    title: "Immediate Rescue",
    description:
      "Need help now? Just click the button to connect with us on WhatsApp, and we'll be there in no time to assist you. Your safety is our top priority.",
    content: (
      <div className="h-full w-full  bg-[url('/images/gas-deliver.jpg')] bg-cover bg-center flex items-center justify-center text-white">
        <a
          href="https://wa.me/yourwhatsappnumber"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
        >
            <i className="pi pi-whatsapp mr-2"></i>
          Rescue Me
        </a>
      </div>
    ),
  },
];

export function ResQXFeatures() {
  return (
    <>
        <div className="p-10 w-full max-w-7xl">
        <StickyScroll content={content} />
        </div>
        <div className="max-w-7xl my-12">
        <h2 className="text-[3.1rem] gradient-text font-bold mb-7">Answered Questions!</h2>
        <div className="overflow-y-auto border p-10 rounded-[15px] no-visible-scrollbar lg:max-h-[400px]">
            {faqsList.map((faq, index) => (
              <div key={index}>
                <FaqsAccordion key={faq.id} {...faq} />
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
