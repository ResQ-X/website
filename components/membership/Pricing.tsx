"use client";

import React, { useState } from 'react';

interface PricingPlan {
  type: 'Basic' | 'Premium' | 'Extra';
  price: {
    quarterly: number;
    annually: number;
  };
  features: string[];
  isPopular?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

// Pricing Data
const pricingData: PricingPlan[] = [
  {
    type: 'Basic',
    price: {
      quarterly: 25000,
      annually: 90000, // Example annual price
    },
    features: [
      'Roadside assistance 1/4 mile from your home',
      'Free car health check',
      '3 callouts per quarter',
      '24/7 roadside assistance'
    ],
    isFirst: true
  },
  {
    type: 'Premium',
    price: {
      quarterly: 39500,
      annually: 142200, // Example annual price
    },
    features: [
      'Roadside assistance 1/4 mile from your home',
      'Free car health check',
      '3 callouts per quarter',
      '24/7 roadside assistance',
      'Free recovery up to 5 miles to your prefered location'
    ],
    isPopular: true
  },
  {
    type: 'Extra',
    price: {
      quarterly: 30000,
      annually: 108000, // Example annual price
    },
    features: [
      'Roadside assistance 1/4 mile from your home',
      'Free car health check',
      '3 callouts per quarter',
      '24/7 roadside assistance'
    ],
    isLast: true
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'Half a year' | 'annually'>('Bi-annual');

  return (
    <div className="py-16 px-4">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-200 rounded-full p-1">
          <button
            className={`px-6 py-2 rounded-full ${
              billingCycle === 'Bi-annual' ? 'bg-orange text-white' : 'text-black'
            }`}
            onClick={() => setBillingCycle('Half a year')}
          >
            Bi-annual
          </button>
          <button
            className={`px-6 py-2 rounded-full ${
              billingCycle === 'annually' ? 'bg-orange text-white' : 'text-black'
            }`}
            onClick={() => setBillingCycle('annually')}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
        {pricingData.map((plan) => (
          <div
            key={plan.type}
            className={`w-full md:w-[381px] shadows ${
              plan.isPopular
                ? 'bg-white shadow-xl md:w-[550px] h-auto md:h-[564px] rounded-xl z-10'
                : 'bg-white h-auto md:h-[440px] self-center'
            } overflow-hidden relative ${
              plan.isFirst ? 'md:rounded-l-lg' : ''
            } ${
              plan.isLast ? 'md:rounded-r-lg' : ''
            }`}
          >
            {plan.isPopular && (
              <div className="bg-orange text-center py-4">
                <p className="gradientText font-bold text-[24px]">Most popular ✨️</p>
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl text-[#323232] font-semibold mb-4">{plan.type}</h3>
              <div className={`text-[48px] ${
                plan.isPopular ? 'md:text-[80px] text-dark-brown' : ''
              } text-[#332414] font-bold mb-6`}>
                ₦{billingCycle === 'Half a year' 
                    ? plan.price.quarterly.toLocaleString()
                    : plan.price.annually.toLocaleString()}
                <span className={`${
                  plan.isPopular ? 'md:text-[22px]' : ''
                } text-[20px] whitespace-nowrap text-[#636363] font-normal`}>/{billingCycle === 'Bi-annual' ? 'Bi-annual' : 'Year'}</span>
              </div>
              <ul className="space-y-4 w-full mt-8 md:mt-16">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-[#736250]">
                    <svg
                      className="w-5 h-5 text-orange mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;