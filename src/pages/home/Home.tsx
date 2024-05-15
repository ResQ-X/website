import {
  pageVariants,
  transition1,
} from "../../constants/AnimationTransitions";
import HeroSection from "./components/row-1-section/HeroSection";
import WhatWeOfferSection from "./components/row-2-section/WhatWeOfferSection";
import OurServicesSection from "./components/row-3-section/OurServicesSection";
import HowItWorks from "./components/row-4-section/HowItWorks";
import Testimonies from "./components/row-5-section/Testimonies";
import FAQsSection from "./components/row-6-section/FAQsSection";
import WaitlistSection from "./components/row-7-section/WaitlistSection";
import { motion } from "framer-motion";
import PageTransition from "../../components/animations/page-transition-animation/PageTransition";

function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      transition={transition1}
      className={`home-container-main-section`}
    >
      {/* Row 1 Section || Hero Section */}
      <HeroSection />

      {/* Row 2 Section || What We Offer Section*/}
      <WhatWeOfferSection />

      {/* Row 3 Section || Our Services Section*/}
      <OurServicesSection />

      {/* Row 4 Section || How It Works Section*/}
      <HowItWorks />

      {/* Row 5 Section || What Our Members are Saying Section*/}
      <Testimonies />

      {/* Row 6 Section || FAQs Section*/}
      <FAQsSection />

      {/* Row 7 Section || Waitlist Section*/}
      <WaitlistSection />
    </motion.main>
  );
}

const HOCHome = PageTransition(Home);
export default HOCHome;
