import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Shield, Radio } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const experience = [
    {
      title: "Teaching Fellow",
      org: "Strathmore School of Computing and Engineering Sciences",
      period: "Aug 2025 – Present",
      location: "Nairobi, Kenya (Hybrid)",
      description:
        "Part-time teaching role at Strathmore University's School of Computing and Engineering Sciences.",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Graduate Teaching Assistant & Senior Lab Demonstrator",
      org: "University of Oxford, Department of Engineering Science",
      period: "Jan 2024 – Dec 2025",
      location: "Oxford, UK",
      description:
        "Tutorial teaching in Digital Communication Systems. Laboratory demonstration for A5 Communications lab and B12 Semiconductors Lab.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Engineering Tutor",
      org: "Immerse Education",
      period: "Jul 2023 – Aug 2023",
      location: "Oxford, UK",
      description:
        "Tutored Engineering Science to summer school students aged 13-18, covering calculus, digital electronics, radio wave propagation, material science, renewable energy, and engineering ethics.",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Scholar Programs Facilitator",
      org: "Rhodes Trust",
      period: "Sep 2022 – Dec 2025",
      location: "Oxford, UK",
      description:
        "Advised on programming for Scholar experience, supported scholars and staff, and led scholar projects with a focus on Accessibility workstream.",
      icon: GraduationCap,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Privacy Engineer (Consultant)",
      org: "Data Praesum",
      period: "Aug 2021 – Jan 2024",
      location: "Nairobi, Kenya",
      description:
        "Developed technical solutions to mitigate privacy vulnerabilities, facilitate scientific research, document data processes, and streamline operating procedures for clients.",
      icon: Shield,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Laboratory Demonstrator",
      org: "University of Oxford",
      period: "Oct 2020 – Dec 2025",
      location: "Oxford, UK",
      description:
        "Carried out lab demonstrations for undergraduate labs including A5 Communications lab and B12 Semiconductors Lab.",
      icon: GraduationCap,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "IT Risk Assurance Associate",
      org: "PricewaterhouseCoopers (PwC) Kenya",
      period: "Sep 2018 – Jan 2020",
      location: "Nairobi, Kenya",
      description:
        "Conducted ICT audits, SAP systems reviews, database security reviews, cyber security assessments, and IT risk audits. Worked with major clients including Safaricom, Stanbic Bank, and UBA.",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Head of Creativity and Innovation Division",
      org: "Sauti ya Vijana Isikike",
      period: "Mar 2018 – Aug 2023",
      location: "Ngong, Kenya",
      description:
        "Led the Creativity and Innovation Division for this youth-focused organization.",
      icon: Briefcase,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Frequency Spectrum Management Engineer",
      org: "Communication Authority of Kenya",
      period: "Jul 2018 – Sep 2018",
      location: "Nairobi, Kenya",
      description:
        "Internship in Frequency and Spectrum Management Department covering frequency licensing, data management, frequency planning, and monitoring.",
      icon: Radio,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Part-Time Teaching Assistant",
      org: "Multimedia University of Kenya",
      period: "May 2018 – Sep 2018",
      location: "Nairobi, Kenya",
      description:
        "Taught Data Communications and Computer Networking (ECE 1316) and Electrical Engineering Principles IV (ECE 1225). Led simulations using Packet Tracer and MATLAB, and administered assessments.",
      icon: GraduationCap,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Enterprise Customer Support Engineer",
      org: "Safaricom Limited",
      period: "Nov 2017 – Feb 2018",
      location: "Nairobi, Kenya",
      description:
        "Internship providing enterprise customer support services, domain and email troubleshooting, and WiMAX troubleshooting.",
      icon: Radio,
      color: "from-lime-500 to-green-500"
    },
    {
      title: "Telecommunications Engineer",
      org: "Elris Communications Services Limited",
      period: "Oct 2017 – Nov 2017",
      location: "Nairobi, Kenya",
      description:
        "Installation and integration of internet, MPLS, and fiber solutions for Safaricom Enterprise Customers. Microwave installation, commissioning, and maintenance. Router and switch configuration.",
      icon: Radio,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Telecommunication Engineering Intern",
      org: "Multimedia University of Kenya",
      period: "Jun 2016 – Sep 2016",
      location: "Nairobi, Kenya",
      description:
        "Testing and installation of equipment including microwaves, antennas, transmission lines, mobile phone kits. Worked with PLCs from Festo, Siemens, Allen Bradley, and Mitsubishi.",
      icon: Briefcase,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Electrical and Telecommunication Engineering Intern",
      org: "Mumias Sugar Co. Ltd",
      period: "May 2015 – Aug 2015",
      location: "Mumias, Kenya",
      description:
        "Participated in installation of automated bagging and palletizing machines. Worked with PLCs, SCADA, DCS, fiber optic transmission, electrical machines, motor control, and power co-generation systems.",
      icon: Briefcase,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Telecom Engineer Intern",
      org: "Kitale Law Courts",
      period: "Jul 2014 – Sep 2014",
      location: "Kitale, Kenya",
      description:
        "Installation and maintenance of networking equipment, network troubleshooting. Gained experience with CISCO standards and equipment.",
      icon: Radio,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "IT Intern",
      org: "Kenya Seed Company Ltd",
      period: "May 2014 – Jul 2014",
      location: "Kitale, Kenya",
      description:
        "Network installation and maintenance, security updates, troubleshooting network failures, software and hardware installation. Worked with PoE switches and Cisco routers.",
      icon: Briefcase,
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "Untrained Teacher (Mathematics/Physics)",
      org: "St John the Baptist Boys Secondary School",
      period: "Jan 2012 – Sep 2013",
      location: "Likuyani, Kenya",
      description:
        "Taught Mathematics and Physics at secondary school level.",
      icon: GraduationCap,
      color: "from-fuchsia-500 to-purple-500"
    }
  ];

  const navigate = useNavigate();

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
            A journey through academia, engineering, and technology; from telecommunications to Oxford's research labs
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