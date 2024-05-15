import PageTransition from "../../components/animations/page-transition-animation/PageTransition";
import {
  pageVariants,
  transition1,
} from "../../constants/AnimationTransitions";
import FAQsSection from "../home/components/row-6-section/FAQsSection";
import WaitlistSection from "../home/components/row-7-section/WaitlistSection";
import CompanyStorySection from "./components/company-story-section/CompanyStorySection";
import AboutHeaderSection from "./components/header-section/AboutHeaderSection";
import StrategicExpansionRoadmap from "./components/strategic-expansion-roadmap/StrategicExpansionRoadmap";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.main
      variants={pageVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      transition={transition1}
      className={`about-main-section`}
    >
      {/* Header Section */}
      <AboutHeaderSection />

      {/* Company Story Section */}
      <CompanyStorySection />

      {/* Strategic expansion roadmap section */}
      <StrategicExpansionRoadmap />

      {/* FAQs Section */}
      <FAQsSection />

      {/* WAITLIST SECTION */}
      <WaitlistSection />
    </motion.main>
  );
}

const HOCAbout = PageTransition(About);
export default HOCAbout;
