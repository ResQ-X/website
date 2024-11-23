import { FlatLeftIconButton } from "@/components/buttons/FlatLeftIconButton";
import { customerPlayStoreLink, customerAppStoreLink } from "@/lib/constants";
import Image from "next/image";

export const HomeCtaSection = () => {
  return (
    <div className="mx-5 mb-[60px] rounded-[40px] bg-[#000B28] px-10 py-8 lg:mx-[175px] lg:mb-[200px]">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="w-3/5">
          <p className="font-['Clash Display'] mb-8 text-center text-[48px] font-bold leading-[48px] text-white md:text-start">
            Ready To Get Started?
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
            <a
              href={customerPlayStoreLink}
              rel="noopener noreferrer"
              className="no-underline"
              target="_blank"
            >
              <FlatLeftIconButton
                text="Play store"
                icon="/icons/play_store_logo.png"
                alt=""
              />
            </a>

            <a
              href={customerAppStoreLink}
              rel="noopener noreferrer"
              className="no-underline"
              target="_blank"
            >
              <FlatLeftIconButton
                text="App store"
                icon="/icons/app_store_logo.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="mt-20 w-full md:mt-0 md:w-2/5">
          <div className="flex w-full items-center justify-center">
            <Image
              height={1200}
              width={1200}
              alt="CTA Phone Image"
              src={"/images/home/home_dual_phone_image.png"}
              className="w-[472.14px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
