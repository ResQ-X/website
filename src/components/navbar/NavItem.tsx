"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const NavItem = ({ name, path }: { name: string; path: string }) => {
  const pathName = usePathname();

  const closeDropdowns = () => {
    const openDetails = document.querySelectorAll("details[open]");
    openDetails.forEach((details) => details.removeAttribute("open"));
  };

  return (
    <li onClick={closeDropdowns}>
      <Link
        href={path}
        className={`relative ${pathName === path ? " pb-4" : ""}`}
      >
        {name}
        {pathName === path && (
          <span className="absolute bottom-0 left-0 h-1 w-full pb-3">
            <Image src="/icons/menu_active.png" alt="underline" layout="fill" />
          </span>
        )}
      </Link>
    </li>
  );
};
