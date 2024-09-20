import { GrowWithUsHero } from "@/views/grow-with-us/GrowWithUsHero";
import Faqs from "../faqs/page";
import { CareerContact } from "@/views/careers/CareerContact";

export default function Page() {
  return (
    <main>
      <div>
        <GrowWithUsHero />
        <CareerContact />
        <Faqs />
      </div>
    </main>
  );
}
