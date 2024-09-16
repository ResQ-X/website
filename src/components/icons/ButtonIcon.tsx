import Image from "next/image";

interface IProps {
  icon: string;
  alt: string;
}

export const ButtonIcon = ({ icon, alt }: IProps) => {
  return (
    <Image
      height={200}
      width={200}
      alt={alt}
      src={icon}
      className="white w-6 object-cover"
    />
  );
};
