"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import arrow from "@/public/icons/arrow.png";
import Link from 'next/link';

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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardsPerPage = isMobile ? 1 : 3;
  // Modified maxIndex calculation to limit desktop scrolling to 1 click
  const maxIndex = isMobile ? services.length - 2 : Math.min(2, services.length - cardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxIndex, currentIndex]);

  const slideServices = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(maxIndex, currentIndex + 1);

    const slidePercentage = isMobile ? 100 : 33.333;
    
    gsap.to(containerRef.current, {
      x: `${-newIndex * slidePercentage}%`,
      duration: 0.3,
      ease: "power2.out"
    });

    setCurrentIndex(newIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    const difference = startX - touch.clientX;
    
    if (Math.abs(difference) > 50) {
      if (difference > 0 && currentIndex < maxIndex) {
        slideServices('right');
        setStartX(touch.clientX);
      } else if (difference < 0 && currentIndex > 0) {
        slideServices('left');
        setStartX(touch.clientX);
      }
    }
  };

  return (
    <section className="py-40 px-4 md:px-8 mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
      
      <div className="flex justify-between items-center mb-12">
        <h2 className="h1-responsive lg:h1 font-[600] text-white">OUR SERVICES</h2>
        <div className="hidden md:flex gap-4">
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

      <div className="overflow-hidden touch-pan-y">
        <div 
          ref={containerRef}
          className="flex gap-2 lg:gap-8 transition-transform duration-300 ease-out will-change-transform"
          style={{ 
            width: isMobile ? '100%' : `${(100 * services.length) / cardsPerPage}%`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                w-full md:w-[426px] 
                min-h-[364px] flex-shrink-0
                flex flex-col items-center justify-between 
                px-6 py-8 grad rounded-[12px]
                transform transition-transform duration-300
                ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
              `}
            >
              <div className="text-center space-y-2 w-full">
                <h3 className="text-2xl md:text-3xl text-black font-bold">{service.title}</h3>
                <h4 className="text-xl md:text-2xl text-black font-bold">{service.subtitle}</h4>
              </div>
              
              <div className="flex items-center justify-center py-6">
                <div className={`relative w-[181px] h-[103px] ${index === 0 ? "scale-x-[-1]" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                    priority={index <= 2}
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-[#333] text-center font-medium leading-snug">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {Array.from({ length: services.length - (isMobile ? 0 : 2) }, (_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              i === currentIndex ? 'bg-orange' : 'bg-gray-300'
            }`}
            onClick={() => {
              if (containerRef.current) {
                gsap.to(containerRef.current, {
                  x: `${-i * (isMobile ? 100 : 33.333)}%`,
                  duration: 0.3,
                  ease: "power2.out"
                });
                setCurrentIndex(i);
              }
            }}
          />
        ))}
      </div>

      <Link href="/rescue" className="w-full flex items-center justify-center my-9">
        <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 text-white transition-colors duration-300">Rescue Me!</span>
          <Image 
            src={arrow} 
            alt="Arrow" 
            className="relative z-10 duration-300"
            priority
          />
        </button>
      </Link>

      <div className="absolute bottom-0 left-0 bg-orange bg-opacity-50 blur-[225px] w-[300px] h-[300px] z-[-1]"></div>
    </section>
  );
};

export default Services;