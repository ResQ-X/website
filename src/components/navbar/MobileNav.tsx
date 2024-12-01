"use client";

import { useState } from "react";
import Image from "next/image";
import { NavItem } from "./NavItem";

export const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleActiveDetails = (keyValue: string) => {
    const detailsList = Array.from(document.querySelectorAll("details"));
    detailsList.forEach((details) => {
      const keyAttr = details.getAttribute("data-key");
      if (keyAttr !== keyValue && details.hasAttribute("open")) {
        details.removeAttribute("open");
      }
    });
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed h-screen inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-2/3 max-w-sm bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute right-4 top-4 text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Items */}
        <ul className="mt-8 space-y-4">
          <NavItem name={"Home"} path={"/"} />
          <li>
            <details data-key="discover">
              <summary
                onClick={() => handleActiveDetails("discover")}
                className="cursor-pointer"
              >
                Discover Us
              </summary>
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <NavItem name={"About"} path={"/about"} />
                <NavItem name={"Services"} path={"/services"} />
                <NavItem name={"Careers"} path={"/careers"} />
                <NavItem name={"Membership"} path={"/membership"} />
              </ul>
            </details>
          </li>
          <NavItem name={"Blog"} path={"/blog"} />
          <NavItem name={"Get in touch"} path={"/contact"} />
          <NavItem name={"Rescue me"} path={"/emergency"} />
          <li>
            <a
              href="tel:2348140647017"
              className="flex items-center space-x-2 text-lg font-semibold text-[#736250]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>0814-064-7017</span>
              <Image
                height={24}
                width={24}
                alt="Call Icon"
                src={"/icons/call_calling_dark.png"}
              />
            </a>
          </li>
          <li>
            <details data-key="partner">
              <summary
                onClick={() => handleActiveDetails("partner")}
                className="cursor-pointer"
              >
                Partner
              </summary>
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <NavItem name={"Earn with ResQ-X"} path={"/grow-with-us"} />
                <NavItem name={"Partner with ResQ-X"} path={"/partner"} />
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </>
  );
};
