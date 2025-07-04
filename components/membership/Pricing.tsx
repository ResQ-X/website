"use client"

import { useState } from "react"

interface PricingPlan {
  type: string
  title: string
  subtitle: string
  price: {
    biAnnual: number
    annual: number
  }
  features: Array<{
    text: string
    included: boolean
  }>
  tagline: string
  isPopular?: boolean
}

const pricingData: PricingPlan[] = [
  {
    type: "JAPA",
    title: "(Essential)",
    subtitle: "BEST FOR EVERYDAY DRIVERS",
    price: {
      biAnnual: 30000,
      annual: 54000,
    },
    features: [
      { text: "1 emergency callout per month", included: true },
      { text: "Up to 5km free towing coverage", included: true },
      { text: "Priority support", included: true },
      { text: "Vehicle health checks", included: false },
    ],
    tagline: "BEST FOR EVERYDAY DRIVERS",
  },
  {
    type: "ODOGWU",
    title: "(VIP)",
    subtitle: "BEST FOR EXECUTIVES & VIPs",
    price: {
      biAnnual: 120000,
      annual: 216000,
    },
    features: [
      { text: "Unlimited emergency callouts", included: true },
      { text: "Up too 70km free towing coverage", included: true },
      { text: "Instant priority support", included: true },
      { text: "Vehicle health checks every 3 months + VIP perks", included: true },
    ],
    tagline: "BEST FOR EXECUTIVES & VIPs",
    isPopular: true,
  },
  {
    type: "SORO SOKE",
    title: "(Essential)",
    subtitle: "BEST FOR FAMILIES & FREQUENT TRAVELERS",
    price: {
      biAnnual: 50000,
      annual: 90000,
    },
    features: [
      { text: "3 emergency callout per month", included: true },
      { text: "Up to 20km free towing coverage", included: true },
      { text: "Faster priority support", included: true },
      { text: "Vehicle health checks every 3 months", included: true },
    ],
    tagline: "BEST FOR FAMILIES & FREQUENT TRAVELERS",
  },
]

const services = [
  {
    icon: "💳",
    title: "Pay-Per-Use",
    subtitle: "Roadside Assistance",
    description: "For occasional drivers and visitors",
  },
  {
    icon: "🔧",
    title: "First Responder",
    subtitle: "Service",
    description: "Pricing varies based on location, urgency and time of request",
  },
  {
    icon: "🚛",
    title: "Towing Service",
    subtitle: "Request",
    description: "Get an instant quote before confirming your request",
  },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"biAnnual" | "annual">("biAnnual")

  return (
    <div className="min-h-screen no-scrollbar pricing z-[1000] overflow-x-hidden bg-[#1C1917] text-white py-16 px-4 w-full">
      {/* Billing Toggle */}
      <div className="no-scrollbar w-full z-[1001]">
        <div className="flex justify-center mb-12">
          <div className="bg-[#3B3835] rounded-full p-1">
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "biAnnual" ? "bg-orange text-white" : "text-white"
              }`}
              onClick={() => setBillingCycle("biAnnual")}
            >
              Bi-Annually
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === "annual" ? "bg-orange text-white" : "text-white"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center overflow-hidden no-scrollbar items-center gap-8 max-w-[1400px] mx-auto px-4">
          {pricingData.map((plan, index) => (
            <div
              key={plan.type}
              className={`
                relative group w-full 
                ${plan.isPopular ? "lg:w-[513px] h-auto lg:h-[718px] z-20" : "lg:w-[380px] h-auto lg:h-[612px] z-10"}
                rounded-[20px] overflow-hidden
                animate-gradient-background
              `}
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-[20px] animate-border-gradient" />

              {/* Content container with glass effect */}
              <div className="relative h-full backdrop-blur-[40px] bg-gradient-to-br from-white/40 to-white/10 p-2">
                {plan.isPopular && (
                  <div className="bg-orange text-center py-6 absolute top-0 left-0 right-0">
                    <p className="font-bold text-2xl animate-shimmer bg-gradient-to-r from-white via-white/50 to-white bg-clip-text text-transparent">
                      Most popular ✨
                    </p>
                  </div>
                )}

                <div className={`${plan.isPopular ? "pt-[84px]" : "pt-4"} px-1`}>
                  <div className="border-[2px] relative border-[#F2E7DA] w-full h-[191px] rounded-[30px] p-[12px] mb-7 flex flex-col items-center">
                    <div className="absolute inset-0 opacity-95">
                      <div className="absolute inset-0 bg-[url('/images/rough.png')] opacity-5" />
                    </div>
                    <h3 className="text-[30px] z-50 text-center text-[#F2E7DA] font-semibold mb-1">{plan.type}</h3>
                    <p className="text-[32px] z-50 font-semibold text-center mb-">{plan.title}</p>
                    <div className={`${ plan.type ==='ODOGWU' ? 'lg:text-[60px] text-5xl' : 'text-5xl' } text-center font-bold mb-8`}>
                      ₦
                      {billingCycle === "biAnnual"
                        ? plan.price.biAnnual.toLocaleString()
                        : plan.price.annual.toLocaleString()}
                      <span className="text-[15px] z-10 text-[#F2E7DA] font-normal ml-2">/{billingCycle === "biAnnual" ? "6 Months" : "Year"}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8 px-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className={feature.included ? "text-green-400" : "text-red-500"}>
                          {feature.included ? "✅" : "❌"}
                        </span>
                        <span className="text-white text-[20px] font-semibold">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[17px] font-bold text-white mb-6">{plan.tagline}</p>

                  {/* <button className="w-full py-3 px-6 rounded-full bg-gradient-orange text-white font-semibold hover:bg-[#FF6B00]/90 transition-colors duration-300">
                    Select Plan
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No Subscription Section */}
      <div className="mt-32 lg:mt-96 text-center max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2">NO SUBSCRIPTION?</h2>
        <h3 className="text-3xl font-bold mb-16">GET HELP ON DEMAND 🚨</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[307px] h-[271px] bg-white rounded-[12px] p-6 text-center flex flex-col items-center gap-[10px] hover:scale-105 transition-transform duration-300 mx-auto"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <h4 className="text-black font-bold text-xl">{service.title}</h4>
              <p className="text-black font-semibold">{service.subtitle}</p>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}