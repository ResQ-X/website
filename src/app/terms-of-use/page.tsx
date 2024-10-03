import { Metadata } from "next";
import { MarkdownComponent } from "@/components/MarkdownComponent";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title:
    "Terms Of Use - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <PageHero image="/images/heroes/terms_of_use.jpeg" title="Terms Of Use" />
      <MarkdownComponent filePath="/src/files/terms-of-use.md" />
    </div>
  );
}
