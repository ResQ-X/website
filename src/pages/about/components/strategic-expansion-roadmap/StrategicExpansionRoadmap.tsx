import styles from "./StrategicExpansionRoadmap.module.css";
import mapVector from "../../../../assets/images/others/about/map-vector.svg";
import heroImage from "../../../../assets/images/others/home/hero-img-3.webp";

function StrategicExpansionRoadmap() {
  return (
    <section
      className={`home__row_section ${styles.strategic_expansion_roadmap_section}`}
    >
      <div></div>
      <div className={`app__row_container ${styles.about__row_container}`}>
        <div className={styles.roadmap_container}>
          {/* Section Title */}
          <h2 className={styles.section_title}>Strategic Expansion Roadmap</h2>

          <div className={styles.roadmap_text_wrapper}>
            <p>
              Initially, ResQX breakdown coverage will be available in Lagos,
              with plans for progressive expansion to cover the entire city. As
              we establish a robust operational infrastructure and build our
              subscriber base, we intend to extend our services to other key
              cities within Nigeria. Our phased approach is designed to ensure
              that we can deliver on our commitment to fast and reliable
              response times in the areas where we operate.
            </p>

            <p>
              By starting in Lagos, we aim to capture a significant market share
              and fine-tune our operations before expanding to other regions.
              Once we have successfully established a strong presence in Lagos,
              our strategic roadmap includes expanding our coverage to other
              cities across Nigeria. We aspire to provide nationwide breakdown
              coverage, ultimately encompassing the entire country to serve the
              diverse needs of car owners across Nigeria.
            </p>

            <p>
              Our long-term vision also involves exploring opportunities for
              expansion beyond national borders, with the goal of becoming a
              trusted breakdown cover provider in the broader African market. In
              summary, while ResQX will initially focus on Lagos, our
              comprehensive plan involves scaling our services across Nigeria
              This phased approach ensures a meticulous and effective expansion
              that prioritizes the quality and reliability of our breakdown
              assistance services.
            </p>
          </div>

          {/* Hero Image */}
          <div className={styles.hero_image_wrapper}>
            <img src={heroImage} alt="a man connecting a car to a tow truck" />
          </div>
        </div>

        {/* Union Vector Image */}
        <div className={styles.map_vector_image_wrapper}>
          <img src={mapVector} alt="union vector" />
        </div>
      </div>
    </section>
  );
}

export default StrategicExpansionRoadmap;
