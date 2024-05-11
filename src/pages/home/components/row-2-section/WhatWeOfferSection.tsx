import styles from "./WhatWeOfferSection.module.css";
import heroImage from "../../../../assets/images/others/home/hero-img-2.webp";
import PrimaryButton from "../../../../components/buttons/primary-button/PrimaryButton";
import { WhatWeOfferList } from "../../../../constants/WhatWeOfferList";

function WhatWeOfferSection() {
  return (
    <section className={`home__row_section ${styles.what_we_offer_section}`}>
      <div
        className={`app__row_container ${styles.what_we_offer_section__inner}`}
      >
        {/* LEFT COLUMN */}
        <div className={styles.section__left_column}>
          <div className={styles.hero_image_container}>
            <img src={heroImage} alt="a man fixing a car" />
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className={styles.section__right_column}>
          {/* Section Title */}
          <h1 className="section_title">
            What <span>We Offer</span>
          </h1>

          {/* Section Description */}
          <p className="section_sub_text_wrapper">
            We provide fast, courteous and inexpensive roadside assistance in
            Lagos. We are fully insured and been in business since 2023. We are
            ready to respond to all your vehicle emergency needs 24 hours a day,
            seven days a week.
          </p>

          {/* List of What We Offer  */}
          <ul className={styles.services_list_wrapper}>
            {WhatWeOfferList.map((service, index) => (
              <li
                className="section_sub_text_wrapper"
                key={Math.random() * index + 1}
              >
                {service}
              </li>
            ))}
          </ul>

          {/* Join the Waitlist Button */}
          <PrimaryButton
            placeholder="Join Waitlist"
            onClick={() => (window.location.href = "/#waitlist")}
            className={styles.waitlist_button_wrapper}
          />
        </div>
      </div>
    </section>
  );
}

export default WhatWeOfferSection;
