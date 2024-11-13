"use client";
import { BetaSignupForm } from "./BetaSignupForm";
import Image from "next/image";
import { useRef } from "react";
import Lottie from 'lottie-react';
import animationData from '../../../public/images/lottie.json';

interface IProps {
  title?: string;
  textSize?: string;
  bgFrom?: string;
  bgTo?: string;
}

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

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Early Access</h3>
                  <p className="text-gray-600 text-sm">Be the first to try new features</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Exclusive Updates</h3>
                  <p className="text-gray-600 text-sm">Get direct updates via WhatsApp</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Shape the Product</h3>
                  <p className="text-gray-600 text-sm">Your feedback matters to us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
