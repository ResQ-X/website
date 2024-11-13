import { Metadata } from "next";
import { BetaSignupView } from "@/views/beta-signup/BetaSignupView";

export const metadata: Metadata = {
  title:
    "Beta - ResQ-X | Join Our beta community and be the first to experience our services",
  description: "Resq-X Website",
};

export default function BetaSignup() {
  return (
    <main>
      <BetaSignupView />
    </main>
  );
}
