import { IService } from "@/lib/models";
import { ServiceImage } from "./ServiceImage";
import { ServiceInfo } from "./ServiceInfo";

export const Service = (service: IService) => {
  const reverseValue: string = service.reverse
    ? "lg:flex-row-reverse"
    : "lg:flex-row";
  return (
    <div
      className={`flex flex-col gap-2 ${reverseValue} lg:items-center lg:justify-center lg:gap-[33px] lg:px-10`}
    >
      <div className="w-full lg:w-2/4 lg:items-start">
        <ServiceInfo title={service.title} description={service.description} />
      </div>
      <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
        <ServiceImage image={service.image} />
      </div>
    </div>
  );
};
