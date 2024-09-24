"use client";

import "@/ui/styles/slider_animation.css";
import { homeSlideList } from "@/lib/values/homeSlide.values";
import { HomeSliderCard } from "./HomeSliderCard";
import React, { useEffect, useRef, useState } from "react";

export const HomeSlider = () => {
  return (
    <div className="mb-[120px] flex h-[309px] items-center overflow-hidden bg-[#FAF8F5] font-['Raleway']">
      <div
        className="slider-row relative flex gap-x-10"
        style={{ animationDuration: "40s" }}
      >
        {homeSlideList.map((slide, index) => (
          <HomeSliderCard key={index} number={slide.number} text={slide.text} />
        ))}
        {/* Clone the slides to ensure a smooth loop */}
        {homeSlideList.map((slide, index) => (
          <HomeSliderCard
            key={`clone-${index}`}
            number={slide.number}
            text={slide.text}
          />
        ))}
      </div>
    </div>
  );
};

export const HomeSliderWithSwipe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const slideWidth = 100; // Adjust to 100% for full-width slides
  const HomeCarouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Auto-slide functionality with delays for reading
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Pause for 5 seconds
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="mb-[120px] flex h-[309px] items-center bg-[#FAF8F5] font-['Raleway']">
      <div className="overflow-hidden lg:mx-20 lg:px-20">
        <div
          ref={HomeCarouselRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
        >
          {homeSlideList.map((slide, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "scale-105" // Grow the current slide
                  : "scale-90" // Shrink non-active slides
              }`}
              style={{
                width: "100%", // Full width of the container
                transform: `translateX(-${currentSlide * 50}px)`, // Simulate 50px train movement
              }}
            >
              <HomeSliderCard
                number={slide.number} // Pass number from slidesData
                text={slide.text} // Pass text from slidesData
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
