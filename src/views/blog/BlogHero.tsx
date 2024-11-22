import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogHero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 bg-gray-50">
      <div className="z-10 w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Your Daily Dose of Insight
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover tips and tricks to keep you and your vehicle covered while on the road
        </p>
        <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Subscribe to Newsletter <ArrowRight className="ml-2" />
        </button>
      </div>
      
      <div className="relative w-full md:w-1/2 h-[500px] mt-8 md:mt-0">
        <Image 
          src="/api/placeholder/600/400" 
          alt="Blog Hero" 
          fill 
          className="object-cover rounded-lg"
        />
        
        {/* Overlay stats */}
        <div className="absolute top-4 left-4 bg-white/80 px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold text-blue-600">5K+</span>
          <p className="text-sm text-gray-700">Online Adventures</p>
        </div>
        
        <div className="absolute bottom-4 right-4 bg-white/80 px-4 py-2 rounded-lg">
          <span className="text-2xl font-bold text-green-600">2K+</span>
          <p className="text-sm text-gray-700">Stories</p>
        </div>
      </div>
    </div>
  );
}