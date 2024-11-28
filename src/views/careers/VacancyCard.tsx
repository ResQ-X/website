import { IVacancy, IWhyWork } from "@/lib/models";
import Link from "next/link";

export const VacancyCard = (vacancy: IVacancy) => {
  return (
    <div className="mb-4 flex flex-col items-center bg-orange-100 px-2 py-8 rounded-xl font-['Raleway'] leading-[23.48px] md:flex-row md:justify-between md:px-8">
      <div className="flex flex-col justify-center text-center md:justify-start md:text-start">
        <p className="mb-[10px] text-[20px]  font-semibold leading-[23.48px] text-[#332414]">
          {vacancy.role}
        </p>
        <p className="mb-4 text-lg font-normal leading-[21.13px] text-[#A89887] md:mb-0">
          {vacancy.deadline}
        </p>
      </div>
      <Link href="">
        <p className="text-center text-lg font-medium leading-[21.13px] text-[#2B43DF] md:text-end">
          {"Apply now"}
        </p>
      </Link>
    </div>
  );
};
