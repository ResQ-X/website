/* export const NavBar = () => {
  return ();
} */

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ResqxLogo } from "../ResxqLogo";
import Image from "next/image";

export const NavBar = () => {
  return (
    <div className="navbar flex items-center justify-between bg-white px-8 py-4 font-['Raleway'] text-base">
      <div className=" px-0">
        {/* MOBILE MENU ICON */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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

          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Discover Us</summary>
                <ul className="flex flex-col items-start p-1.5">
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Membership</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Get in touch</a>
            </li>
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
                    src={"/icons/call-calling.png"}
                    className="relative h-[24px]  max-w-full overflow-hidden object-cover text-[#736250]"
                  />
                </div>
              </a>
            </li>
            <li>
              <details>
                <summary>Partner</summary>
                <ul className="p-2">
                  <li>
                    <a>Earn with ResQ-X</a>
                  </li>
                  <li>
                    <a>Partner with ResQ-X</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* LOGO */}
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <ResqxLogo />
      </div>

      {/* CENTER NAV */}
      <div className="  hidden lg:flex lg:flex-row">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Discover Us</summary>
              <ul className="flex flex-col items-center p-1.5">
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
                <li>
                  <a>Membership</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Get in touch</a>
          </li>
        </ul>
      </div>

      {/* RIGHT NAV */}
      <div className="">
        <ul className="menu menu-horizontal hidden px-1 lg:flex">
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
                  src={"/icons/call-calling.png"}
                  className="relative h-[24px]  max-w-full overflow-hidden object-cover text-[#736250]"
                />
              </div>
            </a>
          </li>
          <li>
            <details>
              <summary>Partner</summary>
              <ul className="flex w-48 flex-col items-center p-1.5">
                <li>
                  <a>Earn with ResQ-X</a>
                </li>
                <li>
                  <a>Partner with ResQ-X</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <a className="btn ml-10">Get App</a>
      </div>
    </div>
  );
};
