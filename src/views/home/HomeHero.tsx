"use client"

import { LeftIconButton } from "@/components/buttons/LeftIconButton";
import { customerAppStoreLink, customerPlayStoreLink } from "@/lib/constants";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import AOS from "aos"
import { TypewriterEffectSmoothDemo } from "@/components/Typewritter";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HomeHero = () => {
  useEffect(() => {
    AOS.init({})
  }, [])

  const images = [
    "/images/services/fix.jpg",
    "/images/gas-deliver.jpg",
    "/images/car-battery-3.jpg",
    "/images/tire.jpg",
    "/images/Towing_Payallup.jpg",
    "/images/assistance.jpg",
    "/images/replaxcement.jpg"
  ];

  return (
    <ImagesSlider className="h-[100vh] z-[1000]" images={images}>
      <div className="mt-[9vh] relative z-[50] h-[792px] w-full overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Background Image with improved sharpness and tint 
        <Image
          layout="fill" 
          src="/images/home/home_hero_image.gif" 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-fill object-center brightness-[100%] contrast-[1.2] select-none pointer-events-none z-0"
        /> */}
        
        {/* Content Overlay - Positioned on top of the background */}
        <div className="relative z-10 h-full">
          <div className="mb-8 pt-40">
            {/* <h1 className="text-center font-['Raleway'] text-[50px] font-bold leading-[72px] tracking-[-4%] md:text-[68px]">
              <span className="text-[#332414]" data-aos="fade-up">Instant Roadside Assistance</span>{" "}
              <span className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-transparent">
                Anywhere
              </span>
            </h1> */}
            <TypewriterEffectSmoothDemo />
          </div>
          <div>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 pb-[468px] md:flex-row">
              <a
                href={customerPlayStoreLink}
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                <LeftIconButton
                  text="Play Store"
                  icon="/icons/play_store_logo.png"
                  alt="Play store icon"
                />
              </a>
              <a
                href={customerAppStoreLink}
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                <LeftIconButton
                  text="App Store"
                  icon="/icons/app_store_logo_white.png"
                  alt="App store icon"
                />
              </a>
              <a
                href="/beta"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <LeftIconButton
                  text="Join Beta"
                  icon="/icons/email.png"
                  alt="Play store icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ImagesSlider>
  );
};