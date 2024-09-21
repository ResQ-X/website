import { IPartnerHowItWorks } from "@/lib/models";
import { partnerHowItWorksList } from "@/lib/values/partner_howitworks.values";
import Image from "next/image";

export const PartnerHowItWorks = () => {
  return (
    <div className="mx-4 mb-[120px] lg:mx-[55px]">
      <div className="mb-6 font-['Raleway']">
        <p className="mb-4 text-center text-[50px] font-bold leading-[55px] text-[#1F1F1F] md:text-[75px] md:leading-[75.14px]">
          How It Works
        </p>
        <p className="text-center text-base font-normal text-[##333333] lg:px-[320px]">
          Streamline your operations and enhance customer satisfaction with our
          quick and efficient roadside assistance services, tailored to meet the
          needs of your business.
        </p>
      </div>
      <div>
        <div className="grid items-center justify-center gap-y-8 lg:grid-cols-3 lg:gap-x-6">
          {partnerHowItWorksList.map((value, index) => (
            <DetailsCard
              key={index}
              number={value.number}
              description={value.description}
              title={value.title}
              image={value.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const DetailsCard = ({
  number,
  title,
  description,
  image,
}: IPartnerHowItWorks) => {
  return (
    <div>
      <div>
        <Image
          height={1200}
          width={1200}
          alt={title}
          src={image}
          className="w-full object-cover"
        />
      </div>
      <div className="mt-[-130px] flex flex-col items-center">
        <NumberCircle number={number} />
        <div className="mx-3 h-[296px] max-w-[340px] rounded-[8px] bg-[#407BFF] px-6 pb-[44px] pt-[77px] tracking-[-2%] md:min-w-[340px] lg:mx-0 ">
          <div className="flex flex-col items-center gap-4 text-center text-white">
            <p className="text-[28px] font-semibold leading-[32.87px] ">
              {title}
            </p>
            <p className="text-lg font-normal leading-[21.13px] ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NumberCircle = ({ number }: { number: string }) => {
  return (
    <div className="z-10 mb-[-63.5px] flex h-[127px] w-[127px] items-center justify-center rounded-[50%] border-2 border-[#A89887] bg-white ">
      <p className="text-center text-[64px] leading-[75.14px] tracking-[-2%]">
        {number}
      </p>
    </div>
  );
};
