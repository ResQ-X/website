"use client";

import { useState } from "react";
import BlogHero from "@/views/blog/BlogHero";
import FeaturedStories from "@/views/blog/FeaturedStories";
import NewsletterSection from "@/views/blog/NewsletterSection";
import RelatedPostsSection from "@/views/blog/RelatedPostsSection";
import { Category } from "@/server/blog";

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHero />
      <FeaturedStories 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <NewsletterSection 
        activeCategory={activeCategory} 
      />
      <RelatedPostsSection />
    </div>
  );
}
