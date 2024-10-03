import { ResqxLogo } from "../ResxqLogo";
import { FooterLinkItem } from "./FooterLinkItem";
import { FooterNav } from "./FooterNav";
import { FooterSocialIcon } from "./FooterSocialIcon";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="px-4 py-3">
      <div className="relative flex flex-col rounded-[20px] bg-darkest px-10 pb-[30px] pt-20 lg:flex-row">
        {/* First Column */}
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col">
            <Image
              height={83}
              width={214}
              alt="Logo"
              src={"/logos/resqx_logo.png"}
              className="relative max-w-full overflow-hidden object-cover pb-6"
            />
            <p className="font-roboto text-lg text-white">
              We are a reliable roadside assistance service provider available
              24/7, offering fast, affordable and friendly assistance. Your
              trusted partner for roadside support and peace of mind.
            </p>
            <div className="mb-8 mt-4 flex flex-row">
              <FooterSocialIcon icon="/icons/facebook.png" link="" />
              <FooterSocialIcon icon="/icons/twitter.png" link="" />
              <FooterSocialIcon icon="/icons/youtube.png" link="" />
              <FooterSocialIcon icon="/icons/instagram.png" link="" />
            </div>
            <p className="mb-3 text-lg text-white">
              Contact:{" "}
              <a
                href="tel:2348140647017"
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                0814-064-7017
              </a>
            </p>
            <p className="mb-11 text-lg text-white">
              Email:{" "}
              <a
                href="mailto:hello@resqx.com"
                rel="noopener noreferrer"
                className="no-underline"
                target="_blank"
              >
                hello@resqx.com
              </a>
            </p>
            <button className="btn w-48 rounded-[20px] bg-white px-[26px] text-center font-roboto text-base text-black lg:mr-20 ">
              Download app
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col pt-8 lg:w-3/4 lg:flex-row lg:pl-36">
          <div className="mb-8 mt-6 flex-1 lg:mb-0 lg:mt-0">
            <p className="pb-8 font-roboto text-lg text-white">Services</p>
            <p className="pb-4 font-roboto text-sm text-white">Tow truck</p>
            <p className="pb-4 font-roboto text-sm text-white">Fuel delivery</p>
            <p className="pb-4 font-roboto text-sm text-white">Jump start</p>
            <p className="pb-4 font-roboto text-sm text-white">Health check</p>
            <p className="pb-4 font-roboto text-sm text-white">
              Key replacement
            </p>
            <p className="pb-4 font-roboto text-sm text-white">Onward travel</p>
          </div>
          <div className="mb-8 flex-1 lg:mb-0">
            <p className="pb-8 font-roboto text-lg text-white">More</p>
            <FooterLinkItem name="Blog" path="/blog" />
            <FooterLinkItem name="Membership" path="/membership" />
            <FooterLinkItem name="Partner" path="/partner" />
            <FooterLinkItem name="Support" path="/contact" />
          </div>
          <div className="mb-8 flex-1 lg:mb-0">
            <p className="pb-8 font-roboto text-lg text-white">Company</p>
            <FooterLinkItem name="About Us" path="/about" />
            <FooterLinkItem name="Careers" path="/careers" />
            <FooterLinkItem name="FAQs" path="/faqs" />
            <FooterLinkItem name="Contact Us" path="/contact" />
          </div>
          <div className="mb-8 flex-1 lg:mb-0">
            <p className="pb-8 font-roboto text-lg text-white">Locations</p>
            <p className="pb-4 font-roboto text-sm text-white">
              Third Mainland Bridge
            </p>
            <p className="pb-4 font-roboto text-sm text-white">
              V.G.C (Victoria Garden City)
            </p>
            <p className="pb-4 font-roboto text-sm text-white">
              V.I (Victoria Island)
            </p>
            <p className="pb-4 font-roboto text-sm text-white">Ikoyi</p>
            <p className="pb-4 font-roboto text-sm text-white">Lekki</p>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};
