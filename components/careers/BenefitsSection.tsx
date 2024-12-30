import React from 'react';
import Image from "next/image"
import Icon1 from "@/public/icons/svg1.svg"
import Icon2 from "@/public/icons/svg2.svg"
import Icon3 from "@/public/icons/svg3.svg"
import Icon4 from "@/public/icons/svg4.svg"

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Icon1,
      title: "Team Support",
      description: "Be part of a collaborative team that values your ideas and contributions."
    },
    {
      icon: Icon2,
      title: "Impactful Work",
      description: "Make a difference by helping people when they need it most."
    },
    {
      icon: Icon3,
      title: "Innovative Culture",
      description: "Thrive in a forward-thinking company that embraces innovation and technology."
    },
    {
      icon: Icon4,
      title: "Career Growth",
      description: "Unlock opportunities to learn, grow, and advance in a dynamic environment."
    }
  ];

  return (
    <div className="w-full h-[602px] flex bg-white items-center max-w-[1640px] mx-auto p-6">
      <div className="mb-8 w-1/2">
        <p className="text-[#736250] text-[18px] tracking-[-2%] leading-[21.13px] mb-2">Benefits</p>
        <h2 className="text-3xl w-full max-w-[536px] md:text-[40px] leading-[46.96px] font-bold text-dark-brown mb-4">
          WHY RESQ-X? BECAUSE YOUR GROWTH DRIVES US.
        </h2>
        <p className="h5 text-[20px] text-[#736250] font-semibold tracking-[-2%] max-w-[536px]">
          At ResQ-X, we value your potential. Enjoy opportunities for career advancement, 
          a supportive team culture, and the chance to make a real impact. Together, 
          we&apos;re not just solving problems—we&apos;re shaping the future of roadside assistance.
        </p>
      </div>

      <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <Image src={benefit.icon} alt={benefit.title} className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-blue-50 text-2xl" />
            <h3 className="text-[24px] tracking-[-2%] text-dark-brown font-semibold mb-2">
              {benefit.title}
            </h3>
            <p className="text-[#736250] text-[20px] tracking-[-2%] font-[400] leading-[21.13px]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;