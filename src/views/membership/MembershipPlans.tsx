"use client";

import { useState } from "react";
import { TabButton } from "@/components/buttons/TabButton";
import { AnnualPlanTab } from "./AnnualPlanTab";
import { QuarterPlanTab } from "./QuarterPlanTab";

export const MembershipPlans = () => {
  const [selectedTab, setSelectedTab] = useState("Quaterly"); // track selected tab

  return (
    <div className="mb-[120px]">
      <p className="mb-[54px] mt-[50px] text-center text-[50px] font-bold leading-[72px] md:mt-[78px] md:text-[68px]">
        Membership Plans
      </p>
      <div className="flex justify-center">
        <div className="font-raleway relative box-border inline-flex max-h-[65px] items-center justify-center gap-2 rounded-[88px] bg-[#faf8f5] px-4 py-3">
          <div onClick={() => setSelectedTab("Customer")}>
            <TabButton
              text="Quaterly"
              isSelected={selectedTab === "Quaterly"}
            />
          </div>

          <div onClick={() => setSelectedTab("Service Provider")}>
            <TabButton
              text="Annually"
              isSelected={selectedTab === "Annually"}
            />
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Tab Content */}
      <div className="mt-6">
        {selectedTab === "Customer" ? <QuarterPlanTab /> : <AnnualPlanTab />}
      </div>
    </div>
  );
};
