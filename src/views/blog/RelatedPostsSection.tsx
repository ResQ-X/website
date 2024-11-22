import React from 'react';
import { Calendar } from 'lucide-react';

const RelatedPostCard = ({ title, description, date, imageUrl }) => {
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-md mb-6">
      <div className="h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-64">
        <div>
          <h3 className="text-xl text-[#292219] font-bold mb-2">{title}</h3>
          <p className="mb-4 text-[#292219]">{description}</p>
        </div>
        <div className="flex items-center justify-end text-[#94908C]">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default function RelatedPostsSection() {
  const relatedPosts = [
    {
      title: "Emergency Roadside Survival Guide",
      description: "Essential tips for staying safe when your vehicle breaks down in remote areas.",
      date: "20 Aug 2024",
      imageUrl: "/images/home/blog/carImg.jpeg"
    },
    {
      title: "Tire Maintenance: Prevent Blowouts",
      description: "Learn how regular tire checks can save you from dangerous roadside emergencies.",
      date: "18 Aug 2024",
      imageUrl: "/images/home/blog/carImg.jpeg"
    },
    {
      title: "Winter Driving Safety Techniques",
      description: "Expert advice on navigating challenging winter road conditions safely.",
      date: "15 Aug 2024",
      imageUrl: "/images/home/blog/carImg.jpeg"
    },
    {
      title: "Understanding Roadside Assistance Plans",
      description: "Comparing different roadside assistance options and what they cover.",
      date: "12 Aug 2024",
      imageUrl: "/images/home/blog/carImg.jpeg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="font-semibold mb-[96px] text-center text-[#332414] w-full text-[64px]">You might like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedPosts.map((post, index) => (
          <RelatedPostCard 
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}