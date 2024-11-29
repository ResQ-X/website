"use client";

import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link";
import { AlertTriangle } from "lucide-react"; // Import the emergency icon

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
        className={`relative flex items-center ${
          pathName === path ? "pb-4" : ""
        }`}
      >
        {name === "Rescue me" && (
          <AlertTriangle
            size={20}
            className="mr-2 text-red-500" // Icon styling
          />
        )}
        <span
          className={`${
            name === "Rescue me" ? "text-red-500 font-bold" : ""
          }`}
        >
          {name}
        </span>
        {pathName === path && (
          <span className="absolute bottom-0 left-0 h-1 w-full pb-3">
          <Image src="/images/underline_image.png" alt="underline" className="" height={100} width={100} />
        </span>
        )}
      </Link>
    </li>
  );
};
