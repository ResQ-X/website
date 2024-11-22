import { Metadata } from "next";
import BlogHero from "@/views/blog/BlogHero";
import FeaturedStories from "@/views/blog/FeaturedStories";
import NewsletterSection from "@/views/blog/NewsletterSection";
import RelatedPostsSection from "@/views/blog/RelatedPostsSection";

export const metadata: Metadata = {
  title: "Blog - ResQ-X | Roadside Assistance Insights",
  description: "Discover expert tips, stories, and insights about roadside assistance",
};

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <FeaturedStories />
      <NewsletterSection />
      <RelatedPostsSection />
    </div>
  );
}