import React, { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { DeleteAccountDialog } from "./DeleteAccountDialog";
import { DeleteAccountSuccess } from "./DeleteAccountSuccess";

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
    <div className="space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Delete Account</h2>
      <p className="text-gray-500">
        For security purposes, verify your identity by entering your email and password.
      </p>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </Alert>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 w-full"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 w-full"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <DeleteAccountDialog email={formData.email} onConfirm={handleDelete} />
      </div>
    </div>
  );
};
