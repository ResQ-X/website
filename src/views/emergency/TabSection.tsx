"use client";

import { Tabs } from "@/components/ui/tabs";
import DummyContent from "./DummyContext";

const TabsSection = () => {
  const tabs = [
    {
      title: "Fuel Delivery",
      value: "fuel",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Need fuel? ResQX will deliver fuel directly to your location.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Jump Start",
      value: "jump_start",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Dead battery? ResQX will jump-start your vehicle in no time.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Tire Change",
      value: "tire_change",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Flat tire? We’ll come over and replace it for you quickly.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Air Pressure",
      value: "air_pressure",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Need proper tire pressure? ResQX will ensure your tires are good to go.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Towing",
      value: "towing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Stuck? ResQX towing service is always ready to help.</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-20 flex flex-col justify-center items-center w-full">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-center justify-center">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default TabsSection;
