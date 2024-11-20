import { HomeBlogSectionCard } from "./HomeBlogSectionCard";

export const HomeBlogSection = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-[2rem]">
    <h2 className="font-raleway text-center text-[40px] md:text-[64px] font-bold text-[#332414] mb-12 tracking-tighter">
      Tips for you
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* First Half */}
      <div className="grid grid-cols-1 gap-6">
        {/* Full Width Card */}
        <HomeBlogSectionCard 
          backgroundImage="/images/home/blog/carImg2.jpeg"
          title="Navigating the Rainy Season: Flood-Prone Areas in Lagos You Need to Know"
          date="August 12, 2024"
          className="h-[314px]"
        />
        
        {/* Two Half-Width Cards */}
        <div className="grid grid-cols-2 gap-6">
          <HomeBlogSectionCard 
            backgroundImage="/images/home/blog/carImg3.jpeg"
            title="Urban Gardening Tips for Small Spaces"
            date="July 25, 2024"
            className="h-[445px]"
          />
          <HomeBlogSectionCard 
            backgroundImage="/images/home/blog/carImg.jpeg"
            title="Sustainable Living Hacks"
            date="June 15, 2024"
            className="h-[445px]"
          />
        </div>
      </div>

      {/* Second Half */}
      <div className="grid grid-cols-1 gap-6">
        {/* Two Half-Width Cards on First Row */}
        <div className="grid grid-cols-2 gap-6">
          <HomeBlogSectionCard 
            backgroundImage="/images/home/blog/carImg3.jpeg"
            title="Smart Home Technology Trends"
            date="May 30, 2024"
            className="h-[445px]"
          />
          <HomeBlogSectionCard 
            backgroundImage="/images/home/blog/carImg2.jpeg"
            title="Eco-Friendly Transportation"
            date="April 22, 2024"
            className="h-[445px]"
          />
        </div>
        
        {/* Full Width Card */}
        <HomeBlogSectionCard 
          backgroundImage="/images/home/blog/carImg.jpeg"
          title="The Future of Renewable Energy in Urban Landscapes"
          date="March 10, 2024"
          className="h-[314px]"
        />
      </div>
    </div>
  </div>
  );
};
