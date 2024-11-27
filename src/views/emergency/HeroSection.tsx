"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="relative flex justify-center mb-8">
        <Image
          src="/images/emergency.png"
          alt="Emergency Icon"
          width={70}
          height={70}
          className="w-[150px] h-[150px] object-cover"
        />
      </div>
      <h1 className="text-[2.5rem] md:text-[5rem] leading-[60px] font-extrabold mb-6">
        Stranded? <span className="gradient-text2">Stay calm.</span> Let{" "}
        <span className="gradient-text2">ResQX</span> handle it!
      </h1>

      <p className="text-[14px] md:text-2xl font-[400] text-gray-300 my-10">
        Low on fuel? Flat tire? Dead battery? No worries. ResQX is here to save the day and get
        you back on track in no time!
      </p>
      <a
        href="https://wa.me/+2347010363424?text=Hi%20ResQx.%20I%20Want%20to%20order%20emergency%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-green-500 text-white text-xl rounded-lg shadow-lg font-semibold hover:bg-green-600 transition"
      >
        <i className="pi pi-whatsapp text-center mt-1 mr-4"></i>
        Get ResQ
      </a>
    </div>
  );
};

export default HeroSection;
