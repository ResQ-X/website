import Image from "next/image";
import Link from "next/link";

export const ServiceInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full font-['Raleway'] hover:card-body hover:shadow-2xl lg:px-6">
      <p className="mb-3 text-[40px] font-bold leading-[46.96px] tracking-[-2%]  text-[#1F1F1F]">
        {title}
      </p>
      <p className="text-lg font-normal leading-[21.13px] tracking-[-2%] text-[#A89887]">
        {description}
      </p>
    </div>
  );
};
