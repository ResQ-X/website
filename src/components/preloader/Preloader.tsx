import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";
import companyLogoWrapper from "../../assets/images/others/resq-logo-secondary.png";
import truckIcon from "../../assets/images/others/preloader/truck-icon.svg";

function Preloader() {
  // Functions, States and Variables
  const duration = import.meta.env.VITE_APP_PRELOADER_TIMER || 2000; // Total duration in milliseconds
  let startTime: number | null = null;

  //   States
  const [loadingBarWidth, setLoadingBarWidth] = useState(0);

  //   Functions
  //
  const animateLoadingBar = function (timestamp: number) {
    if (!startTime) startTime = timestamp;

    const progress = timestamp - startTime;
    const progressRatio = Math.min(progress / duration, 1);

    const targetWidth = Math.floor(progressRatio * 100); // 100px is the maximum width

    // Update the width of the loading bar
    setLoadingBarWidth(targetWidth);

    if (targetWidth < 100) {
      // Continue the animation until the target width is reached
      requestAnimationFrame(animateLoadingBar);
    }
  };

  //   USeEffects
  useEffect(() => {
    // Start the animation
    requestAnimationFrame(animateLoadingBar);
  }, []);

  return (
    <div className={styles.preloader_container}>
      <div className={styles.preloader_wrapper}>
        <div className={styles.company_logo_wrapper}>
          <img src={companyLogoWrapper} alt="" />
        </div>

        <div className={styles.loading_bar_container}>
          {/* Truck Icon Wrapper */}
          <div className={styles.truck_icon_wrapper}>
            <img
              style={{
                marginLeft: `${
                  loadingBarWidth <= 15 ? 0 : loadingBarWidth - 15
                }%`,
              }}
              src={truckIcon}
              alt="truck icon"
            />
          </div>

          {/*  Loading Bar */}
          <div className={styles.loading_bar_wrapper}>
            <div
              style={{ width: `${loadingBarWidth}%` }}
              className={styles.loading_bar}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
