/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL;

module.exports = {
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       // For: domain/blog
  //       // {
  //       //   source: '/blog',
  //       //   // destination: `${BLOG_URL}/`,
  //       //   destination: `https://blog.yongwoo.dev/`,
  //       // },
  //       // // E.g: domain/blog/hello-wolrd
  //       // {
  //       //   source: '/blog/:slug',
  //       //   // destination: `${BLOG_URL}/:slug/`,
  //       //   destination: `https://blog.yongwoo.dev/:slug/`,
  //       // },
  //       // // E.g: domain/blog/hello-wolrd/hello-where
  //       // {
  //       //   source: '/blog/:slug*',
  //       //   // destination: `${BLOG_URL}/:slug*/`,
  //       //   destination: `https://blog.yongwoo.dev/:slug*/`,
  //       // },
        
  //     ]
  //   };
  // },
};