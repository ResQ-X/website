"use client"

import { LeftIconButton } from "@/components/buttons/LeftIconButton";
import { customerAppStoreLink, customerPlayStoreLink } from "@/lib/constants";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import { TypewriterEffectSmoothDemo } from "@/components/Typewritter";

export const HomeHero = () => {
  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <div className="mt-[9vh] relative h-[792px] w-full overflow-hidden">
      {/* Background Image with improved sharpness and tint */}
      <Image
        layout="fill" 
        src="/images/home/home_hero_image.gif" 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-fill object-center brightness-[100%] contrast-[1.2] select-none pointer-events-none z-0"
      />
      
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
  );
};