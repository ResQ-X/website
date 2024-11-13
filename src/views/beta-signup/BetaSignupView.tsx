"use client";
import { BetaSignupForm } from "./BetaSignupForm";
import Image from "next/image";
import { useRef } from "react";
import Lottie from 'lottie-react';
import animationData from '../../../public/images/lottie.json';
import { HoverEffect } from "@/components/ui/card-hover-effect";

interface IProps {
  title?: string;
  textSize?: string;
  bgFrom?: string;
  bgTo?: string;
}

export const featureBoxes = [
  {
    id: 1,
    title: "Early Access",
    description: "Be the first to try new features",
    icon: "https://cdn-icons-png.flaticon.com/512/1534/1534938.png",
    link: "https://netflix.com",
    delay: 0.2
  },
  {
    id: 2,
    title: "Exclusive Updates",
    description: "Get direct updates via WhatsApp",
    icon: "https://cdn-icons-png.flaticon.com/512/2645/2645890.png",
    link: "https://netflix.com",
    delay: 0.4
  },
  {
    id: 3,
    title: "Shape the Product",
    description: "Your feedback matters to us",
    icon: "https://cdn-icons-png.flaticon.com/512/1534/1534939.png",
    link: "https://netflix.com",
    delay: 0.6
  }
];


export const BetaSignupView = ({ 
  title = "Join Our Beta Waitlist",
  textSize = "text-7xl",
  bgFrom = "from-blue-50",
  bgTo = "to-white"
}: IProps) => {

  const animationRef = useRef(null);

  return (
    <section className={`w-full py-20`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Lottie Animation Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] lg:h-[350px]">
              <Lottie
                lottieRef={animationRef}
                animationData={animationData}
                className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full scale-[0.85] lg:w-1/2">
            <div className="max-w-xl mx-auto">
              <h1 className={`text-[3rem] whitespace-nowrap text-[#FF8500] text-opacity-90 text-center font-bold mb-4`}>
                {title}
              </h1>
              <p className="text-gray-600 text-center text-sm mb-8">
                Be among the first to experience our revolutionary platform
              </p>

              <div className="bg-white scale-[0.9] rounded-2xl p-8">
                <BetaSignupForm />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={featureBoxes} />
        </div>
      </div>
    </section>
  );
};
