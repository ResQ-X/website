"use client";

import { HomeSliderCard } from "./HomeSliderCard";
import React, { useEffect, useRef, useState } from "react";

export const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const HomeCarouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = 4;
  const slideWidth = 100; // Ensure slide takes up 100% of the container width

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000); // Slide every 3 seconds
    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, []);

  return (
    <div className="mb-[120px] flex h-[309px] items-center bg-[#FAF8F5] font-['Raleway']">
      <div className="relative w-full overflow-hidden lg:px-20">
        <div
          ref={HomeCarouselRef}
          className="flex flex-row gap-x-10 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
        >
          <HomeSliderCard
            number="01"
            text="We fix 4 out of 5 breakdowns on the spot"
          />

          <HomeSliderCard
            number="02"
            text="We fix 4 out of 5 breakdowns on the spot"
          />

          <HomeSliderCard
            number="03"
            text="We fix 4 out of 5 breakdowns on the spot"
          />

          <HomeSliderCard
            number="04"
            text="We fix 4 out of 5 breakdowns on the spot"
          />
        </div>

        {/* Optional prev/next buttons */}
        {/* <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-4 py-2"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-4 py-2"
          onClick={nextSlide}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};
