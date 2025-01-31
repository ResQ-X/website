"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo2.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const YoutubeVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error("Play error:", error);
        setIsPlaying(false);
      });
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        handlePause();
      } else {
        handlePlay();
      }
    }
  };

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(containerRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
        videoRef.current.load();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative max-w-[1320px] mx-1 h-[594px] lg:mx-auto rounded-lg overflow-hidden shadow-lg mb-32 ring-2 ring-orange"
    >
      <Image 
        src={Logo} 
        alt="Logo" 
        className="w-[214px] h-[83px] absolute z-10 object-cover left-4 top-4" 
        priority 
      />
      
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          controls
          preload="metadata"
          onLoadedData={handleLoadedData}
          onClick={handleVideoClick}
        >
          <source src="/videos/howItWorks.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && isLoaded && (
          <div
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:bg-opacity-40"
            onClick={handlePlay}
          >
            <div className="w-[120px] h-[90px] bg-red-600 rounded-2xl flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="none"
                className="w-[37px] h-[45px] scale-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.75v12.5l13-6.25-13-6.25z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeVideoPlayer;