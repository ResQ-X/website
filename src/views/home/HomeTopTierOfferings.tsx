import Image from "next/image";

export const HomeTopTierOfferings = () => {
  return (
    <div className="mb-[120] w-full">
      <div className="flex flex-col items-center justify-center font-['Raleway']">
        <p className="text[#332414] text-[64px] font-semibold leading-[75px]">
          Our Top-Tier Offerings
        </p>
        <div className="rounded-full p-2">
          <Image
            height={2000}
            width={2000}
            alt="Underline Image"
            src={"/images/underline_image.png"}
            className="h-[33px] w-[] object-cover"
          />
        </div>
        <p className="text-lg font-normal text-[#333333]">
          We provide your vehicle roadside assistance safely and efficiently
        </p>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-4 gap-[175px]"></div>
      </div>
    </div>
  );
};
