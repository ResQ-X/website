import { useState } from "react";
import PricingFilterSection from "./pricing-filter-section/PricingFilterSection";
import PricingHeaderSection from "./pricing-header-section/PricingHeaderSection";
import SubscriptionOptionsSection from "./subscription-options-section/SubscriptionOptionsSection";
import OtherServicesSection from "./other-services-section/OtherServicesSection";

function Pricing() {
  // Functions, States and Variables
  const [pricingFilter, setPricingFilter] = useState("quarterly");

  return (
    <main className={`app__main_section`}>
      <div className={`app__row_container`}>
        {/* Pricing Header Section */}
        <PricingHeaderSection />

        {/* Pricing Filter Section */}
        <PricingFilterSection
          pricingFilter={pricingFilter}
          setPricingFilter={setPricingFilter}
        />

        {/* Subscription Options Section */}
        <SubscriptionOptionsSection pricingFilter={pricingFilter} />

        {/* Other Services Section */}
        <OtherServicesSection />
      </div>
    </main>
  );
}

export default Pricing;
