import Image from "next/image";
import { UserReview } from "./UserReview";
import { testimonialList } from "@/lib/values/testimonial.values";

export const Testimonial = () => {
  return (
    <div className="mb-20 mt-20">
      <div className="flex flex-col items-center justify-center gap-6 px-[30px] md:px-[100px] lg:px-[200px]">
        <p className="text-center text-[50px] font-semibold leading-[75.14px] text-[#121212] md:text-[64px]">
          Real Stories,
        </p>
        <p className="mt-[-25px] text-center text-[50px] font-semibold leading-[75.14px] text-[#121212] md:text-[64px]">
          Real Satisfaction
        </p>
        <div>
          <Image
            height={1200}
            width={1200}
            alt="Customer Phone Image"
            src="/images/testimonial/testimonial_people_group.png"
            className="h-auto w-[358px] max-w-[200px] object-cover"
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
