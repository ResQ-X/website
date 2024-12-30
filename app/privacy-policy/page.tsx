import { Metadata } from "next";
import { MarkdownComponent } from "@/components/MarkdownComponent";


export const metadata: Metadata = {
  title:
    "Privacy Policy - ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return (
    <div>
      <MarkdownComponent filePath="/files/privacy-policy.md" />
    </div>
  );
}
