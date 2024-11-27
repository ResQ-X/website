import React from "react";

const WhyResQX = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-16 text-center rounded-[50px] mt-[10rem] text-white">
      <h2 className="text-8xl font-bold mb-32">Why ResQX?</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
        <div className="max-w-sm">
          <h3 className="text-xl font-semibold mb-4">24/7 Support on WhatsApp</h3>
          <p>We’re available on WhatsApp anytime, just a few taps away to help you in emergencies.</p>
        </div>
        <div className="max-w-sm">
          <h3 className="text-xl font-semibold mb-4">Expert Assistance</h3>
          <p>Our team of professionals is dedicated to ensuring top-notch service for every request.</p>
        </div>
        <div className="max-w-sm">
          <h3 className="text-xl font-semibold mb-4">Quick Response Time</h3>
          <p>We guarantee arrival at your location within 30 minutes, no matter where you are.</p>
        </div>
      </div>
      <div className="mt-10">
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
    </div>
  );
};

export default WhyResQX;
