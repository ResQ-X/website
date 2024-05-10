import styles from "./SwiperCards.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import angleLeftIcon from "../../../../../assets/images/svg/angle-left-icon.svg";
import angleRightIcon from "../../../../../assets/images/svg/angle-right-icon.svg";
import { useLayoutEffect, useState } from "react";
import { TestimoniesList } from "../../../../../constants/TestimoniesList";

function SwiperCards() {
  // Functions, States and Variables
  //   States
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeSwiperIndex, setActiveSwiperIndex] = useState(0);

  // Functions
  // Handle On Screen Resize
  function handleResize() {
    if (window.innerWidth <= 768) {
      setSlidesPerView(1); // Show 1 card on mobile
    } else if (window.innerWidth <= 1600) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }

  //   Side Effects
  useLayoutEffect(() => {
    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.swiper_cards_container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        initialSlide={1}
        className={styles.swiper_container}
        onActiveIndexChange={(swiper) => {
          setActiveSwiperIndex(swiper.activeIndex);
        }}
      >
        {TestimoniesList.map((testimonyObject, index) => (
          <SwiperSlide
            key={index + 1}
            className={styles.swiper_slide_container}
          >
            <div
              key={Math.floor(Math.random()) * 10000}
              style={{
                backgroundColor: activeSwiperIndex === index ? "#FFC588" : "",
              }}
              className={styles.swiper_slide_wrapper}
            >
              {/* Testimony Value */}
              <div className={styles.testimony_value_wrapper}>
                "{testimonyObject.testimony}"
              </div>

              {/* Testimony Name */}
              <div className={styles.testimony_name_wrapper}>
                {testimonyObject.name}
              </div>

              {/* Testimony Location */}
              <div className={styles.testimony_location_wrapper}>
                {testimonyObject.location}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.slider_controller_container}>
        <div className={`swiper-button-prev ${styles.slider_arrow_wrapper}`}>
          <img src={angleLeftIcon} alt="angle left" />
        </div>
        <div className={`swiper-button-next ${styles.slider_arrow_wrapper}`}>
          <img src={angleRightIcon} alt="angle right" />
        </div>
      </div>
    </div>
  );
}

export default SwiperCards;
