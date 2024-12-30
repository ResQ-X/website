"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo2.png";

const YouTubeVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative max-w-[1320px] h-[594px] mx-auto rounded-lg overflow-hidden shadow-lg mb-32">
      {/* YouTube Video */}
      <Image src={Logo} alt="Logo" className="w-[214px] h-[83px] absolute z-10 object-cover" />
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/your-video-id?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {/* Video Thumbnail */}
          <Image
            src="/images/truck.jpeg"
            alt="YouTube Thumbnail"
            fill
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
            {/* Play Button */}
            <div className="w-[119.96px] h-[90px] bg-red-600 rounded-2xl flex items-center justify-center">
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
        </>
      )}

      {/* Overlay Text */}
      {!isPlaying && (
        <a
          href="https://www.youtube.com/channel/your-channel-id"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 px-4 py-2 text-sm rounded"
        >
          See ResQ-X on YouTube
        </a>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;
