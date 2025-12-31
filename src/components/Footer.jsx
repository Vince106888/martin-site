import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Twitter, Github, ExternalLink, BookOpen, GraduationCap, Award, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/teaching', label: 'Teaching' },
    { href: '/experience', label: 'Experience' },
    { href: '/cv', label: 'CV' },
    { href: '/contact', label: 'Contact' },
  ];

  const externalLinks = [
    {
      href: 'https://eng.ox.ac.uk/people/martin-wafula/',
      label: 'Oxford Profile',
      icon: GraduationCap
    },
    {
      href: 'https://scholar.google.com/citations?user=oVgDqvgAAAAJ',
      label: 'Google Scholar',
      icon: BookOpen
    },
    {
      href: 'https://www.researchgate.net/profile/Martin-Wafula-4',
      label: 'ResearchGate',
      icon: Award
    },
    {
      href: 'https://wachiyem-74351.medium.com',
      label: 'Medium Blog',
      icon: ExternalLink
    },
  ];

  const socialLinks = [
    {
      href: 'mailto:martin.wafula@ieee.org',
      icon: Mail,
      label: 'Email',
      display: 'martin.wafula@ieee.org'
    },
    {
      href: 'https://www.linkedin.com/in/martin-wafula',
      icon: Linkedin,
      label: 'LinkedIn',
      display: '@martin-wafula'
    },
    {
      href: 'https://twitter.com/martin_wachiye',
      icon: Twitter,
      label: 'Twitter',
      display: '@martin_wachiye'
    },
    {
      href: 'tel:+254790511534',
      icon: Phone,
      label: 'Phone',
      display: '+254 790 511 534'
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Martin Wafula
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              DPhil Candidate in Engineering Science at the University of Oxford. 
              Rhodes Scholar specializing in graph compression, information theory, and wireless networks.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for collaboration</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* External Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Academic Profiles</h3>
            <div className="space-y-3">
              {externalLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition ml-auto" />
                  </a>
                );
              })}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-bold mb-6">Get in Touch</h3>
            <div className="space-y-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">{social.label}</div>
                      <div className="text-gray-300">{social.display}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-12 border-t border-slate-800"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Location</h3>
                  <p className="text-gray-400 text-sm">Based in Nairobi, Kenya</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Currently splitting time between Oxford, UK and Nairobi, Kenya. 
                Available for in-person meetings in Nairobi and virtual consultations worldwide.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm text-gray-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Nairobi, Kenya
                </span>
                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm text-gray-300 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                  Oxford, UK
                </span>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853950754!2d36.70730744863281!3d-1.3028618999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nairobi, Kenya Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
                <p className="text-white font-semibold text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Martin Wachiye Wafula. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                DPhil Candidate • Rhodes Scholar • IEEE Member
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://www.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 text-xs transition flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                IEEE Member
              </a>
              <a
                href="https://www.rhodeshouse.ox.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-400 text-xs transition flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Rhodes Trust
              </a>
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="pb-6 text-center">
          <p className="text-gray-600 text-xs flex items-center justify-center gap-2">
            Built with <Heart className="w-3 h-3 text-red-500 animate-pulse" /> for the community
          </p>
        </div>
      </div>
    </footer>
  );
}