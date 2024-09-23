"use client";

import { useEffect, useState } from "react";
import "./css.css";

const PartnerLogos = () => {
  const [pause, setPause] = useState(false);

  // List of logo images (example URLs)
  const logos = [
    "/images/home/steps/step_1.png",
    "/images/home/steps/step_2.png",
    "/images/home/steps/step_3.png",
    "/images/home/steps/step_1.png",
    "/images/home/steps/step_3.png",
  ];

  /*  // Handles the animation pause every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPause(true); // Pause the animation
      setTimeout(() => setPause(false), 3000); // Resume after 3 seconds
    }, 6000); // Pause every 6 seconds
    return () => clearInterval(interval); // Clean up
  }, []); */

  return (
    <div className="overflow-hidden">
      <div
        className={`logo-row flex ${pause ? "animation-paused" : ""}`}
        style={{ animationDuration: "20s" }} // Adjust speed
      >
        {logos.map((logo, index) => (
          <div key={index} className="logo-card mx-5 flex-none">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-20 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
