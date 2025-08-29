"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bus from "@/public/images/bus.png";
import logo from "@/public/images/logo.png";
import checkmark from "@/public/images/checkmark.gif";
import caution from "@/public/images/caution.gif";
import {
  BulletPointIcon,
  FastIcon,
  CallenderIcon,
  TelescopeIcon,
  GraphIcon,
} from "@/components/Svgs";
import { Modal } from "@/components/waitlist/Modal";
import { FeatureCard } from "@/components/waitlist/FeatureCard";
import {
  TestimonialCard,
  TESTIMONIALS,
} from "@/components/waitlist/TestimonialCard";
import { TimeLeft, CountdownTimer } from "@/components/waitlist/CountdownTimer";
import {
  BenefitCard,
  BUSINESS_BENEFITS,
} from "@/components/waitlist/BenefitCard";
import { SolutionTag } from "@/components/waitlist/SolutionTag";

declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

interface FormData {
  name: string;
  email: string;
  accountType: "personal" | "business";
  fuelType: "petrol" | "diesel";
}

interface PopupState {
  showSuccess: boolean;
  showError: boolean;
  errorMessage: string;
}

const FEATURES = [
  {
    icon: <FastIcon />,
    title: "On-Demand Delivery",
    subtitle: "Fuel in Minutes",
  },
  {
    icon: <CallenderIcon />,
    title: "Scheduled & Recurring",
    subtitle: "Plan ahead",
  },
  {
    icon: <TelescopeIcon />,
    title: "Top-Quality Fuel Always",
    subtitle: "Trusted, safe for your engine.",
  },
  {
    icon: <TelescopeIcon />,
    title: "Emergency Refills",
    subtitle: "Fast refills for urgent needs",
  },
];

const FUEL_SOLUTIONS = [
  "Fleets and Business",
  "Corporate Vehicles",
  "Staff Buses",
  "Generator Farms",
  "Ride-hailing Drivers",
  "Construction Sites",
  "Everyday Drivers",
];

const resqxKey = process.env.NEXT_PUBLIC_X_RESQX_KEY || "";

const getApiHeaders = () => {
  if (!resqxKey) {
    console.error("X_RESQX_KEY environment variable is not set");
    throw new Error("API key is required");
  }

  return {
    "Content-Type": "application/json",
    "x-resqx-key": resqxKey,
  };
};

const useCountdown = (endDate: string) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date(endDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return timeLeft;
};

function Page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    accountType: "personal",
    fuelType: "petrol",
  });

  const [popupState, setPopupState] = useState<PopupState>({
    showSuccess: false,
    showError: false,
    errorMessage: "",
  });

  const timeLeft = useCountdown("2025-10-06T23:59:59");

  const updateFormField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const closePopups = () => {
    setPopupState({
      showSuccess: false,
      showError: false,
      errorMessage: "",
    });
  };

  const showError = (message: string) => {
    setPopupState({
      showSuccess: false,
      showError: true,
      errorMessage: message,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      showError("Please fill in all required fields.");
      return;
    }

    try {
      // Fix: Use the function that handles the undefined check
      const headers = getApiHeaders();

      const response = await fetch(
        "https://internal-backend-rdhj.onrender.com/waitlist",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            entity: formData.accountType.toUpperCase(),
            fuel_type: formData.fuelType.toUpperCase(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.message
          ?.toLowerCase()
          .includes("already added to the waitlist")
          ? "This email has already been submitted."
          : data.message || "Something went wrong";
        showError(errorMsg);
        return;
      }

      // Track conversion
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
      }

      setPopupState({ showSuccess: true, showError: false, errorMessage: "" });
    } catch (error) {
      console.error("Error posting to waitlist:", error);
      showError("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Background */}
      <div
        style={{ backgroundColor: "#6D5E4E" }}
        className="fixed text-white text-xl w-full"
      >
        <div className="flex justify-center">
          <Image
            src={bus}
            alt="Resqx fuel Tank"
            className="w-full h-[calc(100vh)] object-cover opacity-50 mask-gradient"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative sm:inset-0 md:inset-0 lg:pt-[10px] lg:mx-[70px] lg:mt-[0px] flex flex-col lg:justify-center overflow-x-hidden">
        {/* Logo */}
        <div className="w-[250px] mt-5 mx-7">
          <Image src={logo} alt="Resqx logo" />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 my-0 lg:m-7 font-['General_Sans'] tracking-[0.01em] text-white text-[18px] justify-items-center">
          {/* Left Column */}
          <div className="flex flex-col w-[80%] lg:w-[100%] justify-items-center gap-5 m-0 my-7">
            <div className="w-full">
              <p className="font-semibold text-[35px] leading-[100%] lg:w-70vw">
                Fuel Delivered. Anytime, Anywhere.
              </p>
            </div>

            <div className="leading-[30px] w-100vw">
              <p>Join the Refuel by ResQ-X Waitlist</p>
              <p className="w-[80%]">
                Fuel delivered to your home, office, or anywhere in Lagos on
                demand or scheduled. Save time. Get quality fuel. Fair pricing.
              </p>
              <p className="mb-3">
                For individuals & businesses: Cars, Generators, Fleets.
              </p>

              <div className="space-y-1">
                <p>
                  <BulletPointIcon />
                  We deliver within your selected 1-hour time slot
                </p>
                <p>
                  <BulletPointIcon />
                  DPR certified • Sealed meters • Zero tampering
                </p>
                <p>
                  <BulletPointIcon />
                  First 500 members get ₦5,000 welcome credit
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-2 md:gap-5 lg:gap-5 w-full">
              {FEATURES.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            {/* Countdown Timer */}
            <CountdownTimer timeLeft={timeLeft} />

            {/* Solutions Section */}
            <div className="tracking-[0.01em] text-white text-[18px] pr-7 w-full">
              <div className="w-full lg:w-full">
                <div className="items-center">
                  <p className="font-semibold text-[30px] leading-[100%] mb-3 text-center">
                    Fueling Solutions For:
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 justify-center w-full">
                  {FUEL_SOLUTIONS.map((solution, index) => (
                    <SolutionTag key={index} text={solution} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white w-[80%] border h-[800px] border-[#FF8500] rounded-[50px] py-7 px-0 text-[#777777] flex flex-col items-center gap-5">
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <p className="font-semibold text-[30px] leading-[100%] w-[75%] text-center">
                Be the first to fuel smarter with Refuel by ResQ-X
              </p>
              <p className="w-[82%] text-center text-[18px] leading-[26px] tracking-[0.02em]">
                ResQ-X delivers fuel straight to your vehicle at home, at work
                or on the road. Anytime you need it.
              </p>
            </div>

            <div className="w-[100%] flex flex-col items-center justify-center px-7 gap-4 text-[14px]">
              {/* Account Type */}
              <div className="flex flex-col items-start w-full">
                <p className="mb-2 text-black">Account Type</p>
                <div className="flex justify-between w-full text-black gap-2">
                  {(["personal", "business"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateFormField("accountType", type)}
                      className={`border w-full py-4 rounded-[10px] capitalize ${
                        formData.accountType === type
                          ? "border-[#FF8500] bg-[#FFE0B3]"
                          : "border-[#C6C6C6]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Field */}
              <div className="flex flex-col items-start w-full">
                <p className="mb-2 text-black">Your Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => updateFormField("name", e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full p-3 border rounded border-gray-300"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col items-start w-full">
                <p className="mb-2 text-black">Your Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => updateFormField("email", e.target.value)}
                  required
                  placeholder="johndoe@gmail.com"
                  className="w-full p-3 border rounded border-gray-300"
                />
              </div>

              {/* Fuel Type */}
              <div className="flex flex-col items-start w-full">
                <p className="mb-2 text-black">Primary Fuel Type</p>
                <div className="flex justify-between w-full text-black gap-2">
                  <button
                    type="button"
                    onClick={() => updateFormField("fuelType", "petrol")}
                    className={`border w-full py-4 rounded-[10px] ${
                      formData.fuelType === "petrol"
                        ? "border-[#FF8500] bg-[#FFE0B3]"
                        : "border-[#C6C6C6]"
                    }`}
                  >
                    Petrol (PMS)
                  </button>
                  <button
                    type="button"
                    onClick={() => updateFormField("fuelType", "diesel")}
                    className={`border w-full py-4 rounded-[10px] ${
                      formData.fuelType === "diesel"
                        ? "border-[#FF8500] bg-[#FFE0B3]"
                        : "border-[#C6C6C6]"
                    }`}
                  >
                    Diesel (AGO)
                  </button>
                </div>
              </div>

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e as any);
                }}
                className="w-full bg-[#FF8500] text-white font-bold text-sm py-3 border rounded-[12px] cursor-pointer mt-[30px] lg:mt-5"
              >
                Get Early Access + ₦5,000 Credit ➔
              </button>
            </div>

            <p className="text-[12px]">🔒 Your data is secured.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col w-full lg:w-[100%] mb-7 md:w-80% mt-5">
          <p className="lg:font-[600] lg:text-[36px] mx-auto font-[600] text-[25px] text-center text-white w-[90%] mb-2">
            Testimonials from Our Beta Testers
          </p>
          <div className="flex flex-wrap justify-center w-full text-[#5E5E5E] gap-7 text-[18px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Business Section */}
        <div className="ml-0 w-full items-center flex flex-col justify-center text-white my-7 text-center">
          <div className="items-center flex flex-col justify-center">
            <p className="flex items-center space-x-2 bg-[#FF8500] px-7 py-3 mb-4 rounded-4xl font-bold">
              <span className="mr-4">
                <GraphIcon />
              </span>
              For Businesses & Fleet Managers
            </p>
            <p className="font-semibold text-[35px] leading-[100%] lg:w-70vw mx-5">
              Fuel Your Fleet Without the Hassle.
            </p>
          </div>
          <div className="leading-[30px] w-[60%] mt-2">
            <p className="text-center">
              Reduce operational costs by 25%. Eliminate fuel theft. Track every
              litre. Join companies saving millions with Refuel for Business.
            </p>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="w-full lg:w-[100%] mb-7 md:w-80%">
          <div className="flex flex-wrap items-center gap-4 justify-center w-[90%] text-[#5E5E5E] mx-auto">
            {BUSINESS_BENEFITS.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={popupState.showSuccess} onClose={closePopups}>
        <div className="flex justify-center">
          <Image
            src={checkmark}
            alt="checkmark"
            className="w-[124px] h-[124px] justify-center"
          />
        </div>
        <p className="text-[#777777] font-medium">
          Your details have been successfully added to the waitlist.
        </p>
      </Modal>

      <Modal isOpen={popupState.showError} onClose={closePopups}>
        <div className="flex justify-center">
          <Image
            src={caution}
            alt="caution"
            className="w-[124px] h-[124px] justify-center"
          />
        </div>
        <p className="text-[#777777] font-medium mt-4">
          {popupState.errorMessage || "Something went wrong. Please try again."}
        </p>
      </Modal>
    </div>
  );
}

export default Page;
