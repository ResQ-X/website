import Image from "next/image";

export const HomeGetAppCard = ({
  image,
  text,
}: {
  image: string;
  text: string;
}) => {
  return (
    <div className="mt-6 flex justify-start">
      <div className="mb-11 flex flex-col items-center justify-center gap-4">
        <Image
          height={1200}
          width={1200}
          alt="Customer Phone Image"
          src={image}
          className="h-[144px] w-auto max-w-[200px] object-cover"
        />
        <p className="font-['Raleway'] text-[24px] font-semibold leading-[28.18px] tracking-[-2%] text-[#FAF8F5]">
          {text}
        </p>
      </div>
    </div>
  );
};
