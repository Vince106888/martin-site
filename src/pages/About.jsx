import { motion } from "framer-motion";
import { Heart, Compass, Sparkles, Globe, BookHeart, Users, MessageCircle, Target, Lightbulb, Award, Code } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Making Knowledge Accessible",
      description: "Deeply committed to democratizing access to opportunities and breaking down complex ideas. From guiding Rhodes Scholarship applicants across East Africa to creating learning resources and teaching at multiple institutions.",
      icon: BookHeart,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Community Upliftment",
      description: "Strong believer in giving back through active engagement with STEM communities. Led youth empowerment programs in Kajiado County focused on education, innovation, and supporting the boy child against drug abuse and school dropouts.",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Interdisciplinary Excellence",
      description: "Thrives at the intersection of engineering, culture, and creativity. From information theory and graph compression to Swahili poetry recitation and choir singing—embracing both technical rigor and artistic expression.",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Research Impact",
      description: "Focused on advancing fundamental knowledge in graph theory, network topology inference, and next-generation wireless networks while ensuring research has practical applications for future communication systems.",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];

  const journey = [
    {
      phase: "Early Foundations",
      period: "Growing Up in Kenya",
      story: "Developed an early fascination with communication systems and their power to transform societies. This curiosity, combined with a passion for mathematics and physics, set the foundation for a career in telecommunications engineering.",
      icon: Compass
    },
    {
      phase: "Academic Excellence",
      period: "2014 - 2018",
      story: "Graduated with First-Class Honours in Telecommunication & Information Engineering from Multimedia University of Kenya. Served as IEEE Student Activities Coordinator for Kenya Section, balancing rigorous academics with leadership and community engagement.",
      icon: Award
    },
    {
      phase: "Professional Growth",
      period: "2015 - 2020",
      story: "Built diverse experience across telecommunications (Safaricom, Communication Authority of Kenya, Elris Communications) and IT risk assurance (PwC Kenya), working with major clients on system audits, network implementations, and enterprise solutions.",
      icon: Globe
    },
    {
      phase: "Rhodes Scholar Journey",
      period: "2019 - Present",
      story: "Selected as one of two Kenya Rhodes Scholars for 2019 (Kenya & Oriel). Commenced DPhil at Oxford in January 2020 under Prof. Justin P. Coon's supervision. Now actively mentoring prospective scholars and serving as Scholar Programs Facilitator at Rhodes House.",
      icon: Heart
    },
    {
      phase: "Academic Leadership",
      period: "2020 - Present",
      story: "Expanded teaching portfolio across Multimedia University of Kenya (2020-2022), University of Oxford (Lab Demonstrator and Teaching Assistant), Immerse Education, and currently at Strathmore University while conducting cutting-edge DPhil research.",
      icon: Code
    }
  ];

  const interests = [
    "Swahili Poetry & Recitation",
    "Choir Singing & Music",
    "STEM Outreach & Mentorship",
    "Technology Blogging (Medium)",
    "Rhodes Scholarship Guidance",
    "Community Service & Rotaract",
    "MATLAB & Programming",
    "Hiking & Exploring Nature"
  ];

  const philosophies = [
    {
      quote: "Teaching is about making complex ideas accessible and fostering curiosity that extends far beyond the classroom walls.",
      context: "On Education & Mentorship"
    },
    {
      quote: "The best opportunities come when you're brave enough to pursue ambitious goals while staying grounded in service to others and your community.",
      context: "On Career & Purpose"
    },
    {
      quote: "Engineering isn't just about building systems—it's about solving real problems that improve lives, connect communities, and create new opportunities.",
      context: "On Engineering Impact"
    },
    {
      quote: "Research excellence and community service are not competing priorities—they reinforce each other and make both more meaningful.",
      context: "On Balancing Academia & Service"
    }
  ];

  const achievements = [
    "Rhodes Scholarship for Kenya & Oriel (2019)",
    "First-Class Honours in Telecommunication & Information Engineering",
    "IEEE Student Activities Coordinator, Kenya Section",
    "Scholar Programs Facilitator, Rhodes Trust",
    "Published research in graph theory and wireless networks",
    "Multiple teaching roles across 3 countries"
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
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
              Engineer • Researcher • Educator • Rhodes Scholar • Mentor
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A journey from Kenya to Oxford, driven by curiosity, service, and a passion for making complex ideas accessible to all
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
              I'm <span className="text-white font-semibold">Martin Wachiye Wafula</span>, currently a lecturer at <span className="text-blue-300 font-semibold">Strathmore University</span> and <span className="text-purple-300 font-semibold">Multimedia University of Kenya</span>, having recently completed my DPhil in Engineering Science at the University of Oxford as a <span className="text-cyan-300">Rhodes Scholar (Kenya & Oriel, 2019)</span>. My journey has taken me from the vibrant tech landscape of Nairobi to the historic halls of Oxford and back, with one constant mission: advancing engineering knowledge while making it accessible to everyone.
            </p>
            <p>
              Growing up in Kenya, I was captivated by the power of communication systems to connect people and transform societies. This fascination evolved into a multifaceted career spanning <span className="text-emerald-300">telecommunications engineering, IT risk assurance, privacy engineering, and cutting-edge research</span> in graph compression, network topology inference, and next-generation wireless networks.
            </p>
            <p>
              During my time at Oxford, I worked under <span className="text-white font-semibold">Prof. Justin P. Coon</span> in the Communications Research Group, focusing on information-theoretic approaches to lossless and lossy compression of random graphs, topology discovery in IoT networks, and future wireless communication systems. I also served as a Graduate Teaching Assistant, Laboratory Demonstrator, and Scholar Programs Facilitator at Rhodes House.
            </p>
            <p>
              Now back in Kenya, I'm channeling that experience into <span className="text-pink-300">teaching the next generation of engineers</span> while continuing my commitment to mentorship and community service. Whether I'm in the lecture hall, guiding students through Rhodes Scholarship applications, or leading youth empowerment programs, I believe knowledge becomes truly powerful when it's shared and made accessible to all.
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

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-3 shadow-lg">
              <Award className="w-full h-full text-white" />
            </div>
            <h2 className="text-3xl font-bold">Key Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-700/30"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Philosophies */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400"
          >
            Guiding Philosophies
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
              <h2 className="text-3xl font-bold">Beyond the Lab</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Life isn't just about equations, algorithms, and research papers. I find joy and inspiration in diverse pursuits that fuel my creativity, keep me grounded, and connect me to my cultural roots.
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
                From <span className="text-blue-300 font-semibold">reciting Swahili poetry</span> to <span className="text-purple-300 font-semibold">singing in choirs</span>, these activities remind me of the importance of cultural identity, artistic expression, and the human connections that transcend technical disciplines. As a <span className="text-emerald-300 font-semibold">Rotaractor</span> and community leader, I'm also passionate about youth empowerment, particularly programs supporting the boy child in Kajiado County against drug abuse and school dropouts.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                These diverse experiences inform my approach to teaching and mentorship—bringing <span className="text-pink-300">empathy, creativity, and cultural awareness</span> to engineering education and research collaboration.
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
            Interested in collaboration, research discussions, or guidance on Rhodes Scholarships?
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