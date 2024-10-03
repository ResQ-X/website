import { Metadata } from "next";
import { MarkdownComponent } from "@/components/MarkdownComponent";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title:
    "Legal - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <PageHero image="/images/heroes/legal.jpeg" title="Legal" />
      <MarkdownComponent filePath="/src/files/legal.md" />
    </div>
  );
}
