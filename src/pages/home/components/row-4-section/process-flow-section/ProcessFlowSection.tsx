import { ProcessFlowList } from "../../../../../constants/ProcessFlowList";
import styles from "./ProcessFlowSection.module.css";
import ProcessFlowBox from "./process-flow-box/ProcessFlowBox";
import vectorArrow1 from "../../../../../assets/images/others/home/process-flow-icons/vector-arrow-1.svg";
import vectorArrow2 from "../../../../../assets/images/others/home/process-flow-icons/vector-arrow-2.svg";
import vectorArrow3 from "../../../../../assets/images/others/home/process-flow-icons/vector-arrow-3.svg";
import vectorArrow4 from "../../../../../assets/images/others/home/process-flow-icons/vector-arrow-4.svg";
import vectorArrow5 from "../../../../../assets/images/others/home/process-flow-icons/vector-arrow-5.svg";
import { useLayoutEffect, useState } from "react";
import ContainerReveal from "../../../../../components/animations/container-reveal/ContainerReveal";

function ProcessFlowSection() {
  // Functions, States and Variables
  const [isScreenWidthTabDownwards, setIsScreenWidthTabDownwards] =
    useState(false);

  // Functions
  // Handle On Screen Resize
  const handleOnResize = function () {
    setIsScreenWidthTabDownwards(false);
    // Check if screen width is less than 1200px, then set isScreenWidthTabDownwards to true
    if (window.innerWidth <= 1200) setIsScreenWidthTabDownwards(true);
  };

  useLayoutEffect(() => {
    // Add event listener to window for resize
    window.addEventListener("resize", handleOnResize);
    // Call handleOnResize function
    handleOnResize();
    // Clean up
    return () => window.removeEventListener("resize", handleOnResize);
  }, []);

  return (
    <section className={styles.process_flow_section}>
      {/* Process Flow container*/}
      <div className={styles.process_flow_container__desktop}>
        {/* Column 1 */}
        <div className={styles.process_flow__column}>
          {/* Process Flow Box */}
          <ProcessFlowBox
            index={0}
            icon={ProcessFlowList[0].icon}
            description={ProcessFlowList[0].description}
          />
        </div>
        {/* Column 2 */}
        <div
          className={`${styles.process_flow__column} ${styles.process_flow__column_two}`}
        >
          {/* Vector Arrow */}
          <div className={styles.vector_arrow_icon_wrapper}>
            <img
              src={!isScreenWidthTabDownwards ? vectorArrow1 : vectorArrow4}
              alt="vector arrow"
            />
          </div>

          {/* Process Flow Box */}
          <ProcessFlowBox
            index={1}
            icon={ProcessFlowList[1].icon}
            description={ProcessFlowList[1].description}
          />
        </div>
        {/* Column 3 */}
        <div
          className={`${styles.process_flow__column} ${styles.process_flow__column_three}`}
        >
          {/* Process Flow Box */}
          <ProcessFlowBox
            index={2}
            icon={ProcessFlowList[2].icon}
            description={ProcessFlowList[2].description}
          />

          {/* Vector Arrow */}
          <div className={styles.vector_arrow_icon_wrapper}>
            <img
              src={!isScreenWidthTabDownwards ? vectorArrow2 : vectorArrow5}
              alt="vector arrow"
            />
          </div>
        </div>
        {/* Column 4 */}
        <div
          className={`${styles.process_flow__column} ${styles.process_flow__column_four}`}
        >
          {/* Vector Arrow */}
          <div className={styles.vector_arrow_icon_wrapper}>
            <img
              src={!isScreenWidthTabDownwards ? vectorArrow3 : vectorArrow4}
              alt="vector arrow"
            />
          </div>

          {/* Process Flow Box */}
          <ProcessFlowBox
            index={3}
            icon={ProcessFlowList[3].icon}
            description={ProcessFlowList[3].description}
          />
        </div>
      </div>

      {/* Process Flow Description Wrapper */}
      <div className={styles.process_flow_description_wrapper}>
        <ContainerReveal>
          <p>
            A first responder is a mobile technician, from the fleet of
            technicians signed up to the platform. This way ResQX’s average
            response time is under 15 minutes. This is why we remain the leading
            roadside assistance platform in Lagos, Nigeria.
          </p>
        </ContainerReveal>

        <ContainerReveal>
          <p>
            Explore our rapid assistance demo! Witness our commitment to
            reaching you in under 15 minutes. Track our first responders with
            the live map as they come to your aid. Your safety matters – see how
            ResQX keeps you informed during breakdowns. Take a quick tour now!
          </p>
        </ContainerReveal>
      </div>
    </section>
  );
}

export default ProcessFlowSection;
