"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Download,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

interface CvSection {
  title: string;
  icon: typeof FileText;
  points: string[];
  gradient: string;
}

const sections: CvSection[] = [
  {
    title: "Education",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    points: [
      "DPhil Candidate, Engineering Science - University of Oxford (Jan 2020 - Present)",
      "BSc Telecommunication and Information Engineering - First Class Honours (JKUAT)",
      "Academic training in communication and information engineering",
    ],
  },
  {
    title: "Research and Publications",
    icon: BookOpen,
    gradient: "from-purple-500 to-pink-500",
    points: [
      "IEEE ISIT 2024: On the Lossy Compression of Spatial Networks",
      "Asilomar 2023: Rate-Distortion Function of the Stochastic Block Model",
      "Research focus in graph compression, information theory, and communication systems",
    ],
  },
  {
    title: "Leadership and Service",
    icon: Users,
    gradient: "from-emerald-500 to-teal-500",
    points: [
      "Scholar Programs Facilitator - Rhodes Trust",
      "Graduate student representative roles in Oxford Engineering Science",
      "Active IEEE membership and society participation",
    ],
  },
  {
    title: "Professional Practice",
    icon: ShieldCheck,
    gradient: "from-orange-500 to-red-500",
    points: [
      "Teaching Fellow - Strathmore School of Computing and Engineering Sciences (Aug 2025 - Present)",
      "IT Risk Assurance Associate - PwC Kenya",
      "Telecommunications and engineering roles across Safaricom and CAK",
      "University teaching and laboratory mentorship across Kenya and the UK",
    ],
  },
];

const highlights = [
  { title: "Current Appointment", detail: "Teaching Fellow at Strathmore University", icon: GraduationCap, gradient: "from-blue-500 to-cyan-500" },
  { title: "First Class Honours", detail: "Telecommunication and Information Engineering", icon: Award, gradient: "from-yellow-500 to-orange-500" },
  { title: "5+ Years", detail: "Oxford teaching and laboratory contribution", icon: Star, gradient: "from-blue-500 to-purple-500" },
  { title: "IEEE Publications", detail: "ISIT 2024 and Asilomar 2023", icon: BookOpen, gradient: "from-emerald-500 to-teal-500" },
];

const skills = [
  { category: "Programming", items: ["Python", "MATLAB"] },
  { category: "Tools", items: ["PyTorch", "Google Colab", "Cisco Packet Tracer"] },
  { category: "Research", items: ["Information Theory", "Graph Theory", "Communication Systems"] },
  { category: "Professional", items: ["Teaching", "Technical Writing", "Mentorship", "Project Delivery"] },
];

export default function CvPage() {
  return (
    <section className="page-shell py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <header className="panel bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10">
          <p className="kicker">Curriculum Vitae</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-100">Academic and professional record</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-900 dark:text-slate-300">
            The CV captures verified academic credentials, research outputs, teaching portfolio, leadership roles,
            certifications, and industry-facing engineering experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/Martin_Wafula__CV__2025.pdf" download className="action-primary"><Download className="h-4 w-4" /> Download PDF</a>
            <a href="/Martin_Wafula__CV__2025.pdf" target="_blank" rel="noopener noreferrer" className="action-secondary"><Eye className="h-4 w-4" /> Preview online</a>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }} className="panel text-center">
                <div className={`mx-auto inline-flex rounded-2xl bg-gradient-to-br ${item.gradient} p-3 text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-900 dark:text-slate-300">{item.detail}</p>
              </motion.article>
            );
          })}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article key={section.title} initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="panel">
                <div className={`inline-flex rounded-2xl bg-gradient-to-br ${section.gradient} p-3 text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{section.title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-900 dark:text-slate-300">
                  {section.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </motion.article>
            );
          })}
        </section>

        <section>
          <div className="mb-5">
            <p className="kicker">Skills and Expertise</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Technical profile</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((block) => (
              <article key={block.category} className="panel-soft">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-800 dark:text-slate-400">{block.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {block.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-300 bg-blue-50/80 px-3 py-1 text-xs font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel-soft">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Related profiles</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/publications" className="action-secondary">Publications</a>
            <a href="https://eng.ox.ac.uk/people/martin-wafula/" target="_blank" rel="noopener noreferrer" className="action-secondary">Oxford Profile <ExternalLink className="h-4 w-4" /></a>
            <a href="https://scholar.google.com/citations?user=oVgDqvgAAAAJ" target="_blank" rel="noopener noreferrer" className="action-secondary">Google Scholar <ExternalLink className="h-4 w-4" /></a>
          </div>
        </section>
      </div>
    </section>
  );
}




