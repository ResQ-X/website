import { HomeBlogSectionCard } from "./HomeBlogSectionCard";

export const HomeBlogSection = () => {
  return (
    <div className="grid-col-1 grid justify-items-start gap-6 px-10 lg:grid-cols-2">
      <HomeBlogSectionCard />
      <HomeBlogSectionCard />
      <HomeBlogSectionCard />
      <HomeBlogSectionCard />
    </div>
  );
};
