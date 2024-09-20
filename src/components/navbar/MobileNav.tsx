"use client";

import { useState } from "react";
import Image from "next/image";
import { NavItem } from "./NavItem";

export const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <div className="dropdown lg:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <ul
          tabIndex={0}
          className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
        >
          <NavItem name={"Home"} path={"/"} />
          <li>
            <details>
              <summary>Discover Us</summary>
              <ul className="flex flex-col items-start bg-white p-1.5 text-xs">
                <NavItem name={"About"} path={"/about"} />
                <NavItem name={"Services"} path={"/services"} />
                <NavItem name={"Careers"} path={"/careers"} />
                <NavItem name={"Membership"} path={"/membership"} />
              </ul>
            </details>
          </li>
          <NavItem name={"Blog"} path={"/blog"} />
          <NavItem name={"Get in touch"} path={"/contact"} />
          <li>
            <a>
              <div className="flex flex-row">
                <p className="pr-1 font-roboto text-lg font-semibold text-[#736250]">
                  091-234-13450
                </p>
                <Image
                  height={24}
                  width={24}
                  alt="Call Icon"
                  src={"/icons/call_calling_dark.png"}
                  className="relative h-[24px]  max-w-full overflow-hidden object-cover text-[#736250]"
                />
              </div>
            </a>
          </li>
          <li>
            <details>
              <summary>Partner</summary>
              <ul className="bg-white p-2 text-xs">
                <NavItem name={"Earn with ResQ-X"} path={"/grow-with-us"} />
                <NavItem name={"Partner with ResQ-X"} path={"/partner"} />
              </ul>
            </details>
          </li>
        </ul>
      )}
    </div>
  );
};
