import styles from "./HowItWorks.module.css";
import MapSection from "./map-section/MapSection";
import ProcessFlowSection from "./process-flow-section/ProcessFlowSection";

function HowItWorks() {
  return (
    <section className={`home__row_section`}>
      <div
        className={`app__row_container ${styles.how_it_works_section__inner}`}
      >
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <h1 className="section_title">
            How it <span>Works</span>
          </h1>

          {/* Section Description */}
          <p className="section_sub_text_wrapper">
            We provide your vehicle breakdown coverage safely and efficiently
          </p>
        </div>

        {/* Process Flow Section */}
        <ProcessFlowSection />

        {/* MAP SECTION */}
        <MapSection />
        {/* --------------------- */}
        {/* <MapSection2 /> */}
      </div>
    </section>
  );
}

export default HowItWorks;
