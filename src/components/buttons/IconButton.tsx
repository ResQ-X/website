import { ButtonIcon } from "../icons/ButtonIcon";

interface IProps {
  text: string;
  icon: string;
  alt: string;
}

export const IconButton = ({ text, icon, alt }: IProps) => {
  return (
    <div className="font-raleway relative box-border flex max-h-[65px] w-[214px] flex-row items-center justify-center gap-2 rounded-[88px] px-4 py-3 text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
      <button className="text-center font-roboto text-lg font-medium text-white ">
        {text}
      </button>
      <ButtonIcon icon={icon} alt={alt} />
    </div>
  );
};
