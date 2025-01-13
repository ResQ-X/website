"use client";

import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="relative max-w-[1100px] rounded-[32px] my-32 mx-auto h-[499px] w-full">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/50 z-10"
      />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/driving-car.jpeg')`,
        }}
      />

      {/* Content */}
      <div className="relative rounded-2xl z-20 h-full flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl md:text-[50px] font-bold text-white mb-8 max-w-[804px] mx-auto text-center leading-tight">
          Keep up with the latest tips by subscribing to our newsletter
        </h2>

        <div className="w-full max-w-[667px] mx-auto relative">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-3 pr-32 h-[80px] rounded-[20px] focus:outline-none focus:ring-0 placeholder:text-gray-500 text-black"
          />
          <button
            onClick={handleSubscribe}
            className="absolute h-[57px] right-1.5 top-1/2 -translate-y-1/2 bg-orange hover:bg-opacity-90 text-white px-6 py-2 rounded-[10px] transition-colors duration-200"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}