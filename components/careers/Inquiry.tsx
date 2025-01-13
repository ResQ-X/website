"use client";

import React from "react";
import Image from "next/image";
import arrow from "@/public/icons/arrow.png"


const Inquiry: React.FC = () => {
  // Create grid cells
  const createGridCells = (): JSX.Element[] => {
    const cells: JSX.Element[] = [];
    for (let i = 0; i < 9; i++) {
      cells.push(
        <div
          key={i}
          className="relative border-r-4 border-b-4 border-dark-brown"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none", // Ensures grid lines don't interfere with interactions
          }}
        />
      );
    }
    return cells;
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   // Add form submission logic here
  // };

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">HAVE ANY INQUIRY?</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Image grid */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl mb-4">We love to hear from you!</h2>
          <div className="relative aspect-square">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/working-woman.jpeg')",
              }}
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
              {createGridCells()}
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="md:w-1/2 bg-white rounded-[12px] p-[32px]">
          <form className="space-y-6">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[18px] text-dark-brown">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gra rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[18px] text-dark-brown">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">Email Address</label>
              <input
                type="email"
                className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">Subject</label>
              <input
                type="text"
                className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">Message</label>
              <textarea
                rows="4"
                className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
              ></textarea>
            </div>

            <div className="w-full flex items-center justify-center">
                <button type="submit" className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-orange border-orange overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 text-dark-brown transition-colors duration-300">Send</span>
                    <Image 
                    src={arrow} 
                    alt="Arrow" 
                    className="relative z-10 [filter:brightness(0)] transition-[filter] duration-300"
                    priority
                    />
                </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
