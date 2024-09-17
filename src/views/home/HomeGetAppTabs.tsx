"use client";

import { FlatButton } from "@/components/buttons/FlatButton";
import { HomeGetAppTabCustomer } from "./HomeGetAppTabCustomer";
import { HomeGetAppTabServiceProvider } from "./HomeGetAppTabServiceProvider";
import { useState } from "react";
import { TabButton } from "@/components/buttons/TabButton";

export const HomeGetAppTabs = () => {
  const [selectedTab, setSelectedTab] = useState("Customer"); // track selected tab

  return (
    <div className="mb-[120px]">
      <div className="flex justify-center">
        <div className="font-raleway relative box-border inline-flex max-h-[65px] items-center justify-center gap-2 rounded-[88px] bg-[#faf8f5] px-4 py-3">
          <div onClick={() => setSelectedTab("Customer")}>
            <TabButton
              text="Customer"
              isSelected={selectedTab === "Customer"}
            />
          </div>

          <div onClick={() => setSelectedTab("Service Provider")}>
            <TabButton
              text="Service Provider"
              isSelected={selectedTab === "Service Provider"}
            />
          </div>
        </div>
      </div>

      <div className="my-8 text-center text-[32px] font-semibold leading-[38px] tracking-[-2%] text-[#332414]">
        Get the app
      </div>

      {/* Conditional Rendering of Tab Content */}
      <div className="mt-6">
        {selectedTab === "Customer" ? (
          <HomeGetAppTabCustomer />
        ) : (
          <HomeGetAppTabServiceProvider />
        )}
      </div>
    </div>
  );
};
