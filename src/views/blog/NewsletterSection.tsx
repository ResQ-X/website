import React from 'react';
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
    </div>
  );
}