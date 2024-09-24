import { IconButton } from "@/components/buttons/IconButton";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <div className="bg-transparent  lg:pl-20">
      <div className="flex flex-col lg:flex-row lg:justify-end lg:gap-16">
        <div className="w-full px-4 py-8 md:p-8 lg:-mt-[380px] lg:w-2/4">
          <ContactForm title="We love to hear from you!" />
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:flex-row lg:w-2/4 lg:gap-8">
          <a
            href="tel:2349123413450"
            rel="noopener noreferrer"
            className="no-underline"
            target="_blank"
          >
            <IconButton
              text="091-234-13450"
              icon="/icons/call_calling.png"
              alt="Contact Image"
            />
          </a>
          <a
            href="tel:2349123413450"
            rel="noopener noreferrer"
            className="no-underline"
            target="_blank"
          >
            <IconButton
              text="Live chat"
              icon="/icons/chat_icon.png"
              alt="Chat Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
