import { VacancyCard } from "./VacancyCard";
import { vacancyList } from "@/lib/values/vacancy.values";

export const VacancySection = () => {
  return (
    <div className="mb-[70px] px-6 font-['Raleway'] md:mb-[100px] md:px-10 lg:mx-[100px]">
      <p className="mb-6 text-center text-[50px] font-semibold leading-[55px] md:text-[64px] md:leading-[75.14px]">
        Join The Team
      </p>
      <div className="">
        {vacancyList.map((value, index) => (
          <VacancyCard
            key={index}
            role={value.role}
            deadline={value.deadline}
          />
        ))}
      </div>
    </div>
  );
};
