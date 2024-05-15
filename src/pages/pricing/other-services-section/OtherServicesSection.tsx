import ContainerReveal from "../../../components/animations/container-reveal/ContainerReveal";
import { OtherServices } from "../../../constants/OtherServices";
import styles from "./OtherServicesSection.module.css";

function OtherServicesSection() {
  return (
    <section className={styles.other_services_section}>
      {/* Section Title */}
      <ContainerReveal>
        <div className={styles.section_title}>
          You can also choose to add any of these services along with your
          breakdown cover
        </div>
      </ContainerReveal>

      {/* Other Service Container */}
      <ContainerReveal delay={0.1}>
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
      </ContainerReveal>

      <ContainerReveal delay={0.2}>
        <div className={styles.corroborating_text_wrapper}>
          And we don’t just offer car breakdown cover – our packages are also
          suitable for electric and hybrid vehicles, motorbikes and more.
        </div>
      </ContainerReveal>
    </section>
  );
}

export default OtherServicesSection;
