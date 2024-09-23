export const HomeFacts = () => {
  return (
    <div className="mb-11 w-full pt-8">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row lg:gap-[64px]">
        <div className="flex flex-col items-center justify-center">
          <p className="font-poppins text-3xl font-bold leading-[34px] text-[#6E7DDB]">
            1200+
          </p>
          <p className="text-xl leading-[34px] text-[#333333]">Active users</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-poppins text-3xl font-bold leading-[34px] text-[#6E7DDB]">
            5+
          </p>
          <p className="text-xl leading-[34px] text-[#333333]">Partners</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-poppins text-3xl font-bold leading-[34px] text-[#6E7DDB]">
            50+
          </p>
          <p className="text-xl leading-[34px] text-[#333333]">
            Service providers
          </p>
        </div>
      </div>
    </div>
  );
};
