"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, PhoneOutgoing, Menu } from "lucide-react";
import type { NavigationLink } from "@/types/navigation";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";

import LogoImage from "@/public/images/logo.png";

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const mainLinks: NavigationLink[] = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    {
      text: "Services",
      href: "/tow-truck",
      dropdownItems: [
        "Tow Truck",
        "Flat Tyre",
        "Fuel Delivery",
        "Jump Start",
        "Health Check",
        "Key Replacement",
      ],
    },
    { text: "Blog", href: "/blog" },
    { text: "Get in touch", href: "/contact" },
    {
      text: "Rescue Me!",
      href: "/rescue",
      className: "text-red-500 font-bold",
    },
  ];

  const secondaryLinks: NavigationLink[] = [
    { text: "0201-330-6062", href: "tel:+2342013306062", icon: PhoneOutgoing },
    {
      text: "Discover",
      href: "/membership",
      dropdownItems: ["Membership", "Grow With ResQ-X", "Partner", "Careers"],
    },
    // { text: "Coming soon!", href: "#" },
    { text: "Download now!", href: "#" },
  ];

  //https://play.google.com/store/apps/details?id=com.resqx.customer

  return (
    <>
      <nav className="bg-transparent backdrop-blur-[100px] fixed top-0 z-40 flex items-center w-full h-[100px] p-4 lg:p-[26px_56px_26px_61px] justify-between">
        <div className="flex items-center w-full lg:w-[60%] lg:h-[30px]">
          <div
            onClick={() => router.push("/")}
            className="relative w-[120px] lg:w-[140px] h-[26.25px] mr-8 cursor-pointer"
          >
            <Image
              src={LogoImage}
              alt="logo"
              fill
              priority
              className="w-full h-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-[24px]">
            {mainLinks.map((link, index) => (
              <div
                key={`main-${link.text}-${index}`}
                className={`relative group h-[30px] flex items-center justify-center whitespace-nowrap ${
                  link.dropdownItems ? "cursor-pointer" : ""
                }`}
              >
                <NavLink href={link.href} className={link.className}>
                  {link.text}{" "}
                  {link.text === "Services" && <ChevronDown size={16} />}
                </NavLink>
                {link.dropdownItems && (
                  <DropdownMenu items={link.dropdownItems} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Secondary Navigation */}
        <div className="hidden lg:flex w-[40%] h-[48px] items-center justify-end gap-[30px]">
          {secondaryLinks.map((link, index) => (
            <React.Fragment key={`secondary-${link.text}-${index}`}>
              <div className="relative group">
                <NavLink href={link.href}>
                  <span
                    className={cn(
                      `flex items-center gap-2 hover:text-orange ${
                        link.text === "091-234-13450"
                          ? "font-[600] text-[18px]"
                          : ""
                      } ${
                        link.text === "Download now!"
                          ? "btn text-white hover:text-white"
                          : ""
                      }`
                    )}
                  >
                    {link.text}
                    {link.text === "0201-330-6062" && (
                      <PhoneOutgoing size={20} />
                    )}
                    {link.text === "Discover" && <ChevronDown size={16} />}
                    {link.text === "Get app" && <ChevronDown size={16} />}
                  </span>
                </NavLink>
                {link.dropdownItems && (
                  <DropdownMenu items={link.dropdownItems} />
                )}
              </div>
              {index === 0 && <div className="h-[24px] w-[1px] bg-white/20" />}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-orange z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </nav>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        mainLinks={mainLinks}
        secondaryLinks={secondaryLinks}
      />
    </>
  );
};

export default Navbar;
