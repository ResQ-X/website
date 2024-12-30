"use client";

import React, { useState } from "react";
import type { NavigationLink } from "@/types/navigation";
import { X, ChevronDown } from "lucide-react";

const MobileNav = ({
  isOpen,
  onClose,
  mainLinks,
  secondaryLinks,
}: {
  isOpen: boolean;
  onClose: () => void;
  mainLinks: NavigationLink[];
  secondaryLinks: NavigationLink[];
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (text: string) => {
    setActiveDropdown(activeDropdown === text ? null : text);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-black/95 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className=" justify-end p-4 hidden">
          <button onClick={onClose} className="text-white hover:text-orange">
            <X size={24} />
          </button>
        </div>

        {/* Links Container */}
        <div className="px-6 py-4 mt-20">
          {/* Main Links */}
          <div className="space-y-4">
            {mainLinks.map((link, index) => (
              <div key={`mobile-main-${link.text}-${index}`} className="relative">
                <button
                  onClick={() =>
                    link.dropdownItems ? toggleDropdown(link.text) : onClose()
                  }
                  className={`text-lg flex items-center justify-between text-white ${
                    link.className || ""
                  }`}
                >
                  {link.text}
                  {link.dropdownItems && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === link.text ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {link.dropdownItems && activeDropdown === link.text && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdownItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={onClose}
                        className="block text-sm text-gray-300 hover:text-orange"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-white/20" />

          {/* Secondary Links */}
          <div className="space-y-4">
            {secondaryLinks.map((link, index) => (
              <div key={`mobile-secondary-${link.text}-${index}`} className="relative">
                <button
                  onClick={() =>
                    link.dropdownItems ? toggleDropdown(link.text) : onClose()
                  }
                  className={`text-lg flex items-center justify-between text-white ${
                    link.text === "091-234-13450" ? "font-semibold" : ""
                  } ${
                    link.text === "Get app" ? "btn text-white hover:text-white" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.text}
                    {link.icon && <link.icon size={20} />}
                    {(link.text === "Discover" || link.text === "Get app") && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.text ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>
                </button>
                {link.dropdownItems && activeDropdown === link.text && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdownItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={onClose}
                        className="block text-sm text-gray-300 hover:text-orange"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
