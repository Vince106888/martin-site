import { motion } from "framer-motion";
import { Heart, Compass, Sparkles, Globe, BookHeart, Users, MessageCircle, Target, Map, Lightbulb } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Making Knowledge Accessible",
      description: "Committed to breaking down complex ideas and democratizing access to opportunities, from Rhodes Scholarship guidance across East Africa to creating learning resources for students worldwide.",
      icon: BookHeart,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Community Upliftment",
      description: "Strong belief in giving back and empowering the next generation through mentorship, outreach initiatives, and active engagement with STEM communities in Kenya and beyond.",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Interdisciplinary Curiosity",
      description: "Embraces the intersection of engineering, culture, and creativity, from graph theory to Swahili poetry, from wireless networks to choir performances.",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Continuous Growth",
      description: "Dedicated to lifelong learning and pushing boundaries, whether mastering new technologies, exploring research frontiers, or developing new teaching methodologies.",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];

  const journey = [
    {
      phase: "Early Foundations",
      period: "Growing up in Kenya",
      story: "Developed an early fascination with how things work, from radio signals to network systems. This curiosity led to pursuing telecommunications engineering, driven by a desire to contribute to Africa's technological advancement.",
      icon: Compass
    },
    {
      phase: "Academic Excellence",
      period: "Multimedia University of Kenya",
      story: "Graduated with First-Class Honours in Telecommunication & Information Engineering. Active in IEEE as Student Activities Coordinator for Kenya Section, balancing rigorous academics with community engagement and leadership development.",
      icon: Sparkles
    },
    {
      phase: "Industry Experience",
      period: "2015 - 2020",
      story: "Gained practical experience across telecommunications (Safaricom, Communication Authority of Kenya) and IT risk assurance (PwC), bridging theory and real-world applications while understanding the commercial impact of engineering decisions.",
      icon: Globe
    },
    {
      phase: "Rhodes Scholar",
      period: "2020 - Present",
      story: "Selected as Rhodes Scholar for Kenya & Oriel 2019. Now pursuing DPhil at Oxford while actively mentoring prospective scholars and serving as Scholar Programs Facilitator, committed to expanding opportunities for others.",
      icon: Heart
    }
  ];

  const interests = [
    "Swahili Poetry & Recitation",
    "Choir Singing & Music",
    "STEM Outreach & Mentorship",
    "Technology Blogging",
    "Cultural Exchange",
    "Community Service",
    "Hiking & Nature",
    "Traveling & Exploring"
  ];

  const philosophies = [
    {
      quote: "Teaching is about making complex ideas accessible and fostering curiosity that extends beyond the classroom.",
      context: "On Education"
    },
    {
      quote: "The best opportunities often come when you're brave enough to pursue ambitious goals while staying grounded in service to others.",
      context: "On Career"
    },
    {
      quote: "Engineering isn't just about building systems—it's about solving problems that improve lives and create opportunities.",
      context: "On Engineering"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Header */}
        <div className="text-center space-y-6 mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
              About Martin
            </h1>
            <p className="text-2xl text-gray-300 font-light">
              Engineer • Lecturer • Scholar • Mentor • Community Builder
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A journey from Kenya to Oxford, driven by curiosity, service, and a commitment to making complex ideas accessible
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Introduction - Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
        >
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              I'm Martin Wachiye Wafula, a <span className="text-white font-semibold">DPhil candidate in Engineering Science at the University of Oxford</span> and <span className="text-white font-semibold">Rhodes Scholar</span>. My journey has taken me from the vibrant tech landscape of Nairobi to the historic halls of Oxford, but my mission remains constant: <span className="text-blue-300">advancing engineering knowledge while making it accessible to others</span>.
            </p>
            <p>
              Growing up in Kenya, I was fascinated by the power of communication systems to connect people and transform societies. This curiosity evolved into a career spanning telecommunications engineering, IT risk assurance, and now cutting-edge research in <span className="text-purple-300">graph compression and wireless networks</span>.
            </p>
            <p>
              But my passion extends beyond research papers and lab work. I believe deeply in <span className="text-pink-300">community service, mentorship, and creating pathways for others</span>. Whether I'm guiding students through Rhodes Scholarship applications, teaching networking concepts at Strathmore University, or sharing technical insights on Medium, I'm driven by the belief that knowledge becomes truly powerful when shared.
            </p>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            My Journey
          </motion.h2>

          <div className="space-y-8">
            {journey.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-3 shadow-lg">
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-bold text-white">{stage.phase}</h3>
                      <p className="text-blue-400 font-medium">{stage.period}</p>
                      <p className="text-gray-300 leading-relaxed">{stage.story}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Core Values & Beliefs
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} p-3 mb-5 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Personal Philosophies */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"
          >
            Personal Philosophies
          </motion.h2>

          <div className="space-y-6">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <p className="text-xl text-gray-200 italic leading-relaxed">
                      "{item.quote}"
                    </p>
                    <p className="text-sm text-gray-500 font-medium">— {item.context}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beyond Engineering */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-3 shadow-lg">
                <Heart className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl font-bold">Beyond Engineering</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Life isn't just about equations and algorithms. I find joy and inspiration in diverse pursuits that fuel my creativity and keep me grounded.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-slate-700 to-slate-800 text-gray-200 rounded-full border border-slate-600 hover:border-slate-500 transition-all shadow"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed text-lg pt-4">
                From <span className="text-blue-300 font-semibold">reciting Swahili poetry</span> to <span className="text-purple-300 font-semibold">singing in choirs</span>, these activities remind me of the importance of cultural identity, artistic expression, and the human connections that transcend technical disciplines. They also inform my approach to teaching and mentorship—bringing empathy, creativity, and cultural awareness to engineering education.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Want to collaborate, discuss research, or learn about scholarship opportunities?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}