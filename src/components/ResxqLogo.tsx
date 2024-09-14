import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const ResqxLogo = () => {
  return (
    <Image
      height={83}
      width={214}
      alt="Logo"
      src={"/logos/resqx_navbar_logo.png"}
      className="relative h-[70px]  max-w-full overflow-hidden object-cover"
    />
  );
};
