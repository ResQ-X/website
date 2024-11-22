"use client";

import { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.4
    },
  }
}

const containerVariants2 = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    },
  }
}

const textVariants = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  }
}

const BLOG_TABS = [
  "Top Picks", "Maintenance", "Safety", "Travel", "Stories", "News", "How-to"
];

const FEATURED_BLOGS = {
  "Top Picks": [
    {
      title: "Navigating the Rainy Season: Flood-Prone Areas in Lagos You Need to Know",
      date: "August 12, 2024",
      image: "/images/home/blog/carImg2.jpeg"
    },
    {
      title: "The Smart Car Owner Checklist: Roadside Emergency Tips",
      date: "August 12, 2024",
      image: "/images/home/blog/carImg3.jpeg"
    },
    {
      title: "Urban Driving Survival Guide",
      date: "August 12, 2024",
      image: "/images/home/blog/carImg.jpeg"
    }
  ],
  "Maintenance": [
    {
      title: "Essential Car Maintenance Tips for Longevity",
      date: "July 15, 2024",
      image: "/images/home/blog/maintenance1.jpeg"
    },
    {
      title: "DIY Car Maintenance: What You Can Do at Home",
      date: "July 15, 2024",
      image: "/images/home/blog/maintenance2.jpeg"
    },
    {
      title: "When to Service Your Vehicle: A Comprehensive Guide",
      date: "July 15, 2024",
      image: "/images/home/blog/maintenance3.jpeg"
    }
  ],
  "Safety": [
    {
      title: "Top Safety Features to Look for in a New Car",
      date: "June 20, 2024",
      image: "/images/home/blog/safety1.jpeg"
    },
    {
      title: "Defensive Driving Techniques Every Driver Should Know",
      date: "June 20, 2024",
      image: "/images/home/blog/safety2.jpeg"
    },
    {
      title: "Emergency Preparedness on the Road",
      date: "June 20, 2024",
      image: "/images/home/blog/safety3.jpeg"
    }
  ]
};

export default function FeaturedStories() {
  const [activeTab, setActiveTab] = useState("Top Picks");

  return (
    <div className="container mx-auto">
      <motion.div 
        variants={containerVariants2} 
        initial="initial" 
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center font-['Raleway'] pb-9"
      >
        <motion.p 
          variants={textVariants}
          className="text-center text-[50px] font-semibold leading-[75px] text-[#332414] md:text-[64px]"
        >
          Featured Stories
        </motion.p>
        <div className="rounded-full p-2">
          <Image
            height={2000}
            width={2000}
            alt="Underline Image"
            src={"/images/underline_image.png"}
            className="h-[37px] w-[223px] object-cover"
          />
        </div>
      </motion.div>
      
      {/* Tabs */}
      <div className="flex w-full items-center justify-center flex-wrap gap-4 mb-20">
        {BLOG_TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center justify-center whitespace-nowrap px-4 text-black rounded-[30px] text-[15px] tracking-tighter w-[100px] h-[37px] transition ${
              activeTab === tab 
                ? 'border border-[#FF8500]' 
                : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Featured Blog Posts Grid */}
      <motion.div 
          variants={containerVariants} 
          initial="initial" 
          whileInView="animate"
          viewport={{ once: false }}
          className="flex gap-6">
        <div className="w-[45%] h-[760px]">
          <div 
            className="h-[445px] relative rounded-[40px] bg-cover bg-center"
            style={{ backgroundImage: `url('${FEATURED_BLOGS[activeTab as keyof typeof FEATURED_BLOGS][0].image}')` }}
          >
            <div className="absolute inset-0 rounded-[40px] bg-black opacity-10"></div>
            <div className="relative z-10 flex flex-col h-full p-6">
              <div className="flex flex-col pt-[3rem] gap-[10rem]  h-full">
                <div className="text-white">
                  <p className="mb-3 font-raleway text-[20px] md:text-[24px] font-semibold leading-tight tracking-tighter max-h-[180px] overflow-hidden">
                    {FEATURED_BLOGS[activeTab as keyof typeof FEATURED_BLOGS][0].title}
                  </p>
                  <p className="mb-4 font-raleway text-base font-semibold tracking-tighter">
                    {FEATURED_BLOGS[activeTab as keyof typeof FEATURED_BLOGS][0].date}
                  </p>
                </div>
                <div>
                  <button className="flex items-center text-white">
                    Read More <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[50%] flex gap-6">
          {FEATURED_BLOGS[activeTab as keyof typeof FEATURED_BLOGS].slice(1, 3).map((blog, index) => (
            <div 
              key={index}
              className="flex-1 h-[445px] relative rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url('${blog.image}')` }}
            >
              <div className="absolute inset-0 rounded-[40px] bg-black opacity-10"></div>
              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="flex flex-col pt-[3rem] gap-[10rem] h-full">
                  <div className="text-white">
                    <p className="mb-3 font-raleway text-[20px] md:text-[24px] font-semibold leading-tight tracking-tighter max-h-[180px] overflow-hidden">
                      {blog.title}
                    </p>
                    <p className="mb-4 font-raleway text-base font-semibold tracking-tighter">
                      {blog.date}
                    </p>
                  </div>
                  <div>
                    <button className="flex items-center text-white">
                      Read More <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}