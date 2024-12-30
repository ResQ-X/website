import React from 'react';
import Image from 'next/image';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '@/public/images/logo.png'
import Playstore from "@/public/icons/Frame 1686552962.svg"
import AppleStore from "@/public/icons/Frame 1686552963.svg"


const Footer = () => {
  const pages = ['Home', 'Tow Truck', 'Grow With ResQ-X', 'Join Us', 'About'];
  const services = ['Flat Tyre', 'Become A Partner', 'Blog', 'Fuel Delivery', 'Membership'];
  const partner = ['Get In Touch', 'Jump Start', 'Careers', 'Rescue Me!', 'Health Check'];
  
  return (
    <footer className="w-full bg-[#3B3835] text-white py-12 px-6 md:px-20">
      {/* Top section with logo and email input */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <Image src={Logo} alt="ResQ-X Logo" className="w-[250px] h-[46.88px] object-contain" />
        <div className="flex w-full h-[46px] max-w-[456px] md:w-auto">
          <input 
            type="email" 
            placeholder="Enter your email to get the latest news..." 
            className="p-4 w-[345px] outline-none h-full bg-white text-[#697077] font-[400] text-[16px]"
          />
          <button className='w-[111px] h-full py-[16px] px-[12px] bg-orange flex items-center justify-center text-[16px] font-[600]'>Submit</button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#C1C7CD] mb-12" />

      {/* Main grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Pages Column */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">PAGES</h3>
          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page} className="text-white font-[500] hover:text-orange transition-colors">
                <a href="#">{page}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="font-semibold text-lg mb-4">SERVICES</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service} className="text-white hover:text-orange transition-colors">
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Partner Column */}
        <div>
          <h3 className="font-semibold text-lg mb-4">PARTNER</h3>
          <ul className="space-y-3">
            {partner.map((item) => (
              <li key={item} className="text-white hover:text-orange font-[500] transition-colors">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h3 className="font-semibold text-lg mb-4">CONNECT WITH US</h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="">Join Us</p>
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
              <Instagram className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
              <Twitter className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
              <Mail className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
            </div>
              <div className="grid grid-cols-2 gap-4">
                <Image src={Playstore} alt="Play Store" className="w-full" />
                <Image src={AppleStore} alt="App Store" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-[#C1C7CD] mb-6" />

      {/* Copyright */}
      <div className="text-center font-semibold text-[14px] text-white">
        ResQ-X @ 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;