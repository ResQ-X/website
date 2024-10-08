import { NextRequest, NextResponse } from 'next/server';

const blogUrl: string = process.env.NEXT_PUBLIC_BLOG_URL as string;

// N.B: Next Cnfig Rewrite feature used instead of this middleware, that's where its implementation is commented out
export function middleware(req: NextRequest) {
  /* const url = req.nextUrl.clone();

  if (url.pathname.startsWith('/blog')) {
    const subPath: string = url.pathname.replace('/blog', '');
    const destinationUrl: string = `${blogUrl}${subPath}/`
    return NextResponse.rewrite(destinationUrl);
  }
  return NextResponse.next(); */
}


/* export const config = {
  matcher: ['/blog', '/blog/:path*'],
}; */