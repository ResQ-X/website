import Image from "next/image";
import Link from "next/link";
import { ServiceInfo } from "./ServiceInfo";
import { ServiceImage } from "./ServiceImage";

export const ServiceList = () => {
  return (
    <div className="flex flex-col gap-14 px-6 py-12 font-['Raleway'] tracking-[-2%] md:px-6">
      {/* Service 1 */}
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Quick Fix"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/quick_fix.png" />
        </div>
      </div>
      {/* Service 2 */}
      <div className="flex flex-col gap-2 lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Tow Truck"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/tow_truck.png" />
        </div>
      </div>
      {/* Service 3 */}
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Tyre Replacement"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/tyre_replacement.png" />
        </div>
      </div>
      {/* Service 4 */}
      <div className="flex flex-col gap-2 lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Fuel Delivery"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/fuel_delivery.png" />
        </div>
      </div>
      {/* Service 5 */}
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Vehicle Jump Start"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/vehicle_jump_start.png" />
        </div>
      </div>
      {/* Service 6 */}
      <div className="flex flex-col gap-2 lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Key Replacement"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/key_replacement.png" />
        </div>
      </div>
      {/* Service 7 */}
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Routine Health Check"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/routine_health_check.png" />
        </div>
      </div>
      {/* Service 8 */}
      <div className="flex flex-col gap-2 lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-[33px] lg:px-10">
        <div className="w-full lg:w-2/4 lg:items-start">
          <ServiceInfo
            title="Onward Travel"
            description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
        <div className="mt-6 w-full text-left lg:ml-[29px] lg:mt-0 lg:w-2/4">
          <ServiceImage image="/images/services/onward_travel.png" />
        </div>
      </div>
    </div>
  );
};
