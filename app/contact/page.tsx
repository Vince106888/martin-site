import type { Metadata } from "next";
import ContactPage from "@/src/views/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact details and social links for research collaborations, mentorship, and speaking engagements.",
};

export default function Page() {
  return <ContactPage />;
}

