import ContainerReveal from "../../../../components/animations/container-reveal/ContainerReveal";
import styles from "./Testimonies.module.css";
import SwiperCards from "./swiper-cards/SwiperCards";

function Testimonies() {
  return (
    <section className={`home__row_section`}>
      <div
        className={`app__row_container ${styles.testimonies_section__inner}`}
      >
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <ContainerReveal>
            <h1 className="section_title">
              What Our <span>Members are Saying</span>
            </h1>
          </ContainerReveal>
        </div>
        {/* Swiper Card Container */}
        <SwiperCards />
      </div>
    </section>
  );
}

export default Testimonies;
