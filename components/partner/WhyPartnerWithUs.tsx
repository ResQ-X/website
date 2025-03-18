"use client";

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

interface PartnerCard {
  title: string;
  description: string;
  image: string;
}

const partnerData: PartnerCard[] = [
  {
    title: 'TAILORED SOLUTION',
    description: 'We customize our services to meet your unique business needs, ensuring maximum efficiency and value.',
    image: '/images/puzzle.jpeg',
  },
  {
    title: '24/7 RELIABILITY',
    description: 'Enjoy round-the-clock support to keep your operations seamless, minimizing downtime and delays.',
    image: '/images/man.jpeg',
  },
  {
    title: 'SCALABLE PARTNERSHIP',
    description: "Whether you're a small team or a large enterprise, our solutions grow with you.",
    image: '/images/handshake.jpeg',
  },
  {
    title: 'ENHANCED PRODUCTIVITY',
    description: 'Focus on what matters most while we handle the hassle, keeping your fleet and services running smoothly.',
    image: '/images/thumbsup.jpeg',
  },
];

const WhyPartnerWithUs = () => {
  return (
    <section className="text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2 
          className="text-[46px] lg:text-[64px] tracking-[-2%] font-bold text-center mb-12"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          WHY PARTNER WITH US?
        </motion.h2>
        
        {/* Partner Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
        >
          {partnerData.map((card, index) => (
            <motion.div 
              key={index} 
              className="relative h-[512px] group overflow-hidden rounded-lg"
              variants={fadeUpVariants}
            >
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  priority
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Content */}
              <div className="relative h-full py-6 px-3 flex flex-col justify-end z-10">
                <h3 className="text-[20px] font-bold mb-3 whitespace-nowrap">{card.title}</h3>
                <p className="text-[16px] font-semibold text-lightest">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;