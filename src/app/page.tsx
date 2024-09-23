import { Metadata } from "next";
import Home from "./home/page";

export const metadata: Metadata = {
  title: "ResQ-X | Fast, Reliable And Affordable Roadside Assistance Near You",
  description: "Resq-X Website",
};

export default function Page() {
  return <Home />;
}
