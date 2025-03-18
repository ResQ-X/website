"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrow from "@/public/icons/arrow.png";
import axios from "axios";

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

const Inquiry: React.FC = () => {
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

  const createGridCells = (): JSX.Element[] => {
    const cells: JSX.Element[] = [];
    for (let i = 0; i < 9; i++) {
      cells.push(
        <div
          key={i}
          className="relative border-r-4 border-b-4 border-dark-brown"
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      );
    }
    return cells;
  };

  const sendToBrevo = async (data: FormData) => {
    if (!BREVO_API_KEY) {
      throw new Error("Brevo API key is not configured");
    }

    try {
      const response = await axios({
        method: "post",
        url: "https://api.brevo.com/v3/contacts",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        data: {
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
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setFormData((prev) => ({ ...prev, error: "Please fill in all fields" }));
      return;
    }

    setFormData((prev) => ({ ...prev, loading: true, error: "" }));

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
      <div className="w-full max-w-6xl mx-auto p-3 lg:p-8">
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
            We'll get back to you soon. Look out for a message from our team!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-3 lg:p-8">
      <h1 className="text-4xl font-bold text-center mb-8">HAVE ANY INQUIRY?</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl mb-4">We love to hear from you!</h2>
          <div className="relative aspect-square">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/working-woman.jpeg')",
              }}
            />
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
              {createGridCells()}
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-white rounded-[12px] p-[32px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {formData.error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                {formData.error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[18px] text-dark-brown">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none text-dark-brown"
                  disabled={formData.loading}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[18px] text-dark-brown">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none text-dark-brown"
                  disabled={formData.loading}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none text-dark-brown"
                disabled={formData.loading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none text-dark-brown"
                disabled={formData.loading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[18px] text-dark-brown">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full border border-lightest rounded-lg p-2 focus:outline-none focus:ring-[1px] focus:ring-orange focus:border-none text-dark-brown"
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

export default Inquiry;