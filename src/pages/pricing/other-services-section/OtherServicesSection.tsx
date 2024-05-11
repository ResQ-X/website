import { OtherServices } from "../../../constants/OtherServices";
import styles from "./OtherServicesSection.module.css";

function OtherServicesSection() {
  return (
    <section className={styles.other_services_section}>
      {/* Section Title */}
      <div className={styles.section_title}>
        You can also choose to add any of these services along with your
        breakdown cover
      </div>

      {/* Other Service Container */}
      <div className={styles.other_services_container}>
        {OtherServices.map((service, index) => (
          <div key={index} className={styles.other_service_wrapper}>
            <img
              src={service.icon}
              alt={service.title}
              className={styles.other_service_icon}
            />
            <div className={styles.other_service_title}>{service.title}</div>
            <div className={styles.other_service_description}>
              {service.description}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.corroborating_text_wrapper}>
        And we don’t just offer car breakdown cover – our packages are also
        suitable for electric and hybrid vehicles, motorbikes and more.
      </div>
    </section>
  );
}

export default OtherServicesSection;
