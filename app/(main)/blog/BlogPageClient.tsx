"use client";

import { useState } from "react";
import FeaturedStories from "@/components/blog/FeaturedStories";
// import NewsletterSection from "@/components/blog/NewsletterSection";
// import RelatedPostsSection from "@/components/blog/RelatedPostsSection";
import { Category } from "@/server/blog";
import Hero from "@/components/tow-truck/Hero";

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen overflow-hidden">
      <Hero
        title="Tips, Insights, and Roadside Stories."
        description="Explore expert advice, driving tips, and stories that keep you informed and prepared for every journey"
        rotate={false}
        image="/images/blog-hero.svg"
      />
      <FeaturedStories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {/* <NewsletterSection activeCategory={activeCategory} /> */}
    </div>
  );
}
