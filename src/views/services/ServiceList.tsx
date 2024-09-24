import { serviceList } from "@/lib/values/services.value";
import { Service } from "./Service";

export const ServiceList = () => {
  return (
    <div className="flex flex-col gap-14 px-6 py-12 font-['Raleway'] tracking-[-2%] md:px-6">
      {serviceList.map((service, index) => (
        <Service key={index} {...service} />
      ))}
    </div>
  );
};
