import styles from "./WaitlistSection.module.css";
import WaitlistSubscribe from "./waitlist-form/WaitlistSubscribe";

function WaitlistSection() {
  return (
    <section className={`home__row_section ${styles.waitlist_section}`}>
      <div className="app__row_container">
        {/* Header Container */}
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <h1 className="section_title">
            Your Peace of Mind, <span>Our Priority</span>
          </h1>

          {/* Section Description */}
          <p className="section_sub_text_wrapper">
            Join our waitlist and be one of the first to know when we launch
          </p>
        </div>

        {/* Waitlist Subscribe Form Section */}
        <WaitlistSubscribe />
      </div>
    </section>
  );
}

export default WaitlistSection;
