"use client"

import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import user1 from "@/public/images/user1.jpeg"
import user2 from "@/public/images/user2.jpeg"
import user3 from "@/public/images/user3.jpeg"

interface Testimonial {
  comment: string;
  name: string;
  occupation: string;
  image: StaticImageData;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    comment: "Incredible service! I was stranded in the middle of nowhere, and ResQ-X came to the rescue in no time. Super quick and professional. Highly recommend!",
    name: "Ada. O",
    occupation: "Lead designer",
    image: user1,
    rating: 5
  },
  {
    comment: "I had a flat tyre on a busy road, and I thought I'd be stuck for hours. ResQ-X had someone there in 20 minutes! Such a lifesaver.",
    name: "James. E",
    occupation: "CEO palmpay",
    image: user2,
    rating: 4
  },
  {
    comment: "ResQ-X helped me with a jump start late at night. The technician was friendly, and the app made everything so easy. Definitely my go-to for roadside assistance.",
    name: "Tolu. M",
    occupation: "Tech Bro",
    image: user3,
    rating: 5
  },
  {
    comment: "I ran out of fuel during rush hour and wasn't sure what to do. ResQ-X delivered fuel within 30 minutes. Amazing service that saved me a ton of stress!",
    name: "Chris. D",
    occupation: "CEO palmpay",
    image: user1,
    rating: 4
  },
  {
    comment: "Locked my keys in the car, and ResQ-X came to the rescue fast. I couldn't believe how efficient they were. Great customer service all around!",
    name: "Sara. O",
    occupation: "Lead designer",
    image: user2,
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const cardsPerPage = 3;
  const maxIndex = testimonials.length - cardsPerPage;

  const slideTestimonials = (direction: 'left' | 'right') => {
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
        <h2 className="h1 font-[600] text-lightest">TRUSTED BY YOU</h2>
        <div className="flex gap-4">
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
      <div className="relative overflow-hidden">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out gap-[32px]"
          style={{ 
            width: `${(100 * testimonials.length) / 6}%`,
            transform: `translateX(${-currentIndex * 33.333}%)`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="w-full md:w-[424px] min-h-[364px] flex flex-col items-start justify-between p-6 rounded-[12px] relative overflow-hidden"
              style={{ flex: `0 0 ${100 / cardsPerPage}%` }}
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

      <div className="absolute top-0 left-0 bg-orange bg-opacity-50 blur-[225px] w-[300px] h-[300px] z-[-1]"></div>
    </section>
  );
};

export default Testimonials;