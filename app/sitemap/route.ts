import { NextResponse } from "next/server";


export async function GET() {
  const baseUrl = 'https://new.resqx.net'

 
  const routes = [
    "/",
    "/about",
    "/services",
    "/contact",
    "/careers",
    "/legal",
    "/refund-policy",
    "/privacy-policy",
    "/terms-of-use",
    "/membership",
    "/partner",
    "/grow-with-us",
    "/faqs",
    "/blog", 
  ];


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        return `
          <url>
            <loc>${baseUrl}${route}</loc>
          </url>
        `;
      })
      .join("")}
  </urlset>`;


  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
