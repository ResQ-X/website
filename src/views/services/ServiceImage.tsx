import Image from "next/image";
import Link from "next/link";

{
  /* <div className="w-full rounded-lg">
      <Image
        height={2000}
        width={2000}
        alt="A Service Image"
        src={image}
        className="relative max-h-full w-full overflow-hidden object-cover"
      />
    </div> */
}

export const ServiceImage = ({ image }: { image: string }) => {
  return (
    <div className="relative">
      <div
        className="absolute left-0 top-0 h-full w-full rounded-lg bg-[#f2e7da] bg-cover bg-center"
        style={{
          transform: "translate(20px, 20px)",
        }}
      ></div>

      <div className="relative h-full w-full rounded-lg bg-cover bg-center">
        <Image
          height={2000}
          width={2000}
          alt="A Service Image"
          src={image}
          className="relative max-h-full w-full overflow-hidden rounded-lg object-cover"
        />
      </div>
    </div>
  );
};
