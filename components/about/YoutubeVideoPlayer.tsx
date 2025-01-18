"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo2.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const YoutubeVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleVideoError = (e) => {
    const errorMessage = `Video Error: ${e.target.error?.message || 'Unknown error'}`;
    console.error(errorMessage);
    setError(errorMessage);
  };

  const handlePlay = () => {
    if (!videoRef.current) return;

    // Set hasInteracted when user explicitly clicks play
    setHasInteracted(true);
    
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Video started playing successfully');
          setIsPlaying(true);
          setError(null);
        })
        .catch(error => {
          // Only show errors that aren't related to autoplay
          if (!error.message.includes("play() failed because the user didn't interact")) {
            const errorMessage = `Error playing video: ${error.message}`;
            console.error(errorMessage);
            setError(errorMessage);
          }
          setIsPlaying(false);
        });
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      console.log('Video paused');
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
    console.log('Video loaded successfully');
    setIsLoaded(true);
    setError(null);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          console.log(`Video visibility changed: ${entry.isIntersecting}`);
          
          // Only attempt autoplay if user has interacted
          if (entry.isIntersecting && !isPlaying && videoRef.current && hasInteracted) {
            handlePlay();
          } else if (!entry.isIntersecting && isPlaying && videoRef.current) {
            handlePause();
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

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

    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
        videoRef.current.load();
      }
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isPlaying, hasInteracted]);

  return (
    <div 
      ref={containerRef}
      className="relative max-w-[1320px] mx-1 h-[594px] lg:mx-auto rounded-lg overflow-hidden shadow-lg mb-32"
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
          preload="auto"
          onLoadedData={handleLoadedData}
          onClick={handleVideoClick}
          onError={handleVideoError}
          controls={true}
        >
          <source src="videos/howItWorks.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play button overlay - only show when video is loaded but not playing */}
        {!isPlaying && isLoaded && !error && (
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

        {/* Thumbnail
        {!isLoaded && !error && (
          <div className="absolute inset-0 bg-black">
            <Image
              src="/images/truck.jpeg"
              alt="Video Thumbnail"
              fill
              className="object-cover"
              priority
            />
          </div>
        )} */}

        {/* Error display - only show serious errors */}
        {error && !error.includes("play() failed because the user didn't interact") && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white p-4">
            <div className="text-center">
              <p className="text-red-500 font-bold mb-2">Error Loading Video</p>
              <p>{error}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeVideoPlayer;