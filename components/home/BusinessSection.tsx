"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

// Animation Variants
const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
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

const BusinessSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-8 md:py-0">
      <div className="w-full max-w-[1324px] mx-auto h-auto md:h-[555px] px-4 md:px-8 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8 border-[5px] bg-white border-[#736250] rounded-[12px]">
        {/* Left side - Image */}
        <motion.div
          className="flex-1 relative h-[300px] md:h-[526.87px] w-full md:w-auto"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          <Image
            src="/images/business.png"
            alt="Business opportunities"
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
            className="flex flex-col gap-6 py-8 lg:py-0 text-center md:text-left"
            variants={slideInLeft}
          >
            <motion.h2
              className="h1-responsive lg:h1 tracking-[-2%] leading-[50px] md:leading-[75.13px] font-bold text-dark-brown w-full md:w-[702px]"
              variants={slideInLeft}
            >
              Unlock New Opportunities and Boost Your Business!
            </motion.h2>
            <motion.p
              className="h5 w-full md:w-[685px] text-[#736250] leading-[23.48px]"
              variants={slideInLeft}
            >
              Grow your reach and connect with customers in need of your expertise. 
              Register today and take your business to the next level with ResQ-X.
            </motion.p>
          </motion.div>

          {/* Download App Section */}
          <motion.div
            className="w-full max-w-[551px] h-auto md:h-[112px] flex flex-col md:flex-row items-center gap-6 md:gap-[37px]"
            variants={containerVariants}
          >
            <motion.div
              className="w-full md:flex-1 max-w-[351px] h-[112px] rounded-[6px] p-[12px] flex items-center gap-[8px] bg-dark"
              variants={slideInLeft}
            >
              <Image 
                src="/images/QR Code.png" 
                alt="Scan qr code" 
                width={88}
                height={88}
                priority
              />
              <p className="text-[20px] font-raleway text-white leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                Scan to Download App
              </p>
            </motion.div>
            <motion.div
              variants={slideInLeft}
            >
              <Link href="/about" className="w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-orange border-orange overflow-hidden flex items-center justify-center group relative">
                <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 text-dark-brown transition-colors duration-300">Learn More</span>
                <Image 
                  src="/icons/arrow.png" 
                  alt="Arrow" 
                  width={24}
                  height={24}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 [filter:brightness(0)] transition-[filter] duration-300"
                  priority
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSection;