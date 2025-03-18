"use client"; // Add this directive for client-side interactivity

import { HomeBlogSectionCard } from "./HomeBlogSectionCard";
import { motion } from "framer-motion"; // Import Framer Motion

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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const HomeBlogSection = () => {
  return (
    <motion.div
      className="max-w-[1400px] w-full mx-auto px-[2rem]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
    >
      {/* Title */}
      <motion.h2
        className="font-raleway text-center text-[40px] md:text-[64px] font-bold text-lightest mb-12 tracking-tighter"
        variants={fadeIn}
      >
        Tips for you
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Half */}
        <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
          {/* Full Width Card */}
          <motion.div variants={slideInLeft}>
            <HomeBlogSectionCard 
              backgroundImage="/images/carImg2.jpeg"
              title="Navigating the Rainy Season: Flood-Prone Areas in Lagos You Need to Know"
              date="August 12, 2024"
              className="h-[314px]"
            />
          </motion.div>
          
          {/* Two Half-Width Cards */}
          <motion.div className="grid lg:grid-cols-2 gap-6" variants={containerVariants}>
            <motion.div variants={slideInLeft}>
              <HomeBlogSectionCard 
                backgroundImage="/images/carImg3.jpeg"
                title="Urban Gardening Tips for Small Spaces"
                date="July 25, 2024"
                className="h-[445px]"
              />
            </motion.div>
            <motion.div variants={slideInLeft}>
              <HomeBlogSectionCard 
                backgroundImage="/images/female.jpg"
                title="Sustainable Living Hacks"
                date="June 15, 2024"
                className="h-[445px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Second Half */}
        <motion.div className="grid grid-cols-1 gap-6" variants={containerVariants}>
          {/* Two Half-Width Cards on First Row */}
          <motion.div className="grid lg:grid-cols-2 gap-6" variants={containerVariants}>
            <motion.div variants={slideInLeft}>
              <HomeBlogSectionCard 
                backgroundImage="/images/changing.jpg"
                title="Smart Home Technology Trends"
                date="May 30, 2024"
                className="h-[445px]"
              />
            </motion.div>
            <motion.div variants={slideInLeft}>
              <HomeBlogSectionCard 
                backgroundImage="/images/happy.jpg"
                title="Eco-Friendly Transportation"
                date="April 22, 2024"
                className="h-[445px]"
              />
            </motion.div>
          </motion.div>
          
          {/* Full Width Card */}
          <motion.div variants={slideInLeft}>
            <HomeBlogSectionCard 
              backgroundImage="/images/bank.jpg"
              title="The Future of Renewable Energy in Urban Landscapes"
              date="March 10, 2024"
              className="h-[314px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};