import { GrowWithUsHero } from "@/views/grow-with-us/GrowWithUsHero";
import Faqs from "../faqs/page";
import { CareerContact } from "@/views/careers/CareerContact";
import { WhatYouGain } from "@/views/grow-with-us/WhatYouGain";
import { GrowWithUsRectangle } from "@/views/grow-with-us/GrowWithUsRectangle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Earn With Us - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <main>
      <div>
        <GrowWithUsHero />
        <WhatYouGain />
        <GrowWithUsRectangle />
        <CareerContact />
        <Faqs />
      </div>
    </main>
  );
}
