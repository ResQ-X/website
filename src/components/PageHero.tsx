interface IProps {
  image: string;
  title: string;
}

export const PageHero = ({ image, title }: IProps) => {
  return (
    <div
      className={`relative flex min-h-[463px] w-full items-center justify-center bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[url('/images/services/service_hero_overlay.png')] bg-cover bg-center opacity-90"></div>
      <div className="relative z-10 text-center">
        <p className="font-['Raleway'] text-[50px] font-semibold leading-[72px] tracking-[-2%] text-[#FAF8F5] md:text-[68px]">
          {title}
        </p>
      </div>
    </div>
  );
};
