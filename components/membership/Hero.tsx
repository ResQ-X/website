import Image from "next/image";
import LeftSvg from "@/public/grad/Ellipse 15.svg"
import RightSvg from "@/public/grad/Vector 10.svg"
import RightSvg1 from "@/public/grad/Vector 11.svg"
import RightSvg2 from "@/public/grad/Ellipse 13.svg"

const Hero = () => {
    return (
      <div className="relative text-white bg-black mt-[-10px] w-full h-[896px] pt-40">
        <div className="w-full max-w-[956px] mx-auto px-4 text-center">
          <h1 className="text-4xl w-[956px] h-[225px] md:text-[64px] font-bold mb-[95px] tracking-[-2%] leading-[75.14px]">
            PROTECT WHAT MATTERS MOST:<br />
            YOUR GOALS, YOUR MONEY, YOUR FUTURE
          </h1>
          <p className="text-xl md:text-2xl h4 text-[24px] tracking-tighter max-w-[956px] text-lightest mx-auto">
            Affordable plans tailored just for you. Join now and secure what truly matters.
          </p>
        </div>

        <Image src={LeftSvg} alt="LeftSvg" className="absolute left-0 top-0" />
        <Image src={RightSvg} alt="RightSvg" className="absolute bottom-0 w-full" />
        <Image src={RightSvg2} alt="RightSvg" className="absolute right-0 bottom-0" />
        <Image src={RightSvg1} alt="RightSvg" className="absolute left-0 bottom-0" />
      </div>
    );
  };


export default Hero;