import { ButtonIcon } from "../icons/ButtonIcon";

interface IProps {
  text: string;
  icon: string;
  alt: string;
}

export const FlatRightIconButton = ({ text, icon, alt }: IProps) => {
  return (
    <div
      className={`text-[#332414 ] font-raleway relative box-border flex max-h-[65px]  w-[214px] flex-row items-center justify-center gap-2 rounded-[88px] bg-[#ffffff] p-[10px] text-base hover:bg-[#ff8500] hover:text-white`}
    >
      <button
        className={`text-center font-['Raleway'] text-base font-normal leading-[24px] tracking-[-2%] text-[#332414]`}
      >
        {text}
      </button>
      <ButtonIcon icon={icon} alt={alt} />
    </div>
  );
};
