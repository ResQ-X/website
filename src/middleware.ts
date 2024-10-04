import { NextRequest, NextResponse } from 'next/server';

const blogUrl: string = process.env.NEXT_PUBLIC_BLOG_URL as string;

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === '/blog' || url.pathname.startsWith('/blog')) {
    const proxyUrl = url.pathname === '/blog'
      ? blogUrl
      : `${blogUrl}${url.pathname.replace('/blog', '')}`;
    return NextResponse.rewrite(proxyUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/blog', '/blog/:path*'],
};