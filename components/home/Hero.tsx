import React from 'react';
import Image from "next/image";
import qrcode from "@/public/images/QR Code.png"
import arrow from "@/public/icons/arrow.png"

const services = [
  {
    id: 1,
    name: "Tow Truck",
    icon: "/images/tow.png"
  },
  {
    id: 2,
    name: "Flat Tyre",
    icon: "/images/tyre.png"
  },
  {
    id: 3,
    name: "Fuel Delivery",
    icon: "/images/fuel.png"
  },
  {
    id: 4,
    name: "Jump Start",
    icon: "/images/jumpstart.png"
  },
  {
    id: 5,
    name: "Health Check",
    icon: "/images/health.png"
  },
  {
    id: 6,
    name: "Key Replacement",
    icon: "/images/keys.png"
  }
];

const Hero = () => {
  return (
    <div className="relative min-h-screen h-[1005px] w-full ">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background-man.jpeg')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(0, 0, 0, 0.81) 33.18%, rgba(0, 0, 0, 0) 80.52%),
              linear-gradient(180deg, rgba(0, 0, 0, 0.7) 2.72%, rgba(0, 0, 0, 0) 35.89%, rgba(0, 0, 0, 0.53) 100%)
            `
          }}
        />

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col justify-between px-16 pt-40 pb-32">
          {/* Hero Text Content */}
          <div className="text-white w-full max-w-[720px] flex flex-col gap-[16px]">
            <h1 className="h1 uppercase whitespace-nowrap leading-[85.14px]">
              On-the-Go Assistance, <br /> Anytime You Need It.
            </h1>
            <p className="h4 text-lightest leading-[31.18px]">
              Stuck on the road? With ResQ-X, help is just a tap away. Get fast, reliable roadside assistance wherever you are, 24/7.
            </p>
            <div className="w-full max-w-[551px] h-[112px] flex items-center gap-[37px]">
              <div className="flex-1 max-w-[351px] h-full rounded-[6px] p-[12px] flex items-center gap-[8px] bg-dark">
                <Image src={qrcode} alt="Scan qr code" className='w-[88px] h-[88px]' />
                <p className="text-[20px] font-raleway text-white leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                  Scan to Download App
                </p>
              </div>
              <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 text-white transition-colors duration-300">Get Assistance</span>
                <Image 
                  src={arrow} 
                  alt="Arrow" 
                  className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
                />
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="w-full">
            <div className="grid grid-cols-6 gap-4 w-full">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="flex flex-col items-center w-[200px] h-[234px] gap-[21px] rounded-[8px] px-[32px] py-[40px] bg-dark bg-opacity-80 transition-all duration-300 hover:scale-[1.09]"
                >
                  <div className="w-[136px] h-[76px] rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Image 
                      src={service.icon} 
                      alt={service.name}
                      width={136}
                      height={76}
                    />
                  </div>
                  <p className="h5 text-[20px] text-lightest whitespace-nowrap">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;