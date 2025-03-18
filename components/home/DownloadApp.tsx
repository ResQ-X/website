"use client"; // Add this directive for client-side interactivity

import React from 'react';
import Image from 'next/image';
import arrow from "@/public/icons/arrow.png";
import Playstore from "@/public/icons/Frame 1686552962.svg";
import AppleStore from "@/public/icons/Frame 1686552963.svg";
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger effect for children
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DownloadSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-10 md:py-20">
      <div className="w-full max-w-[1090px] px-4 md:px-8">
        {/* Main content container */}
        <motion.div
          className="w-full h-[477px] flex flex-col md:flex-row items-center rounded-2xl bg-gradient-to-r to-[#FFB84D] from-[#FF8500] overflow-hidden pr-0 md:pr-2 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          {/* Left side - Content and download options */}
          <motion.div
            className="w-full flex flex-col gap-6 p-6 md:p-8"
            variants={containerVariants}
          >
            {/* Content */}
            <motion.h2
              className="text-[32px] md:text-[48px] leading-[36px] md:leading-[48px] font-bold text-white text-center md:text-left"
              variants={fadeUp}
            >
              Ready to get started?
            </motion.h2>

            {/* Download options */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              variants={containerVariants}
            >
              {/* QR Code section */}
              <motion.div
                className="w-full sm:min-w-[201px] h-[112px] rounded-[6px] p-[12px] hidden lg:flex items-center gap-[8px] bg-white"
                variants={slideInLeft}
              >
                <Image 
                  src="/images/QR Code.png" 
                  alt="Scan qr code" 
                  width={88}
                  height={88}
                  className="object-contain blur-sm"
                  priority
                />
                <p className="text-[14px] md:text-[16px] font-raleway text-dark-brown leading-[20px] md:leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
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

              {/* Get Assistance button */}
              <motion.div variants={slideInLeft}>
                <button href="/contact" className="relative flex items-center justify-center gap-3 w-[150px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group" disabled={true}>
                  <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative whitespace-nowrap text-sm z-10 text-dark transition-colors duration-300">Get Assistance</span>
                  <Image 
                    src={arrow} 
                    alt="Arrow" 
                    className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
                    priority
                  />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="w-full md:w-[100%] -translate-x-0 md:-translate-x-5 mt-9 md:h-full"
            variants={slideInRight}
          >
            <div className="relative h-[300px] md:h-[447px] w-full md:w-[447px]">
              <Image 
                src="/images/phone.svg" 
                alt="Mobile app showcase" 
                fill
                className="lg:object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          {/* Background Ellipse */}
          <motion.div
            className="absolute bottom-[-400px] -left-16 w-full h-[200px] md:h-screen"
            variants={fadeUp}
          >
            <Image 
              src="/images/group-el.svg" 
              width={20} 
              height={20} 
              alt="ellipse" 
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadSection;