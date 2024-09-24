import { ContactForm } from "../contact/ContactForm";
import Image from "next/image";

export const GetAQuote = () => {
  return (
    <div id="GetAQuote" className="mx-4 mb-[120px] lg:mx-[55px]">
      <div className="mb-6 font-['Raleway']">
        <p className="mb-4 text-center text-[50px] font-bold leading-[55px] text-[#1F1F1F] md:text-[75px] md:leading-[75.14px]">
          Get A Quote
        </p>
        <p className="text-center text-base font-normal text-[##333333] lg:px-[320px]">
          Reach out to us for a personalized quote that meets your unique
          business needs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-20 lg:mb-0">
          <ContactForm
            title="Get a custom quote"
            bgFrom="#407BFF"
            bgTo="#08318D"
          />
        </div>

        <div className="relative flex items-center">
          <div className="absolute inset-0 grid grid-cols-2 ">
            <div className="h-full w-full bg-white"></div>
            <div className="h-full w-full rounded-s-[8px] bg-[#407BFF]"></div>
          </div>

          <div className="relative my-10 mr-10 w-full bg-[#031846] px-5 py-20 font-['Raleway'] lg:py-[100px] lg:pl-[70px] lg:pr-[170px]">
            <p className="mb-[40px] text-center text-[40px] font-bold leading-[46.96px] text-[#FAF8F5] md:text-start ">
              Info
            </p>
            <div className=" flex flex-col ">
              <ContactItem
                title="Contact"
                description="091-234-13450"
                icon="/icons/call_calling.png"
                url="tel:2349123413450"
              />
              <ContactItem
                title="Email"
                description="info@resqx.com"
                icon="/icons/email.png"
                url="mailto:info@resqx.com"
              />
              <ContactItem
                title="Address"
                description="Lagos, Nigeria"
                icon="/icons/location.png"
                url={""}
              />
              <ContactItem
                title="Instagram"
                description="ResQ-X"
                icon="/icons/instagram.png"
                url="https://instagram.com/resqx"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface ContactItemProps {
  title: string;
  description: string;
  icon: string;
  url: string;
}

export const ContactItem = ({
  title,
  description,
  icon,
  url,
}: ContactItemProps) => {
  return (
    <div className="mb-[42px] flex flex-col items-center text-white md:flex-row">
      <div className="mb-2 mr-[6px] md:mb-0">
        <Image
          height={2000}
          width={2000}
          alt={title}
          src={icon}
          className="w-8 object-cover"
        />
      </div>
      <p className="mb-3 text-[28px] font-semibold leading-[32.87px] md:mb-0 ">
        {title}
      </p>
      <p className="mx-3 hidden text-[25px] text-[#F2E7DA] md:block">-</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        {" "}
        <p className="font-roboto text-[18px] font-normal leading-[21.09px] ">
          {description}
        </p>
      </a>
    </div>
  );
};
