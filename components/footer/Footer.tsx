"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/public/images/logo.png';
import Playstore from "@/public/icons/Frame 1686552962.svg";
import AppleStore from "@/public/icons/Frame 1686552963.svg";
import Link from "next/link";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Tow Truck', path: '/tow-truck' },
    { name: 'Grow With ResQ-X', path: '/grow-with-resq-x' },
    { name: 'Join Us', path: '/partner' },
    { name: 'About', path: '/about' },
  ];

  const services = [
    { name: 'Flat Tyre', path: '/flat-tyre' },
    { name: 'Become A Partner', path: '/become-a-partner' },
    { name: 'Blog', path: '/blog' },
    { name: 'Fuel Delivery', path: '/fuel-delivery' },
    { name: 'Membership', path: '/membership' },
  ];

  const partner = [
    { name: 'Get In Touch', path: '/get-in-touch' },
    { name: 'Jump Start', path: '/jump-start' },
    { name: 'Careers', path: '/careers' },
    { name: 'Rescue Me!', path: '/rescue-me' },
    { name: 'Health Check', path: '/health-check' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;
      const BREVO_LIST_ID = parseInt(process.env.NEXT_PUBLIC_BREVO_LIST_ID || '0');

      if (!BREVO_API_KEY) {
        throw new Error('Brevo API key is not configured.');
      }

      const response = await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email: email,
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
          attributes: {
            NEWSLETTER_SIGNUP: true,
            SIGNUP_DATE: new Date().toISOString(),
          },
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || 'Failed to sign up. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full overflow-x-hidden z-[10] bg-[#3B3835] text-white py-12 px-6 md:px-20">
      {/* Top section with logo and email input */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <Image src={Logo} alt="ResQ-X Logo" className="w-[250px] h-[46.88px] object-contain" priority />
        <form onSubmit={handleSubmit} className="flex w-full h-[46px] max-w-[456px] md:w-auto">
          <input 
            type="email" 
            placeholder="Enter your email to get the latest news..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading || submitted}
            className="p-4 w-[345px] text-[12px] outline-none h-full bg-white text-[#697077] font-[400] lg:text-[16px]"
          />
          <button 
            type="submit"
            disabled={loading || submitted}
            className='w-[111px] h-full py-[16px] px-[12px] bg-orange flex items-center justify-center text-[16px] font-[600]'
          >
            {loading ? 'Submitting...' : submitted ? 'Submitted!' : 'Submit'}
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#C1C7CD] mb-12" />

      {/* Main grid section - Modified for better mobile layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12">
        {/* Pages and Services columns grouped for mobile */}
        <div className="space-y-8 sm:space-y-0">
          <div className="mb-8">
            <h3 className="font-semibold text-white text-lg mb-4">PAGES</h3>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.name} className="text-white font-[500] hover:text-orange transition-colors">
                  <Link href={page.path}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">SERVICES</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.name} className="text-white hover:text-orange transition-colors">
                <Link href={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partner and Connect columns grouped for mobile */}
        <div>
          <h3 className="font-semibold text-lg mb-4">PARTNER</h3>
          <ul className="space-y-3">
            {partner.map((item) => (
              <li key={item.name} className="text-white hover:text-orange font-[500] transition-colors">
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">CONNECT WITH US</h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="">Join Us</p>
              <div className="flex gap-2 lg:gap-4">
                <a href="https://facebook.com/profile.php?id=61559440915973" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/resqx?igsh=MTU1N3FqZmJkMzZxbQ==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
                </a>
                <a href="https://x.com/ResQ_Xng?t=NciMAbDfxisxI7VZz4xUuw&s=09" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/company/resq-x/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
                </a>
                <a href="mailto:hello@resqx.net">
                  <Mail className="w-6 h-6 text-white hover:text-orange cursor-pointer" />
                </a>
              </div>
              <div className="hidden grid-cols-2 gap-4">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Image src={Playstore} alt="Play Store" className="w-full" priority />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <Image src={AppleStore} alt="App Store" className="w-full" priority />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-[#C1C7CD] mb-6" />

      {/* Bottom section - Modified for better mobile layout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[14px] text-white font-semibold">
          ResQ-X @ 2024 - {new Date().getFullYear()}. All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/refund-policy" className="text-white hover:text-orange transition-colors text-[14px] font-semibold">
            Refund Policy
          </Link>
          <Link href="/delete-account" className="text-white hover:text-orange transition-colors text-[14px] font-semibold">
            Delete Account
          </Link>
          <Link href="/privacy-policy" className="text-white hover:text-orange transition-colors text-[14px] font-semibold">
            Privacy Policy
          </Link>
          <Link href="/sitemap" className="text-white hover:text-orange transition-colors text-[14px] font-semibold">
            Sitemap
          </Link>
        </div>
      </div>

      {error && (
        <div className="mt-4 text-center text-red-500">
          {error}
        </div>
      )}
    </footer>
  );
};

export default Footer;