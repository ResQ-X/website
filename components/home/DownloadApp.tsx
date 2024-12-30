import React from 'react';
import Image from 'next/image';
import arrow from "@/public/icons/arrow.png"

const DownloadSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-full max-w-[1090px] px-4 md:px-8">
        {/* Main content container */}
        <div className="w-full h-[477px] flex items-center rounded-2xl bg-gradient-to-r to-[#FFB84D] from-[#FF8500] overflow-hidden pr-2 relative">
          {/* Left side - Content and download options */}
          <div className="w-full flex flex-col gap-6 p-8">
            {/* Content */}
            <h2 className="text-[48px] leading-[48px] whitespace-nowrap font-bold text-white">
              Ready to get started?
            </h2>

            {/* Download options */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* QR Code section */}
              <div className="min-w-[331px] h-[112px] rounded-[6px] p-[12px] flex items-center gap-[8px] bg-white">
                <Image 
                  src="/images/QR Code.png" 
                  alt="Scan qr code" 
                  width={88}
                  height={88}
                  className="object-contain"
                />
                <p className="text-[20px] font-raleway text-dark-brown leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                  Scan to Download App
                </p>
              </div>

              {/* Get Assistance button */}
              <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 text-dark transition-colors duration-300">Get Assistance</span>
                <Image 
                  src={arrow} 
                  alt="Arrow" 
                  className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
                />
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden md:block w-[100%] -translate-x-5 h-full">
            <div className="relative h-[447px] w-[447px]">
              <Image 
                src="/images/phone.svg" 
                alt="Mobile app showcase" 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full h-screen bg-black">
            <Image src="/images/group-el.svg" className='' width={20} height={20} alt="ellipse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;