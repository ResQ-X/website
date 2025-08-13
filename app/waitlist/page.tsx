import { Metadata } from "next";
import { WaitList } from "@/components/WaitList";

export const metadata: Metadata = {
  title: "Waitlist - ResQ-X",
  description:
    "Join the ResQ-X waitlist for early access to our roadside assistance app",
};

export default function Page() {
  return <WaitList />;
}
