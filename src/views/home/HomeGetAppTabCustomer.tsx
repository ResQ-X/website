import Image from "next/image";

export const HomeGetAppTabCustomer = () => {
  return (
    <div className="bg-[#4B2E2A]">
      <div className="ml-[140px] mr-[228px] flex lg:flex-row">
        <div className="flex items-center justify-center gap-x-[70px]">
          <div className="mt-[-100px]">
            <Image
              height={1200}
              width={1200}
              alt="Customer Phone Image"
              src={"/images/home/customer_app_image.png"}
              className="w-[374.86px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-['Raleway'] text-lg font-normal leading-[21px] text-white">
              We provide reliable roadside assistance at your fingertips. From
              towing to tire changes, our services are just a tap away. Download
              the ResQ-X app and drive with confidence!
            </p>
            <div className="grid grid-cols-2 gap-x-[100px] gap-y-[44px]">
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
