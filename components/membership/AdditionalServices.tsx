"use client";

import React from 'react';
import Image from 'next/image';
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AdditionalServices = () => {
  const services = [
    {
      icon: "/images/jumpstart.png",
      title: "Battery replacement",
      description: "We’ll replace your dead battery and get your car running again."
    },
    {
      icon: "/images/tyre.png",
      title: "Tyre replacement",
      description: "Flat or damaged tyre? We’ll swap it out on the spot."
    },
    {
      icon: "/images/keys.png",
      title: "Key replacement",
      description: "Lost or broken car key? We’ll arrange a quick replacement to get you moving."
    },
    {
      icon: "/images/driver.png",
      title: "Onward travel",
      description: "Stranded? We’ll help you continue your journey hassle-free."
    }
  ];

  return (
    <div className="relative px-6 py-12">
      <div className="absolute top-0 left-0 bg-orange bg-opacity-90 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2 
          className="text-white text-[46px] lg:text-[64px] font-bold text-center mb-2"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          ADDITIONAL SERVICES
        </motion.h2>

        {/* Paragraph */}
        <motion.p 
          className="text-[#CCC8C4] font-semibold text-[20px] text-center mb-8"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          You can also choose to add any of these services along with your breakdown cover
        </motion.p>

        {/* Service Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-[#3B3835] border border-[#54514D] h-[384px] rounded-lg overflow-hidden"
              variants={fadeUpVariants}
            >
              <div className="p-6 h-[45%] flex justify-center items-center border-b border-[#54514D]">
                <Image src={service.icon} alt={service.title} width={197} height={185} priority />
              </div>
              <div className="p-6">
                <h3 className="text-white text-[28px] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-lightest text-[16px] font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AdditionalServices;