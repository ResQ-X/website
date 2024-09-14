import { customerAppStoreLink, customerPlayStoreLink } from "@/lib/constants";
import Image from "next/image";

export const NavButton = () => {
  return (
    <li className="font-raleway relative box-border flex max-h-12 w-[132px] items-center justify-center  gap-2 rounded-[88px] px-1 py-3 text-left text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
      <details>
        <summary className="flex items-center justify-center text-base">
          Get app
        </summary>
        <ul className="flex w-40 flex-col items-center bg-white  text-[#332414]">
          <li>
            <a
              href={customerAppStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="flex flex-row ">
                <p className="pr-1 text-xs">App Store</p>
                <Image
                  height={24}
                  width={24}
                  alt="App Store Logo"
                  src={"/icons/app_store_logo.png"}
                  className="relative h-[24px]   overflow-hidden object-cover"
                />
              </div>
            </a>
          </li>
          <li>
            <a
              href={customerPlayStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <div className="flex flex-row">
                <p className="pr-1 text-xs">Play Store</p>
                <Image
                  height={24}
                  width={24}
                  alt="Play Store Logo"
                  src={"/icons/play_store_logo.png"}
                  className="relative h-[24px]   overflow-hidden object-cover"
                />
              </div>
            </a>
          </li>
        </ul>
      </details>
    </li>
  );
};
