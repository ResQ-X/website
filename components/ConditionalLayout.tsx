"use client";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Navbar = dynamic(() => import("@/components/navbar/Navbar"), {
  ssr: true,
  loading: () => <div className="h-[100px] bg-white animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: true,
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

const ROUTES_WITHOUT_LAYOUT = ["/waitlist"];

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldShowLayout = !ROUTES_WITHOUT_LAYOUT.includes(pathname);

  if (!shouldShowLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <ErrorBoundary
        fallback={<div>Something went wrong with the navigation</div>}
      >
        <Suspense
          fallback={<div className="h-[100px] bg-white animate-pulse" />}
        >
          {/* <CustomCursor /> */}
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<div>Something went wrong with the navigation</div>}
      >
        <Suspense
          fallback={<div className="h-[100px] bg-white animate-pulse" />}
        >
          {/* <DarkParticles
            particleCount={500}  // 200-300 recommended
            proximity={180}      // Mouse interaction range
            baseSpeed={0.2}     // Slower, more elegant movement
          /> */}
        </Suspense>
      </ErrorBoundary>

      {/* Error Boundary for Navbar */}
      <ErrorBoundary
        fallback={<div>Something went wrong with the navigation</div>}
      >
        <Suspense
          fallback={<div className="h-[100px] bg-white animate-pulse" />}
        >
          <Navbar />
        </Suspense>
      </ErrorBoundary>

      {/* Main content */}
      <main className="flex-grow relative z-0 mt-[-100px]">
        <ErrorBoundary
          fallback={<div>Something went wrong with the main content</div>}
        >
          {children}
        </ErrorBoundary>
      </main>

      {/* Error Boundary for Footer */}
      <ErrorBoundary fallback={<div>Something went wrong with the footer</div>}>
        <Suspense
          fallback={<div className="h-[200px] bg-gray-100 animate-pulse" />}
        >
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}