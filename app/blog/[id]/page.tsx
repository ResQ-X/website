// @ts-nocheck
/* eslint-disable */
import React from "react";
import { Metadata } from "next";
import BlogDetailsClient from "@/components/blog/BlogDetailsClient";
import { getPostById } from "@/server/blog";

type Props = {
 params: { id: string };
 searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { id } = params;
 const post = await getPostById(Number(id));

 if (!post) {
   return {
     title: "Post Not Found", 
     description: "The requested blog post could not be found.",
   };
 }

 return {
   title: post.title,
   description: post.meta_description || post.description.slice(0, 160),
   keywords: post.meta_keywords,
   openGraph: {
     title: post.title,
     description: post.meta_description || post.description.slice(0, 160),
     images: post.featured_image_urls
       ? [
           {
             url: post.featured_image_urls.large || post.featured_image_urls.original,
             alt: post.title,
           },
         ]
       : [],
   },
   twitter: {
     card: "summary_large_image",
     title: post.title,
     description: post.meta_description || post.description.slice(0, 160),
     images: post.featured_image_urls
       ? [post.featured_image_urls.large || post.featured_image_urls.original]
       : [],
   },
 };
}

export default async function BlogDetailsPage({ params }: Props) {
 const { id } = params;
 const post = await getPostById(Number(id));

 if (!post) {
   return (
     <div className="container mx-auto px-4 py-12">
       <div className="text-center text-red-600">Post not found</div>
     </div>
   );
 }

 return <BlogDetailsClient id={id} />;
}