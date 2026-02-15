import type { Metadata } from "next";
import PublicationsPage from "@/src/views/Publications";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Publications portfolio with standardized citations, DOI links, and category filtering for research outputs.",
};

export default function Page() {
  return <PublicationsPage />;
}



