// Features
// Basic plan features
const basicFeatures = [
  "Roadside assistance 1/4 mile from your home",
  "Free car health check",
  "3 callouts per quarter",
  "24/7 roadside assistance",
  "Free recovery up to 5 miles to your preferred destination",
];
// Extra plan features
const extraFeatures = [
  "Home service",
  "Free car health check",
  "5 callouts per quarter",
  "24/7 roadside assistance",
  "Free recovery up to 30 miles to your preferred destination",
];
// Premium plan features
const premiumFeatures = [
  "Home service",
  "Free car health check",
  "Unlimited callouts",
  "24/7 roadside assistance",
  "Free road worthiness check at selected ResQX mechanic shops",
  "Onward travel",
];

// All subscription options available for the user to choose from based on the pricing filter
export const allSubscriptionOptions = [
  {
    title: "Basic",
    plans: [
      {
        id: 1,
        title: "Basic",
        price: 14500,
        features: basicFeatures,
        duration: "quarterly",
      },
      {
        id: 2,
        title: "Basic",
        price: 40000,
        features: basicFeatures,
        duration: "annually",
      },
    ],
  },
  {
    title: "Extra",
    plans: [
      {
        id: 3,
        title: "Extra",
        price: 26500,
        features: extraFeatures,
        duration: "quarterly",
      },
      {
        id: 4,
        title: "Extra",
        price: 75000,
        features: extraFeatures,
        duration: "annually",
      },
    ],
  },
  {
    title: "Premium",
    plans: [
      {
        id: 5,
        title: "Premium",
        price: 39500,
        features: premiumFeatures,
        duration: "quarterly",
      },
      {
        id: 6,
        title: "Premium",
        price: 110000,
        features: premiumFeatures,
        duration: "annually",
      },
    ],
  },
];
