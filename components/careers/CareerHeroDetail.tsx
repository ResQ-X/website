import React from "react";
// import Image from "next/image";

// make use of the job details interface as a prop

const CareerHero = ({ jobDetail }: { jobDetail: JobDetail }) => {
  return (
    <div className="relative min-h-screen h-[600px] w-full">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/pc.jpeg')", // Replace with a suitable image
        }}
      >
        {/* Black Overlay */}
        <div 
          className="absolute inset-0 grad1" // Adjust opacity here
        />

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col justify-center items-center px-8">
          {/* Hero Text Content */}
          <div className="text-white w-full max-w-[1200px] flex flex-col items-center text-center">
            <h1 className="h1 w-full h-[150px] uppercase leading-[85.14px]">
                {jobDetail.title}
            </h1>
            <p className="h4 max-w-[956px] text-[24px] text-lightest leading-[31.18px]">
                 Job Type: {jobDetail.jobType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
