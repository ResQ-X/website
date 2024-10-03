"use client";

import React, { useState, useEffect, useRef } from "react";

import { ResqxLogo } from "../ResxqLogo";
import Image from "next/image";
import { NavItem } from "./NavItem";
import { NavButton } from "./NavButton";
import { MobileNav } from "./MobileNav";

export const NavBar = () => {
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
        if (keyAttr !== keyValue && details.hasAttribute("open")) {
          details.removeAttribute("open");
        }
      });
    }
  }

  return (
    <div className="left navbar fixed top-0 z-50 flex items-center justify-between bg-white px-1 py-4 font-['Raleway'] text-base text-[#332414] md:px-8">
      <div className=" px-0">
        {/* MOBILE MENU ICON */}
        <MobileNav />
        {/* LOGO */}
        <ResqxLogo />
      </div>

      {/* CENTER NAV */}
      <div className="z-10 hidden lg:flex lg:flex-row">
        <ul className="menu menu-horizontal px-1">
          <NavItem name={"Home"} path={"/"} />
          <li>
            <details data-key="discover">
              <summary onClick={(e) => handleActiveDetails("discover", e)}>
                Discover Us
              </summary>
              <ul
                className="flex flex-col items-center bg-white p-1.5 text-xs"
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
        </ul>
      </div>

      {/* RIGHT NAV */}
      <div className="z-10 text-base">
        <ul className="menu menu-horizontal hidden px-1 lg:flex">
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
              <summary
                className="text-[#FF8500]"
                onClick={(e) => handleActiveDetails("partner", e)}
              >
                Partner
              </summary>
              <ul
                className="flex w-48 flex-col items-center bg-white p-1.5 text-xs"
                onClick={(e) => setDropdown(e)}
              >
                <NavItem name={"Earn with ResQ-X"} path={"/grow-with-us"} />
                <NavItem name={"Partner with ResQ-X"} path={"/partner"} />
              </ul>
            </details>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-1">
          <NavButton
            keyValue="getapp"
            onSummaryClick={(e) => handleActiveDetails("getapp", e)}
            onClick={(e) => setDropdown(e)}
          />
        </ul>
      </div>
    </div>
  );
};
