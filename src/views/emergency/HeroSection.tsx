"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    // Animate Image (fade-in and up)
    timeline.fromTo(
      ".hero-image",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );

    // Animate Headline (staggered fade-up)
    timeline.fromTo(
      ".hero-headline span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
      },
      "-=0.5"
    );

    // Animate Paragraph (fade-in)
    timeline.fromTo(
      ".hero-description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="text-center">
      <div className="relative flex justify-center mb-8">
        <Image
          src="/images/emergency.png"
          alt="Emergency Icon"
          width={70}
          height={70}
          className="w-[150px] h-[150px] object-cover hero-image"
        />
      </div>
      <h1
        className="text-[2.5rem] md:text-[5rem] leading-[60px] font-extrabold mb-6 hero-headline"
        data-aos="fade-up"
      >
        <span>Stranded? </span>
        <span className="gradient-text2">Stay calm.</span> Let{" "}
        <span className="gradient-text2">ResQX</span> handle it!
      </h1>

      <p className="text-[14px] md:text-2xl font-[400] text-gray-300 my-10 hero-description">
        Low on fuel? Flat tire? Dead battery? No worries. ResQX is here to save the day and get you
        back on track in no time!
      </p>
      <a
        href="https://wa.me/+2347010363424?text=Hi%20ResQx.%20I%20Want%20to%20order%20emergency%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-green-500 text-white text-xl rounded-lg shadow-lg font-semibold hover:bg-green-600 transition hero-button"
      >
        <i className="pi pi-whatsapp text-center mt-1 mr-4"></i>
        Get ResQ
      </a>
    </div>
  );
};

export default HeroSection;
