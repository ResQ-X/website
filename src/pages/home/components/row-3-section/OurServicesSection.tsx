import styles from "./OurServicesSection.module.css";
import { ServicesList } from "../../../../constants/ServicesList";

function OurServicesSection() {
  return (
    <section className={`home__row_section  ${styles.our_services_section}`}>
      <div className="app__row_container">
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <h1 className="section_title">
            Our <span>Services</span>
          </h1>

          {/* Section Description */}
          <p className="section_sub_text_wrapper">
            We provide your vehicle breakdown coverage safely and efficiently
          </p>
        </div>

        <div className={`${styles.service_list_boxes_container}`}>
          {/* Service List Box */}
          {ServicesList.map((service, index) => (
            <div
              style={{ backgroundColor: service.backgroundColor }}
              key={Math.random() * (index + 1)}
              className={styles.service_list_box}
            >
              <div className={styles.service_list_icon}>
                <img src={service.icon} alt="icon" />
              </div>
              <h3 className={styles.service_list_box__title}>
                {service.title}
              </h3>
              <p className={styles.service_list_box__description}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
