"use client";

import React from 'react';
import Image from 'next/image';

const MEDIA_LOGOS = [
  "/icons/channels-tv.jpg",     // Nigerian news channel
  "/icons/Punch_logo.svg",        // Punch Newspaper
  "/icons/Guardian_logo.png",     // The Guardian Nigeria
  "/icons/tvc-news.jpg",        // TVC News
  "/icons/BusinessDay.png",     // BusinessDay
  "/icons/vanguard.png",     // Vanguard Nigeria
  "/icons/tribune.jpg",         // Nigerian Tribune
  "/icons/channels-tv.jpg",     // Nigerian news channel
  "/icons/Punch_logo.svg",        // Punch Newspaper
  "/icons/Guardian_logo.png",     // The Guardian Nigeria
  "/icons/tvc-news.jpg",        // TVC News
  "/icons/BusinessDay.png",     // BusinessDay
  "/icons/vanguard.png",     // Vanguard Nigeria
  "/icons/tribune.jpg",         // Nigerian Tribune
];

const FeaturedIn = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b bg-no-repeat bg-cover from-[#FAF8F5] to-[#262422] mb-16">
      <div className="py-16">
        <h2 className="text-4xl text-[#262422] font-bold text-center mb-12">FEATURED IN</h2>
        
        <div className="relative">
          {/* Gradient overlay at the bottom */}
          <div className="absolute -bottom-10 left-0 right-0 h-24 bg-gradient-to-t from-[#262422] to-transparent z-10 blurr" />
          
          {/* Scrolling logos */}
          <div className="flex animate-marquee">
            {[...MEDIA_LOGOS, ...MEDIA_LOGOS].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-40 h-24 mx-8 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`Media Logo ${index + 1}`}
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

export default FeaturedIn;