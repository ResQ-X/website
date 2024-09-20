import { ButtonIcon } from "../icons/ButtonIcon";

interface IProps {
  text: string;
  icon: string;
  alt: string;
}

export const FlatLeftIconBorderButton = ({ text, icon, alt }: IProps) => {
  return (
    <div className="rounded-[15px] bg-gradient-to-b from-[#ff8500] to-[#995000] p-[2px] transition-all duration-300 hover:bg-white hover:p-[4px]">
      <div
        className={`text-[#332414 ] font-raleway relative box-border flex max-h-[65px]  w-[160px] flex-row items-center justify-center gap-2 rounded-[13px]  bg-[#ffffff] p-[10px] text-base hover:bg-[#ff8500] hover:text-white`}
      >
        <ButtonIcon icon={icon} alt={alt} />
        <button
          className={`text-center font-['Raleway'] text-base font-normal leading-[24px] tracking-[-2%] text-[#332414]`}
        >
          {text}
        </button>
      </div>
    </div>
  );
};
