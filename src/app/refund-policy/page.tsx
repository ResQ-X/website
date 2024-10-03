import { Metadata } from "next";
import { MarkdownComponent } from "@/components/MarkdownComponent";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title:
    "Refund Policy - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <PageHero
        image="/images/heroes/refund_policy.jpeg"
        title="Refund Policy"
      />
      <MarkdownComponent filePath="/src/files/refund-policy.md" />
    </div>
  );
}
