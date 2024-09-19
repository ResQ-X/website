import { LeftIconButton } from "@/components/buttons/LeftIconButton";
import { customerAppStoreLink, customerPlayStoreLink } from "@/lib/constants";

export const HomeHero = () => {
  return (
    <div className="h-[792px] w-full bg-[url('/images/home/home_hero_image.png')] bg-cover bg-center ">
      <div className="mb-8 pt-40">
        <h1 className="text-center font-['Raleway'] text-[68px] font-bold leading-[72px] tracking-[-4%]">
          <span className="text-[#332414]">Instant Roadside Assistance</span>{" "}
          <span className="bg-gradient-to-b from-[#ff8500] to-[#995000] bg-clip-text text-transparent">
            Anywhere
          </span>
        </h1>
      </div>
      <div>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 pb-[468px] md:flex-row">
          <a
            href={customerPlayStoreLink}
            rel="noopener noreferrer"
            className="no-underline"
            target="_blank"
          >
            <LeftIconButton
              text="Play Store"
              icon="/icons/play_store_logo.png"
              alt="Play store icon"
            />
          </a>
          <a
            href={customerAppStoreLink}
            rel="noopener noreferrer"
            className="no-underline"
            target="_blank"
          >
            <LeftIconButton
              text="App Store"
              icon="/icons/app_store_logo_white.png"
              alt="App store icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
