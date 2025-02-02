"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import LeftSvg from "@/public/grad/Ellipse 15.svg";
import RightSvg from "@/public/grad/Vector 10.svg";
import RightSvg1 from "@/public/grad/Vector 11.svg";
import RightSvg2 from "@/public/grad/Ellipse 13.svg";

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div className="relative text-white bg-black mt-[100px] w-full pt-[200px] h-[700px] lg:h-screen md:h-[896px] lg:pt-[200px] md:pt-40">
      <div className="w-full max-w-[956px] mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-[64px] font-bold mb-6 md:mb-[95px] tracking-[-2%] leading-[40px] sm:leading-[50px] md:leading-[75.14px]"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          PROTECT WHAT MATTERS MOST:<br />
          YOUR FAMILY, YOUR CAR, YOUR TIME
        </motion.h1>

        {/* Paragraph */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-lightest max-w-[956px] mx-auto"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          Affordable plans tailored just for you. Join now and secure what truly matters.
        </motion.p>
      </div>

      {/* Background SVGs */}
      <Image src={LeftSvg} alt="LeftSvg" className="absolute left-0 top-0 w-[200px] sm:w-[300px] md:w-auto" priority />
      <Image src={RightSvg} alt="RightSvg" className="absolute bottom-0 w-full" priority />
      <Image src={RightSvg2} alt="RightSvg" className="absolute right-0 bottom-0 w-[200px] sm:w-[300px] md:w-auto" priority />
      <Image src={RightSvg1} alt="RightSvg" className="absolute left-0 bottom-0 w-[200px] sm:w-[300px] md:w-auto" priority />
    </div>
  );
};

export default Hero;