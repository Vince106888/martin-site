import React from "react";
import "./About.css";

const skills = [
  "Python", "MATLAB", "AI & ML", "Graph Algorithms", "Data Compression",
  "Network Simulations", "Information Theory", "Research Writing", "Open-Source Contributions",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        {/* Intro Paragraph */}
        <div className="mb-16">
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Dr. Martin Wachiye Wafula is a DPhil candidate in Engineering Science at
            the University of Oxford. He explores cutting-edge methods in
            network theory and information science, striving to bridge advanced
            research with impactful real-world applications.
          </p>
        </div>

        {/* Research Focus */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 text-center max-w-4xl mx-auto hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Research Focus
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              His research focuses on <span className="font-medium">lossy compression of spatial networks</span> and
              information-theoretic frameworks for next-generation communication systems.
              He develops algorithms that optimize data storage, network efficiency,
              and real-time processing of complex graphs.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Oxford DPhil Scholar",
                desc: "Pursuing doctoral research in Engineering Science with a focus on graph compression and network communications.",
              },
              {
                title: "Published Research",
                desc: "Authored multiple peer-reviewed papers in international journals on information-theoretic network optimization.",
              },
              {
                title: "Technical Expertise",
                desc: "Graph algorithms, data compression, AI & ML, Python, MATLAB, network simulations.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 text-center max-w-4xl mx-auto hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Personal Interests
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate about applying theoretical research to practical problems, mentoring young researchers,
              exploring AI-driven network optimization, and contributing to open-source projects.
            </p>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
            Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-5 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800
                  text-blue-800 dark:text-blue-200 rounded-full font-medium text-sm md:text-base
                  cursor-default hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
