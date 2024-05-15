import ContainerReveal from "../../../../components/animations/container-reveal/ContainerReveal";
import styles from "./WaitlistSection.module.css";
import WaitlistSubscribe from "./waitlist-form/WaitlistSubscribe";

function WaitlistSection() {
  return (
    <section className={`home__row_section ${styles.waitlist_section}`}>
      <div className="app__row_container">
        {/* Header Container */}
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <ContainerReveal>
            <h1 className="section_title">
              Your Peace of Mind, <span>Our Priority</span>
            </h1>
          </ContainerReveal>

          {/* Section Description */}
          <ContainerReveal delay={0.1}>
            <p className="section_sub_text_wrapper">
              Join our waitlist and be one of the first to know when we launch
            </p>
          </ContainerReveal>
        </div>

        {/* Waitlist Subscribe Form Section */}
        <ContainerReveal delay={0.2}>
          <WaitlistSubscribe />
        </ContainerReveal>
      </div>
    </section>
  );
}

export default WaitlistSection;
