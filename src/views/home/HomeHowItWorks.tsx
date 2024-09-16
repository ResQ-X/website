import Image from "next/image";

export const HomeHowItWorks = () => {
  return (
    <div className="mb-[44px] w-full">
      <div className="flex items-center justify-center">
        <button className="btn btn-outline flex h-[60px] flex-row items-center justify-center rounded-[99px] px-6 py-2 font-['Raleway'] text-base font-bold text-[#FF8500]">
          <p>How it works</p>
          <div className="rounded-full bg-[#faeddd] p-2">
            <Image
              height={1200}
              width={1200}
              alt="Contact Image"
              src={"/icons/play_arrow.png"}
              className="w-4 object-cover"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
