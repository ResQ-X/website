"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutHero = () => {
  const statsRef = useRef(null);
  const headingRef = useRef(null);
  const statsData = [
    { value: 1200, label: 'Active Users', suffix: '+' },
    { value: 5, label: 'Partners', suffix: '+' },
    { value: 50, label: 'Service Providers', suffix: '+' }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate stats
    statsData.forEach((stat, index) => {
      const el = statsRef.current.children[index];
      const numElement = el.querySelector('.number');
      
      // gsap.from(el, {
      //   y: 50,
      //   opacity: 0,
      //   duration: 0.8,
      //   delay: 0.2 * index,
      //   ease: "power3.out"
      // });

      gsap.to(numElement, {
        innerText: stat.value,
        duration: 2,
        delay: 0.5 + (0.2 * index),
        snap: { innerText: 1 },
        ease: "power2.out"
      });
    });
  });

  return (
    <div className="relative min-h-screen h-[800px] w-full">
      {/* Background Image Container */}
      <div 
        className="absolute top-0 left-0 h-[70%] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about/mechanics.jpeg')"
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 gradd" />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-16 pt-40 pb-32">
        {/* Hero Text Content */}
        <div 
          className="text-center mb-16"
        >
          <h1 className="h1 uppercase text-white leading-[85.14px] mb-8">
            Redefining Roadside Assistance,<br />One Journey at a Time.
          </h1>
        </div>

        {/* Stats Box */}
        <div 
          ref={statsRef}
          className="grid max-w-[1096px] h-[184px] grid-cols-3 gap-8 bg-[#3B3835] p-12 rounded-[12px] shadow-lg"
        >
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="text-center px-8 border-r last:border-r-0"
            >
              <div className="flex items-center justify-center text-5xl font-bold text-white mb-4">
                <span className="number">0</span>
                <span className='text-orange'>{stat.suffix}</span>
              </div>
              <p className="text-white font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;