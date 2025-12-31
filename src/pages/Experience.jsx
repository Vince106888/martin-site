import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Shield, Radio } from "lucide-react";

export default function Experience() {
  const experience = [
    {
      title: "DPhil Candidate, Engineering Science",
      org: "University of Oxford",
      period: "2022 – Present",
      location: "Oxford, UK",
      description:
        "Researching graph compression and spatial networks under Prof. Justin P. Coon. Focused on lossy compression, network modeling, and information theory applications.",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lecturer / Tutor",
      org: "Multimedia University of Kenya",
      period: "2020 – 2022",
      location: "Nairobi, Kenya",
      description:
        "Lectured courses in Computer Networks (CNS 3201) and Communication Engineering. Conducted lab sessions, tutorials, and guided student projects.",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IT Risk Assurance Associate",
      org: "PricewaterhouseCoopers (PwC) Ltd, Kenya",
      period: "2018 – 2019",
      location: "Nairobi, Kenya",
      description:
        "Performed IT risk and assurance assessments for corporate clients, including system audits, compliance reviews, and reporting.",
      icon: Shield,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Telecommunications Engineer",
      org: "Safaricom PLC & Communication Authority of Kenya",
      period: "2015 – 2018",
      location: "Nairobi, Kenya",
      description:
        "Worked on network planning, spectrum management, and enterprise services. Focused on improving network efficiency and operational processes.",
      icon: Radio,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Header */}
        <div className="text-center space-y-6 mb-20">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Experience
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A journey through academia, engineering, and technology—from telecommunications to Oxford's research labs
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {experience.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
                    >
                      {/* Icon with gradient */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} p-3 mb-5 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      <div className="space-y-3">
                        <h2 className="text-2xl font-bold text-white">
                          {exp.title}
                        </h2>
                        
                        <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.org}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                            {exp.location}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed pt-2">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-lg shadow-blue-500/50 ring-4 ring-slate-900`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-24"
        >
          <p className="text-gray-400 text-lg mb-6">
            Interested in collaboration or learning more?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}