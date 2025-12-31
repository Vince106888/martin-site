import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, Send, MessageSquare, Calendar, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      primary: "martin.wafula@eng.ox.ac.uk",
      secondary: "martin.wafula@ieee.org",
      href: "mailto:martin.wafula@eng.ox.ac.uk",
      color: "from-blue-500 to-cyan-500",
      description: "Best for research inquiries and collaborations"
    },
    {
      icon: Phone,
      label: "Phone",
      primary: "+254 790 511 534",
      secondary: "Available via WhatsApp",
      href: "tel:+254790511534",
      color: "from-emerald-500 to-teal-500",
      description: "For urgent matters and quick discussions"
    },
    {
      icon: MapPin,
      label: "Location",
      primary: "Oxford, United Kingdom",
      secondary: "Nairobi, Kenya",
      color: "from-purple-500 to-pink-500",
      description: "Based between Oxford and Nairobi"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "@martin-wafula",
      href: "https://www.linkedin.com/in/martin-wafula",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      handle: "@martin_wachiye",
      href: "https://twitter.com/martin_wachiye",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: Globe,
      label: "Medium",
      handle: "@wachiyem",
      href: "https://wachiyem-74351.medium.com",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Globe,
      label: "Google Scholar",
      handle: "Research Profile",
      href: "https://scholar.google.com/citations?user=oVgDqvgAAAAJ",
      color: "from-red-500 to-orange-500"
    }
  ];

  const availabilityInfo = [
    {
      icon: MessageSquare,
      title: "Open to Discussions",
      items: [
        "Research collaborations & consultations",
        "Speaking engagements & guest lectures",
        "Mentorship for prospective scholars",
        "Technical writing & knowledge sharing"
      ]
    },
    {
      icon: Calendar,
      title: "Response Time",
      items: [
        "Email responses within 24-48 hours",
        "LinkedIn messages checked regularly",
        "For urgent matters, please call",
        "Best availability: UK working hours (GMT)"
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
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
              Get in Touch
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're interested in collaboration, have questions about my research, 
            or want to discuss scholarship opportunities—I'd love to hear from you
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Contact Methods */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
          >
            Contact Information
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} p-4 mb-6 shadow-lg mx-auto`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    {method.label}
                  </h3>

                  <div className="space-y-2 text-center">
                    {method.href ? (
                      <a
                        href={method.href}
                        className="block text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                      >
                        {method.primary}
                      </a>
                    ) : (
                      <p className="text-blue-400 font-semibold">{method.primary}</p>
                    )}
                    <p className="text-gray-400 text-sm">{method.secondary}</p>
                  </div>

                  <p className="text-gray-300 text-sm text-center mt-4 pt-4 border-t border-slate-700">
                    {method.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Connect Online
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700/50 hover:border-slate-600/50 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} p-3 mb-4 shadow-lg mx-auto group-hover:shadow-xl transition-shadow`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    {social.label}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {social.handle}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-blue-400 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Availability & Response Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {availabilityInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 shadow-lg">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{info.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {info.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Message Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-3 shadow-lg">
              <Send className="w-full h-full text-white" />
            </div>
            <h2 className="text-3xl font-bold">Prefer Email?</h2>
          </div>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              For research collaborations, speaking invitations, or scholarship inquiries, 
              please email me directly at <a href="mailto:martin.wafula@eng.ox.ac.uk" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">martin.wafula@eng.ox.ac.uk</a>.
            </p>
            <p className="text-lg leading-relaxed">
              When reaching out, feel free to include:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Brief introduction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Purpose of contact</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Relevant background</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Preferred meeting times</span>
              </li>
            </ul>
            
            <motion.a
              href="mailto:martin.wafula@eng.ox.ac.uk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all mt-6"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </motion.a>
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
          <p className="text-lg">
            Looking forward to connecting with you! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}