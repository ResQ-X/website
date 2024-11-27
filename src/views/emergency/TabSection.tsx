"use client";

import { Tabs } from "@/components/ui/tabs";
import DummyContent from "./DummyContext";

const TabsSection = () => {
  const tabs = [
    {
      title: "Fuel Delivery",
      value: "fuel",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-[#ff8500] to-[#995000]">
          <DummyContent
            title="Fuel Delivery"
            description="Ran out of fuel on the roadside? We’ll deliver 10 liters of Super 98 fuel directly to your location."
            arrival="Arrives within 30 mins"
            price="100 AED"
            additionalInfo="T&Cs apply."
            image="/images/gas-deliver.jpg"
          />
        </div>
      ),
    },
    {
      title: "Jump Start",
      value: "jump_start",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-[#ff8500] to-[#995000]">
          <DummyContent
            title="Jump Start"
            description="Dead battery? Don’t panic – we’ll come and give you a boost."
            arrival="Arrives within 30 mins"
            price="150 AED"
            additionalInfo="Fees may still apply if jump-starting does not resolve the issue."
            image="/images/car-battery-3.jpg"
          />
        </div>
      ),
    },
    {
      title: "Tire Change",
      value: "tire_change",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-[#ff8500] to-[#995000]">
          <DummyContent
            title="Tire Change"
            description="Flat tire? We’ll come over and replace it for you quickly."
            arrival="Arrives within 30 mins"
            price="120 AED"
            additionalInfo="T&Cs apply."
            image="/images/tire.jpg"
          />
        </div>
      ),
    },
    {
      title: "Air Pressure",
      value: "air_pressure",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-[#ff8500] to-[#995000]">
          <DummyContent
            title="Air Pressure"
            description="Low tire pressure? We’ll make sure your tires are properly inflated."
            arrival="Arrives within 30 mins"
            price="80 AED"
            additionalInfo="Includes a complete tire inspection."
            image="/images/tyre-pressures.jpg"
          />
        </div>
      ),
    },
    {
      title: "Towing",
      value: "towing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-[#ff8500] to-[#995000]">
          <DummyContent
            title="Towing"
            description="Stranded? Our towing service will help you move your vehicle safely."
            arrival="Arrives within 30 mins"
            price="200 AED"
            additionalInfo="Price includes up to 10 km of towing."
            image="/images/Towing_Payallup.jpg"
          />
        </div>
      ),
    },
  ];
  

  return (
    <div className="mt-20 px-2 flex flex-col justify-center items-center w-full">
      <div className="h-[28rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-center justify-center">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default TabsSection;
