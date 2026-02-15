import type { Metadata } from "next";
import CvPage from "@/src/views/CV";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae for Martin Wachiye Wafula, including education, publications, and professional roles.",
};

export default function Page() {
  return <CvPage />;
}

