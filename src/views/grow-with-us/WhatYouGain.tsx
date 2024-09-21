import Image from "next/image";

export const WhatYouGain = () => {
  return (
    <div className="mb-[100px] lg:mb-[200px]">
      <div className="h-[576px] w-full bg-[#332414] font-['Raleway'] ">
        <div className="h-10"></div>
        <p className="text-center text-[50px] font-semibold leading-[55px] text-white md:text-[64px] md:leading-[75.14px]">
          Here's What You Gain
        </p>
        <p className="mb-6 text-center text-[50px] font-semibold leading-[55px] text-white md:text-[64px] md:leading-[75.14px]">
          With Us
        </p>
      </div>
      <div className="mx-4 mt-[-330px] flex flex-col items-center rounded-[12px] border-[5px] border-[#736250] bg-white px-6 lg:mx-[50px] lg:flex-row lg:px-[27px] ">
        <div className="mt-10 flex flex-col text-center lg:mt-0 lg:w-2/3 lg:justify-start lg:pr-20 lg:text-start">
          <p className="mb-8 text-[50px] font-semibold leading-[55px] text-[#332414] md:text-[64px] md:leading-[75.14px]">
            Steady Stream of Work, Transparent Earnings
          </p>
          <p className="mb-6  text-base font-normal leading-[24px] text-[#333333] ">
            Access a constant flow of service requests to keep your business
            busy and profitable. Easily track your earnings through the app and
            receive payments promptly.
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image
            height={1200}
            width={1200}
            alt="What You Gain Phones Image"
            src={"/images/growwithus/whatyougain_phone.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
