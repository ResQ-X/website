import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorks.module.css";
import MapSection from "./map-section/MapSection";
import ProcessFlowSection from "./process-flow-section/ProcessFlowSection";
import ContainerReveal from "../../../../components/animations/container-reveal/ContainerReveal";

function HowItWorks() {
  // Functions, States and Variables
  // Refs
  const howItWorksSectionRef = useRef<HTMLDivElement | null>(null);
  // States
  const [isOnView, setIsOnView] = useState(false);
  // Function to check when component is in view and trigger the set is on view state to true
  const handleSetOnView = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    // Check if the entry is intersecting
    if (entry.isIntersecting) {
      setIsOnView(true);
    }
  };

  // Intersection Observer for the how it works section ref
  const howItWorksSectionObserver = new IntersectionObserver(handleSetOnView, {
    threshold: 0.5,
  });

  // UseEffects
  // Intersection Observer
  useEffect(() => {
    // Check if the how it works section ref is available
    if (howItWorksSectionRef.current) {
      // Observe the how it works section ref
      howItWorksSectionObserver.observe(howItWorksSectionRef.current);
    }
    return () => {
      // Disconnect the observer when the component is unmounted
      howItWorksSectionObserver.disconnect();
      setIsOnView(false);
    };
  }, []);

  useEffect(() => {
    // console.log({ isOnView });
  }, [isOnView]);
  return (
    <section ref={howItWorksSectionRef} className={`home__row_section`}>
      <div
        className={`app__row_container ${styles.how_it_works_section__inner}`}
      >
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <ContainerReveal>
            <h1 className="section_title">
              How it <span>Works</span>
            </h1>
          </ContainerReveal>

          {/* Section Description */}
          <ContainerReveal delay={0.1}>
            <p className="section_sub_text_wrapper">
              We provide your vehicle roadside assistance safely and efficiently
            </p>
          </ContainerReveal>
        </div>

        {/* Process Flow Section */}
        <ProcessFlowSection />

        {/* MAP SECTION */}
        {isOnView && <MapSection />}
      </div>
    </section>
  );
}

export default HowItWorks;
