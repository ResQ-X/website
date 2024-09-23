"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { homeSlideList } from "@/lib/values/homeSlide.values";
import { HomeSliderCard } from "./HomeSliderCard";
import "@/ui/styles/embla.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const EmblaCarouselAuto = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {homeSlideList.map((slide, index) => (
            <div className="embla__slide" key={index}>
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
