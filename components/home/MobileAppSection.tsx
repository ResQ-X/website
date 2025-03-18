"use client";

import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion
import Playstore from "@/public/icons/Frame 1686552962.svg";
import AppleStore from "@/public/icons/Frame 1686552963.svg";

// Animation Variants
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger effect for children
    },
  },
};

const MobileAppSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-8 md:py-0">
      <div className="w-full max-w-[1440px] h-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Image */}
        <motion.div
          className="flex-1 relative h-[300px] md:h-[600px] w-full md:w-auto"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          <Image
            src="/images/mobile-app.png"
            alt="Mobile app showcase"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="flex-1 flex flex-col gap-8 max-w-[600px] w-full md:w-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-6 text-center md:text-left"
            variants={slideInRight}
          >
            <motion.h2
              className="h1-responsive leading-[50px] md:leading-[60px] lg:h1 tracking-[-2%] lg:leading-[75.13px] font-bold text-white"
              variants={slideInRight}
            >
              Your Roadside Companion in Your Pocket.
            </motion.h2>
            <motion.p
              className="h5 text-lightest leading-[23.48px]"
              variants={slideInRight}
            >
              With the ResQ-X mobile app, help is just a tap away. Request assistance, 
              track your service provider, and access all our features anytime, anywhere. 
              Convenience and safety are now at your fingertips.
            </motion.p>
          </motion.div>

          {/* Download App Section */}
          <motion.div
            className="w-full max-w-[551px] h-auto md:h-[112px] flex flex-col md:flex-row items-center gap-6 md:gap-[37px]"
            variants={containerVariants}
          >
            <motion.div
              className="w-full hidden md:flex-1 max-w-[351px] h-[112px] rounded-[6px] p-[12px] lg:flex items-center gap-[8px] bg-dark"
              variants={slideInRight}
            >
              <Image 
                src="/images/QR Code.png" 
                alt="Scan qr code" 
                className='blur-sm'
                width={88}
                height={88}
                priority
              />
              <p className="text-[20px] font-raleway text-white leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                Scan to Download App
              </p>
            </motion.div>
            <div className="hidden grid-cols-2 gap-4">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Image src={Playstore} alt="Play Store" className="w-full" priority />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <Image src={AppleStore} alt="App Store" className="w-full" priority />
                </a>
              </div>
            <motion.div
              variants={slideInRight}
            >
              <button /*href="/contact"*/ className="w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group flex items-center justify-center relative" disabled={true}>
                <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 text-white transition-colors mr-5 duration-300">Get Assistance</span>
                <Image 
                  src="/icons/arrow.png" 
                  alt="Arrow" 
                  width={24}
                  height={24}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
                  priority
                />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileAppSection;