"use client";

import { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";
import Image from "next/image";

// Placeholder blog tabs and content
const BLOG_TABS = [
  "Top Picks", "Maintenance", "Safety", "Travel", "Stories", "News", "How-to"
];

const FEATURED_BLOGS = {
  "Top Picks": [
    {
      title: "Navigating the Rainy Season: Flood-Prone Areas in Lagos You Need to Know",
      date: "August 12, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "The Smart Car Owner Checklist: Roadside Emergency Tips",
      date: "August 12, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Urban Driving Survival Guide",
      date: "August 12, 2024",
      image: "/api/placeholder/400/300"
    }
  ],
  // Add placeholders for other tabs similarly
};

const BLOG_LIST = [
  {
    title: "Lorem Ipsum Blog Title",
    description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "3 min ago",
    views: 432,
    image: "/api/placeholder/300/200"
  },
  // Add more placeholder blog entries
];

export default function FeaturedStories() {
  const [activeTab, setActiveTab] = useState("Top Picks");

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Stories</h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {BLOG_TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === tab 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Featured Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {FEATURED_BLOGS[activeTab as keyof typeof FEATURED_BLOGS]?.map((blog, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <Image 
              src={blog.image} 
              alt={blog.title} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">{blog.date}</span>
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  Read More <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Blog List */}
      <div className="space-y-6">
        {BLOG_LIST.map((blog, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="flex-1 mb-4 md:mb-0 md:mr-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="flex items-center text-gray-500">
                <span className="mr-4">{blog.time}</span>
                <Eye className="mr-2 w-5 h-5" />
                <span>{blog.views}</span>
              </div>
            </div>
            <Image 
              src={blog.image} 
              alt={blog.title} 
              width={300} 
              height={200} 
              className="w-full md:w-64 h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}