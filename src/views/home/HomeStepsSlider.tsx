"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const HomeStepsSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/home/steps/step_1.png",
    "/images/home/steps/step_2.png",
    "/images/home/steps/step_3.png",
  ];
  const delay = 3000; // 3 seconds for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, delay);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative h-[500px] w-[450px] overflow-hidden px-6 md:h-[607px] md:w-[869px] lg:px-0">
      {images.map((image, index) => (
        <Image
          height={2000}
          width={2000}
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};
