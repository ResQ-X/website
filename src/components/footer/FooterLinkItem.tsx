"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const FooterLinkItem = ({
  name,
  path,
}: {
  name: string;
  path: string;
}) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <p className="pb-4 font-roboto text-sm text-white">
      <Link href={path}>{name}</Link>
    </p>
  );
};
