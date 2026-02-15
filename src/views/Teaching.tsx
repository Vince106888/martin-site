"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Heart, Lightbulb, Presentation, Users } from "lucide-react";

interface CourseItem {
  title: string;
  institution: string;
  period: string;
  role: string;
  description: string;
  gradient: string;
}

interface WorkshopItem {
  title: string;
  event: string;
  period: string;
  description: string;
  link?: string;
}

const courses: CourseItem[] = [
  {
    title: "CNS 3201 - Internetworking and Communications",
    institution: "Strathmore School of Computing and Engineering Sciences",
    period: "Aug 2025 - Present",
    role: "Teaching Fellow",
    description:
      "Current teaching-fellow role delivering advanced networking and communication systems content with practical, lab-oriented emphasis.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Wireless Communication Technologies, Signals and Systems, Digital Communication",
    institution: "Multimedia University of Kenya",
    period: "Teaching portfolio across prior lecturer and assistant roles",
    role: "Lecturer and Teaching Assistant",
    description:
      "Delivered communication engineering content with practical and simulation-led learning support in Kenyan university settings.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Communication Systems",
    institution: "University of Oxford",
    period: "Oct 2023 - Aug 2024",
    role: "Teaching Assistant",
    description:
      "Tutorial instruction focused on modulation methods, coding, and communication-system analysis for undergraduate engineers.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "A5 Communications and B12 Semiconductors Laboratories",
    institution: "University of Oxford",
    period: "Oct 2020 - Apr 2023",
    role: "Laboratory Demonstrator",
    description:
      "Guided practical experiments, report evaluation, and hands-on problem solving in communications and semiconductor labs.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Data Communications and Computer Networking",
    institution: "Multimedia University of Kenya",
    period: "May 2018 - Sep 2018",
    role: "Part-time Teaching Assistant",
    description:
      "Supported foundational networking and communication units through simulation-assisted and assignment-driven teaching.",
    gradient: "from-orange-500 to-red-500",
  },
];

const workshops: WorkshopItem[] = [
  {
    title: "Rhodes Scholarship Application Guidance",
    event: "East Africa student advising sessions",
    period: "Ongoing",
    description:
      "Mentorship sessions for prospective applicants, focusing on strategic preparation, personal narrative clarity, and interview readiness.",
    link: "https://www.linkedin.com/in/martin-wafula",
  },
  {
    title: "Engineering Specialization and Career Panels",
    event: "University and student forums",
    period: "2023 - Present",
    description:
      "Panel contributions on engineering career pathways, postgraduate planning, and balancing research depth with industry relevance.",
  },
  {
    title: "Graph Signal Processing and Technical Outreach",
    event: "Technical communities and student audiences",
    period: "Recent years",
    description:
      "Delivered accessible technical discussions connecting graph methods with modern communication and signal-processing applications.",
  },
  {
    title: "Scholar Programs Facilitation",
    event: "Rhodes Trust, Oxford",
    period: "Sep 2022 - Dec 2025",
    description:
      "Supported scholar programming and accessibility-focused initiatives, complementing formal teaching with student and scholar mentorship.",
  },
];

export default function TeachingPage() {
  return (
    <section className="page-shell py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <header className="panel bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10">
          <p className="kicker">Teaching and Mentorship</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-100">
            Academic instruction with practical depth
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-900 dark:text-slate-300">
            Teaching combines conceptual rigor, practical experimentation, and mentorship that prepares students
            for both research and high-responsibility engineering practice.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="panel"
            >
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${course.gradient} p-3 text-white shadow-lg`}>
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{course.title}</h2>
              <p className={`mt-1 bg-gradient-to-r ${course.gradient} bg-clip-text text-sm font-semibold text-transparent`}>{course.institution}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.08em] text-slate-900 dark:text-slate-400">{course.role} | {course.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-900 dark:text-slate-300">{course.description}</p>
            </motion.article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="panel-soft">
            <div className="inline-flex rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-3 text-white shadow-lg">
              <Heart className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Teaching Philosophy</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-900 dark:text-slate-300">
              The objective is to make difficult ideas teachable without reducing technical depth. Students are
              coached to reason from fundamentals, test assumptions in the lab, and communicate decisions with precision.
            </p>
          </article>

          <article className="panel-soft">
            <div className="inline-flex rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Mentorship Scope</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-900 dark:text-slate-300">
              <li>Laboratory and project supervision for communication engineering cohorts.</li>
              <li>Postgraduate planning and scholarship mentorship.</li>
              <li>Guidance for technical confidence, originality, and disciplined problem solving.</li>
            </ul>
          </article>
        </section>

        <section>
          <div className="mb-5">
            <p className="kicker">Workshops and Outreach</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Beyond the classroom</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {workshops.map((item) => (
              <article key={item.title} className="panel">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-3 text-white shadow-lg">
                  <Presentation className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-400">{item.event}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-slate-900 dark:text-slate-400">{item.period}</p>
                <p className="mt-3 text-sm text-slate-900 dark:text-slate-300">{item.description}</p>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
                    View detail <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="panel bg-gradient-to-br from-emerald-600/10 via-transparent to-blue-600/10">
          <div className="inline-flex rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
            <Lightbulb className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Educational Impact</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-900 dark:text-slate-300">
            The long-term teaching mission is to train engineers who combine strong theory with practical
            implementation discipline, and who can contribute to high-trust, high-impact technical systems.
          </p>
          <Link href="/contact" className="action-primary mt-5 inline-flex">
            Invite for teaching or mentorship
          </Link>
        </section>
      </div>
    </section>
  );
}



