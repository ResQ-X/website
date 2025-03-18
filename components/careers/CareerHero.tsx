import React from "react";

const CareerHero = () => {
  return (
    <div className="relative min-h-screen mt-[100px] pt-[100px] md:min-h-screen h-[400px] md:h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/pc.jpeg')",
        }}
      >
        <div className="absolute inset-0 grad1" />

        <div className="relative w-full h-full flex flex-col justify-center items-center px-4 md:px-8">
          <div className="text-white w-full max-w-[1200px] flex flex-col items-center gap-[12px] md:gap-[16px] text-center">
            <h1 className="w-full text-[6vw] md:text-[5vw] lg:text-[4vw] uppercase leading-tight md:leading-[1.2] font-bold">
              Drive Your Career Forward<br className="hidden md:block" /> with ResQ-X
            </h1>
            <p className="max-w-[956px] text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-lightest leading-[1.4] md:leading-[1.6] px-2 md:px-0 overflow-wrap break-words">
              Be part of a team that's redefining roadside assistance. At ResQ-X, we're driven by innovation, teamwork, and a commitment to excellence. Join us and grow your career while making a real difference on the road.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;