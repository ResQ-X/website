"use client";

import { motion } from "framer-motion";
import arrow from "@/public/icons/arrow.png";
import Image from "next/image";

// BlogPost type from server/blog.ts
type BlogPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  created_at: string;
  category: {
    name: string;
  };
  featured_image_urls: {
    large: string;
    original: string;
  } | null;
  meta_keywords?: string | string[] | null;
  meta_description?: string | null;
  description?: string;
};

type BlogDetailsClientProps = {
  posts: BlogPost;
};

const BlogDetailsClient = ({ posts }: BlogDetailsClientProps) => {
  console.log("post details", posts);

  // Default fallback image
  const DEFAULT_IMAGE = "/images/home/blog/carImg2.jpeg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 lg:px-8 lg:pt-6 pb-12 pt-[150px] mt-[200px] min-h-screen mx-auto relative"
    >
      <div className="flex items-center w-[213px] gap-[24px] mb-6">
        <button
          onClick={() => window.history.back()}
          className="flex w-[75px] gap-[12px] items-center text-white"
        >
          <Image
            src={arrow}
            alt="arrow left"
            className="scale-[-1] transform"
            priority
          />
          <span className="ml-1">Back</span>
        </button>

        <div className="flex font-normal text-[14px] items-center justify-center w-[107px] h-[28px] rounded-[6px] bg-[#FF8500] text-white capitalize text-sm">
          {posts?.category?.name || "General"}
        </div>
      </div>

      <h1 className="text-4xl lg:text-[36px] font-semibold mb-4 w-full">
        {posts?.title}
      </h1>

      <p className="text-[#696A75] font-normal mb-8">
        {new Date(posts?.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Featured Image Section */}
      <div
        className="w-full h-[721px] mb-12 rounded-[12px] overflow-hidden relative"
        style={{
          backgroundImage: `url(${posts?.featured_image_urls?.original || posts?.featured_image_urls?.large || DEFAULT_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#14162466]"></div>
      </div>

      {/* Content Section */}
      <div className="mx-auto relative">
        <div className="prose leading-[52px] prose-lg text-white w-full max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: posts?.content }}
            className="prose-headings:text-white prose-p:text-white prose-a:text-orange prose-strong:text-white prose-em:text-white"
          />
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
        <div className="absolute bottom-10 left-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
        <div className="absolute top-[50%] right-[50%] bg-orange bg-opacity-50 blur-[295px] w-[283px] h-[283px] z-[-1]"></div>
      </div>

      {/* Excerpt Section (if you want to show it separately) */}
      {posts?.excerpt && (
        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Excerpt</h3>
          <div
            dangerouslySetInnerHTML={{ __html: posts.excerpt }}
            className="text-gray-300"
          />
        </div>
      )}

      {/* Additional Post Info */}
      <div className="mt-8 p-6 bg-gray-900 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Post Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Post ID:</span>
            <span className="text-white ml-2">{posts?.id}</span>
          </div>
          <div>
            <span className="text-gray-400">Slug:</span>
            <span className="text-white ml-2">{posts?.slug}</span>
          </div>
          <div>
            <span className="text-gray-400">Category:</span>
            <span className="text-white ml-2 capitalize">
              {posts?.category?.name}
            </span>
          </div>
          {posts?.meta_keywords && (
            <div>
              <span className="text-gray-400">Keywords:</span>
              <span className="text-white ml-2">
                {Array.isArray(posts.meta_keywords)
                  ? posts.meta_keywords.join(", ")
                  : posts.meta_keywords}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Related Posts Section - Uncomment when you have the data structure ready */}
      {/* <div className="mt-16">
        <RelatedPostsSection activeCategory={posts.category} />
      </div> */}
    </motion.div>
  );
};

export default BlogDetailsClient;
