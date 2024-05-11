import FAQsSection from "../home/components/row-6-section/FAQsSection";
import WaitlistSection from "../home/components/row-7-section/WaitlistSection";
import CompanyStorySection from "./components/company-story-section/CompanyStorySection";
import AboutHeaderSection from "./components/header-section/AboutHeaderSection";
import StrategicExpansionRoadmap from "./components/strategic-expansion-roadmap/StrategicExpansionRoadmap";

function About() {
  return (
    <main className={`about-main-section`}>
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
    </main>
  );
}

export default About;
