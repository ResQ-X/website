import Image from "next/image";

export const HomeDualPhone = () => {
  return (
    <div className="mb-[39] w-full px-5 md:px-0">
      <div className="flex items-center justify-center">
        <Image
          height={3000}
          width={3000}
          alt="Contact Image"
          src={"/images/home/home_dual_phone_image.png"}
          className="w-[472.14px] object-cover"
        />
      </div>
    </div>
  );
};
