import type { Metadata } from "next";
import ExperiencePage from "@/src/views/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional timeline across academia, engineering practice, and institutional leadership roles.",
};

export default function Page() {
  return <ExperiencePage />;
}



