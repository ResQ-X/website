"use client";

import Image from 'next/image';
import arrow from "@/public/icons/arrow.png";
import Link from 'next/link';
import { useState } from 'react';
import { Clock, Wrench, DollarSign, Clock as AvailabilityIcon } from 'lucide-react'; // Lucide icons
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

interface PartnerCard {
  title: string;
  image: string;
  description: string;
  icon: JSX.Element;
}

// Fixed ServicesProps interface
interface ServicesProps {
  title: string;
}

const partnerData: PartnerCard[] = [
  {
    title: 'Fast Response Time',
    image: '/images/time.jpg',
    description: 'We understand that time is of the essence during a breakdown. That’s why ResQ-X ensures a quick response to get help to you as soon as possible, no matter where you are.',
    icon: <Clock size={48} className="text-white" />,
  },
  {
    title: 'Professional Service',
    image: '/images/pro-service2.jpg',
    description: 'Our team of skilled and experienced professionals is trained to handle your vehicle with care and precision. With ResQ-X, you can rest assured that your car is in safe hands.',
    icon: <Wrench size={48} className="text-white" />,
  },
  {
    title: 'Affordable Rates',
    image: '/images/moneyisplenty.png',
    description: 'Quality doesn’t have to come at a high price. Our services are designed to be budget-friendly while maintaining exceptional standards, giving you value without stress.',
    icon: <DollarSign size={48} className="text-white" />,
  },
  {
    title: '24/7 Availability',
    image: '/images/working-woman.jpeg',
    description: 'Breakdowns don’t follow a schedule, and neither do we. Whether it’s late at night or early in the morning, ResQ-X is always ready to provide reliable assistance.',
    icon: <AvailabilityIcon size={48} className="text-white" />,
  },
];

// Fixed props destructuring
const Services: React.FC<ServicesProps> = ({ title }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate text fade up
    gsap.from(".service-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".service-text",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <section className="text-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full lg:w-[874px] items-center justify-center">
          <h2 className="text-4xl leading-[75px] lg:text-[69px] tracking-[-2%] text-white font-bold text-center mb-12 service-text">
            {title}
          </h2>
        </div>
        
        <div className="flex w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-6 w-full">
            {partnerData.map((card, index) => (
              <div 
                key={index} 
                className="relative h-[508px] group overflow-hidden rounded-lg transition-all duration-300 ease-in-out flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  width: hoveredIndex === index ? '536px' : '282px',
                  transition: 'width 0.3s ease-in-out',
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain transition-opacity duration-300"
                    style={{ opacity: hoveredIndex === index ? 0 : 1 }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={100}
                    priority={index < 2}
                  />
                </div>
                
                {/* Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div>
                
                {/* Content */}
                <div className="relative items-center w-full h-full py-6 px-4 flex flex-col justify-end z-10">
                  {/* Title (visible when not hovered) */}
                  <h3 
                    className="text-[20px] lg:text-[36px] text-center text-white uppercase font-bold mt-3 w-[249px] transition-opacity duration-300"
                    style={{ opacity: hoveredIndex === index ? 0 : 1 }}
                  >
                    {card.title}
                  </h3>

                  {/* Description and Icon (visible when hovered) */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300"
                    style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    <div className="mb-6">
                      {card.icon}
                    </div>
                    <p className="text-white text-center text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-9">
        <Link href="/membership" className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 text-white transition-colors duration-300">See Pricing</span>
          <Image 
            src={arrow} 
            alt="Arrow" 
            className="relative z-10 duration-300"
            priority
          />
        </Link>
      </div>
    </section>
  );
};

export default Services;