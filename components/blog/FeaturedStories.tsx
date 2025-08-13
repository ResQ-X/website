"use client";

import { useState, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost, getAllPosts } from "@/server/blog";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger effect for children
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DEFAULT_IMAGE = "/images/home/blog/carImg.jpeg";

export default function BlogSection({ activeCategory }: any) {
  console.log(activeCategory);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  console.log("posts", posts);
  console.log("post 1", posts[0]?.slug);

  if (loading) {
    return (
      <div className="container mx-auto text-center py-20">
        <p className="text-[50px] font-semibold text-white font-['Raleway']">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full px-4 py-16 bg-[#262422] z-10 mt-[-100px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center font-['Raleway'] mb-12"
      >
        <h2 className="text-[64px] z-30 md:text-[64px] font-bold text-white mb-4">
          Latest
        </h2>
      </motion.div>
      <div className="absolute bottom-[50%] left-0 bg-orange bg-opacity-50 blur-[225px] w-[400] h-[283px] z-[-1]"></div>
      <div className="absolute bottom-0 right-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
        className="space-y-8 px-2"
      >
        {/* Featured Post (Full Width) */}
        {posts[0] && (
          <motion.div variants={fadeUpVariants}>
            <Link href={`/blog/${posts[0]?.slug}`}>
              <div className="rounded-[12px] overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="relative w-full h-[500px]">
                  <Image
                    src={
                      posts[0]?.featured_image_urls?.original || DEFAULT_IMAGE
                    }
                    alt={posts[0]?.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#14162466]"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex font-normal text-[14px] items-center justify-center w-[107px] h-[28px] rounded-[6px] bg-[#FF8500] text-white capitalize text-sm mb-4">
                      {posts[0]?.category?.name}
                    </div>
                    {/* <h3 className="text-2xl lg:text-[36px] lg:w-[720px] font-semibold mb-4 text-white">
                      {posts[0]?.title}
                    </h3> */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm white font-normal">
                        {new Date(posts[0]?.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid of Other Posts (3 Columns) */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts?.slice(1).map((post) => (
            <motion.div key={post?.id} variants={fadeUpVariants}>
              <Link href={`/blog/${post.slug}`}>
                <div className="h-[488px] rounded-[12px] border border-[#3B3835] p-[16px] flex flex-col gap-[16px] overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="relative h-[240px]">
                    <Image
                      src={post?.featured_image_urls?.original || DEFAULT_IMAGE}
                      alt={post?.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[6px]"
                      priority
                    />
                  </div>
                  <div className="">
                    <div className="flex font-normal text-[14px] items-center justify-center w-[107px] h-[28px] rounded-[6px] bg-[#FF85000D] text-orange capitalize text-sm mb-4">
                      {post?.category?.name}
                    </div>
                    <h3 className="text-xl lg:w-[373px] leading-[28px] font-bold mb-3 line-clamp-2">
                      {post?.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm opacity-90">
                        {new Date(post?.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
