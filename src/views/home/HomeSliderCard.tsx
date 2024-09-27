interface IProps {
  number: string;
  text: string;
}

export const HomeSliderCard = ({ number, text }: IProps) => {
  return (
    <div className="inline-flex flex-row gap-4 rounded-2xl bg-white py-20 pl-10 pr-10 shadow-xl">
      <div className="flex h-12 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#fddbb5] text-[28px] font-semibold leading-[33px] tracking-[-2%]">
        <p className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-center text-transparent">
          {number}
        </p>
      </div>
      <div className="whitespace-nowrap text-[30px] font-bold leading-[47px] tracking-[-2%] text-[#332414] lg:text-[40px]">
        {text}
      </div>
    </div>
  );
};

export const HomeSliderCardWhite = ({ number, text }: IProps) => {
  return (
    <div className="inline-flex flex-row gap-4 rounded-2xl bg-white py-20 pl-10 pr-10 shadow-xl">
      <div className="flex h-12 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#fddbb5] text-[28px] font-semibold leading-[33px] tracking-[-2%]">
        <p className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-center text-transparent">
          {number}
        </p>
      </div>
      <div className="whitespace-nowrap text-[30px] font-bold leading-[47px] tracking-[-2%] text-[#332414] lg:text-[40px]">
        {text}
      </div>
    </div>
  );
};
