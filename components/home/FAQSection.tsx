"use client"

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is ResQ-X?",
    answer: "ResQ-X is a comprehensive roadside assistance platform that connects you with reliable service providers 24/7. We offer immediate help for vehicle breakdowns, flat tires, fuel delivery, and other automotive emergencies through our user-friendly mobile application."
  },
  {
    question: "How do I download the ResQ-X app?",
    answer: "You can download the ResQ-X app from both the Apple App Store and Google Play Store. Simply search for 'ResQ-X' and click install. Alternatively, you can scan the QR code on our website to be directed to the appropriate store for your device."
  },
  {
    question: "Is ResQ-X available 24/7?",
    answer: "Yes, ResQ-X services are available 24 hours a day, 7 days a week, including holidays. Our network of service providers ensures that help is always just a few taps away, regardless of when you need assistance."
  },
  {
    question: "What services does ResQ-X offer?",
    answer: "ResQ-X offers a wide range of roadside assistance services including: towing, jump-starts, flat tire changes, fuel delivery, lockout assistance, winching/extraction, and battery replacement. We also provide minor mechanical assistance for common breakdown issues."
  },
  {
    question: "How do I request a service through the app?",
    answer: "Requesting service is simple: Open the app, tap 'Request Service', select the type of assistance you need, confirm your location (automatically detected or manually entered), and submit your request. You'll receive immediate confirmation and real-time updates on your service provider's arrival."
  },
  {
    question: "Is there a membership fee for using ResQ-X?",
    answer: "ResQ-X offers both pay-per-use and membership options. With pay-per-use, you only pay for services when you need them. Our membership plans provide additional benefits including priority service, discounted rates, and a number of included service calls annually."
  },
  {
    question: "Can I track the status of my service request?",
    answer: "Yes, you can track your service request in real-time through the ResQ-X app. You'll see your service provider's location, estimated arrival time, and receive push notifications for important updates. You can also communicate directly with your service provider through the app."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto lg:h-screen flex justify-center py-8">
      <div className="w-full max-w-[1090px] px-4">
        <h2 className="text-4xl font-bold lg:h1 text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-col gap-2">
          {faqData.map((faq, index) => (
            <div key={index} className="w-full border-b border-b-[#A6A19C]">
              <button 
                className="flex items-center justify-between w-full py-4 text-left transition-all duration-200 ease-in-out"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-orange" />
                  ) : (
                    <Plus className="w-5 h-5 text-orange" />
                  )}
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-4 text-lightest leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;