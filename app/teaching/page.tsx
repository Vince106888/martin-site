import type { Metadata } from "next";
import TeachingPage from "@/src/views/Teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Teaching portfolio, mentorship roles, and student outreach initiatives by Martin Wachiye Wafula.",
};

export default function Page() {
  return <TeachingPage />;
}

