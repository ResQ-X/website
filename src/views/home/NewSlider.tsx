"use client";
import { homeSlideList } from "@/lib/values/homeSlide.values";
import { useState, useEffect } from "react";
import { HomeSliderCard } from "./HomeSliderCard";

export default function NewSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % homeSlideList.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  return (
    <div className="relative mx-auto mt-4 w-full">
      <div className="group relative mx-12 h-[460px] hover:-translate-y-2">
        <HomeSliderCard
          number={homeSlideList[currentIndex].number}
          text={homeSlideList[currentIndex].text}
        />
      </div>
    </div>
  );
}
