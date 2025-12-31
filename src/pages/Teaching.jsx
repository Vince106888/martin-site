import { ExternalLink, BookOpen, Users, Lightbulb, GraduationCap, Presentation, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Teaching() {
  const courses = [
    {
      title: "CNS 3201 – Internetworking & Communications",
      institution: "Strathmore University",
      period: "Aug 2025 - Present",
      type: "Part-time Teaching Fellow",
      description: "Teaching advanced networking concepts including TCP/IP protocols, routing algorithms, DNS architecture, email systems, HAProxy load balancing, and OpenLDAP directory services. Combines theoretical foundations with hands-on laboratory work and real-world network design assignments.",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Communication Systems",
      institution: "University of Oxford, Department of Engineering Science",
      period: "Jan 2024 - Dec 2025",
      type: "Graduate Teaching Assistant (Tutorial Teaching)",
      description: "Delivered tutorial sessions for undergraduate engineering students covering digital modulation schemes, channel coding, information theory, and modern communication system design. Facilitated problem-solving discussions and exam preparation.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "A5 Communications & B12 Semiconductors Labs",
      institution: "University of Oxford",
      period: "Oct 2020 - Dec 2025",
      type: "Senior Laboratory Demonstrator",
      description: "Led practical laboratory sessions for 5+ years, guiding students through experiments in communication systems, semiconductor physics, and circuit design. Provided hands-on mentorship and troubleshooting support during experimental work.",
      icon: Lightbulb,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Computer Networks & Communication Engineering",
      institution: "Multimedia University of Kenya",
      period: "2020 - 2022",
      type: "Lecturer",
      description: "Taught Computer Networks (CNS 3201) covering OSI/TCP-IP models, network protocols, routing, switching, and network security. Also delivered Introduction to Communication Engineering covering signal processing, modulation techniques, and communication system fundamentals.",
      icon: BookOpen,
      color: "from-orange-500 to-red-500"
    },
  ];

  const workshops = [
    {
      title: "Rhodes Scholarship Application Guidance",
      event: "Multiple Universities Across East Africa",
      date: "Jul - Aug 2025",
      description: "Facilitated information sessions for students and faculty members at MUHAS (Tanzania) and other institutions on navigating the Rhodes Scholarship application process. Shared firsthand experience and insights on crafting competitive applications for this prestigious opportunity.",
      link: "https://www.linkedin.com/posts/martin-wafula_rhodes-scholarship-application-for-east-activity-7217864982456242176-yf-E",
      icon: Presentation,
      highlight: true
    },
    {
      title: "Major Decisions: Engineering Specializations Panel",
      event: "Strathmore School of Computing & Engineering Sciences",
      date: "Oct 2024",
      description: "Participated as a panelist discussing engineering career paths, work-life balance, and opportunities in AI, telecommunications, and power systems. Provided insights on creating opportunities for innovation and research in Africa's growing tech landscape.",
      link: "https://www.linkedin.com/posts/strathmore-school-of-computing-and-engineering-sciences_last-friday-the-strathmore-school-of-computing-activity-7251914695447842816-gVZE",
      icon: Users
    },
    {
      title: "Graph Signal Processing Tutorial",
      event: "IEEE DeKUT SPS Launch",
      date: "2023",
      description: "Delivered a technical tutorial on Graph Signal Processing fundamentals and its applications to Graph Neural Networks and Wireless Sensor Networks. Covered mathematical foundations and practical implementations for engineering students.",
      icon: Lightbulb
    },
    {
      title: "Postgraduate Scholarship & Career Planning",
      event: "Multimedia University of Kenya Career Talks",
      date: "2024",
      description: "Shared comprehensive guidance with MMU students on postgraduate scholarship applications, academic progression strategies, and long-term career planning. Emphasized the importance of research experience and extracurricular engagement.",
      link: "https://www.mmu.ac.ke/2024/01/03/mmu-alumnus-and-rhodes-scholarship-beneficiary/",
      icon: GraduationCap
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
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
              Teaching & Mentorship
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering the next generation of engineers through hands-on instruction, academic guidance, and mentorship across continents
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Teaching Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-3 shadow-lg">
              <Heart className="w-full h-full text-white" />
            </div>
            <h2 className="text-3xl font-bold">Teaching Philosophy</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Teaching is about <strong className="text-white">making complex ideas accessible</strong> and fostering curiosity that extends beyond the classroom. I believe in equipping students with both theoretical foundations and practical tools they can apply in research and industry contexts.
            </p>
            <p>
              My approach emphasizes <strong className="text-white">hands-on experience</strong>, problem-driven learning, and real-world applications. Whether in Oxford's engineering labs or Kenyan universities, I create environments where students feel empowered to ask questions, experiment freely, and take ownership of their intellectual growth.
            </p>
            <p className="text-blue-300 italic">
              "The best teaching happens when students discover solutions themselves, guided by thoughtful questions and practical challenges."
            </p>
          </div>
        </motion.div>

        {/* Courses Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Courses & Teaching Roles
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} p-3 mb-5 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {course.title}
                    </h3>
                    
                    <p className={`text-lg font-semibold bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}>
                      {course.institution}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {course.type}
                      </span>
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {course.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed pt-2">
                      {course.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Workshops & Outreach */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"
          >
            Workshops & Student Outreach
          </motion.h2>

          <div className="space-y-6">
            {workshops.map((workshop, index) => {
              const Icon = workshop.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border transition-all hover:shadow-xl ${
                    workshop.highlight 
                      ? 'border-purple-500/50 hover:border-purple-400/60' 
                      : 'border-slate-700/50 hover:border-slate-600/50'
                  }`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl ${
                        workshop.highlight 
                          ? 'bg-gradient-to-br from-purple-500 to-pink-600' 
                          : 'bg-gradient-to-br from-blue-500 to-cyan-600'
                      } p-2.5 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {workshop.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 items-center text-sm">
                          <span className="text-gray-400">{workshop.event}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-500">{workshop.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {workshop.description}
                      </p>

                      {workshop.link && (
                        <a
                          href={workshop.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group"
                        >
                          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                          View Details
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mentorship Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 shadow-lg">
              <Users className="w-full h-full text-white" />
            </div>
            <h2 className="text-3xl font-bold">Beyond the Classroom</h2>
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Teaching extends far beyond formal lectures. As a <strong className="text-white">Rhodes Scholar Programs Facilitator</strong>, I've advised and supported scholars from diverse backgrounds, helping shape their academic journey at Oxford.
            </p>
            <p>
              I'm passionate about <strong className="text-white">democratizing access to opportunities</strong>—whether through Rhodes Scholarship guidance sessions across East Africa, career planning workshops at Kenyan universities, or one-on-one mentorship with students navigating their academic paths.
            </p>
            <p>
              My approach integrates mentorship into teaching through Q&A sessions, project guidance, and research direction for prospective postgraduate students, always emphasizing <span className="text-blue-300">originality, excellence, and the courage to pursue ambitious goals</span>.
            </p>
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
            Interested in collaboration, mentorship, or inviting me to speak?
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