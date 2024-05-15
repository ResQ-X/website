import styles from "../ProcessFlowSection.module.css";
import { motion } from "framer-motion";

// Interface
interface IProps {
  index: number;
  icon: string;
  description: string;
}

function ProcessFlowBox({ index, icon, description }: IProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      className={styles.process_flow_box}
    >
      {/* Icon Wrapper */}
      <div className={styles.icon_wrapper}>
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
          src={icon}
          alt="process flow icon"
        />
      </div>
      {/* Description Wrapper */}
      <div className={styles.description_wrapper}>{description}</div>
    </motion.div>
  );
}

export default ProcessFlowBox;
