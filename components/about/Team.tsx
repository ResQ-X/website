"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  position: 'up' | 'down' | 'up';
  description: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "ResQ-X",
    role: "Founder & CEO",
    image: "/images/nosa.jpeg",
    position: "up",
    description: "A visionary entrepreneur with over 7 years of experience in sales, business management, data analysis, and entrepreneurship. Currently, as the Founder and CEO of ResQ-X, he is leading this tech-enabled startup and aims to revolutionize roadside assistance in Nigeria. By developing an innovative platform that connects drivers with reliable assistance services, he is combining his passion for technology with his entrepreneurial spirit to solve real-world problems and drive positive change in the transportation industry.",
    linkedin: "https://www.linkedin.com/in/nosa-okoroji-1352b310a/"
  }
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".team-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".team-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h1-responsive lg:h1 text-white uppercase mb-4 team-text">
            Our Team, Your Trusted Partners
          </h2>
          <p className="h5 text-[20px] text-lightest team-text">
            Exceptional minds delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 max-w-[1200px] mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="relative group"
            >
              <div className="flex items-start gap-8">
                {/* Image Container */}
                <div className="w-[282px] flex-shrink-0">
                  <div className="overflow-hidden transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-[524px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="py-6">
                      <div className="flex w-full items-center justify-between mb-3">
                        <h3 className="h4 font-bold text-white text-[24px]">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* <Instagram size={20} className="text-[#A6A19C] hover:text-white transition-colors" /> */}
                          <a href={member.linkedin} className=""><Linkedin size={20} className="text-[#A6A19C] hover:text-white transition-colors" /></a>
                      
                        </div>
                      </div>
                      <p className="text-lightest h6 font-[500] text-[18px]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description Container */}
                <div className="w-[282px] opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <div className="bg-dark p-6 rounded-lg flex items-center justify-center h-[524px] overflow-y-auto">
                    <p className="text-white text-center text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;