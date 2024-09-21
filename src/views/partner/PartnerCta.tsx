import { FlatRightIconButton } from "@/components/buttons/FlatRightIconButton";
import Link from "next/link";

export const PartnerCta = () => {
  return (
    <div className="relative mx-4 flex min-h-[350px] items-center justify-center rounded-xl bg-[url('/images/partner/partner_cta_image.jpeg')] bg-cover bg-center md:min-h-[300px] lg:mx-[120px] lg:px-[100px]">
      <div className="absolute inset-0 rounded-xl bg-black opacity-50"></div>
      <div className="relative z-10 my-auto flex flex-col items-center">
        <p className="mb-[43px] max-h-[180px] text-center font-['Merriweather'] text-[40px] font-semibold leading-[58px] text-white md:text-[50px]">
          Protect your fleet today!
        </p>
        <Link href="/contact">
          <div
            className={`font-raleway relative box-border flex min-h-[60px] w-[250px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[88px] p-[10px] text-lg leading-6 tracking-[-2%] text-white [background:linear-gradient(180deg,_#407BFF,_#08318D)]`}
          >
            <button
              className={`text-center font-['Raleway'] text-base font-semibold leading-[21px] tracking-[-2%]`}
            >
              Get a quote
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
