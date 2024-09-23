"use client";

import { EmblaOptionsType } from "embla-carousel";
import { EmblaCarousel } from "../../../.DEVDOCS/embla/EmblaCarousel";
import { HomeSliderCard } from "./HomeSliderCard";
import React, { useEffect, useRef, useState } from "react";

export const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const slideWidth = 100; // Adjust to 100% for full-width slides
  const HomeCarouselRef = useRef<HTMLDivElement>(null);

  // Slide data with different number and text for each slide
  const slidesData = [
    { number: "01", text: "We fix 4 out of 5 breakdowns on the spot" },
    { number: "02", text: "Comprehensive roadside assistance" },
    { number: "03", text: "Get expert help within minutes" },
    { number: "04", text: "Your fleet in safe hands" },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Auto-slide functionality with delays for reading
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Pause for 5 seconds
    return () => clearInterval(autoSlide);
  }, []);

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};
