interface IProps {
  text: string;
  isSelected?: boolean;
}

export const TabButton = ({ text, isSelected }: IProps) => {
  return (
    <div
      className={`font-raleway relative box-border flex max-h-[65px] flex-row items-center justify-center gap-2 rounded-[88px] p-[10px] text-base`}
      style={{
        backgroundColor: isSelected ? "#ff8500" : "#ffffff",
      }}
    >
      <button
        className={`text-center font-['Raleway'] text-lg font-semibold leading-[21px] tracking-[-2%]`}
        style={{ color: isSelected ? "#FFFFFF" : "#736250" }}
      >
        {text}
      </button>
    </div>
  );
};
