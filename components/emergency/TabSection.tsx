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

const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const TabsSection = () => {
  const services = [
    {
      id: 'fuel',
      title: 'Fuel Delivery',
      description: 'Ran out of fuel on the roadside? We\'ll deliver 10 liters of Super 98 fuel directly to your location.',
      arrival: 'Arrives within 30 mins',
      price: '₦12,000',
      additionalInfo: 'T&Cs apply.',
      image: '/images/gas-deliver.jpg',
    },
    {
      id: 'jump_start',
      title: 'Jump Start',
      description: 'Dead battery? Don\'t panic – we\'ll come and give you a boost.',
      arrival: 'Arrives within 30 mins',
      price: '₦7,000',
      additionalInfo: 'Fees may still apply if jump-starting does not resolve the issue.',
      image: '/images/car-battery-3.jpg',
    },
    {
      id: 'tire_change',
      title: 'Tire Change',
      description: 'Flat tire? We\'ll come over and replace it for you quickly.',
      arrival: 'Arrives within 30 mins',
      price: '₦7,000',
      additionalInfo: 'T&Cs apply.',
      image: '/images/tire.jpg',
    },
    {
      id: 'air_pressure',
      title: 'Air Pressure',
      description: 'Low tire pressure? We\'ll make sure your tires are properly inflated.',
      arrival: 'Arrives within 30 mins',
      price: '₦10,000',
      additionalInfo: 'Includes a complete tire inspection.',
      image: '/images/tyre-pressures.jpg',
    },
    {
      id: 'towing',
      title: 'Towing',
      description: 'Stranded? Our towing service will help you move your vehicle safely.',
      arrival: 'Arrives within 30 mins',
      price: '₦7,000',
      additionalInfo: 'Price includes up to 10 km of towing.',
      image: '/images/Towing_Payallup.jpg',
    },
    {
      id: 'broken_down',
      title: 'Vehicle Broken Down',
      description: 'Car trouble? We will fix it as soon as possible.',
      arrival: 'Arrives within 30 mins',
      price: '₦10,000',
      additionalInfo: 'T&C apply.',
      image: '/images/broken-car.jpg',
    }
  ];

  // Function to generate WhatsApp link
  const generateWhatsAppLink = (service: { title: string, description: string }) => {
    const message = `Hi ResQx. I need ${service.title} service. ${service.description}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+2348111173779?text=${encodedMessage}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2 
        className="text-[64px] uppercase font-bold text-center mb-10"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
      >
        Rescue Services
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
      >
        {services.map((service) => (
          <motion.div 
            key={service.id} 
            className="bg-gradient-to-br from-[#ff8500] to-[#995000] rounded-2xl py-9 px-6 text-white transform transition-all space-y-6 duration-300 hover:scale-105 hover:shadow-2xl"
            variants={zoomInVariants}
          >
            <div className="relative w-full h-52 mb-4 rounded-xl overflow-hidden">
              <Image 
                src={service.image} 
                alt={service.title} 
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
            <motion.h3 
              className="text-2xl font-bold mb-2"
              variants={fadeUpVariants}
            >
              {service.title}
            </motion.h3>
            <motion.p 
              className="mb-3 text-sm font-medium opacity-90"
              variants={fadeUpVariants}
            >
              {service.description}
            </motion.p>
            <motion.div 
              className="space-y-2"
              variants={fadeUpVariants}
            >
              <div className="flex justify-between">
                <span className="font-semibold">Arrival Time:</span>
                <span className='bg-green-100 text-green-700 px-3 py-1 text-center rounded-lg text-[10px] font-medium'>{service.arrival}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Price:</span>
                <span>{service.price}</span>
              </div>
              <p className="text-xs italic mt-2 opacity-80">{service.additionalInfo}</p>
            </motion.div>
            <motion.a 
              href={generateWhatsAppLink(service)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full mt-4 flex gap-4 items-center justify-center px-4 py-4 grad text-dark-brown text-[20px] rounded-3xl shadow-lg font-semibold hover:bg-green-600 transition"
              variants={fadeUpVariants}
            >
              <Image src="/icons/whatsapp.svg" alt="arrow-right" width={32} height={32} priority />
              Get ResQ
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TabsSection;