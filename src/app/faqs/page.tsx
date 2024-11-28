import Image from "next/image";

import Faq from "@/views/faq/Faq";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQs - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Faqs() {
  return (
    <Faq />
  );
}
