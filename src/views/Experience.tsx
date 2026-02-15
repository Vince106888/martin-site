"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Radio, Shield, type LucideIcon } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  icon: LucideIcon;
  gradient: string;
}

const experienceItems: ExperienceItem[] = [
  { title: "Teaching Fellow", organization: "Strathmore School of Computing and Engineering Sciences", period: "Aug 2025 - Present", location: "Nairobi, Kenya (Hybrid)", summary: "Part-time teaching appointment within the School of Computing and Engineering Sciences.", icon: GraduationCap, gradient: "from-blue-500 to-cyan-500" },
  { title: "Graduate Teaching Assistant and Senior Laboratory Demonstrator", organization: "University of Oxford, Department of Engineering Science", period: "Jan 2024 - Dec 2025", location: "Oxford, UK", summary: "Delivered tutorial teaching in Digital Communication Systems and supported undergraduate laboratory instruction in communications and semiconductors.", icon: GraduationCap, gradient: "from-purple-500 to-pink-500" },
  { title: "Engineering Tutor", organization: "Immerse Education", period: "Jul 2023 - Aug 2023", location: "Oxford, UK", summary: "Tutored engineering science for summer cohorts covering mathematics, communication systems, and engineering ethics.", icon: Briefcase, gradient: "from-indigo-500 to-purple-500" },
  { title: "Scholar Programs Facilitator", organization: "Rhodes Trust", period: "Sep 2022 - Dec 2025", location: "Oxford, UK", summary: "Supported scholar experience programming, accessibility initiatives, and scholar-facing project coordination.", icon: GraduationCap, gradient: "from-emerald-500 to-teal-500" },
  { title: "Privacy Engineer (Consultant)", organization: "Data Praesum", period: "Aug 2021 - Jan 2024", location: "Nairobi, Kenya", summary: "Designed practical privacy engineering solutions and documented data processes for research-compliant operations.", icon: Shield, gradient: "from-cyan-500 to-blue-500" },
  { title: "Laboratory Demonstrator", organization: "University of Oxford", period: "Oct 2020 - Dec 2025", location: "Oxford, UK", summary: "Conducted communications and semiconductors labs while mentoring student practical work.", icon: GraduationCap, gradient: "from-pink-500 to-rose-500" },
  { title: "IT Risk Assurance Associate", organization: "PwC Kenya", period: "Sep 2018 - Jan 2020", location: "Nairobi, Kenya", summary: "Performed ICT audits, SAP reviews, cyber risk assessments, and IT governance engagements.", icon: Shield, gradient: "from-orange-500 to-red-500" },
  { title: "Head of Creativity and Innovation Division", organization: "Sauti ya Vijana Isikike", period: "Mar 2018 - Aug 2023", location: "Ngong, Kenya", summary: "Led youth-focused creativity and innovation programming.", icon: Briefcase, gradient: "from-yellow-500 to-orange-500" },
  { title: "Frequency Spectrum Management Engineer", organization: "Communications Authority of Kenya", period: "Jul 2018 - Sep 2018", location: "Nairobi, Kenya", summary: "Supported licensing, frequency planning, monitoring, and compliance workflows.", icon: Radio, gradient: "from-green-500 to-emerald-500" },
  { title: "Part-Time Teaching Assistant", organization: "Multimedia University of Kenya", period: "May 2018 - Sep 2018", location: "Nairobi, Kenya", summary: "Taught networking and electrical engineering units with lab simulation support.", icon: GraduationCap, gradient: "from-violet-500 to-purple-500" },
  { title: "Enterprise Customer Support Engineer", organization: "Safaricom Limited", period: "Nov 2017 - Feb 2018", location: "Nairobi, Kenya", summary: "Provided enterprise domain, email, and WiMAX troubleshooting support.", icon: Radio, gradient: "from-lime-500 to-green-500" },
  { title: "Telecommunications Engineer", organization: "Elris Communications Services Limited", period: "Oct 2017 - Nov 2017", location: "Nairobi, Kenya", summary: "Delivered internet, MPLS, microwave, and fiber implementation tasks.", icon: Radio, gradient: "from-blue-500 to-indigo-500" },
  { title: "Telecommunication Engineering Intern", organization: "Multimedia University of Kenya", period: "Jun 2016 - Sep 2016", location: "Nairobi, Kenya", summary: "Supported installation of telecommunications hardware and industrial control systems.", icon: Briefcase, gradient: "from-teal-500 to-cyan-500" },
  { title: "Electrical and Telecommunication Engineering Intern", organization: "Mumias Sugar Co. Ltd", period: "May 2015 - Aug 2015", location: "Mumias, Kenya", summary: "Contributed to automation, control, and transmission engineering tasks.", icon: Briefcase, gradient: "from-amber-500 to-orange-500" },
  { title: "Telecom Engineer Intern", organization: "Kitale Law Courts", period: "Jul 2014 - Sep 2014", location: "Kitale, Kenya", summary: "Handled network installation, maintenance, and troubleshooting activities.", icon: Radio, gradient: "from-rose-500 to-pink-500" },
  { title: "IT Intern", organization: "Kenya Seed Company Ltd", period: "May 2014 - Jul 2014", location: "Kitale, Kenya", summary: "Supported network operations, updates, and infrastructure troubleshooting.", icon: Briefcase, gradient: "from-sky-500 to-blue-500" },
  { title: "Untrained Teacher (Mathematics and Physics)", organization: "St John the Baptist Boys Secondary School", period: "Jan 2012 - Sep 2013", location: "Likuyani, Kenya", summary: "Taught mathematics and physics at secondary-school level.", icon: GraduationCap, gradient: "from-fuchsia-500 to-purple-500" },
];

export default function ExperiencePage() {
  return (
    <section className="page-shell py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <header className="panel bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10">
          <p className="kicker">Professional Timeline</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-100">Experience</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-900 dark:text-slate-300">
            A continuous trajectory across teaching, research, engineering delivery, and institutional leadership.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:block md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experienceItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={`${item.title}-${item.organization}`}
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.38, delay: Math.min(index * 0.02, 0.28) }}
                  className={`flex flex-col gap-5 md:flex-row md:items-start ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  <div className="w-full md:w-5/12">
                    <div className="panel h-full">
                      <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${item.gradient} p-3 text-white shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                      <p className={`mt-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-base font-semibold text-transparent`}>{item.organization}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-900 dark:text-slate-400">
                        <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{item.period}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{item.location}</span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-900 dark:text-slate-300">{item.summary}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex md:w-2/12 md:justify-center">
                    <span className={`mt-7 h-4 w-4 rounded-full bg-gradient-to-br ${item.gradient} ring-4 ring-white shadow-lg dark:ring-slate-950`} />
                  </div>

                  <div className="hidden md:block md:w-5/12" />
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="panel-soft flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-relaxed text-slate-900 dark:text-slate-300">
            Open to academic collaboration, invited teaching, and engineering-focused advisory engagements.
          </p>
          <Link href="/contact" className="action-primary w-fit">Contact</Link>
        </div>
      </div>
    </section>
  );
}



