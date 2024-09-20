import Image from "next/image";
import { ContactForm } from "../contact/ContactForm";

export const CareerContact = () => {
  return (
    <div className="mb-[70px] px-6 font-['Raleway'] md:mb-[100px] md:px-10 lg:mx-[40px]">
      <p className="mb-6 text-center text-[50px] font-semibold leading-[55px] md:text-[64px] md:leading-[75.14px]">
        Have Any Inquiry?
      </p>
      <div className="flex flex-col lg:flex-row">
        <div className="rounded-lg bg-white p-2 lg:w-1/2">
          <Image
            height={1200}
            width={1200}
            alt="Career Contact Image"
            src={"/images/careers/career_contact_image.png"}
            className="w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
