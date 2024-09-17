interface IProps {
  number: string;
  text: string;
}

export const HomeSliderCard = ({ number, text }: IProps) => {
  return (
    <div className="card carousel-item bg-white px-[50px] py-10 shadow-xl">
      <div className="card-body">
        <div className="flex flex-row gap-4">
          <div className="flex h-12 w-11 items-center justify-center rounded-lg bg-[#fddbb5] text-[28px] font-semibold leading-[33px] tracking-[-2%]">
            <p className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-center text-transparent">
              {number}
            </p>
          </div>
          <div className="text-[40px] font-bold leading-[47px] tracking-[-2%] text-[#332414]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};
