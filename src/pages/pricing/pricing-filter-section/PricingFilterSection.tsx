import styles from "./PricingFilterSection.module.css";

// Interfaces
interface IProps {
  pricingFilter: string;
  setPricingFilter: React.Dispatch<React.SetStateAction<string>>;
}

const pricingFilterOptions = [
  {
    key: "quarterly",
    value: "Quarterly",
  },
  {
    key: "annually",
    value: "Annually",
  },
];

function PricingFilterSection({ pricingFilter, setPricingFilter }: IProps) {
  return (
    <div className={styles.pricing_filter_container}>
      <div className={styles.pricing_filter_wrapper}>
        {pricingFilterOptions.map((pricingOption) => (
          <button
            key={pricingOption.key}
            className={`${styles.pricing_filter_item} ${
              pricingFilter === pricingOption.key ? styles.active : ""
            }`}
            onClick={() => setPricingFilter(pricingOption.key)}
          >
            {pricingOption.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PricingFilterSection;
