import { IWhyWork } from "@/lib/models";

export const WhyWorkWithUsCard = ({ title, description }: IWhyWork) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:justify-start md:text-start">
      <p className="mb-[17px] text-[25px] font-semibold leading-[29.35px] text-black">
        {title}
      </p>
      <p className="text-lg font-normal leading-[24px] text-[#333333]">
        {description}
      </p>
    </div>
  );
};
