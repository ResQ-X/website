"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { getPostsByCategory, BlogPost, Category } from "@/server/blog";
import { motion } from "framer-motion";

interface NewsletterSectionProps {
  activeCategory: Category | null;
}

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function NewsletterSection({ activeCategory }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!activeCategory) {
        console.log("No active category selected.");
        return;
      }

      try {
        setIsLoading(true);
        const data = await getPostsByCategory(activeCategory.id || 1);
        setPosts(data.slice(3)); // Show posts from the 4th onward
        setError(null);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Failed to load blog posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Subscribing:", email);
    setEmail("");
  };

  if (!activeCategory) {
    return (
      <div className="container mx-auto px-6 mt-20">
        <div className="text-center text-gray-600">
          <p className="text-xl">Please select a category to view blog posts.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-semibold text-[#332414] font-['Raleway']"
          >
            Getting blogs...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 mt-20">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 mt-20">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <Link 
                href={`/blog/${post.id}`}
                className="block bg-white border group-hover:border-[#FF8500] rounded-lg p-6 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-1 mr-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-[#FF8500] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.description }}></p>
                    <div className="flex items-center text-gray-500">
                      <span className="mr-4 text-sm">{post.time_since_post}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Eye className="mr-2 w-4 h-4" />
                        <span className="text-sm">{post.formatted_views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative min-w-[256px] h-48 overflow-hidden rounded-lg">
                    <Image
                      src={post.featured_image_urls?.original || "/images/home/blog/carImg2.jpeg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full overflow-hidden my-12 relative rounded-[40px] bg-cover bg-center h-[407px] flex items-center justify-center"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home/blog/carImg.jpeg"
              alt="Newsletter Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

          <div className="relative z-20 text-center py-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 max-w-2xl mx-auto">
              Keep up with the latest tips by subscribing to our newsletter
            </h2>

            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto relative">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 pr-32 bg-white/70 backdrop-blur-sm border border-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-gray-600"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}