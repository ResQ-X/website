"use client";

import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import qrcode from "@/public/qrcode.svg";
import Phone from "@/public/grad/phone.svg";
import Resqx from "@/public/icons/resqx.png";
import Blurr from "@/public/grad/Rectangle 28.png";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Playstore from "@/public/icons/Frame 1686552962.svg";
import AppleStore from "@/public/icons/Frame 1686552963.svg";
import { PhoneOutgoing } from 'lucide-react';

interface HeroProps {
  title: string;
  description: string;
  rotate?: boolean;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, rotate, image }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate text and QR code (slide in from the left)
    gsap.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Animate phone image (slide up and fade in from the right)
    gsap.from(imageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <>
      <div className="relative z-[-1] min-h-screen pt-[100px] lg:pt-0 mt-[100px] bg-[#000]">
        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 pt-10 lg:pt-20 pb-[10rem] lg:pb-[22.35rem] overflow-hidden">
          {/* Left Content */}
          <div ref={textRef} className="flex-1 w-full max-w-[821px] text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight w-full lg:w-[762px]">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-lightest mb-8 max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
            
            {/* QR Code and Hotline Section */}
            <div className="hidden lg:flex justify-center lg:justify-start items-center gap-6">
              <div className="bg-[#3B3835] rounded-lg p-4 flex items-center gap-4">
                <Image 
                  src={qrcode} 
                  alt="QR Code" 
                  className="w-20 blur-sm h-20 sm:w-24 sm:h-24"
                  priority
                />
                <span className="text-base sm:text-lg font-semibold">
                  Scan to Download App
                </span>
              </div>
              
              <a 
                href="tel:+2348111173779"
                className="bg-[#3B3835] hover:bg-[#4B4845] transition-colors rounded-lg p-4 flex items-center gap-4"
              >
                <PhoneOutgoing size={32} className="text-orange" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">24/7 Hotline</span>
                  <span className="text-base sm:text-lg font-semibold">0811-117-3779</span>
                </div>
              </a>
            </div>

            <div className="hidden grid-cols-2 gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.resqx.customer" target="_blank" rel="noopener noreferrer">
                  <Image src={Playstore} alt="Play Store" className="w-full" priority />
                </a>
                <a href="https://apps.apple.com/ng/app/resq-x/id6504094221" target="_blank" rel="noopener noreferrer">
                  <Image src={AppleStore} alt="App Store" className="w-full" priority />
                </a>
              </div>
          </div>

          {/* Right Content - Phone Image */}
          <div ref={imageRef} className="relative flex-1 flex justify-center items-center mt-10 lg:mt-0">
            {/* Orange Blur Effect */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[250px] sm:w-[400px] sm:h-[350px] lg:w-[600px] lg:h-[500px] bg-orange opacity-20 rounded-full blur-[50px] sm:blur-[75px] lg:blur-[100px]" />
            
            {/* Phone Container with Blur Effect */}
            <div className={`relative lg:-translate-x-16 z-10 w-[250px] h-[314px] sm:w-[350px] sm:h-[440px] lg:w-[496.46px] lg:h-[624.14px] ${rotate ? '-rotate-[10deg]' : ''}`}>
              {/* Phone Image */}
              <Image
                src={image ? image : Phone}
                alt="ResQ-X App"
                fill
                className="object-contain"
                priority
              />
              
              {/* ResQ-X Logo Overlay */}
              {!image && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={Resqx}
                  alt="ResQ-X Logo"
                  width={100}
                  height={25}
                  className="object-contain z-20 w-[100px] sm:w-[150px] lg:w-[200px]"
                  priority
                />
              </div>
              )}

              {/* Blur Effects Container */}
              {!image && (
              <div className="absolute -bottom-16 sm:-bottom-32 -left-5 sm:-left-10 right-0">
                {/* Center Blur */}
                <Image
                  src={Blurr}
                  alt="Blur Effect Center"
                  className="w-full object-cover blur z-30"
                  priority
                />
                
                {/* Left Corner Blur */}
                <div className="absolute -left-16 sm:-left-32 z-30 bottom-0">
                  <Image
                    src={Blurr}
                    alt="Blur Effect Left"
                    className="w-full object-cover z-30 blur-2xl rotate-[-25deg]"
                    priority
                  />
                </div>
                
                {/* Right Corner Blur */}
                <div className="absolute -right-16 sm:-right-32 bottom-0">
                  <Image
                    src={Blurr}
                    alt="Blur Effect Right"
                    className="w-full object-cover blur-2xl z-30 rotate-[25deg]"
                    priority
                  />
                </div>
              </div> )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;