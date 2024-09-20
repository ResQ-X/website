import Faqs from "../faqs/page";
import { CareerContact } from "@/views/careers/CareerContact";

export default function Page() {
  return (
    <main>
      <div>
        <CareerContact />
        <Faqs />
      </div>
    </main>
  );
}
