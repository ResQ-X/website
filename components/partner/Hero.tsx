"use client";

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import arrow from "@/public/icons/arrow.png";
// create a navugate function using useRouter
import Link from "next/link"

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative h-auto py-52">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/patnerhero.jpeg" // You'll need to add your image
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(0, 0, 0, 0) -6.69%, rgba(0, 0, 0, 0.9) 101.35%),
              linear-gradient(180deg, rgba(0, 0, 0, 0.7) 2.72%, rgba(0, 0, 0, 0) 35.89%, rgba(0, 0, 0, 0.53) 100%)
            `
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 h-full flex items-center justify-center">
        <motion.div 
          className="max-w-6xl flex items-center flex-col justify-center text-center"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          {/* Heading */}
          <motion.h1 
            className="text-[32px] sm:text-[48px] lg:text-[64px] lg:whitespace-nowrap font-bold text-white mb-4 sm:mb-6"
            variants={fadeUpVariants}
          >
            Optimize Operations, Eliminate<br /> Downtime: ResQ-X for<br /> Businesses
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-lightest mb-6 sm:mb-8 px-4 sm:px-0"
            variants={fadeUpVariants}
          >
            Empowering your business with customized solutions to keep your fleet moving and your operations running smoothly. 
          </motion.p>

          {/* Button */}
          <motion.div 
            className="w-full max-w-[551px] h-auto sm:h-[112px] flex flex-col sm:flex-row items-center gap-4 sm:gap-[37px] justify-center"
            variants={fadeUpVariants}
          >
            <Link href="/membership" className="relative flex items-center justify-center gap-3 w-[150px] sm:w-[183px] h-[40px] sm:h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 text-white transition-colors duration-300 text-sm sm:text-base">
                Get Quote
              </span>
              <Image 
                src={arrow} 
                alt="Arrow" 
                className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300 w-4 h-4 sm:w-6 sm:h-6"
                priority
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}