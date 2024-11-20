"use client"

import { offeringList } from "@/lib/values/offerings.values";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import { motion } from 'framer-motion'

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.4
    },
  },
}

const itemVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
}

const textVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

export const HomeTopTierOfferings = () => {
  return (
    <div className="mx-[20px] mb-[120px] font-['Raleway'] md:mx-[58px]">
      <motion.div 
        variants={containerVariants} 
        initial="initial" 
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center font-['Raleway']"
      >
        <motion.p 
          variants={textVariants}
          className="text-center text-[50px] font-semibold leading-[75px] text-[#332414] md:text-[64px]"
        >
          Our Top-Tier Offerings
        </motion.p>
        <div className="rounded-full p-2">
          <Image
            height={2000}
            width={2000}
            alt="Underline Image"
            src={"/images/underline_image.png"}
            className="h-[37px] w-[223px] object-cover"
          />
        </div>
        <motion.p 
          variants={textVariants}
          className="text-center text-lg font-normal text-[#333333]"
        >
          We provide your vehicle roadside assistance safely and efficiently
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="grid gap-x-[175px] gap-y-[68px] md:grid-cols-2 lg:grid-cols-3">
          {offeringList.map((offering, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="transition-all duration-200 rounded-xl hover:border-2 hover:border-[#FF8500]"
            >
              <div className="flex flex-col items-center justify-center p-9 md:items-start md:justify-start">
                <div className="p-2">
                  <Image
                    height={2000}
                    width={2000}
                    alt={offering.title}
                    src={offering.image}
                    className="h-[61px] max-w-[110px] object-cover"
                  />
                </div>
                <p className="text-25px mb-[17px] font-semibold leading-[29px] text-black">
                  {offering.title}
                </p>
                <p className="text-center text-base font-normal leading-[24px] md:text-start">
                  {offering.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};