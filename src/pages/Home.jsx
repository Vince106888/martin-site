import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, ChevronDown, BookOpen, Award, GraduationCap, Users, ExternalLink, Github, Linkedin, Twitter, MapPin } from "lucide-react";

// Image Rotator Component
function ImageRotator({ images, interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === current ? "opacity-30" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with rotating images */}
      <ImageRotator
        images={[
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80",
        ]}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-purple-950/95"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Martin Wachiye Wafula
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              DPhil Candidate in Engineering Science
            </p>
            <div className="flex items-center justify-center gap-3 text-blue-300">
              <GraduationCap className="w-5 h-5" />
              <span className="text-lg">University of Oxford</span>
              <span className="text-gray-500">•</span>
              <span className="text-lg">Rhodes Scholar</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering research in <span className="text-blue-300 font-semibold">graph compression</span> and <span className="text-purple-300 font-semibold">spatial networks</span>. 
            Bridging information theory with next-generation wireless systems to solve complex real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center pt-8"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="#publications"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all flex items-center gap-2 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              View Publications
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a <span className="font-semibold text-blue-600">DPhil candidate at the University of Oxford</span>, 
              conducting cutting-edge research in Engineering Science under the guidance of Prof. Justin P. Coon. 
              My work focuses on developing information-theoretic frameworks for efficient graph processing and wireless network optimization.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a <span className="font-semibold text-purple-600">Rhodes Scholar</span>, I'm passionate about making 
              complex engineering concepts accessible through teaching and mentorship. I currently serve as a Teaching 
              Fellow at Strathmore University and have over 5 years of laboratory demonstration experience at Oxford.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond research, I'm committed to <span className="font-semibold">community service and expanding opportunities</span> for 
              students across East Africa through scholarship guidance and STEM outreach initiatives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              {[
                { icon: GraduationCap, label: "Institution", value: "University of Oxford" },
                { icon: Award, label: "Scholarship", value: "Rhodes Scholar 2019" },
                { icon: MapPin, label: "Based in", value: "Oxford, UK / Nairobi, Kenya" },
                { icon: Users, label: "Role", value: "Scholar Programs Facilitator" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-gray-800 font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Research Section
function Research() {
  const researchAreas = [
    {
      icon: BookOpen,
      title: "Graph Compression & Information Theory",
      items: [
        "Lossy compression of spatial networks and random geometric graphs",
        "Rate-distortion theory for stochastic block models",
        "Topology discovery in IoT and wireless sensor networks",
        "Information-theoretic frameworks for network optimization"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Key Publications & Contributions",
      items: [
        "IEEE ISIT 2024 — Lossy Compression of Spatial Networks",
        "Asilomar 2023 — Rate-Distortion of Stochastic Block Model",
        "Medium articles on graph compression fundamentals",
        "Multiple conference presentations and workshops"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="research" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Research & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.color} p-3 mb-6 shadow-lg`}>
                <area.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{area.title}</h3>
              <ul className="space-y-3">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function Stats() {
  const stats = [
    { value: "5+", label: "Years at Oxford", sublabel: "Lab Demonstrator" },
    { value: "2", label: "IEEE Publications", sublabel: "ISIT & Asilomar" },
    { value: "Rhodes", label: "Scholar 2019", sublabel: "Kenya & Oriel" },
    { value: "SPF", label: "Scholar Programs", sublabel: "Facilitator" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-blue-100 font-semibold">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:martin.wafula@eng.ox.ac.uk", color: "from-red-500 to-pink-500" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/martin-wafula", color: "from-blue-600 to-blue-700" },
    { icon: Github, label: "GitHub", href: "#", color: "from-gray-700 to-gray-900" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/martin_wachiye", color: "from-blue-400 to-blue-600" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Interested in collaboration, discussing research, or learning about scholarship opportunities? 
            I'd love to hear from you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} p-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <link.icon className="w-full h-full text-white" />
                </div>
                <span className="font-semibold text-gray-800">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Homepage Component
export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Research />
      <Stats />
      <Contact />
    </div>
  );
}