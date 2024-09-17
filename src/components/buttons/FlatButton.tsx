interface IProps {
  text: string;
  color?: string;
  textColor?: string;
  isSelected?: boolean;
}

export const FlatButton = ({ text, color, textColor, isSelected }: IProps) => {
  return (
    <div
      className={`font-raleway relative box-border flex max-h-[65px] w-[199px] flex-row items-center justify-center gap-2 rounded-[88px] px-4 py-3 text-base`}
      style={{
        backgroundColor: isSelected ? "#ff8500" : color || "#ffffff", // dynamically set bg color
      }}
    >
      <button
        className={`text-center font-['Raleway'] text-lg font-semibold leading-[21px] tracking-[-2%]`}
        style={{ color: isSelected ? "#FFFFFF" : "#736250" }} // dynamically set text color
      >
        {text}
      </button>
    </div>
  );
};
