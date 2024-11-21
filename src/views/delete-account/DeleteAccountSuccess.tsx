import React from "react";
import { Alert } from "@/components/ui/alert";

export const DeleteAccountSuccess = () => (
  <div className="max-w-md mx-auto p-6">
    <Alert className="bg-green-50 text-green-800 border-green-200">
      <span>Your account has been successfully deleted. You will be redirected shortly.</span>
    </Alert>
  </div>
);
