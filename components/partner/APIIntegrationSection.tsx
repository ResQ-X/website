"use client"

import React from 'react';
import Image from 'next/image';

const APIIntegrationSection = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Main header */}
      <div className="absolute top-0 left-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>

      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          API INTEGRATION
        </h1>
        <p className="text-gray-300">
          Integrate ResqX directly into your fleet management software
        </p>
      </div>

      {/* Content container */}
      <div className="w-full max-w-[1324px] mx-auto bg-white rounded-[20px] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-[64px] font-semibold whitespace-nowrap text-dark-brown leading-tight">
              Real-time Data Sync
            </h2>
            <p className="text-[#333] text-[16px] max-w-[500px]">
              Instantly synchronize your fleet management data with ResQ-X for up-to-date information on all roadside assistance activities.
            </p>
            
            {/* Animated button */}
            <button className="relative flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-[#FF6B00] overflow-hidden group">
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

          {/* Right illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-[500px] aspect-square">
             <Image src="/icons/realtime.svg" alt="Mobile & desktop" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIIntegrationSection;