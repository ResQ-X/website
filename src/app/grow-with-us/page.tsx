import { GrowWithUsHero } from "@/views/grow-with-us/GrowWithUsHero";
import Faqs from "../faqs/page";
import { CareerContact } from "@/views/careers/CareerContact";
import { WhatYouGain } from "@/views/grow-with-us/WhatYouGain";

export default function Page() {
  return (
    <main>
      <div>
        <GrowWithUsHero />
        <WhatYouGain />
        <CareerContact />
        <Faqs />
      </div>
    </main>
  );
}
