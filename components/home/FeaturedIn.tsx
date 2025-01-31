"use client";

import React from 'react';
import Image from 'next/image';

const MEDIA_LOGOS = Array(100).fill([
  { src: "/icons/channels-tv.jpg" },
  { src: "/icons/techcabal.png", link: "https://techcabal.com/2024/11/20/resq-x-announces-beta-testing-program-to-refine-roadside-assistance-services-ahead-of-its-official-launch/" },
  { src: "/icons/techpoint.png", link: "https://techpoint.africa/2024/11/21/resq-x-announces-beta-testing-program-to-refine-roadside-assistance-services-ahead-of-its-official-launch/" },
  { src: "/icons/the-independent.png", link: "https://independent.ng/resq-x-set-to-launch-15-minute-roadside-assistance-service-in-lagos/" },
  { src: "/icons/The-Nation.jpg", link: "https://thenationonlineng.net/resq-x-set-to-launch-15-minute-roadside-assistance-service-in-lagos/" },
  { src: "/icons/Punch_logo.svg" },
  { src: "/icons/Guardian_logo.png" },
  { src: "/icons/tvc-news.jpg" },
  { src: "/icons/BusinessDay.png" },
  { src: "/icons/vanguard.png" },
  { src: "/icons/tribune.jpg" },
  { src: "/icons/channels-tv.jpg" },
  { src: "/icons/techcabal.png", link: "https://techcabal.com/2024/11/20/resq-x-announces-beta-testing-program-to-refine-roadside-assistance-services-ahead-of-its-official-launch/" },
  { src: "/icons/techpoint.png", link: "https://techpoint.africa/2024/11/21/resq-x-announces-beta-testing-program-to-refine-roadside-assistance-services-ahead-of-its-official-launch/" },
  { src: "/icons/the-independent.png", link: "https://independent.ng/resq-x-set-to-launch-15-minute-roadside-assistance-service-in-lagos/" },
  { src: "/icons/The-Nation.jpg", link: "https://thenationonlineng.net/resq-x-set-to-launch-15-minute-roadside-assistance-service-in-lagos/" },
  { src: "/icons/Punch_logo.svg" },
  { src: "/icons/Guardian_logo.png" },
  { src: "/icons/tvc-news.jpg" },
  { src: "/icons/BusinessDay.png" },
  { src: "/icons/vanguard.png" },
  { src: "/icons/tribune.jpg" },
]).flat();

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
                className="flex-shrink-0 w-52 h-32 mx-8 relative grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              >
                {logo.link ? (
                  <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={logo.src}
                      alt={`Media Logo ${index + 1}`}
                      fill
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      priority
                    />
                  </a>
                ) : (
                  <Image
                    src={logo.src}
                    alt={`Media Logo ${index + 1}`}
                    fill
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                    priority
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
