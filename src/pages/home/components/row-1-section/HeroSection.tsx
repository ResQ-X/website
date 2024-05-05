import styles from "./HeroSection.module.css";
import heroImage from "../../../../assets/images/others/home/hero-img-1.webp";
import PrimaryButton from "../../../../components/buttons/primary-button/PrimaryButton";

function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_section__inner}>
        {/* Hero Image Container */}
        <div className={styles.hero_img_container}>
          <img src={heroImage} alt="a man connecting a car to a tow truck" />
        </div>

        {/* Hero Text Container */}
        <div className={styles.hero_text_container}>
          {/* Inner */}
          <div
            className={`app__row_container ${styles.hero_text_container__inner}`}
          >
            <h1 className={styles.hero_text_title}>
              We Provide the Highest Quality
            </h1>
            <h1 className={styles.hero_text_title__highlight}>
              Breakdown Coverage
            </h1>
            <p className={styles.hero_text_description}>
              The leading breakdown coverage provider for as little as &#8358;
              {(5000).toLocaleString()}. We provide fast, courteous and
              inexpensive breakdown coverage products in Lagos
            </p>

            {/* Join the Waitlist Button */}
            <PrimaryButton
              placeholder="Join Waitlist"
              onClick={() => (window.location.href = "/#waitlist")}
              className={styles.waitlist_button_wrapper}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
