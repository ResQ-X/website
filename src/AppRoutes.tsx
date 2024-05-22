import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import Blogs from "./pages/blog/Blogs";
import BlogPreview from "./pages/blog/blog-preview/BlogPreview";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function AppRoutes() {
  // Functions, States and Variables
  const location = useLocation();

  useEffect(() => {
    // Set a local storage value to detect that this is first time visit
    if (location.pathname === "/") {
      localStorage.setItem("firstTimeVisit", "true");
    }
  }, []);

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="/about" element={<Layout children={<About />} />} />
        <Route path="/pricing" element={<Layout children={<Pricing />} />} />
        <Route path="/blogs" element={<Layout children={<Blogs />} />} />
        <Route
          path="/blog/:id"
          element={<Layout children={<BlogPreview />} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
