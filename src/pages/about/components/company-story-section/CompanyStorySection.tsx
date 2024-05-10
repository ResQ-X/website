import styles from "./CompanyStorySection.module.css";
import { CompanyDetailsList } from "../../../../constants/CompanyDetailsList";
import unionVector from "../../../../assets/images/others/about/union-vector.svg";
import heroImage from "../../../../assets/images/others/home/hero-img-1.webp";

function CompanyStorySection() {
  return (
    <section className={`home__row_section ${styles.company_story_section}`}>
      <div className={`app__row_container ${styles.about__row_container}`}>
        <h2 className={styles.section_title}>The ResQX Story</h2>

        {/* Company details section */}
        <section className={styles.company_details_section}>
          {CompanyDetailsList.map((companyDetail, index) => (
            <div
              key={Math.random() * (index + 1)}
              className={styles.company_detail_wrapper}
            >
              {/* Title */}
              <h3 className={styles.company_detail_box__title}>
                {companyDetail.title}
              </h3>
              {/* Text */}
              <p
                dangerouslySetInnerHTML={{ __html: companyDetail.text }}
                className={styles.company_detail_box__description}
              ></p>
            </div>
          ))}
        </section>

        {/* Union Vector Image */}
        <div className={styles.union_vector_image_wrapper}>
          <img src={unionVector} alt="union vector" />
        </div>

        {/* Hero Image */}
        <div className={styles.hero_image_wrapper}>
          <img src={heroImage} alt="a man connecting a car to a tow truck" />
        </div>
      </div>
    </section>
  );
}

export default CompanyStorySection;
