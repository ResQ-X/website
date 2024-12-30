import React from "react";
import Youtube from '@/public/icons/Youtube.svg'
import Facebook from '@/public/icons/Facebook.svg'
import Twitter from '@/public/icons/Twitter.svg'
import LinkedIn from '@/public/icons/LinkedIn.svg'
import Instagram from '@/public/icons/Instagram.svg'
import Sms from '@/public/icons/sms.svg'
import Phone from '@/public/icons/phone.svg'
import Location from '@/public/icons/location.svg'
import Image from "next/image"
import arrow from "@/public/icons/arrow.png"




const GetInTouch = () => {
  return (
    <div className="bg-white p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex items-start flex-col justify-center gap-3">
          <h2 className="text-[48px] uppercase font-bold leading-[48px] tracking-[-2%] text-dark-brown mb-4">Get in Touch</h2>
          <div className="flex items-center gap-[12px]">
            <Image src={Sms} alt="Location" />
            <p className="font-medium text-[20px] leading-[24.2px] text-[#736250]">support@resqx.com</p>
          </div>
          <div className="flex items-center gap-[12px]">
            <Image src={Location} alt="Location" />
            <p className="font-medium text-[20px] leading-[24.2px] text-[#736250]">Admiralty Way, Lekki, Lagos</p>
          </div>
          <div className="flex items-center gap-[12px]">
            <Image src={Phone} alt="Location" />
            <p className="font-medium text-[20px] leading-[24.2px] text-[#736250]">+234-123-456-98079</p>
          </div>

          <div className="flex items-center gap-[24px] pt-8">
            <Image src={Facebook} alt="Facebook" />
            <Image src={Twitter} alt="Twitter" />
            <Image src={LinkedIn} alt="LinkedIn" />
            <Image src={Instagram} alt="Instagram" />
            <Image src={Youtube} alt="Youtube" />
          </div>
        </div>

        {/* Right Column */}
        <div>
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
                    />
                </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
