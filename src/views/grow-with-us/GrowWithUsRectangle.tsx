import Image from "next/image";

export const GrowWithUsRectangle = () => {
  return (
    <div className="mb-[100px] mt-[300px] lg:mb-[200px] lg:mt-0">
      <div className="flex w-full flex-col bg-[#332414] font-['Raleway'] tracking-[-2%] lg:mb-[120px] lg:h-[475px] lg:flex-row lg:items-center">
        <div className="mt-[-200px] lg:mt-0 lg:w-2/5 lg:pl-[70px] lg:pr-[50px]">
          <Image
            height={3000}
            width={3000}
            alt="What You Gain Phones Image"
            src={"/images/growwithus/growwithus_phone.png"}
            className="w-full object-cover"
          />
        </div>
        <div className="mb-20 lg:mb-0 lg:w-3/5 lg:pr-[30px]">
          <p className="px-4 text-center text-[30px] font-bold leading-[46.96px] text-white md:text-[40px]  lg:px-0 lg:text-start ">
            Growing with ResQ-X means being part of a network that values your
            success. We’re here to support you with a user-friendly platform,
            24/7 assistance, and a commitment to helping you flourish.
          </p>
        </div>
      </div>
    </div>
  );
};
