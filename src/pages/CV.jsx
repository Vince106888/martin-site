import { Download, FileText, Award, Briefcase, GraduationCap, BookOpen, Users, ExternalLink, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function CV() {
  const cvSections = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "DPhil in Engineering Science - University of Oxford (2020-Present)",
        "BSc (First-Class Honours) - Telecommunication & Information Engineering",
        "Rhodes Scholarship (Kenya & Oriel, 2019)",
        "Academic achievements and honors"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      items: [
        "Teaching Fellow - Strathmore University (2025-Present)",
        "Graduate Teaching Assistant - Oxford (2024-2025)",
        "Senior Lab Demonstrator - Oxford (2020-2025)",
        "Previous roles at PwC, Safaricom, CAK"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Research & Publications",
      items: [
        "IEEE ISIT 2024 - Lossy Compression of Spatial Networks",
        "Asilomar 2023 - Rate-Distortion of Stochastic Block Model",
        "Research in graph compression and information theory",
        "Technical articles and blog posts"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Leadership & Service",
      items: [
        "Scholar Programs Facilitator - Rhodes Trust",
        "Rhodes Scholarship guidance across East Africa",
        "IEEE Student Activities Coordinator (Kenya Section)",
        "Community engagement and mentorship"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    { category: "Programming", items: ["Python", "MATLAB", "R", "C++"] },
    { category: "Research Areas", items: ["Graph Theory", "Information Theory", "Network Optimization", "Machine Learning"] },
    { category: "Tools & Frameworks", items: ["TensorFlow", "PyTorch", "Network Simulation", "Data Visualization"] },
    { category: "Professional", items: ["Technical Writing", "Public Speaking", "Teaching", "Mentorship"] }
  ];

  const highlights = [
    {
      icon: Award,
      title: "Rhodes Scholar",
      description: "Selected for Kenya & Oriel constituency, 2019",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Star,
      title: "5+ Years at Oxford",
      description: "Teaching and research excellence",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: BookOpen,
      title: "2 IEEE Publications",
      description: "ISIT 2024 & Asilomar 2023",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
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
              Curriculum Vitae
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive academic and professional CV showcasing education, research, teaching, and leadership experience
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Download CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-10 rounded-3xl border border-blue-500/30 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 shadow-lg">
                  <FileText className="w-full h-full text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Download Full CV</h2>
                  <p className="text-blue-300">Last updated: December 2025</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                Complete academic CV including detailed education history, research publications, 
                teaching experience, professional roles, leadership activities, and technical skills.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <motion.a
                href="/path-to-cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                <Eye className="w-5 h-5" />
                Preview Online
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400"
          >
            Career Highlights
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} p-4 mb-4 shadow-lg mx-auto`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CV Sections Overview */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            What's Included
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {cvSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} p-3 mb-6 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700/50"
              >
                <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-700">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-700/50 text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Explore More
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="#publications"
              className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:bg-slate-800 text-center"
            >
              <BookOpen className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Publications</h3>
              <p className="text-gray-400 text-sm">View research papers and articles</p>
              <ExternalLink className="w-4 h-4 text-blue-400 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://eng.ox.ac.uk/people/martin-wafula/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all hover:bg-slate-800 text-center"
            >
              <GraduationCap className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Oxford Profile</h3>
              <p className="text-gray-400 text-sm">Department of Engineering Science</p>
              <ExternalLink className="w-4 h-4 text-purple-400 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://scholar.google.com/citations?user=oVgDqvgAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all hover:bg-slate-800 text-center"
            >
              <Award className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Google Scholar</h3>
              <p className="text-gray-400 text-sm">Research metrics and citations</p>
              <ExternalLink className="w-4 h-4 text-emerald-400 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16 text-gray-400"
        >
          <p className="text-sm">
            For specific inquiries about qualifications or recommendations, please <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors">contact me directly</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}