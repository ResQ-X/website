import { ButtonIcon } from "../icons/ButtonIcon";

interface IProps {
  text: string;
  icon: string;
  alt: string;
}

export const LeftIconButton = ({ text, icon, alt }: IProps) => {
  return (
    <div className="font-raleway relative box-border flex max-h-[65px] w-[160px] lg:w-[199px] flex-row items-center justify-center gap-2 rounded-[88px] px-4 py-3 text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
      <ButtonIcon icon={icon} alt={alt} />
      <button className="text-center font-roboto text-lg font-medium text-white ">
        {text}
      </button>
    </div>
  );
};
