"use client";

import "@/ui/styles/slider_animation.css";

// List of logo images (example URLs)
const logos = [
  "/images/partner/brands/1.jpg",
  "/images/partner/brands/2.png",
  "/images/partner/brands/3.png",
  "/images/partner/brands/1.jpg",
  "/images/partner/brands/3.png",
];

export const PartnerBrands = () => {
  return (
    <div className=" mb-[80px] bg-[#FAF8F5] px-[65px] pb-[51px] pt-5">
      <p className="mb-5 text-center font-['Raleway'] text-[28px] font-semibold leading-[32.87px] tracking-[-2%] text-[#736250] ">
        Trusted By
      </p>
      <div className="overflow-hidden">
        <div
          className={`slider-row flex`}
          style={{ animationDuration: "20s" }} // Adjust speed
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-card mx-5 flex-none">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto"
              />
            </div>
          ))}
          {/* Clone the slides to ensure a smooth loop */}
          {logos.map((logo, index) => (
            <div key={`clone-${index}`} className="logo-card mx-5 flex-none">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto"
              />
            </div>
          ))}
          {/* Clone the slides to ensure a smooth loop */}
          {logos.map((logo, index) => (
            <div key={`clone2-${index}`} className="logo-card mx-5 flex-none">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto"
              />
            </div>
          ))}
          {/* Clone the slides to ensure a smooth loop */}
          {logos.map((logo, index) => (
            <div key={`clone3-${index}`} className="logo-card mx-5 flex-none">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto"
              />
            </div>
          ))}
          {/* Clone the slides to ensure a smooth loop */}
          {logos.map((logo, index) => (
            <div key={`clone4-${index}`} className="logo-card mx-5 flex-none">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto"
              />
            </div>
          ))}
          {/* Clone the slides to ensure a smooth loop */}
          {logos.map((logo, index) => (
            <div key={`clone5-${index}`} className="logo-card mx-5 flex-none">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
