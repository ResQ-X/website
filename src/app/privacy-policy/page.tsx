import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MarkdownComponent } from "@/components/MarkdownComponent";

export const metadata: Metadata = {
  title:
    "Privacy Policy - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <PageHero
        image="/images/heroes/privacy_policy.jpeg"
        title="Privacy Policy"
      />
      <MarkdownComponent filePath="/src/files/privacy-policy.md" />
    </div>
  );
}
