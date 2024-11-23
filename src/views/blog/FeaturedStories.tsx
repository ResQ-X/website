"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCategories, getPostsByCategory, Category, BlogPost } from "@/server/blog";

interface FeaturedStoriesProps {
  activeCategory: Category | null;
  onCategoryChange: (category: Category) => void;
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.4
    },
  }
};

const containerVariants2 = {
  initial: { opacity: 0, x: -200 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    },
  }
};

const textVariants = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  }
};

const DEFAULT_IMAGE = "/images/home/blog/carImg.jpeg";

export default function FeaturedStories({ activeCategory, onCategoryChange }: FeaturedStoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
      if (fetchedCategories.length > 0 && !activeCategory) {
        onCategoryChange(fetchedCategories[0]);
      }
    }
    fetchCategories();
  }, [onCategoryChange, activeCategory]);

  useEffect(() => {
    async function fetchPostsByCategory() {
      if (!activeCategory) return;
      
      setLoading(true);
      const fetchedPosts = await getPostsByCategory(activeCategory.id);
      setPosts(fetchedPosts.slice(0, 3)); // Only take first 3 posts
      setLoading(false);
    }

    fetchPostsByCategory();
  }, [activeCategory]);

  const handleTabChange = (category: Category) => {
    onCategoryChange(category);
  };

  if (loading && categories.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[50px] md:text-[64px] font-semibold text-[#332414] font-['Raleway']"
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        variants={containerVariants2} 
        initial="initial" 
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center font-['Raleway'] pb-9"
      >
        <motion.p 
          variants={textVariants}
          className="text-center text-[50px] font-semibold leading-[75px] text-[#332414] md:text-[64px]"
        >
          Featured Stories
        </motion.p>
        <div className="rounded-full p-2">
          <Image
            height={2000}
            width={2000}
            alt="Underline Image"
            src="/images/underline_image.png"
            className="h-[37px] w-[223px] object-cover"
          />
        </div>
      </motion.div>
      
      <div className="flex w-full items-center justify-center flex-wrap gap-4 mb-20">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleTabChange(category)}
            className={`flex items-center justify-center whitespace-nowrap px-4 text-black rounded-[30px] text-[15px] tracking-tighter w-[100px] h-[37px] transition ${
              activeCategory?.id === category.id 
                ? 'border border-[#FF8500]' 
                : ''
            }`}
          >
            {category.name.replace('_', ' ')}
          </button>
        ))}
      </div>

      <motion.div 
        variants={containerVariants} 
        initial="initial" 
        whileInView="animate"
        viewport={{ once: false }}
        className="flex flex-col lg:flex-row gap-6"
      >
        <div className="w-full lg:w-[45%]">
          {posts[0] && (
            <div 
              className="h-[445px] relative rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url('${posts[0].featured_image_urls?.original || DEFAULT_IMAGE}')` }}
            >
              <div className="absolute inset-0 rounded-[40px] bg-black opacity-10"></div>
              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="flex flex-col pt-[3rem] gap-[10rem] h-full">
                  <div className="text-white">
                    <p className="mb-3 font-raleway text-[20px] md:text-[24px] font-semibold leading-tight tracking-tighter max-h-[180px] overflow-hidden">
                      {posts[0].title}
                    </p>
                    <p className="mb-4 font-raleway text-base font-semibold tracking-tighter">
                      {new Date(posts[0].created_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <button className="flex items-center text-white group">
                      Read More 
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="w-full lg:w-[55%] flex flex-col lg:flex-row gap-6">
          {posts.slice(1, 3).map((post) => (
            <div 
              key={post.id}
              className="flex-1 h-[445px] relative rounded-[40px] bg-cover bg-center"
              style={{ backgroundImage: `url('${post.featured_image_urls?.original || DEFAULT_IMAGE}')` }}
            >
              <div className="absolute inset-0 rounded-[40px] bg-black opacity-10"></div>
              <div className="relative z-10 flex flex-col h-full p-6">
                <div className="flex flex-col pt-[3rem] gap-[10rem] h-full">
                  <div className="text-white">
                    <p className="mb-3 font-raleway text-[20px] md:text-[24px] font-semibold leading-tight tracking-tighter max-h-[180px] overflow-hidden">
                      {post.title}
                    </p>
                    <p className="mb-4 font-raleway text-base font-semibold tracking-tighter">
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <button className="flex items-center text-white group">
                      Read More 
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}