"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import arrow from "@/public/icons/arrow.png"


interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
}

const services: Service[] = [
  {
    title: "Need a Tow?",
    subtitle: "We've Got You Covered!",
    description: "Available 24/7, we offer fast, affordable, friendly, and reliable car towing services with well-equipped tow trucks.",
    image: "/images/tow.png",
    buttonText: "Rescue Me"
  },
  {
    title: "Flat Tyre?",
    subtitle: "Let Us Fix It!",
    description: "Efficient flat tire assistance, seamlessly integrated into our comprehensive roadside services.",
    image: "/images/tyre.png",
    buttonText: "Rescue Me"
  },
  {
    title: "Out of Fuel?",
    subtitle: "We'll Bring It to You!",
    description: "Timely fuel delivery, a vital part of our dependable roadside assistance services.",
    image: "/images/fuel.png",
    buttonText: "Rescue Me"
  },
  {
    title: "Car Won't Start?",
    subtitle: "We'll Jump-Start It!",
    description: "Prompt and friendly jump-starts, a vital part of our 24/7 roadside assistance. Count on us for swift help",
    image: "/images/jumpstart.png",
    buttonText: "Rescue Me"
  },
  {
    title: "Need a Quick Vehicle Check-Up?",
    subtitle: "We'll Check It For You!",
    description: "Routine vehicle health checks, your trusted ally for roadside assistance and worry-free journeys.",
    image: "/images/health.png",
    buttonText: "Rescue Me"
  },
  {
    title: "Lost Your Keys?",
    subtitle: "We've Got a Spare Solution!",
    description: "Swift key replacement, 24/7, for your security and peace of mind. Your trusted partner for breakdown coverage.",
    image: "/images/keys.png",
    buttonText: "Rescue Me"
  }
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardsPerPage = 3;
  const maxIndex = services.length - cardsPerPage;

  const slideServices = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    let newIndex = currentIndex;
    if (direction === 'left') {
      newIndex = Math.max(0, currentIndex - 1);
    } else {
      newIndex = Math.min(maxIndex, currentIndex + 1);
    }

    gsap.to(containerRef.current, {
      x: `${-newIndex * 33.333}%`,
      duration: 0.5,
      ease: "power2.inOut"
    });

    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-40 px-4 md:px-8  mx-auto relative">
      <div className="absolute top-0 right-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="h1 font-[600] text-white">OUR SERVICES</h2>
        <div className="flex gap-4">
          <button 
            onClick={() => slideServices('left')}
            className="p-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-dark hover:bg-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => slideServices('right')}
            className="p-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-dark hover:bg-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === maxIndex}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Services Carousel */}
      <div className="relative overflow-hidden">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out gap-[32px]"
          style={{ 
            width: `${(100 * services.length) / 7}%`,
            transform: `translateX(${-currentIndex * 33.333}%)`
          }}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="w-full md:w-[424px] min-h-[364px] flex flex-col items-center justify-between px-2 grad md:px-5 grad rounded-[12px] py-5"
              style={{ flex: `0 0 ${100 / cardsPerPage}%` }}
            >
              <div className="text-center flex flex-col gap-2">
                <h3 className="h3 text-black font-bold">{service.title}</h3>
                <h4 className="h3 text-black font-bold">{service.subtitle}</h4>
              </div>
              
              <div className="flex items-center justify-center py-4">
                <div className={`relative w-[181px] h-[103px] ${index === 0 ? "transform scale-x-[-1]" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain w-full h-full scale-[1.3]"
                  />
                </div>
              </div>

              <div className="text-center w-full">
                <p className="h6 text-[22px] text-[#333] md:w-[367px] mx-auto font-[500] leading-[25.83px]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {Array.from({ length: services.length }, (_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentIndex ? 'bg-orange' : 'bg-gray-300'
            }`}
            onClick={() => {
              if (containerRef.current) {
                gsap.to(containerRef.current, {
                  x: `${-i * 100}%`,
                  duration: 0.5,
                  ease: "power2.inOut"
                });
                setCurrentIndex(i);
              }
            }}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center my-9">
      <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 text-white transition-colors duration-300">Rescue Me!</span>
                <Image 
                  src={arrow} 
                  alt="Arrow" 
                  className="relative z-10 duration-300"
                />
              </button>
      </div>

      <div className="absolute bottom-0 left-0 bg-orange bg-opacity-50 blur-[225px] w-[300px] h-[300px] z-[-1]"></div>

    </section>
  );
};

export default Services;