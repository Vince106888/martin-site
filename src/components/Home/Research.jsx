import React from "react";
import Card from "./Card";
import { BookOpen, Award } from "lucide-react";
import "./Research.css";

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative">
          Research & Expertise
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <Card
            icon={<BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Lossy Graph Compression"
            items={[
              "Spatial networks & random geometric graphs",
              "Information‑theoretic rate‑distortion theory",
              "Topology & connectivity discovery in IoT networks",
            ]}
          />
          <Card
            icon={<Award className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />}
            title="Recent Publications"
            items={[
              "ISIT 2024 — Lossy Compression of Spatial Networks",
              "Rate‑Distortion for Stochastic Block Models",
              "IEEE conference contributions",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
