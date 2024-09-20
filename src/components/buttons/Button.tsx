import Link from "next/link";
interface IProps {
  text: string;
  url: string;
  className?: string;
}

export const Button = ({ text, url, className = "" }: IProps) => {
  return (
    <div className={className}>
      <Link href={url}>
        <div
          className={`font-raleway relative box-border flex min-h-[65px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[88px] p-[10px] text-lg leading-6 tracking-[-2%] text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]`}
        >
          <button
            className={`text-center font-['Raleway'] text-lg font-semibold leading-[21px] tracking-[-2%]`}
          >
            {text}
          </button>
        </div>
      </Link>
    </div>
  );
};
