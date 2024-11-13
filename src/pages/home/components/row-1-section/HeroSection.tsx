import styles from "./HeroSection.module.css";
import heroImage from "../../../../assets/images/others/home/hero-img-1.webp";
import PrimaryButton from "../../../../components/buttons/primary-button/PrimaryButton";
import { motion } from "framer-motion";
import { transition1WithDelay } from "../../../../constants/AnimationTransitions";

function HeroSection() {
  // FUnctions, States and Variables
  const variants1 = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: "-150%" },
    visible: { opacity: 1, y: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: "-90%" },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_section__inner}>
        {/* Hero Image Container */}
        <motion.div className={styles.hero_img_container}>
          <img src={heroImage} alt="a man connecting a car to a tow truck" />
        </motion.div>

        {/* Hero Text Container */}
        <div className={styles.hero_text_container}>
          {/* Inner */}
          <div
            className={`app__row_container ${styles.hero_text_container__inner}`}
          >
            <motion.div
              variants={variants1}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={transition1WithDelay(0.1)}
            >
              <h1 className={styles.hero_text_title}>
                Reliable Roadside Assistance
              </h1>
              <h1 className={styles.hero_text_title__highlight}>
                When You Need It Most
              </h1>
            </motion.div>
            <motion.p
              variants={variants2}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={transition1WithDelay(0.1)}
              className={styles.hero_text_description}
            >
              {/* The leading roadside assistance provider for as little as &#8358;
              {(5000).toLocaleString()}. We provide fast, courteous and
              inexpensive roadside assistance products in Lagos */}
              Join our waitlist for exclusive access to Lagos' premier roadside
              assistance, starting at just ₦5,000.
            </motion.p>

            {/* Join the Waitlist Button */}
            <motion.div
              variants={variants3}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={transition1WithDelay(0.1)}
              className={styles.waitlist_button_container}
            >
              <div className="flex gap-3">
              <PrimaryButton
                placeholder="Join Waitlist"
                onClick={() => (window.location.href = "/#waitlist")}
                className={styles.waitlist_button_wrapper}
              />
              <PrimaryButton
                placeholder="Join beta"
                onClick={() => (window.location.href = "/beta")}
                className={`${styles.waitlist_button_wrapper} placeholder-white`}
              />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
