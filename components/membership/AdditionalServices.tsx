import React from 'react';
import  Image from 'next/image';

const AdditionalServices = () => {
  const services = [
    {
      icon: "/images/jumpstart.png",
      title: "Battery replacement",
      description: "Service description goes here. Replace with your actual service description text."
    },
    {
      icon: "/images/tyre.png",
      title: "Tyre replacement",
      description: "Service description goes here. Replace with your actual service description text."
    },
    {
      icon: "/images/keys.png",
      title: "Key replacement",
      description: "Service description goes here. Replace with your actual service description text."
    },
    {
      icon: "/images/driver.png",
      title: "Onward travel",
      description: "Service description goes here. Replace with your actual service description text."
    }
  ];

  return (
    <div className="relative px-6 py-12">
        <div className="absolute top-0 left-0 bg-orange bg-opacity-90 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-[64px] font-bold text-center mb-2">
          ADDITIONAL SERVICES
        </h2>
        <p className="text-[#CCC8C4] font-semibold text-[20px] text-center mb-8">
          You can also choose to add any of these services along with your breakdown cover
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#3B3835] border border-[#54514D] h-[384px] rounded-lg overflow-hidden"
            >
              <div className="p-6 h-[45%] flex justify-center items-center border-b border-[#54514D]">
                <Image src={service.icon} alt={service.title} width={197} height={185} />
              </div>
              <div className="p-6">
                <h3 className="text-white text-[28px] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-lightest text-[16px] font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;