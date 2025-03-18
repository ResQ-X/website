"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Image animation
    gsap.from(imageRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    // Text animation
    gsap.from(textRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-2 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="p-8 z-10 rounded-3xl bg-[#262422]">
              <h2 className="text-4xl font-bold uppercase tracking-wide mb-6">
                WHO ARE WE?
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                At ResQ-X, we are more than just a roadside assistance service—we are a lifeline for drivers. 
                Our mission is to provide fast, reliable, and seamless solutions whenever and wherever you need them. 
                With a network of experienced professionals, cutting-edge technology, and a customer-first approach, 
                we&apos;ve built a reputation as a trusted partner on the road. Whether it&apos;s a flat tire, a fuel delivery, 
                or a vehicle health check, we&apos;re here to ensure that every journey is safe, smooth, and stress-free.
              </p>
            </div>
            <div className="relative z-[-1] h-96 w-full -translate-y-10 translate-x-10 -mt-24 md:mt-8">
              <Image
                src="/images/truck.jpeg"
                alt="Yellow and blue service truck"
                fill
                className="object-cover rounded-b-3xl"
                priority
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="relative h-96 w-full z-[-1] translate-y-10 -translate-x-10 mb-8 mt-16 md:mt-0">
              <Image
                src="/images/engineer.jpeg"
                alt="Professional mechanic"
                fill
                className="object-cover rounded-tr-3xl"
                priority
              />
            </div>
            <div className="-translate-y-8 bg-[#262422] p-8 rounded-3xl -mt-24 z-10">
              <h3 className="text-3xl font-bold mb-6">
                OUR GOAL
              </h3>
              <p className="text-lg pb-6 leading-relaxed text-gray-300">
                At ResQ-X, our goal is to redefine roadside assistance by creating a service 
                that drivers can rely on in moments of need. We aim to deliver not just exceptional 
                support but also peace of mind, knowing that help is always just a call or a tap away. 
                We strive to build a community of drivers and professionals united by trust and efficiency, 
                ensuring that no one ever feels stranded or unsupported.
              </p>
              <Link href="/careers" className="mt-12 border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
                Work With Us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;