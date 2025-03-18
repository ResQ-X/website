"use client"

import React from 'react';

const BlurredHeading = ({ text = "WHY RESQ-X?" }) => {
  return (
    <div className="relative w-full py-16">
      {/* Outer container for positioning */}
      <div className="relative max-w-8xl mx-auto">
        {/* Blur effect container */}
        <div className="absolute inset-0 w-full blur-3xl -top-8 -bottom-8 -left-8 -right-8">
          <div 
            className="w-full h-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(38, 36, 34, 1) 0%, rgba(38, 36, 34, 1) 70%, rgba(38, 36, 34, 1) 100%)',
              filter: 'blur(60px)',
              transform: 'scale(1.9)',
              animation: 'wave 8s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Text container */}
        <div className="relative">
          <h2 
            className="text-6xl md:text-[150px] z-10 font-bold text-orange tracking-wider text-center"
            style={{ 
              mixBlendMode: 'difference',
              textShadow: '0 0 30px rgba(0,0,0,0.5)'
            }}
          >
            {text}
          </h2>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: scale(1.1) translate(0, 0);
          }
          50% {
            transform: scale(1.15) translate(-10px, 5px);
          }
          100% {
            transform: scale(1.1) translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default BlurredHeading;