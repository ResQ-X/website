import Image from "next/image";

export const AboutTeam = () => {
  return (
    <div className="mx-6 mb-[80px] md:mx-[40px]">
      <div className="flex flex-col font-['Raleway'] tracking-[-2%]">
        <p className="mb-10 text-center text-[50px] font-semibold leading-[75.14px] text-[#332414] md:text-[64px]">
          Meet The Team
        </p>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-1">
          <div className="flex flex-col items-center justify-center rounded-lg bg-[#ff8500] px-10 py-[50px] text-white lg:w-1/2">
            <p className="mb-6 text-center text-[40px] font-bold leading-[46.96px]">
              CEO
            </p>
            <div className="mb-10 w-[300px] rounded-lg bg-white p-4">
              <p className="text-center text-[32px] font-semibold leading-[37.57px] text-[#736250]">
                Ehizogie Donald
              </p>
            </div>
            <p className="mb-6 text-center text-[32px] font-bold leading-[37.57px]">
              “Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit ora torquent per conubia nostra, per
              inceptos himenaeos.”
            </p>
          </div>
          <div className="rounded-lg bg-[#faf8f5] lg:w-1/2">
            <Image
              height={2000}
              width={2000}
              alt="About Overview Image"
              src={"/images/about/team.png"}
              className="relative max-h-full w-full overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
