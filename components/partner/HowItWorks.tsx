"use client";

import Image from 'next/image';
import React from 'react';
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

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, imageUrl }) => (
  <motion.div 
    className="relative w-[424px]"
    variants={fadeUpVariants}
  >
    {/* Image container */}
    <div className="relative w-full h-[296px]">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover rounded-lg"
        priority
      />
    </div>
    
    {/* Content container */}
    <div className="absolute h-[296px] bottom-[-70%] left-1/2 -translate-x-1/2 w-[384px] bg-[#3B3835CC] p-6 rounded-lg flex items-center justify-center flex-col">
      {/* Centered number circle */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="w-[127px] h-[127px] rounded-full border-[2px] border-[#A89887] bg-white flex items-center justify-center">
          <span className="text-[64px] tracking-[-2%] font-bold text-[#736250]">{number}</span>
        </div>
      </div>
      <h3 className="text-white text-[20px] font-semibold mt-12 mb-4">{title}</h3>
      <p className="text-lightest font-normal text-sm">{description}</p>
    </div>
  </motion.div>
);

const HowItWorks: React.FC = () => {
  const steps: StepCardProps[] = [
    {
      number: "01",
      title: "GET IN TOUCH",
      description: "Connect with our team to discuss your business needs. We'll understand your fleet size, operational requirements, and specific challenges to create a tailored roadside assistance solution that aligns with your goals and budget.",
      imageUrl: "/images/woman.jpeg"
    },
    {
      number: "02",
      title: "FIND YOUR IDEAL PLAN",
      description: "Our experts will design a customized service package that perfectly matches your business requirements. From 24/7 emergency response to preventive maintenance schedules, we ensure comprehensive coverage that keeps your fleet running efficiently.",
      imageUrl: "/images/pcmna.jpeg"
    },
    {
      number: "03",
      title: "OPERATE WORRY-FREE",
      description: "Once your plan is activated, enjoy peace of mind knowing that professional assistance is just a call away. Our nationwide network of skilled technicians and advanced dispatch system ensures rapid response times and minimal downtime for your fleet operations.",
      imageUrl: "/images/steering.jpeg"
    }
  ];

  return (
    <section className="w-full pt-16 pb-96 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          <h2 className="text-[64px] tracking-[-2%] font-bold mb-2">HOW IT WORKS</h2>
          <p className="text-lg max-w-[622px] mx-auto font-semibold text-lightest">
            Streamline your operations and enhance customer satisfaction with our quick and efficient roadside assistance services, tailored to meet the needs of your business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 space-y-[300px] lg:space-y-0 gap-8 md:grid-cols-2 grid-cols-1 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
        >
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;