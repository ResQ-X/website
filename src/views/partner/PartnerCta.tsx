import { FlatRightIconButton } from "@/components/buttons/FlatRightIconButton";

export const PartnerCta = () => {
  return (
    <div className="relative min-h-[350px] w-full rounded-xl bg-[url('/images/home/blog/1.png')] bg-cover bg-center md:min-h-[300px]">
      <div className="absolute inset-0 rounded-xl bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-start">
        <div className="relative z-10 px-6">
          <div className="flex flex-col justify-between">
            <div className=" pt-10 text-start text-white">
              <p className="mb-3 max-h-[180px] font-['Raleway'] text-[24px] font-semibold leading-[32px] tracking-[-2%] md:text-[28px]">
                Navigating the Rainy Season: Flood-Prone Areas in Lagos You Need
                to Know
              </p>
              <p className="mb-[62px] font-['Raleway'] text-base font-semibold leading-[21.13px] tracking-[-2%] md:text-lg">
                August 12, 2024
              </p>
            </div>
            <div className="mt-[-20px]">
              <a
                href={""}
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                <FlatRightIconButton
                  text="Read More"
                  alt="Arrow Right Icon"
                  icon="/icons/arrow_right_long_icon.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
