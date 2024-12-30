import React from 'react';
import Image from "next/image";
import qrcode from "@/public/images/QR Code.png";
import Phone from "@/public/grad/phone.svg";
import Resqx from "@/public/icons/resqx.png";
import Blurr from "@/public/grad/Rectangle 28.png";

interface HeroProps {
  title: string;
  description: string;
  rotate?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, description, rotate }) => {
  return (
    <>
    <div className="relative min-h-screen bg-[#000]">
      {/* Main Content Container */}
      <div className="relative w-full h-full flex items-center px-16 py-20 overflow-hidden">
        {/* Left Content */}
        <div className="flex-1 w-full max-w-[821px] text-white">
          <h1 className="text-6xl font-bold mb-6 leading-tight w-[762px]">
            {title}
          </h1>
          <p className="text-xl text-lightest mb-8 max-w-2xl">
            {description}
          </p>
          
          {/* QR Code Section */}
          <div className="flex items-center gap-6">
            <div className="bg-[#3B3835] rounded-lg p-4 flex items-center gap-4">
              <Image 
                src={qrcode} 
                alt="QR Code" 
                className="w-24 h-24"
              />
              <span className="text-lg font-semibold">
                Scan to Download App
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-[400px] -left-10 right-0">
              {/* Center Blur */}
              <Image
                src={Blurr}
                alt="Blur Effect Center"
                className="w-full object-cover blur- z-30"
              />
        </div>
        {/* Right Content - Phone Image */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Orange Blur Effect */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange opacity-20 rounded-full blur-[100px]" />
          
          {/* Phone Container with Blur Effect */}
          <div className={`relative translate-x-16 z-10 w-[496.46px] h-[624.14px] ${rotate ? '-rotate-[10deg]' : ''} `}>
            {/* Phone Image */}
            <Image
              src={Phone}
              alt="ResQ-X App"
              fill
              className="object-contain"
            />
            
            {/* ResQ-X Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={Resqx}
                alt="ResQ-X Logo"
                width={200}
                height={50}
                className="object-contain z-20"
              />
            </div>

            {/* Blur Effects Container */}
            <div className="absolute -bottom-32 -left-10 right-0">
              {/* Center Blur */}
              <Image
                src={Blurr}
                alt="Blur Effect Center"
                className="w-full object-cover blur- z-30"
              />
              
              {/* Left Corner Blur */}
              <div className="absolute -left-32 z-30 bottom-0">
                <Image
                  src={Blurr}
                  alt="Blur Effect Left"
                  className="w-full object-cover z-30 blur-2xl rotate-[-25deg]"
                />
              </div>
              
              {/* Right Corner Blur */}
              <div className="absolute -right-32 bottom-0">
                <Image
                  src={Blurr}
                  alt="Blur Effect Right"
                  className="w-full object-cover blur-2xl z-30 rotate-[25deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blur Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#262422] to-transparent opacity-80" />
    </div>
    </>
  );
};

export default Hero;