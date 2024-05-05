import "./App.css";
import "./assets/styles/Home.css";
import "./assets/styles/Swiper.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";
import Blogs from "./pages/blogs/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />}></Route>
        <Route path="/about" element={<Layout children={<About />} />}></Route>
        <Route
          path="/pricing"
          element={<Layout children={<Pricing />} />}
        ></Route>
        <Route path="/blogs" element={<Layout children={<Blogs />} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
