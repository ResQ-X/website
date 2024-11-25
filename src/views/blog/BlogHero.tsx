import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogHero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-[35%] lg:pt-1 lg:-mt-32 pb-12 smooth">
      <div className="z-10 w-full md:w-[30%] space-y-[6rem] lg:space-y-6">
        <h1 className="text-[68px] text-center lg:text-left lg:text-[68px] lg:w-[532px] leading-[78px] h-[144px] font-bold lg:leading-[72px] tracking-[-4%] text-[#332414]">
          Your Daily Dose of <span className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-transparent">Insight</span>
        </h1>
        <p className="text-[#33141C] tracking-tight leading-[40px] text-center lg:text-left font-[300] text-[20px] mb-6 lg:leading-[23.48px] lg:w-[523px]">
          Discover tips and tricks to keep you and your vehicle covered while on the road
        </p>
        <button className="lg:w-[250px] hidden font-raleway relative box-border lg:flex max-h-[65px] flex-row items-center justify-center gap-2 rounded-[88px] px-[30px] py-[20px] text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
          Subscribe to Newsletter
        </button>

        <div className="w-full flex justify-center lg:hidden -translate-y-16">
          <button className="lg:w-[250px] font-raleway relative box-border flex max-h-[65px] flex-row items-center justify-center gap-2 rounded-[88px] px-[30px] py-[20px] text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
            Subscribe to Newsletter
          </button>          
        </div>
      </div>
      
      <div className="relative w-full md:w-[65%] h-[400px] lg:h-[870px] lg:mt-72">
        <Image 
          src="/images/hero-blog.png" 
          alt="Blog Hero" 
          fill 
          className="object-contain h-full brightness-[1.05] contrast-[1.05] saturate-[1.05]"
        />
      </div>
    </div>
  );
}