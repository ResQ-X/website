import BlogPageClient from "./BlogPageClient";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog - ResQ-X | Roadside Assistance Insights",
  description: "Discover expert tips, stories, and insights about roadside assistance",
};

export default function BlogPage() {
  return (
    <div>
      <BlogPageClient />
    </div>
  );
}
