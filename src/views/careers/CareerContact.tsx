"use client";

import Image from "next/image";
import { ContactForm } from "../contact/ContactForm";
import dynamic from 'next/dynamic';


const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export const CareerContact = () => {
  const animationData = require('/public/files/customer.json'); // Ensure the path is correct

  return (
    <div className="mb-[70px] px-6 font-['Raleway'] md:mb-[100px] md:px-10 lg:mx-[40px]">
      <p className="mb-6 text-center text-[50px] font-semibold leading-[55px] md:text-[64px] md:leading-[75.14px]">
        Have Any Inquiry?
      </p>
      <div className="flex flex-col lg:flex-row">
        <div className="rounded-lg bg-white p-2 lg:w-1/2">
          {/* <Image
            height={1200}
            width={1200}
            alt="Contact Image"
            src="/images/careers/contact.png"
            className="w-full object-cover"
          /> */}
          <Lottie animationData={animationData} className="w-full" />
        </div>
        <div className="lg:w-1/2">
          <ContactForm title="We love to hear from you!" />
        </div>
      </div>
    </div>
  );
};
