import { ContactForm } from "@/views/contact/ContactForm";
import { ContactHero } from "@/views/contact/ContactHero";
import Faqs from "../faqs/page";
import { ContactSection } from "@/views/contact/ContactSection";

export default function Page() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <Faqs />
    </div>
  );
}
