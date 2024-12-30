"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Instagram, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  position: 'up' | 'down' | 'up';
}

const teamMembers: TeamMember[] = [
  {
    name: "ResQ-X",
    role: "Founded & CEO",
    image: "/images/team/robert.jpeg",
    position: "up"
  },
  {
    name: "Amanda Amaka",
    role: "Founder & CEO",
    image: "/images/team/amanda.jpeg",
    position: "down"
  },
  {
    name: "Kylan Drew",
    role: "Project Manager",
    image: "/images/team/kylian.jpeg",
    position: "up"
  },
  {
    name: "Robert Billy",
    role: "Co-Founder & Operations Manager",
    image: "/images/team/robert.jpeg",
    position: "down"
  }
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".team-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
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
          <h2 className="h1 text-white uppercase mb-4">Our Team, Your Trusted Partners</h2>
          <p className="h5 text-[20px] text-lightest">Exceptional minds delivering exceptional results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className={`relative w-[282px] h-[613px] ${
                member.position === 'down' ? 'md:mt-16' : ''
              }`}
            >
              <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-[524px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-6">
                  <div className="flex w-full items-center justify-between mb-3">
                    <h3 className="h4 font-bold text-white text-[24px]">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <Instagram size={20} className="text-[#A6A19C]" />
                      <Linkedin size={20} className="text-[#A6A19C]" />
                    </div>
                  </div>
                  <p className="text-lightest h6 font-[500] text-[18px]">
                    {member.role}
                  </p>
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