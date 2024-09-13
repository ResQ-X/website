import { ResqxLogo } from "@/components/ResxqLogo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/ui/styles/home.module.css";
import { lusitana } from "@/ui/fonts/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="color-p md:h-52 flex h-20 shrink-0 items-end rounded-lg p-4">
        <ResqxLogo />
      </div>
      <div className="md:flex-row mt-4 flex grow flex-col gap-4"></div>
    </main>
  );
}
