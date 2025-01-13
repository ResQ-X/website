"use client"

import React from 'react';
import Image from 'next/image';

const APIIntegrationSection = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8">
      <div className="absolute top-0 left-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>

      <div className="text-center mb-8 w-full max-w-[90%] md:max-w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 px-4">
          API INTEGRATION
        </h1>
        <p className="text-gray-300 text-sm md:text-base px-4">
          Integrate ResqX directly into your fleet management software
        </p>
      </div>

      <div className="w-full max-w-[1324px] mx-auto bg-white rounded-[20px] p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[64px] font-semibold text-dark-brown leading-tight">
              Real-time Data Sync
            </h2>
            <p className="text-[#333] text-sm md:text-[16px] max-w-[500px] mx-auto md:mx-0">
              Instantly synchronize your fleet management data with ResQ-X for up-to-date information on all roadside assistance activities.
            </p>
            
            <button className="relative flex items-center justify-center gap-2 px-6 md:px-8 py-2 md:py-3 rounded-lg border-2 border-[#FF6B00] overflow-hidden group mx-auto md:mx-0">
              <span className="absolute inset-0 w-full h-full bg-[#FF6B00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10 font-medium transition-colors text-black duration-300 group-hover:text-white">
                Explore
              </span>
              <svg 
                className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="flex-1 relative w-full md:max-w-[500px]">
            <div className="relative w-full aspect-square min-h-[250px] md:min-h-[400px]">
              <Image 
                src="/icons/realtime.svg" 
                alt="Mobile & desktop" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIIntegrationSection;