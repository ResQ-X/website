"use client"

import React from 'react';
import Image from 'next/image';

const MobileAppSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-[1440px] h-full px-4 md:px-8 flex items-center justify-between gap-8">
        {/* Left side - Image */}
        <div className="flex-1 relative h-[600px] hidden md:block">
          <Image
            src="/images/mobile-app.png"
            alt="Mobile app showcase"
            fill
            className="object-contain"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex flex-col gap-8 max-w-[600px]">
          <div className="flex flex-col gap-6">
            <h2 className="h1 tracking-[-2%] leading-[75.13px] font-bold text-white">
              Your Roadside Companion in Your Pocket.
            </h2>
            
            <p className="h5 text-lightest leading-[23.48px]">
              With the ResQ-X mobile app, help is just a tap away. Request assistance, 
              track your service provider, and access all our features anytime, anywhere. 
              Convenience and safety are now at your fingertips.
            </p>
          </div>

          {/* Download App Section */}
          <div className="w-full max-w-[551px] h-[112px] flex items-center gap-[37px]">
            <div className="flex-1 max-w-[351px] h-full rounded-[6px] p-[12px] flex items-center gap-[8px] bg-dark">
              <Image 
                src="/images/QR Code.png" 
                alt="Scan qr code" 
                width={88}
                height={88}
              />
              <p className="text-[20px] font-raleway text-white leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                Scan to Download App
              </p>
            </div>
            <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 text-white transition-colors duration-300">Get Assistance</span>
              <Image 
                src="/icons/arrow.png" 
                alt="Arrow" 
                width={24}
                height={24}
                className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;