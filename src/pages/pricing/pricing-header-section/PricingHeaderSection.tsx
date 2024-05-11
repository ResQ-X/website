import styles from "./PricingHeaderSection.module.css";

function PricingHeaderSection() {
  return (
    <section className={styles.pricing_header_section}>
      <h1 className={`section_title`}>Pricing</h1>

      {/* Section Description */}
      <p className={`section_sub_text_wrapper `}>
        Compare our car breakdown cover options
      </p>
    </section>
  );
}

export default PricingHeaderSection;
