import { FlatRightIconButton } from "@/components/buttons/FlatRightIconButton";

export const ServiceHero = () => {
  return (
    <div className="relative flex min-h-[463px] w-full items-center justify-center bg-[url('/images/services/service_hero_image.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[url('/images/services/service_hero_overlay.png')] bg-cover bg-center opacity-90"></div>
      <div className="relative z-10 text-center">
        <p className="font-['Raleway'] text-[50px] font-semibold leading-[72px] tracking-[-2%] text-[#FAF8F5] md:text-[68px]">
          Our Services
        </p>
      </div>
    </div>
  );
};
