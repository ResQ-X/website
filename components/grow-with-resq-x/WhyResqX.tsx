"use client";

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import BlurredHeading from './BlurHeading';

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function WhyResqX() {
  return (
    <>
      <div className="w-full overflow-x-hidden h-32 relative -py-20" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(38, 36, 34, 1) 0%, rgba(38, 36, 34, 1) 70%, rgba(38, 36, 34, 1) 100%)',
        filter: 'blur(60px)',
        transform: 'scale(1.9)'
      }}></div>
      <section className="relative -py-20">
        <BlurredHeading text="WHY RESQ-X?" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="w-full max-w-[1324px] mx-auto min-h-[555px] px-4 md:px-8 flex flex-col md:flex-row-reverse items-center justify-between gap-8 border-[5px] bg-white border-[#736250] rounded-[12px] py-8 md:py-0">
            {/* Left side - Image */}
            <motion.div 
              className="w-full md:flex-1 relative h-[300px] md:h-[526.87px] block"
              variants={slideInRightVariants}
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
              className="w-full md:flex-1 flex flex-col gap-8 max-w-full md:max-w-[600px]"
              variants={slideInLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
            >
              <motion.div 
                className="flex flex-col gap-6"
                variants={fadeUpVariants}
              >
                <motion.h2 
                  className="h1 tracking-[-2%] leading-[1.2] md:leading-[75.13px] font-semibold text-dark-brown w-full md:w-[702px] text-[32px] md:text-[48px]"
                  variants={fadeUpVariants}
                >
                  Steady Stream of Work, Transparent Earnings
                </motion.h2>
                <motion.p 
                  className="h5 w-full md:w-[660px] font-normal text-[14px] md:text-[16px] text-[#333333] leading-[1.5] md:leading-[23.48px]"
                  variants={fadeUpVariants}
                >
                  Access a constant flow of service requests to keep your business busy and profitable. Easily track your earnings through the app and receive payments promptly.
                </motion.p>
              </motion.div>

              {/* Download App Section */}
              <motion.div 
                className="w-full max-w-full md:max-w-[551px] flex flex-col md:flex-row items-center gap-4 md:gap-[37px]"
                variants={fadeUpVariants}
              >
                <div className="w-full md:flex-1 md:max-w-[351px] h-[112px] rounded-[6px] p-[12px] flex items-center gap-[8px] bg-dark">
                  <Image 
                    src="/images/QR Code.png" 
                    alt="Scan qr code" 
                    className="blur-sm"
                    width={88}
                    height={88}
                    priority
                  />
                  <p className="text-[16px] md:text-[20px] font-raleway text-white leading-[1.2] md:leading-[23.48px] tracking-[-2%] font-semibold">
                    Scan to Download App
                  </p>
                </div>
                <button className="w-full md:w-[183px] h-[52px] relative flex items-center justify-center gap-3 rounded-[8px] border-[2px] hover:border-orange border-orange overflow-hidden group" disabled={true}>
                  <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10 text-dark-brown transition-colors duration-300">Learn More</span>
                  <Image 
                    src="/icons/arrow.png" 
                    alt="Arrow" 
                    width={24}
                    height={24}
                    className="relative z-10 [filter:brightness(0)] transition-[filter] duration-300"
                    priority
                  />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}