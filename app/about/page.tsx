import type { Metadata } from "next";
import AboutPage from "@/src/views/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Structured academic profile of Martin Wachiye Wafula with research focus, leadership record, and institutional contributions.",
};

export default function Page() {
  return <AboutPage />;
}



