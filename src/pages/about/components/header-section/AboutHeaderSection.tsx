import styles from "./AboutHeaderSection.module.css";
import batteryChargingIcon from "../../../../assets/images/others/about/battery-charging-icon.svg";
import towTruckIcon from "../../../../assets/images/others/about/tow-truck-icon.svg";
import gasStationIcon from "../../../../assets/images/others/about/gas-station-icon.svg";
import heartPulseIcon from "../../../../assets/images/others/about/heart-pulse-icon.svg";
import vectorLineLong from "../../../../assets/images/others/about/vector-line-1.svg";
import vectorLineShort from "../../../../assets/images/others/about/vector-line-2.svg";
import { motion } from "framer-motion";
import { transition1WithDelay } from "../../../../constants/AnimationTransitions";

function AboutHeaderSection() {
  // FUnctions, States and Variables
  const variants1 = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className={`${styles.header_section}`}>
      <div className="app__row_container">
        <div className={` ${styles.header_container}`}>
          {/* Process Image Wrapper */}
          <motion.div
            variants={variants1}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition1WithDelay(0)}
            className={styles.process_image_container}
          >
            {/* Battery Charging Icon */}
            <motion.img
              variants={{
                visible: { rotate: [0, 45, -45, 45, 0] },
              }}
              animate="visible"
              transition={{
                duration: 0.4,
                delay: 0,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
              }}
              src={batteryChargingIcon}
              alt="battery charging icon"
              className={styles.process_icon}
            />
            {/* Long Vector Line */}
            <img
              src={vectorLineLong}
              alt="dotted lines"
              className={styles.dotted_line_image}
            />
            {/* Tow Truck Icon */}
            <motion.img
              variants={{
                visible: { rotate: [0, 45, -45, 45, 0] },
              }}
              animate="visible"
              transition={{
                duration: 0.4,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
              }}
              src={towTruckIcon}
              alt="tow truck icon"
              className={styles.process_icon}
            />
            {/* Long Vector Line */}
            <img
              src={vectorLineShort}
              alt="dotted lines"
              className={styles.dotted_line_image}
            />
            {/* Gas station Icon */}
            <motion.img
              variants={{
                visible: { rotate: [0, 45, -45, 45, 0] },
              }}
              animate="visible"
              transition={{
                duration: 0.4,
                delay: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
              }}
              src={gasStationIcon}
              alt="gas station icon"
              className={styles.process_icon}
            />
            {/* Long Vector Line */}
            <img
              src={vectorLineLong}
              alt="dotted lines"
              className={styles.dotted_line_image}
            />
            <motion.img
              variants={{
                visible: { rotate: [0, 45, -45, 45, 0] },
              }}
              animate="visible"
              transition={{
                duration: 0.4,
                delay: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
              }}
              src={heartPulseIcon}
              alt="heart pulse icon"
              className={styles.process_icon}
            />
          </motion.div>

          <motion.h1
            variants={variants2}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition1WithDelay(0.1)}
            className={`section_title ${styles.section_title}`}
          >
            Providing Quality Breakdown Services
          </motion.h1>

          {/* Section Description */}
          <motion.p
            variants={variants1}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition1WithDelay(0.1)}
            className={`section_sub_text_wrapper ${styles.section_sub_text_wrapper}`}
          >
            At ResQX, we are focused on bringing quality vehicle services to you
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default AboutHeaderSection;
