import Image from "next/image";
import { UserReview } from "./UserReview";
import { testimonialList } from "@/lib/values/testimonial.values";

export const Testimonial = ({ heading }: { heading: string[] }) => {
  return (
    <div className="mb-20 mt-20 relative">

      <Image
        height={2000}
        width={2000}
        alt="Customer Phone Image"
        src="/images/testimonial/globe.png"
        className="absolute object-cover h-[460px] w-[336px] rotate-45 lg:bottom-0 scale-[1.5] lg:-left-[150px] -left-[200px] brightness-[0.1]"
      />

      <div className="flex flex-col items-center justify-center gap-6 px-[20px] md:px-[100px] lg:px-[200px]">
        <p className="text-center text-[40px] font-semibold leading-[75.14px] text-[#121212] md:text-[64px]">
          {heading[0]}
        </p>
        <p className="mt-[-25px] text-center text-[40px] font-semibold leading-[75.14px] text-[#121212] md:text-[64px]">
          {heading[1]}
        </p>
        <div>
          <Image
            height={2000}
            width={2000}
            alt="Customer Phone Image"
            src="/images/testimonial/testimonial_people_group.png"
            className="h-[202px] w-[328px] contrast-125 brightness-100 max-w-[600px] md:w-[500px] object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 px-4 md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {testimonialList.map((value, index) => (
          <UserReview key={index} {...value} />
        ))}
      </div>
    </div>
  );
};
