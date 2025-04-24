"use client";

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import qrcode from "@/public/qrcode.svg";

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/grow.jpeg" // You'll need to add your image
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
      <div className="relative z-10 container mx-auto px-4 pt-20 mt-[100px] h-full flex items-center justify-center">
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
            ELEVATE YOUR SERVICE WITH RESQ - X
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-lightest mb-6 sm:mb-8 px-4 sm:px-0"
            variants={fadeUpVariants}
          >
            Join ResQ X and expand your reach as a trusted service provider. Connect with more 
            customers, increase your job opportunities, and deliver top-notch service. Let&apos;s grow together.
          </motion.p>

          {/* QR Code Section */}
          <motion.div 
            className="w-full max-w-[551px] h-auto sm:h-[112px] flex flex-col sm:flex-row items-center gap-4 sm:gap-[37px] justify-center"
            variants={fadeUpVariants}
          >
            <div className="w-full sm:flex-1 max-w-[351px] h-[112px] rounded-[6px] p-[12px] flex items-center gap-[8px] bg-dark">
              <Image src={qrcode} alt="Scan qr code" className='w-[64px] h-[64px] sm:w-[88px] sm:h-[88px] mr-2' priority />
              <p className="text-[16px] sm:text-[20px] font-raleway text-white leading-[20px] sm:leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                Scan to Download App
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}