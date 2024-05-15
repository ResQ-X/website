import ContainerReveal from "../../../components/animations/container-reveal/ContainerReveal";
import styles from "./PricingHeaderSection.module.css";

function PricingHeaderSection() {
  return (
    <section className={styles.pricing_header_section}>
      <ContainerReveal>
        <h1 className={`section_title`}>Pricing</h1>
      </ContainerReveal>

      {/* Section Description */}
      <ContainerReveal delay={0.1}>
        <p className={`section_sub_text_wrapper `}>
          Compare our car breakdown cover options
        </p>
      </ContainerReveal>
    </section>
  );
}

export default PricingHeaderSection;
