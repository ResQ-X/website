import Image from "next/image";

export const FooterSocialIcon = ({
  icon,
  link,
}: {
  icon: string;
  link: string;
}) => {
  return (
    <a href={link}>
      <div className="mr-6 flex h-9 w-9 items-center justify-center rounded-[5px] bg-white">
        <Image
          height={24}
          width={24}
          alt="Social Media Icon"
          src={icon}
          className="h-[24px] w-[24px] object-cover"
        />
      </div>
    </a>
  );
};
