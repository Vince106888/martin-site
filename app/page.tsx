import type { Metadata } from "next";
import HomePage from "@/src/views/Home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Executive academic profile of Martin Wachiye Wafula, featuring research leadership, publication highlights, and collaboration pathways.",
};

export default function Page() {
  return <HomePage />;
}

