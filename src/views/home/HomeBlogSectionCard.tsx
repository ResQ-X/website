import { FlatRightIconButton } from "@/components/buttons/FlatRightIconButton";
import { PostModel } from "@/lib/models/post.model";

interface IProps {}

export const HomeBlogSectionCard = () => {
  return (
    <div className="relative h-[300px] w-full rounded-xl bg-[url('/images/home/blog/blog_post_1.png')] bg-cover bg-center">
      <div className="absolute inset-0 rounded-xl bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-start">
        <div className="relative z-10 px-6">
          <div className=" pt-10 text-start text-white">
            <p className="mb-3 font-['Raleway'] text-[28px] font-semibold leading-[32px] tracking-[-2%]">
              Navigating the Rainy Season: Flood-Prone Areas in Lagos You Need
              to Know
            </p>
            <p className="mb-[62px] font-['Raleway'] text-lg font-semibold leading-[21.13px] tracking-[-2%]">
              August 12, 2024
            </p>
          </div>
          <a
            href={""}
            rel="noopener noreferrer"
            className="no-underline"
            target="_blank"
          >
            <FlatRightIconButton
              text="Read More"
              alt="Arrow Right Icon"
              icon="/icons/arrow_right_long_icon.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
