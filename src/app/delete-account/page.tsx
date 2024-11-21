import { Metadata } from "next";
import { DeleteAccountForm } from "@/views/delete-account/DeleteAccountForm";

export const metadata: Metadata = {
  title: "Delete Account - ResQ-X",
  description: "Delete your account securely and permanently from ResQ-X.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DeleteAccountForm />
    </div>
  );
}
