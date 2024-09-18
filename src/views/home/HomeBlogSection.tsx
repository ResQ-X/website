import { HomeBlogSectionCard } from "./HomeBlogSectionCard";

export const HomeBlogSection = () => {
  return (
    <div>
      <p className="font-raleway mb-[100px] mt-[92px] text-center text-[64px] font-bold leading-[75.14px] tracking-[-2%] text-[#332414]">
        Tips for you
      </p>

      <div className="grid-col-1 grid justify-items-start gap-6 px-10 lg:grid-cols-2">
        <HomeBlogSectionCard />
        <HomeBlogSectionCard />
        <HomeBlogSectionCard />
        <HomeBlogSectionCard />
      </div>
    </div>
  );
};
