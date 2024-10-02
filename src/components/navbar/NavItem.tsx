"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const NavItem = ({
  name,
  path,
  onClick,
}: {
  name: string;
  path: string;
  onClick: () => void;
}) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <li>
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
