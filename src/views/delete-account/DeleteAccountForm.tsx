"use client"

import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { DeleteAccountDialog } from "./DeleteAccountDialog";
import { DeleteAccountSuccess } from "./DeleteAccountSuccess";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
}

export const DeleteAccountForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleDelete = async (): Promise<void> => {
    if (!validateForm()) return;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowSuccess(true);

      // Simulate logout redirection
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch {
      setError("Failed to delete account. Please try again.");
    }
  };

  if (showSuccess) return <DeleteAccountSuccess />;

  return (
    <div className="space-y-6 max-w-md mx-auto w-full py-32">
      <h2 className="text-6xl text-red-600 font-bold">Delete Account</h2>
      <p className="text-sm leading-6 font-normal">
        For security purposes, verify your identity by entering your email and password.
      </p>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </Alert>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-[14px] font-medium mb-2">Confirm Your Email Address</label>
          <div className="relative h-12">
            <Mail className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 w-full h-full border bg-transparent rounded-lg focus:ring-2 focus:ring-[#FF6500] outline-none placeholder-slate-500"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-medium mb-2">Enter Your Password</label>
          <div className="relative h-12">
            <Lock className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 w-full h-full border bg-transparent rounded-lg focus:ring-2 focus:ring-[#FF6500] outline-none placeholder-slate-500"
              placeholder="password122@##^%"
            />
          </div>
        </div>

        <DeleteAccountDialog email={formData.email} onConfirm={handleDelete} />
        <div className="text-sm px-2">
          <h3 className="font-semibold text-[1rem] mb-2">What happens when you delete your account?</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-800">
            <li>All your personal information will be permanently deleted</li>
            <li>Your profile and activity history will be removed</li>
            <li>You'll be logged out of all devices</li>
            <li>Any active subscriptions will be cancelled</li>
            <li>All saved locations and preferences will be removed</li>
            <li>Access to ResQ-X services will be terminated</li>
          </ul>

          <p className="py-7 px-4">Need help? <Link href={"/contact"} className="text-blue-500 font-bold">Contact Support</Link></p>
        </div>

      </div>
    </div>
  );
};
