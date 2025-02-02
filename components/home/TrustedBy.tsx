"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Blackcar from '@/public/images/blackcar.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Define types for counter references with MutableRefObject
type CounterRefs = {
  [K in 'users' | 'partners' | 'providers']: React.RefObject<HTMLDivElement | null>;
};

// Define types for counter targets
type CounterTargets = {
  [K in keyof CounterRefs]: number;
};

// Define animation parameters type
interface AnimationParams {
  ref: React.RefObject<HTMLDivElement | null>;
  target: number;
}

const TrustedBy: React.FC = () => {
  // Initialize refs with proper typing
  const counterRefs = {
    users: useRef<HTMLDivElement>(null),
    partners: useRef<HTMLDivElement>(null),
    providers: useRef<HTMLDivElement>(null)
  } satisfies CounterRefs;

  const counterTargets: CounterTargets = {
    users: 300,
    partners: 5,
    providers: 50
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Counter animation function with type safety
    const animateCounter = ({ ref, target }: AnimationParams): gsap.Context => {
      const obj = { count: 0 };
      
      return gsap.context(() => {
        gsap.to(obj, {
          count: target,
          duration: 2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          },
          onUpdate: () => {
            if (ref.current) {
              ref.current.innerHTML = `${Math.floor(obj.count)}<span class="text-orange">+</span>`;
            }
          }
        });
      });
    };

    // Initialize animations with type safety
    const animations = Object.entries(counterTargets).map(([key, target]) => 
      animateCounter({ 
        ref: counterRefs[key as keyof CounterRefs], 
        target 
      })
    );

    // Heading animation
    const headingAnimation = gsap.from(".animate-heading", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".animate-heading",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Paragraph animation
    const textAnimation = gsap.from(".animate-text", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".animate-text",
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Image animation
    const imageAnimation = gsap.from(".animate-image", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".animate-image",
        start: "top center",
        toggleActions: "play none none reverse"
      }
    });

    // Cleanup function
    return () => {
      animations.forEach(context => context.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      [headingAnimation, textAnimation, imageAnimation].forEach(animation => animation.kill());
    };
  });

  // Counter label mapping for type safety
  const counterLabels: Record<keyof CounterRefs, string> = {
    users: 'Active users',
    partners: 'Partners',
    providers: 'Service providers'
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-8 relative">
      <div className="md:w-[55%] transform scale-x-[-1] animate-image">
        <Image 
          src={Blackcar} 
          alt="car" 
          className="w-full scale-[1.5] translate-x-[8rem] lg:translate-x-[15rem] max-w-[867px] h-[380px] object-contain"
          priority
        />
      </div>

      <div className="w-full md:w-[75%] space-y-8">
        <div className="space-y-4">
          <h2 className="h1-responsive lg:h1 text-dark-brown lg:whitespace-nowrap animate-heading">
            TRUSTED BY THOUSANDS
          </h2>
          <h3 className="h1-responsive lg:h1 text-dark-brown lg:whitespace-nowrap animate-heading">
            POWERED BY EXCELLENCE
          </h3>
          <p className="h6 text-center lg:text-left leading-[25.48px] text-[#736250] animate-text">
          At ResQ-X, we&apos;ve built a strong community of happy customers, supported by dedicated service providers and trusted by industry-leading partners. 
Our goal is simple: to ensure you&apos;re never stranded when it matters most.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.keys(counterRefs) as Array<keyof CounterRefs>).map((key) => (
            <div key={key} className="text-center">
              <div 
                className="text-[48px] font-[600] text-dark" 
                ref={counterRefs[key]}
              >
                0
              </div>
              <div className="text-[#101828] text-[20px] font-[300] mt-2">
                {counterLabels[key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;