import "./App.css";
import "./Index.css";
import "./assets/styles/Home.css";
import "./assets/styles/Swiper.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import Blogs from "./pages/blog/Blogs";
import BlogPreview from "./pages/blog/blog-preview/BlogPreview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="/about" element={<Layout children={<About />} />} />
        <Route path="/pricing" element={<Layout children={<Pricing />} />} />
        <Route path="/blogs" element={<Layout children={<Blogs />} />} />
        <Route
          path="/blog/:id"
          element={<Layout children={<BlogPreview />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
