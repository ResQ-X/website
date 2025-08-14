/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
// import axios from "axios";
// import Youtube from "@/public/icons/Youtube.svg";
import Facebook from "@/public/icons/Facebook.svg";
import Twitter from "@/public/icons/Twitter.svg";
import LinkedIn from "@/public/icons/LinkedIn.svg";
import Instagram from "@/public/icons/Instagram.svg";
import Sms from "@/public/icons/sms.svg";
import Phone from "@/public/icons/phone.svg";
import Location from "@/public/icons/location.svg";
import Image from "next/image";
import arrow from "@/public/icons/arrow.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState extends FormData {
  submitted: boolean;
  error: string;
  loading: boolean;
}

const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(process.env.NEXT_PUBLIC_BREVO_LIST_ID || "0");

const GetInTouch = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    submitted: false,
    error: "",
    loading: false,
  });

  const sendToBrevo = async (data: FormData) => {
    if (!BREVO_API_KEY) {
      throw new Error("Brevo API key is not configured");
    }

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: data.email,
          attributes: {
            FIRSTNAME: data.firstName,
            LASTNAME: data.lastName,
            SUBJECT: data.subject,
            MESSAGE: data.message,
            SIGNUP_DATE: new Date().toISOString(),
          },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      });

      // Brevo may return empty body or non-JSON on some statuses -> avoid .json() crash
      const text = await response.text();
      let parsed: any = null;
      try {
        parsed = text ? JSON.parse(text) : null;
      } catch {
        parsed = { raw: text }; // keep raw for debugging
      }

      if (!response.ok) {
        const msg =
          parsed?.message ||
          parsed?.code ||
          response.statusText ||
          "Request failed";
        throw new Error(`Brevo error (${response.status}): ${msg}`);
      }

      return parsed; // success payload (may be null if empty)
    } catch (err) {
      // Normalizes axios vs fetch vs generic errors
      const message =
        err instanceof Error ? err.message : "Network error submitting form";
      throw new Error(message);
    }
  };

  // const sendToBrevo = async (data: FormData) => {
  //   if (!BREVO_API_KEY) {
  //     throw new Error("Brevo API key is not configured");
  //   }

  //   try {
  //     // const response = await axios({
  //     //   method: "post",
  //     //   url: "https://api.brevo.com/v3/contacts",
  //     //   headers: {
  //     //     Accept: "application/json",
  //     //     "Content-Type": "application/json",
  //     //     "api-key": BREVO_API_KEY,
  //     //   },
  //     //   data: {
  //     //     email: data.email,
  //     //     attributes: {
  //     //       FIRSTNAME: data.firstName,
  //     //       LASTNAME: data.lastName,
  //     //       SUBJECT: data.subject,
  //     //       MESSAGE: data.message,
  //     //       SIGNUP_DATE: new Date().toISOString(),
  //     //     },
  //     //     listIds: [BREVO_LIST_ID],
  //     //     updateEnabled: true,
  //     //   },
  //     // });
  //     const result = await response.json();

  //     return response;
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       const errorMessage = error.response?.data?.message || error.message;
  //       throw new Error(errorMessage);
  //     }
  //     throw error;
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormData((prev) => ({ ...prev, error: "Please fill in all fields" }));
      return;
    }

    setFormData((prev) => ({ ...prev, loading: true, error: "" }));

    console.log("Sending form data to Brevo:", formData);

    try {
      await sendToBrevo({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setFormData((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
        error: "",
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again later.";
      console.error("Error submitting form:", error);
      setFormData((prev) => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }));
    }
  };

  if (formData.submitted) {
    return (
      <div className="text-center space-y-4 p-8 bg-orange rounded-lg">
        <div className="rounded-full bg-green-100 p-3 inline-block mx-auto">
          <svg
            className="w-10 h-10 text-green-600"
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
        </div>
        <h2 className="text-3xl font-semibold">Thanks for reaching out!</h2>
        <p className="text-gray-200 text-[1rem]">
          We&apos;ll get back to you soon. Look out for a message from our team!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex items-start flex-col justify-center gap-3">
          <h2 className="text-[36px] lg:text-[48px] uppercase font-bold leading-[48px] tracking-[-2%] text-dark-brown mb-4">
            Get in Touch
          </h2>
          <div className="flex items-center gap-[12px]">
            <Image src={Sms} alt="Location" priority />
            <p className="font-medium text-[20px] leading-[24.2px] text-[#736250]">
              hello@resqx.ng
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <Image src={Location} alt="Location" priority />
            <p className="font-medium text-[20px] leading-[24.2px] text-[#736250]">
              3 Billi Okoya Street off Mobil road Ajah
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <Image src={Phone} alt="Location" priority />
            <p className="font-medium text-[20px] leading-[24.2px] text-[#736250]">
              +234-811-117-3779
            </p>
          </div>

          <div className="flex items-center gap-[24px] pt-8">
            <a
              href="https://facebook.com/profile.php?id=61559440915973"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Facebook} alt="Facebook" priority />
            </a>
            <a
              href="https://www.instagram.com/resqx?igsh=MTU1N3FqZmJkMzZxbQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} alt="Twitter" priority />
            </a>
            <a
              href="https://x.com/ResQ_Xng?t=NciMAbDfxisxI7VZz4xUuw&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Twitter} alt="LinkedIn" priority />
            </a>
            <a
              href="https://www.linkedin.com/company/resq-x/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedIn} alt="Instagram" priority />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formData.error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                {formData.error}
              </div>
            )}
            {/* First and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[18px] text-dark-brown">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  className="w-full text-[#736250] border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
                  disabled={formData.loading}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[18px] text-dark-brown">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  className="w-full border text-[#736250] border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
                  disabled={formData.loading}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full text-[#736250] border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
                disabled={formData.loading}
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, subject: e.target.value }))
                }
                className="w-full border text-[#736250] border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
                disabled={formData.loading}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">
                Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full border text-[#736250] border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none"
                disabled={formData.loading}
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                disabled={formData.loading}
                className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-orange border-orange overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 text-dark-brown transition-colors duration-300">
                  {formData.loading ? "Sending..." : "Send"}
                </span>
                <Image
                  src={arrow}
                  alt="Arrow"
                  className="relative z-10 [filter:brightness(0)] transition-[filter] duration-300"
                  priority
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
