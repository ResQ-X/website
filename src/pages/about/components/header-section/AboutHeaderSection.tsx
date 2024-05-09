import styles from "./AboutHeaderSection.module.css";
import batteryChargingIcon from "../../../../assets/images/others/about/battery-charging-icon.svg";
import towTruckIcon from "../../../../assets/images/others/about/tow-truck-icon.svg";
import gasStationIcon from "../../../../assets/images/others/about/gas-station-icon.svg";
import heartPulseIcon from "../../../../assets/images/others/about/heart-pulse-icon.svg";
import vectorLineLong from "../../../../assets/images/others/about/vector-line-1.svg";
import vectorLineShort from "../../../../assets/images/others/about/vector-line-2.svg";

function AboutHeaderSection() {
  return (
    <section className={`${styles.header_section}`}>
      <div className={`app__row_container ${styles.header_container}`}>
        {/* Process Image Wrapper */}
        <div className={styles.process_image_container}>
          {/* Battery Charging Icon */}
          <img
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
          <img
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
          <img
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
          {/* Heart pulse Icon */}
          <img
            src={heartPulseIcon}
            alt="heart pulse icon"
            className={styles.process_icon}
          />
        </div>

        <h1 className={`section_title ${styles.section_title}`}>
          Providing Quality Breakdown Services
        </h1>

        {/* Section Description */}
        <p
          className={`section_sub_text_wrapper ${styles.section_sub_text_wrapper}`}
        >
          At ResQX, we are focused on bringing quality vehicle services to you
        </p>
      </div>
    </section>
  );
}

export default AboutHeaderSection;
