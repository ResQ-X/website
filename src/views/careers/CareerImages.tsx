"use client"; // Add this line to make the component client-side

import Image from "next/image";
import { motion } from "framer-motion";

// Variants for the animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

export const CareerImages = () => {
  return (
    <motion.div
      className="grid-col-1 mb-[80px] grid gap-6 px-6 md:grid-cols-2 lg:mb-[120px] lg:grid-cols-4 lg:px-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Image
          height={1200}
          width={1200}
          alt="Career Image"
          src={"/images/careers/1.png"}
          className="w-full object-cover rounded-3xl"
        />
      </motion.div>

      <div className="flex flex-col gap-6">
        <motion.div variants={itemVariants}>
          <Image
            height={1200}
            width={1200}
            alt="Career Image"
            src={"/images/careers/2.png"}
            className="w-full object-cover rounded-3xl"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            height={1200}
            width={1200}
            alt="Career Image"
            src={"/images/careers/3.png"}
            className="w-full object-cover rounded-3xl"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Image
          height={1200}
          width={1200}
          alt="Career Image"
          src={"/images/careers/4.png"}
          className="w-full object-cover rounded-3xl"
        />
      </motion.div>

      <div className="flex flex-col gap-6">
        <motion.div variants={itemVariants}>
          <Image
            height={1200}
            width={1200}
            alt="Career Image"
            src={"/images/careers/5.png"}
            className="w-full object-cover rounded-3xl"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            height={1200}
            width={1200}
            alt="Career Image"
            src={"/images/careers/6.png"}
            className="w-full object-cover rounded-3xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
