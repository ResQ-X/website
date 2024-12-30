"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import arrow from "@/public/icons/arrow.png";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });
    const currentRef = sectionRef.current; // Store ref value

    // Animate background (fade-in)
    timeline.fromTo(
      ".hero-bg",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power3.out" }
    );

    // Animate Image (fade-in and up)
    timeline.fromTo(
      ".hero-image",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" },
      "-=1.5"
    );

    // Animate Headline (staggered fade-up)
    timeline.fromTo(
      ".hero-headline span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      },
      "-=0.5"
    );

    // Animate Paragraph (fade-in)
    timeline.fromTo(
      ".hero-description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
      "-=0.8"
    );

    // Animate Button (fade-in with delay)
    timeline.fromTo(
      ".hero-button",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.play(); // Play the animation when in view
            observer.unobserve(entry.target); // Optional: Unobserve after animation starts
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
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
      <div className="relative flex items-center justify-center flex-col z-10"> {/* Wrapper to ensure content stays above background */}
        <h1
          className="text-[64px] whitespace-nowrap w-[768px] md:text-[64px] leading-[75.12px] uppercase font-bold mb-6 hero-headline"
          data-aos="fade-up"
        >
          <span>Stranded? </span>
          <span className="gradient-text2">Stay calm.</span> Let <br />
          <span className="gradient-text2">ResQ-X</span> handle it!
        </h1>

        <p className="text-[14px] w-[768px] md:text-2xl font-[400] text-gray-300 my-10 hero-description">
          Low on fuel? Flat tire? Dead battery? No worries. ResQ-X is here to save
          the day and get you back on track in no time!
        </p>
        <a
          href="https://wa.me/+2347010363424?text=Hi%20ResQx.%20I%20Want%20to%20order%20emergency%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 text-white transition-colors duration-300">
            See pricing
          </span>
          <Image
            src={arrow}
            alt="Arrow"
            className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;