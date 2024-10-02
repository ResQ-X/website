"use client";

import { useState } from "react";
import { TabButton } from "@/components/buttons/TabButton";
import { AnnualPlanTab } from "./AnnualPlanTab";
import { QuarterPlanTab } from "./QuarterPlanTab";
import { HalfYearPlanTab } from "./HalfYearPlanTab";

export const MembershipPlans = () => {
  const [selectedTab, setSelectedTab] = useState("HalfYear"); // track selected tab

  return (
    <div className="mb-[120px]">
      <p className="mb-5 mt-[50px] text-center text-[50px] font-bold leading-[72px] md:mt-[78px] md:text-[68px]">
        Membership Plans
      </p>
      <div className="flex justify-center">
        <div className="font-raleway relative box-border inline-flex max-h-[65px] items-center justify-center gap-2 rounded-[88px] bg-[#faf8f5] px-4 py-3">
          <div onClick={() => setSelectedTab("HalfYear")}>
            <TabButton
              text="HalfYear"
              isSelected={selectedTab === "HalfYear"}
            />
          </div>

          <div onClick={() => setSelectedTab("Annually")}>
            <TabButton
              text="Annually"
              isSelected={selectedTab === "Annually"}
            />
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Tab Content */}
      <div className="mt-6">
        {selectedTab === "HalfYear" ? <HalfYearPlanTab /> : <AnnualPlanTab />}
      </div>
    </div>
  );
};
