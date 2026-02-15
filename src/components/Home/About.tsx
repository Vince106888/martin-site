import "./About.css";

const skills = [
  "Python",
  "MATLAB",
  "AI & ML",
  "Graph Algorithms",
  "Data Compression",
  "Network Simulations",
  "Information Theory",
  "Research Writing",
  "Open-Source Contributions",
];

const achievements = [
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
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          About Me
        </h2>

        <div className="mb-16">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl">
            Dr. Martin Wachiye Wafula is a DPhil candidate in Engineering Science at the University of
            Oxford. He explores cutting-edge methods in network theory and information science, striving
            to bridge advanced research with impactful real-world applications.
          </p>
        </div>

        <div className="mb-16">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800">
            <h3 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">Research Focus</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              His research focuses on <span className="font-medium">lossy compression of spatial networks</span>{" "}
              and information-theoretic frameworks for next-generation communication systems. He develops
              algorithms that optimize data storage, network efficiency, and real-time processing of
              complex graphs.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-semibold text-gray-900 dark:text-white">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-gray-700"
              >
                <h4 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800">
            <h3 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">Personal Interests</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Passionate about applying theoretical research to practical problems, mentoring young
              researchers, exploring AI-driven network optimization, and contributing to open-source
              projects.
            </p>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-5 py-2 text-sm font-medium text-blue-800 transition-transform duration-300 hover:scale-105 dark:from-blue-900 dark:to-blue-800 dark:text-blue-200 md:text-base"
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


