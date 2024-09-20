import Image from "next/image";

export const CareerImages = () => {
  return (
    <div className="grid-col-1 mb-[80px] grid gap-6 px-6 md:grid-cols-2 lg:mb-[120px] lg:grid-cols-4 lg:px-10">
      <div>
        <Image
          height={1200}
          width={1200}
          alt="Contact Image"
          src={"/images/careers/1.png"}
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <Image
            height={1200}
            width={1200}
            alt="Contact Image"
            src={"/images/careers/2.png"}
            className="w-full object-cover"
          />
        </div>
        <div>
          <Image
            height={1200}
            width={1200}
            alt="Contact Image"
            src={"/images/careers/3.png"}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div>
        <Image
          height={1200}
          width={1200}
          alt="Contact Image"
          src={"/images/careers/4.png"}
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <Image
            height={1200}
            width={1200}
            alt="Contact Image"
            src={"/images/careers/5.png"}
            className="w-full object-cover"
          />
        </div>
        <div>
          <Image
            height={1200}
            width={1200}
            alt="Contact Image"
            src={"/images/careers/6.png"}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
