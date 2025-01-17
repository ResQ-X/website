"use client"

import React from 'react';
import Image from "next/image";
import qrcode from "@/public/images/QR Code.png";
import arrow from "@/public/icons/arrow.png";
import Link from 'next/link';
import Playstore from "@/public/icons/Frame 1686552962.svg";
import AppleStore from "@/public/icons/Frame 1686552963.svg";
import { motion } from 'framer-motion'; // Import Framer Motion
// import { FacebookPixel } from '@/utils/facebookPixels';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect for children
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const services = [
  {
    id: 1,
    name: "Tow Truck",
    icon: "/images/tow.png",
    link: "/tow-truck"
  },
  {
    id: 2,
    name: "Flat Tyre",
    icon: "/images/tyre.png",
    link: "/flat-tyre"
  },
  {
    id: 3,
    name: "Fuel Delivery",
    icon: "/images/fuel.png",
    link: "/fuel-delivery"
  },
  {
    id: 4,
    name: "Jump Start",
    icon: "/images/jumpstart.png",
    link: "/jump-start"
  },
  {
    id: 5,
    name: "Health Check",
    icon: "/images/health.png",
    link: "/health-check"
  },
  {
    id: 6,
    name: "Key Replacement",
    icon: "/images/keys.png",
    link: "/key-replacement"
  }
];


const Hero = () => {
  // useEffect(() => {
  //   FacebookPixel.pageView()
  // }, [])


  return (
    <div className="relative min-h-screen overflow-hidden h-auto pb-96 lg:h-[1005px] mt-[100px] w-full">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/resqman.jpeg')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(0, 0, 0, 0.81) 33.18%, rgba(0, 0, 0, 0) 80.52%),
              linear-gradient(180deg, rgba(0, 0, 0, 0.7) 2.72%, rgba(0, 0, 0, 0) 35.89%, rgba(0, 0, 0, 0.53) 100%)
            `
          }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative w-full min-h-screen flex flex-col justify-between px-4 md:px-8 lg:px-16 pt-40 pb-8 md:pb-16 lg:pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Text Content */}
        <div className="text-white w-full max-w-[720px] flex flex-col gap-4 lg:gap-[16px]">
          <motion.h1
            className="h1-responsive leading-[60px] lg:h1 uppercase lg:whitespace-nowrap lg:leading-[85.14px]"
            variants={fadeUpVariants}
          >
             Roadside Assistance, <br className="hidden md:block" /> Whenever You Need It.
          </motion.h1>
          <motion.p
            className="text-base md:text-xl lg:h4 text-lightest leading-normal lg:leading-[31.18px]"
            variants={fadeUpVariants}
          >
            Stuck on the road? With ResQ-X, help is just a tap away. Get fast, reliable roadside assistance wherever you are, 24/7.
          </motion.p>
          <motion.div
            className="w-full max-w-[551px] flex flex-col lg:flex-row items-center gap-[37px]"
            variants={slideInLeftVariants}
          >
            <div className="flex-1 hidden max-w-[351px] h-full rounded-[6px] p-[12px] lg:flex items-center gap-[8px] bg-dark">
              <Image src={qrcode} alt="Scan qr code" className='w-[88px] blur-sm h-[88px]' priority />
              <p className="text-[20px] font-raleway text-white leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                Scan to Download App
              </p>
            </div>
            <div className="lg:hidden grid grid-cols-2 gap-4">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Image src={Playstore} alt="Play Store" className="w-full" priority />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <Image src={AppleStore} alt="App Store" className="w-full" priority />
                </a>
              </div>
            <Link href="#" className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 text-white transition-colors duration-300">Coming Soon</span>
              <Image 
                src={arrow} 
                alt="Arrow" 
                className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
                priority
              />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="mt-8"
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={zoomInVariants}
                custom={index} // Add custom delay for stagger
              >
                <Link
                  href={service.link} 
                  className="flex flex-col items-center w-full h-[234px] gap-[21px] rounded-[8px] px-[32px] py-[40px] bg-dark bg-opacity-80 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-[136px] h-[76px] rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Image 
                      src={service.icon} 
                      alt={service.name}
                      width={136}
                      height={76}
                      priority
                    />
                  </div>
                  <p className="h5 text-[20px] text-lightest whitespace-nowrap">{service.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;