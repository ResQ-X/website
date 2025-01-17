"use client"

import React, { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import user1 from "@/public/images/man6.jpg"
import user2 from "@/public/images/woman3.jpg"
import user3 from "@/public/images/man8.jpg"
import user4 from "@/public/images/woman5.jpeg"
import user5 from "@/public/images/man7.jpg"
import arrow from "@/public/icons/arrow.png"
import Link from "next/link"

interface Testimonial {
  comment: string;
  name: string;
  occupation: string;
  image: StaticImageData;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    comment: "Working with ResQx has been such a rewarding experience. They really care about both their customers and us, the service providers. The app makes it easy to find jobs, and I always feel valued for the work I do. It’s great to be part of a team that’s making a real difference.",
    name: "Ibrahim A.",
    occupation: "Towing Specialist",
    image: user1,
    rating: 5
  },
  {
    comment: "I love how organized ResQx is. Every request I get through them is clear, and their support team is always there if I need help. It feels good to know I’m helping people in emergencies, and ResQx makes the whole process so smooth for us.",
    name: "Blessing O",
    occupation: "Key Replacement Technician",
    image: user2,
    rating: 4
  },
  {
    comment: "Before I joined ResQx, it was hard to find consistent jobs. Now, I’m busy all the time, and I don’t have to stress about finding clients. ResQx really takes care of the service providers, and it feels like a family. I’m proud to be part of this!",
    name: "Tunde E.",
    occupation: "Tire Repair Specialist",
    image: user3,
    rating: 5
  },
  {
    comment: "The best thing about working with ResQx is how easy they make everything for us. Their system is simple, the jobs are reliable, and they always treat me with respect. It’s amazing to see how much they value their team and the customers we serve.",
    name: "Chinaza K.",
    occupation: "Vehicle Health Inspector",
    image: user4,
    rating: 4
  },
  {
    comment: "Being a part of ResQx has been a game-changer for me. I get steady work, and the customers are always grateful for what we do. It feels good to know I’m helping people get back on the road, and ResQx makes it all possible.",
    name: "Segun M.",
    occupation: "Fuel Delivery Specialist",
    image: user5,
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardsPerPage = isMobile ? 1 : 3;
  const maxIndex = testimonials.length - cardsPerPage;

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

  const slideTestimonials = (direction: 'left' | 'right') => {
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
        slideTestimonials('right');
        setStartX(touch.clientX);
      } else if (difference < 0 && currentIndex > 0) {
        slideTestimonials('left');
        setStartX(touch.clientX);
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'fill-orange text-orange' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-40 px-4 mx-auto relative">
      <div className="absolute top-0 right-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="h1 font-[600] text-lightest">Hear from Our Service Providers</h2>
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => slideTestimonials('left')}
            className="p-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-dark hover:bg-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => slideTestimonials('right')}
            className="p-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-dark hover:bg-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === maxIndex}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative overflow-hidden touch-pan-y">
        <div 
          ref={containerRef}
          className="flex gap-2 lg:gap-8 transition-transform duration-300 ease-out will-change-transform"
          style={{ 
            width: isMobile ? '90%' : `${(100 * testimonials.length) / cardsPerPage}%`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`
                w-full md:w-[424px] 
                min-h-[364px] flex-shrink-0
                flex flex-col items-start justify-between 
                p-6 rounded-[12px] relative overflow-hidden
                ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
              `}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-95">
                <div className="absolute inset-0 bg-[url('/images/rough.png')] opacity-10" />
              </div>
              
              {/* Quote Icon */}
              <div className="font-serif top-9 left-3 text-white absolute text-6xl">&quot;</div>
              
              {/* Comment */}
              <p className="relative text-white text-lg my-14">{testimonial.comment}</p>
              
              {/* Rating */}
              <div className="relative flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* User Info */}
              <div className="relative flex items-center gap-4 w-full">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h4 className="text-white text-[24px] font-bold">{testimonial.name}</h4>
                  <p className="text-white text-opacity-50">{testimonial.occupation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {Array.from({ length: testimonials.length }, (_, i) => (
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

      <div className="absolute top-0 left-0 bg-orange bg-opacity-50 blur-[225px] w-[300px] h-[300px] z-[-1]"></div>
      
      {/* Get In Touch Button */}
      <div className="w-full flex items-center justify-center mt-9">
        <Link href="/contact" className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 text-white transition-colors duration-300">Get In Touch</span>
          <Image 
            src={arrow} 
            alt="Arrow" 
            className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
            priority
          />
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;