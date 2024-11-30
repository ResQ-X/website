"use client"

import Image from "next/image";
import React from 'react'
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Faq = () => {
    const animationData = require('/public/files/faq.json'); // Ensure the path is correct
    return (
        <div className="px-12 py-16">
        <div className="flex flex-col justify-center gap-10 lg:flex-row lg:px-10">
            <div className="w-full items-center lg:w-2/5 lg:items-start">
            {/* <Image
                height={214}
                width={214}
                alt="FAQs Image"
                src={"/images/faqs_section_image.png"}
                className="relative h-[500px] w-[500px] overflow-hidden object-contain"
            /> */}
            <Lottie animationData={animationData} className="relative w-full lg:h-[500px] lg:w-[500px] object-contain" />
            </div>
            <div className="h-full w-full text-left lg:max-h-[600px] lg:w-3/5">
            <p className="font-['Inter'] text-[28px] mb-3 lg:text-[32px] font-bold text-black">
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
    )
}

export default Faq