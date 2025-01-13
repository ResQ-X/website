"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import arrow from "@/public/icons/arrow.png";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });
    const currentRef = sectionRef.current;

    // Animate background (fade-in)
    timeline.fromTo(
      ".hero-bg",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animate each text element sequentially
    const textElements = [
      ".text-part-1",
      ".text-part-2",
      ".text-part-3",
      ".text-part-4",
      ".hero-description",
      ".hero-button"
    ];

    textElements.forEach((element, index) => {
      timeline.fromTo(
        element,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: "power3.out" 
        },
        index > 0 ? "-=0.5" : "-=0.8"
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-center flex w-full items-center justify-center flex-col h-screen relative"
    >
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full hero-bg"
        style={{
          backgroundImage: 'url("/grad/Grid 2.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center flex-col z-10 sm:px-8 lg:px-16">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] lg:whitespace-nowrap lg:w-[768px] leading-[40px] sm:leading-[60px] lg:leading-[75.12px] uppercase font-bold mb-6">
          <span className="inline-block text-part-1">Stranded? </span> {" "}
          <span className="inline-block gradient-text2 text-part-2">Stay calm.</span>{" "}
          <span className="inline-block text-part-3">Let </span>
          <br />
          <span className="inline-block gradient-text2 text-part-4">ResQ-X</span>{" "}
          <span className="inline-block text-part-4">handle it!</span>
        </h1>

        <p className="text-[14px] px-3 sm:text-[18px] lg:text-[24px] lg:w-[768px] font-[400] text-gray-300 my-6 sm:my-10 hero-description">
          Low on fuel? Flat tire? Dead battery? No worries. ResQ-X is here to save
          the day and get you back on track in no time!
        </p>

        <a
          href="https://wa.me/+2347010363424?text=Hi%20ResQx.%20I%20Want%20to%20order%20emergency%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center gap-3 w-[150px] sm:w-[183px] h-[40px] sm:h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group hero-button"
        >
          <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 text-white transition-colors duration-300 text-sm sm:text-base">
            Get Rescue
          </span>
          <Image
            src={arrow}
            alt="Arrow"
            className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300 w-4 h-4 sm:w-6 sm:h-6"
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;