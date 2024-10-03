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

  function setDropdown(event: any) {
    const target = event.target as HTMLElement;
    const detailsElement = target.closest("details");
    if (detailsElement) {
      if (detailsElement.hasAttribute("open")) {
        detailsElement.removeAttribute("open");
      } else {
        detailsElement.setAttribute("open", "true");
      }
    }
  }

  function handleActiveDetails(keyValue: string, event: any) {
    const detailsElementList = Array.from(document.querySelectorAll("details"));
    if (detailsElementList.length !== 0) {
      detailsElementList.forEach((details, index) => {
        const keyAttr = details.getAttribute("data-key");
        console.log("keyAttr:", keyAttr);

        if (keyAttr !== keyValue && details.hasAttribute("open")) {
          details.removeAttribute("open");
        }
      });
    }
  }

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
            <details data-key="discover">
              <summary onClick={(e) => handleActiveDetails("discover", e)}>
                Discover Us
              </summary>
              <ul
                className="flex flex-col items-start bg-white p-1.5 text-xs"
                onClick={(e) => setDropdown(e)}
              >
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
            <a
              href="tel:2348140647017"
              rel="noopener noreferrer"
              className="no-underline"
              target="_blank"
            >
              <div className="flex flex-row">
                <p className="pr-1 font-roboto text-lg font-semibold text-[#736250]">
                  0814-064-7017
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
            <details data-key="partner">
              <summary onClick={(e) => handleActiveDetails("partner", e)}>
                Partner
              </summary>
              <ul
                className="bg-white p-2 text-xs"
                onClick={(e) => setDropdown(e)}
              >
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
