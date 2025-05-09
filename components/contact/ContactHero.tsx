"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactHero = () => {
  return (
    <div className="relative min-h-screen pt-[250px] mt-[100px] lg:h-[600px] w-full">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/spannerman.jpeg')", // Replace with a suitable image
        }}
      >
        {/* Black Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-80" // Adjust opacity here
        />

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col justify-center items-center px-8">
          {/* Hero Text Content */}
          <motion.div
            className="text-white w-full max-w-[720px] flex flex-col items-center gap-[16px] text-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
          >
            <motion.h1 
              className="text-[46px] font-bold leading-[60px] lg:h1 uppercase lg:leading-[85.14px]"
              variants={fadeUpVariants}
            >
              We&apos;re Here to Help.
            </motion.h1>
            <motion.p 
              className="text-[16px] font-semibold lg:h4 text-lightest leading-[31.18px]"
              variants={fadeUpVariants}
            >
              Have questions, need support, or want to learn more about our services? Reach out to us anytime—we’re just a call or message away.
            </motion.p>
            {/* Contact Options */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center mt-6"
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
            >
              <motion.a
                href="tel:+2342013306062"
                className="w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white flex items-center justify-center text-white text-[16px] font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
                variants={staggerVariants}
              >
                Call Us
              </motion.a>
              <motion.a
                href="mailto:hello@resqx.net"
                className="w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white flex items-center justify-center text-white text-[16px] font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
                variants={staggerVariants}
              >
                Email Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
