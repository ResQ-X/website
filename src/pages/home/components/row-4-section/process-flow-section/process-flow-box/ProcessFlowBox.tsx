import styles from "../ProcessFlowSection.module.css";

// Interface
interface IProps {
  icon: string;
  description: string;
}

function ProcessFlowBox({ icon, description }: IProps) {
  return (
    <div className={styles.process_flow_box}>
      {/* Icon Wrapper */}
      <div className={styles.icon_wrapper}>
        <img src={icon} alt="process flow icon" />
      </div>
      {/* Description Wrapper */}
      <div className={styles.description_wrapper}>{description}</div>
    </div>
  );
}

export default ProcessFlowBox;
