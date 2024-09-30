"use client";

import { useEffect, useState } from "react";

export const HomeFacts = () => {
  return (
    <div className="mb-11 w-full pt-8">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row lg:gap-[64px]">
        <HomeFactsCard
          number={3500}
          text="Waitlist Users"
          incremental={100}
          duration={5000}
        />
        <HomeFactsCard
          number={8}
          text="Partners"
          incremental={1}
          duration={5000}
        />
        <HomeFactsCard
          number={85}
          text="Service Providers"
          incremental={5}
          duration={5000}
        />
      </div>
    </div>
  );
};

interface IProps {
  number: number;
  text: string;
  incremental: number;
  duration: number;
}

export const HomeFactsCard = ({
  number,
  text,
  incremental,
  duration,
}: IProps) => {
  const [value, setValue] = useState(0);

  const runCounter = () => {
    const targetValue = number;
    let increment = targetValue / (duration / incremental);

    if (increment < 1) {
      increment = 1;
    }

    const intervalId = setInterval(() => {
      setValue((prevValue) => {
        const nextValue = Math.floor(prevValue + increment);
        if (nextValue >= targetValue) {
          clearInterval(intervalId);
          return targetValue;
        }
        return nextValue;
      });
    }, 50);
  };

  useEffect(() => {
    runCounter();
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-poppins text-3xl font-bold leading-[34px] text-[#6E7DDB]">
        {`${value}+`}
      </p>
      <p className="text-xl leading-[34px] text-[#333333]">{text}</p>
    </div>
  );
};
