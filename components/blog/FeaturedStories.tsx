"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost, getAllPosts } from "@/server/blog";


const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    },
  }
};

const DEFAULT_IMAGE = "/images/home/blog/carImg.jpeg";

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const fetchedPosts = await getAllPosts(); // Fetch all posts
      setPosts(fetchedPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto text-center py-20">
        <p className="text-[50px] font-semibold text-[#332414] font-['Raleway']">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="container relative mx-auto px-4 py-16 bg-transparent backdrop-blur-3xl mt-[-100px]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center font-['Raleway'] mb-12"
      >
        <h2 className="text-[64px] z-30 md:text-[64px] font-bold text-white mb-4">
          Latest
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="space-y-8 px-2"
      >
        {/* Featured Post (Full Width) */}
        {posts[0] && (
          <Link href={`/blog/${posts[0].id}`}>
            <div className="bg-gradient-to-br from-[#ff8500] to-[#995000] rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative w-full h-[500px]">
                <Image
                  src={posts[0].featured_image_urls?.original || DEFAULT_IMAGE}
                  alt={posts[0].title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full inline-block mb-4">
                    {posts[0].category?.name}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{posts[0].title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">
                      {new Date(posts[0].created_at).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      Read More <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid of Other Posts (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="bg-gradient-to-br from-[#ff8500] to-[#995000] rounded-2xl overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="relative h-48">
                  <Image
                    src={post.featured_image_urls?.original || DEFAULT_IMAGE}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 text-white">
                  <div className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-3">
                    {post.category?.name}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm opacity-90">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}