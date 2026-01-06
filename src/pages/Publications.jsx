import { ExternalLink, BookOpen, FileText, Award, Sparkles, Brain, Network } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Publications() {
  const publications = [
    {
      title: "On the Lossy Compression of Spatial Networks",
      authors: "Praneeth Kumar Vippathalla, Martin Wachiye Wafula, Mihai-Alin Badiu, Justin P. Coon",
      venue: "IEEE International Symposium on Information Theory (ISIT)",
      year: "2024",
      location: "Athens, Greece",
      link: "https://ieeexplore.ieee.org/document/10619435",
      abstract: "This paper addresses the lossy compression of spatial networks, specifically random geometric graphs where edge formation depends on inter-node distances. We characterize the nth order information-distortion function, quantifying graph complexity under distortion constraints. Our main contribution is a partial characterization of the information-distortion function for random geometric graphs using the Hamming distortion measure.",
      tags: ["Spatial Networks", "Lossy Compression", "Rate-Distortion", "Random Graphs"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Rate-Distortion Function of the Stochastic Block Model",
      authors: "Martin Wachiye Wafula, Praneeth Kumar Vippathalla, Justin P. Coon, Mihai-Alin Badiu",
      venue: "57th Asilomar Conference on Signals, Systems, and Computers",
      year: "2023",
      location: "Pacific Grove, CA, USA",
      link: "https://ieeexplore.ieee.org/document/10476987",
      abstract: "The stochastic block model (SBM) is extensively used to model networks with community structures. While recent work has focused on lossless compression, we address lossy compression of SBM graphs by characterizing the rate-distortion function under Hamming distortion. We derive the conditional rate-distortion function with community membership as side information, approaching this as a Wyner-Ziv lossy compression problem. We also derive the rate-distortion function for Erdős-Rényi random graphs.",
      tags: ["Stochastic Block Models", "Community Detection", "Information Theory", "Compression"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const writingMedia = [
    {
      title: "Graph Compression: Introduction and Context",
      platform: "Medium",
      date: "September 2023",
      description: "An accessible introduction to graph compression techniques, discussing information-theoretic frameworks and the challenges of compressing large-scale networks. Covers structural entropy, lossless vs. lossy compression approaches, and applications in IoT and wireless sensor networks.",
      link: "https://wachiyem-74351.medium.com/graph-compression-part-a-introduction-4f228fb26633",
      icon: FileText
    }
  ];

  const researchInterests = [
    {
      area: "Graph Compression",
      description: "Information-theoretic formalism for lossless and lossy compression of random graphs, with focus on stochastic block models and random geometric graphs",
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      area: "Network Topology Discovery",
      description: "Topology inference in networks such as IoT, wireless sensor networks, and ad hoc networks using information-theoretic approaches",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    {
      area: "Next-Generation Wireless Networks",
      description: "Future wireless systems including 5G/6G, intelligent reflecting surfaces, and network optimization for improved efficiency and reduced energy consumption",
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const navigate = useNavigate();

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
              Research & Publications
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Advancing the frontiers of information theory, graph compression, and wireless network optimization
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Peer-Reviewed Publications */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 p-3 shadow-lg">
              <BookOpen className="w-full h-full text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Peer-Reviewed Publications
            </h2>
          </motion.div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
              >
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {pub.title}
                  </h3>
                  
                  {/* Authors */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pub.authors}
                  </p>

                  {/* Venue Info */}
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className={`font-semibold bg-gradient-to-r ${pub.color} bg-clip-text text-transparent`}>
                      {pub.venue}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">{pub.year}</span>
                    {pub.location && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-500">{pub.location}</span>
                      </>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Abstract */}
                  <p className="text-gray-300 leading-relaxed pt-2">
                    {pub.abstract}
                  </p>

                  {/* Link */}
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                  >
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    View on IEEE Xplore
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-3 shadow-lg">
              <Brain className="w-full h-full text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Research Interests
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${interest.color} p-2.5 mb-4 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {interest.area}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {interest.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Writing & Media */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 shadow-lg">
              <FileText className="w-full h-full text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Writing & Public Scholarship
            </h2>
          </motion.div>

          <div className="space-y-6">
            {writingMedia.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 shadow-lg">
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 items-center text-sm">
                          <span className="text-blue-400">{item.platform}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-500">{item.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                      >
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        Read Article
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Academic Profile Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-3 shadow-lg">
              <Award className="w-full h-full text-white" />
            </div>
            <h2 className="text-3xl font-bold">Academic Profiles</h2>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              My research focuses on developing information-theoretic foundations for efficient graph processing, with applications in network tomography, fault diagnostics, and wireless communications. I'm particularly interested in how compression techniques can reduce storage requirements and energy consumption in large-scale distributed networks.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://eng.ox.ac.uk/people/martin-wafula/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all hover:scale-105"
              >
                Oxford Profile
              </a>
              <a
                href="https://scholar.google.com/citations?user=oVgDqvgAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all hover:scale-105"
              >
                Google Scholar
              </a>
              <a
                href="https://www.researchgate.net/profile/Martin-Wafula-4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all hover:scale-105"
              >
                ResearchGate
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-24"
        >
          <p className="text-gray-400 text-lg mb-6">
            Interested in collaboration or discussing research opportunities?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}