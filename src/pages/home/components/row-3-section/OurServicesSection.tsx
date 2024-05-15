import styles from "./OurServicesSection.module.css";
import { ServicesList } from "../../../../constants/ServicesList";
import { motion } from "framer-motion";
import ContainerReveal from "../../../../components/animations/container-reveal/ContainerReveal";

function OurServicesSection() {
  return (
    <section className={`home__row_section  ${styles.our_services_section}`}>
      <div className="app__row_container">
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <ContainerReveal>
            <h1 className="section_title">
              Our <span>Services</span>
            </h1>
          </ContainerReveal>

          {/* Section Description */}
          <ContainerReveal delay={0.1}>
            <p className="section_sub_text_wrapper">
              We provide your vehicle roadside assistance safely and efficiently
            </p>
          </ContainerReveal>
        </div>

        <div className={`${styles.service_list_boxes_container}`}>
          {/* Service List Box */}
          {ServicesList.map((service, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              style={{ backgroundColor: service.backgroundColor }}
              key={Math.random() * (index + 1)}
              className={styles.service_list_box}
            >
              <div className={styles.service_list_icon}>
                <motion.img
                  variants={{
                    visible: { rotate: [0, 45, -45, 45, 0] },
                  }}
                  animate="visible"
                  transition={{
                    duration: 0.4,
                    delay: 1 * (index / 2),
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 8,
                  }}
                  src={service.icon}
                  alt="icon"
                />
              </div>
              <h3 className={styles.service_list_box__title}>
                {service.title}
              </h3>
              <p className={styles.service_list_box__description}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServicesSection;
