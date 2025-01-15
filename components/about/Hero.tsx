"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutHero = () => {
  const statsRef = useRef(null);
  const headingRef = useRef(null);
  const statsData = [
    { value: 300, label: 'Active Users', suffix: '+' },
    { value: 5, label: 'Partners', suffix: '+' },
    { value: 50, label: 'Service Providers', suffix: '+' }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading (fade in and slide up)
    gsap.from(headingRef.current, {
      y: 100, // Start 100px below
      opacity: 0, // Start invisible
      duration: 1, // Animation duration
      ease: "power3.out", // Smooth easing
      scrollTrigger: {
        trigger: headingRef.current, // Trigger animation when the heading comes into view
        start: "top 80%", // Start animation when the top of the heading is 80% in view
        end: "bottom 20%", // End animation when the bottom of the heading is 20% in view
        toggleActions: "play none none none" // Play animation once
      }
    });

    // Animate stats (unchanged)
    statsData.forEach((stat, index) => {
      const el = statsRef.current.children[index];
      const numElement = el.querySelector('.number');
      
      gsap.to(numElement, {
        innerText: stat.value,
        duration: 2,
        delay: 0.5 + (0.2 * index),
        snap: { innerText: 1 },
        ease: "power2.out"
      });
    });
  }, [statsData]);

  return (
    <div className="relative min-h-screen h-auto lg:h-[800px] mt-[100px] lg:pt-0 w-full">
      {/* Background Image Container */}
      <div 
        className="absolute top-0 left-0 h-[70%] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/man2.jpeg')"
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 gradd" />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-3 lg:px-16 pt-40 pb-32">
        {/* Hero Text Content */}
        <div 
          className="text-center mb-16"
          ref={headingRef} // Add ref for animation
        >
          <h1 className="text-[30px] font-bold lg:h1 uppercase text-white leading-[60px] lg:leading-[85.14px] mb-8">
            Redefining Roadside Assistance,<br />One Journey at a Time.
          </h1>
        </div>

        {/* Stats Box */}
        <div 
          ref={statsRef}
          className="grid w-full max-w-[1096px] h-auto grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 bg-[#3B3835] p-6 sm:p-12 rounded-[12px] shadow-lg"
        >
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`text-center px-4 py-6 sm:px-8 ${
                index < statsData.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#555]' : ''
              }`}
            >
              <div className="flex items-center justify-center text-4xl sm:text-5xl font-bold text-white mb-4">
                <span className="number">0</span>
                <span className='text-orange'>{stat.suffix}</span>
              </div>
              <p className="text-white font-medium text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;