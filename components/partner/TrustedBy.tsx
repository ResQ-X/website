"use client";

import React from 'react';
import Image from 'next/image';

const LOGOS = [
  "/icons/benz.svg",
  "/icons/bmw.svg", 
  "/icons/Honda.svg",
  "/icons/hyundai.svg",
  "/icons/kiv.svg",
  "/icons/th.svg",
  "/icons/toyota.svg",
  "/icons/benz.svg",
  "/icons/bmw.svg", 
  "/icons/Honda.svg",
  "/icons/hyundai.svg",
  "/icons/kiv.svg",
  "/icons/th.svg",
  "/icons/toyota.svg"
];

const TrustedBy = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b bg-no-repeat bg-cover from-[#FAF8F5] to-[#262422] mb-16">
      <div className="py-16">
        <h2 className="text-4xl text-[#262422] font-bold text-center mb-12">TRUSTED BY</h2>
        
        <div className="relative">
          <div className="absolute -bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-[#262422] to-transparent z-10 blurr" />
          
          <div className="flex animate-marquee">
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-20 mx-8 relative">
                <Image
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;