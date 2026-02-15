import Card from "./Card";
import { BookOpen, Award } from "lucide-react";
import "./Research.css";

export default function Research() {
  return (
    <section id="research" className="bg-gray-50 px-6 py-24 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-6xl">
        <h2 className="relative mb-16 text-center text-4xl font-bold md:text-5xl">Research & Expertise</h2>

        <div className="grid gap-10 md:grid-cols-2">
          <Card
            icon={<BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
            title="Lossy Graph Compression"
            items={[
              "Spatial networks & random geometric graphs",
              "Information-theoretic rate-distortion theory",
              "Topology & connectivity discovery in IoT networks",
            ]}
          />
          <Card
            icon={<Award className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />}
            title="Recent Publications"
            items={[
              "ISIT 2024 - Lossy Compression of Spatial Networks",
              "Rate-Distortion for Stochastic Block Models",
              "IEEE conference contributions",
            ]}
          />
        </div>
      </div>
    </section>
  );
}


