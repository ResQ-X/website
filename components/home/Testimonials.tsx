"use client";

import React, { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";
import user1 from "@/public/images/user1.jpeg";
import user2 from "@/public/images/oluwafemi.jpeg";
import user3 from "@/public/images/user3.jpeg";
import user4 from "@/public/images/man5.jpeg";

interface Testimonial {
  comment: string;
  name: string;
  occupation: string;
  image: StaticImageData;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    comment:
      "I had a flat tire on Third Mainland Bridge and didn’t know what to do. ResQx came quickly and handled everything so well. They were so calm and professional—I felt safe. I’m so glad I can rely on them anytime!",
    name: "Amake O.",
    occupation: "Small Business Owner",
    image: user1,
    rating: 5,
  },
  {
    comment:
      "I’m always on the road for my business, so breakdowns used to stress me out a lot. Since I started using ResQx, I feel so much more relaxed. They’re fast, affordable, and always so helpful. I don’t know how I managed before!",
    name: " Oluwafemi A.",
    occupation: "Banker",
    image: user2,
    rating: 4,
  },
  {
    comment:
      "One morning, my car just wouldn’t start. I called ResQx, and they came to jump-start it in no time. They even checked everything to make sure it wouldn’t happen again. The service was so smooth, I’ve already told my friends about them!",
    name: "Chidi E.",
    occupation: "IT Consultant",
    image: user3,
    rating: 5,
  },
  {
    comment:
      "I manage a fleet of vehicles, and breakdowns used to be a nightmare. Since we started using ResQx, everything has been so much easier. They’re reliable and quick, and their team always goes the extra mile. It’s a huge relief knowing they’ve got us covered.",
    name: "Tobi S.",
    occupation: "Fleet Manager",
    image: user4,
    rating: 4,
  },
  // {
  //   comment:
  //     "ResQx service was spot on, and the tow driver was prompt. They did an incredible job, and the customer service was satisfactory. I highly recommend them to anyone in need of roadside assistance.",
  //   name: "Moet S.",
  //   occupation: "Fuel Delivery Specialist",
  //   image: user4,
  //   rating: 5,
  // },
  // {
  //   comment: "Locked my keys in the car, and ResQ-X came to the rescue fast. I couldn't believe how efficient they were. Great customer service all around!",
  //   name: "Sara. O",
  //   occupation: "Lead designer",
  //   image: user2,
  //   rating: 5
  // }
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardsPerPage = isMobile ? 1 : 3;
  // Modified maxIndex calculation to limit desktop scrolling to 2 clicks
  const maxIndex = isMobile
    ? testimonials.length - 1
    : Math.min(1, testimonials.length - cardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxIndex, currentIndex]);

  const slideTestimonials = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const newIndex =
      direction === "left"
        ? Math.max(0, currentIndex - 1)
        : Math.min(maxIndex, currentIndex + 1);

    const slidePercentage = isMobile ? 100 : 33.333;

    gsap.to(containerRef.current, {
      x: `${-newIndex * slidePercentage}%`,
      duration: 0.3,
      ease: "power2.out",
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
        slideTestimonials("right");
        setStartX(touch.clientX);
      } else if (difference < 0 && currentIndex > 0) {
        slideTestimonials("left");
        setStartX(touch.clientX);
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${index < rating ? "fill-orange text-orange" : "text-gray-300"}`}
        />
      ));
  };

  return (
    <section className="py-40 px-4 mx-auto relative">
      <div className="absolute top-0 right-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>

      <div className="flex justify-between items-center mb-12">
        <motion.h2
          className="h1 font-[600] text-lightest"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          TRUSTED BY YOU
        </motion.h2>
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => slideTestimonials("left")}
            className="p-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-dark hover:bg-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => slideTestimonials("right")}
            className="p-2 w-[50px] h-[50px] flex items-center justify-center rounded-full bg-dark hover:bg-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === maxIndex}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden touch-pan-y">
        <motion.div
          ref={containerRef}
          className="flex gap-2 lg:gap-8 transition-transform duration-300 ease-out will-change-transform"
          style={{
            width: isMobile
              ? "90%"
              : `${(100 * testimonials.length) / cardsPerPage}%`,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`
                w-full md:w-[424px] 
                min-h-[364px] flex-shrink-0
                flex flex-col items-start justify-between 
                p-6 rounded-[12px] relative overflow-hidden
                ${isDragging ? "cursor-grabbing" : "cursor-grab"}
              `}
              variants={slideIn}
            >
              <div className="absolute inset-0 opacity-95">
                <div className="absolute inset-0 bg-[url('/images/rough.png')] opacity-10" />
              </div>

              <div className="font-serif top-9 left-3 text-white absolute text-6xl">
                &quot;
              </div>

              <p className="relative text-white text-lg my-14">
                {testimonial.comment}
              </p>

              <div className="relative flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

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
                  <h4 className="text-white text-[24px] font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="text-white text-opacity-50">
                    {testimonial.occupation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {Array.from({ length: testimonials.length }, (_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              i === currentIndex ? "bg-orange" : "bg-gray-300"
            }`}
            onClick={() => {
              if (containerRef.current) {
                gsap.to(containerRef.current, {
                  x: `${-i * (isMobile ? 100 : 33.333)}%`,
                  duration: 0.3,
                  ease: "power2.out",
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
