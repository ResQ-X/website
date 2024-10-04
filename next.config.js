/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

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
};


/* module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.resqx.net',
      },
      {
        source: '/blog/:slug*',
        destination: 'https://blog.resqx.net/:slug*',
      },
    ];
  },
}; */