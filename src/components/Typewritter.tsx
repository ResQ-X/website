"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Instant",
    },
    {
      text: "Roadside",
    },
    {
      text: "Assistance",
    },
    {
      text: "Anywhere.",
      className: "bg-gradient-to-b gradient-text2 from-[#ff8500] to-[#995000] bg-clip-text text-transparent",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-1">
      <p className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-bold text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <h1 className="my-5 text-center font-['Raleway'] text-[50px] font-bold lg:leading-[82px] tracking-[-4%] md:text-[88px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Instant Roadside Assistance <span className="bg-gradient-to-b gradient-text2 from-[#ff8500] to-[#995000] bg-clip-text text-transparent">Anywhere</span>
      </h1>
    </div>
  );
}
