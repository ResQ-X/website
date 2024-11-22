"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';

const BLOG_LIST = [
  {
    title: "Lorem Ipsum Blog Title",
    description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "3 min ago",
    views: 432
  },
  // Add more placeholder blog entries
  {
    title: "Lorem Ipsum Blog Title",
    description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "3 min ago",
    views: 432
  },
  {
    title: "Lorem Ipsum Blog Title",
    description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "3 min ago",
    views: 432
  },
  {
    title: "Lorem Ipsum Blog Title",
    description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "3 min ago",
    views: 432
  },
  {
    title: "Lorem Ipsum Blog Title",
    description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "3 min ago",
    views: 432
  }
];

export default function BlogList() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Add subscription logic here
    console.log('Subscribing:', email);
  };


  return (
    <div className="container mx-auto px-[2.6rem] mt-[-12rem]">
      <div className="space-y-6">
        {BLOG_LIST.map((blog, index) => (
          <div 
            key={index} 
            className="flex items-center bg-white border hover:border-[#FF8500] rounded-lg p-6 transition"
          >
            <div className="flex-1 mr-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="flex items-center text-gray">
                <span className="mr-4">{blog.time}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Eye className="mr-2 w-5 h-5" />
                  <span>{blog.views}</span>
                </div>
              </div>
            </div>
            <Image 
              src="/images/home/blog/carImg2.jpeg" 
              alt={blog.title} 
              width={300} 
              height={200} 
              className="w-64 h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="w-full overflow-hidden bg-full my-12 relative rounded-[40px] bg-cover bg-center h-[407px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home/blog/carImg.jpeg" 
            alt="Newsletter Background" 
            fill
            className="object-cover"
          />
        </div>
    
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
    
    {/* Content */}
    <div className="relative z-20 text-center py-16 px-4">
      <h2 className="text-[50px] scale-[2] font-serif md:text-5xl font-bold text-white mb-10 w-[604px]">
        Keep up with the latest tips by subscribing to our newsletter
      </h2>
      
      <div className="max-w-xl mx-auto relative">
        <div className="relative">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-4 pr-32 bg-white/70 border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button 
            onClick={handleSubscribe}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}