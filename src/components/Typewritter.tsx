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
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
