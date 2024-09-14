import { ContactForm } from "@/views/contact/ContactForm";
import { ContactHero } from "@/views/contact/ContactHero";
import Faqs from "../faqs/page";

export default function Page() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Faqs />
    </div>
  );
}
