import { useEffect, useState } from "react";
import styles from "./SubscriptionOptionsSection.module.css";
import { ISubscriptionPlan } from "../../../models/SubscriptionTypes";
import { allSubscriptionOptions } from "../../../constants/SubscriptionOptions";
import checkIcon from "../../../assets/images/svg/check-icon.svg";

// Interfaces
interface IProps {
  pricingFilter: string;
}

function SubscriptionOptionsSection({ pricingFilter }: IProps) {
  // Functions, States and Variables
  // States
  const [filteredSubscriptionOptions, setFilteredSubscriptionOptions] =
    useState<ISubscriptionPlan[]>([]);

  // UseEffects
  useEffect(() => {
    // Get the current subscription options based on the pricing filter
    const currentSubscriptionOptions: ISubscriptionPlan[] = [];
    allSubscriptionOptions.forEach((subscriptionOption) => {
      const plans = subscriptionOption.plans.filter(
        (plan) => plan.duration === pricingFilter
      );
      currentSubscriptionOptions.push(...plans);
    });
    setFilteredSubscriptionOptions(currentSubscriptionOptions);
  }, [pricingFilter]);

  return (
    <section className={styles.subscription_options_section}>
      {filteredSubscriptionOptions?.map((subscriptionOption) => (
        <div key={subscriptionOption.id} className={styles.subscription_box}>
          <div className={styles.subscription_box__top_wrapper}>
            {/* Title */}
            <div className={styles.subscription_box_title}>
              {subscriptionOption.title}
            </div>
            {/* Sub Title */}
            <div className={styles.subscription_box_sub_title}>
              {subscriptionOption.subTitle}
            </div>
            {/* Price Wrapper */}
            <div className={styles.subscription_price_wrapper}>
              <div className={styles.subscription_box_original_price}>
                {subscriptionOption.originalPrice && (
                  <>
                    &#8358;{subscriptionOption.originalPrice?.toLocaleString()}
                  </>
                )}
              </div>
              <div className={styles.subscription_box_price}>
                &#8358;{subscriptionOption.price?.toLocaleString()}
                <span>
                  {subscriptionOption.duration === "quarterly"
                    ? "/quarter"
                    : "/year"}
                </span>
              </div>
            </div>
          </div>
          {/* Features  */}
          <div className={styles.subscription_box_features}>
            {subscriptionOption.features.map((feature, index) => (
              <div key={index} className={styles.subscription_box_feature}>
                {/* Check Icon */}
                <img src={checkIcon} alt="Check Icon" />

                {/* Feature Text */}
                {feature}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default SubscriptionOptionsSection;
