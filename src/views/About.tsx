"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Building2,
  Compass,
  Heart,
  Handshake,
  Landmark,
  MessageCircle,
  Microscope,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

interface CoreExpertise {
  title: string;
  detail: string;
}

interface JourneyStage {
  phase: string;
  period: string;
  story: string;
  icon: typeof Compass;
}

const expertise: CoreExpertise[] = [
  {
    title: "Information Theory",
    detail: "Rate-distortion analysis and communication-theoretic models for complex networked systems.",
  },
  {
    title: "Graph Compression",
    detail: "Lossy compression of random geometric and stochastic block model networks.",
  },
  {
    title: "Communication Engineering",
    detail: "Digital communication systems instruction and laboratory mentorship.",
  },
  {
    title: "Applied ML Integration",
    detail: "Responsible use of AI context in telecommunications teaching and curriculum development.",
  },
];

const achievements = [
  "DPhil Candidate, Engineering Science, University of Oxford (Jan 2020 - Present)",
  "Teaching Fellow, Strathmore School of Computing and Engineering Sciences (Aug 2025 - Present)",
  "BSc Telecommunication and Information Engineering, First Class Honours (JKUAT)",
  "IEEE ISIT 2024 and Asilomar 2023 peer-reviewed conference publications",
  "Scholar Programs Facilitator at Rhodes Trust with accessibility-focused contributions",
  "Graduate student representation in Oxford Engineering Science governance",
];

const journey: JourneyStage[] = [
  {
    phase: "Engineering Foundations",
    period: "2012 - 2017",
    story:
      "Built early teaching and engineering discipline through mathematics and physics instruction, followed by first-class undergraduate training in telecommunication and information engineering.",
    icon: Compass,
  },
  {
    phase: "Industry and Risk Practice",
    period: "2017 - 2020",
    story:
      "Worked across telecommunications and IT assurance, including roles connected to enterprise support, spectrum management, and technology risk assessments.",
    icon: Building2,
  },
  {
    phase: "Oxford Research and Teaching",
    period: "2020 - Present",
    story:
      "Advanced doctoral research in communication and information engineering while delivering laboratory and tutorial teaching for undergraduate engineering cohorts.",
    icon: Microscope,
  },
  {
    phase: "Mentorship and Institutional Service",
    period: "2022 - Present",
    story:
      "Contributed to scholar program facilitation, accessibility-focused initiatives, and cross-institution student mentorship, including current teaching-fellow service at Strathmore.",
    icon: Users,
  },
];

const modules = [
  {
    title: "Academic Philosophy",
    content:
      "Teaching should produce engineers who can think rigorously, communicate clearly, and make technically defensible decisions under real constraints.",
    icon: BookOpen,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Research Vision",
    content:
      "Research should blend strong mathematical foundations with usable engineering outcomes that improve system efficiency, robustness, and interpretability.",
    icon: Target,
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Supervision and Mentorship",
    content:
      "Mentorship is structured around technical confidence, accountability in execution, and long-horizon academic and professional growth.",
    icon: Users,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Institutional Contributions",
    content:
      "Contributions include curriculum delivery, tutorial instruction, laboratory development, and student representation in academic governance settings.",
    icon: Building2,
    accent: "from-orange-500 to-amber-500",
  },
  {
    title: "Community Engagement",
    content:
      "Engagement centers on widening access to academic opportunity and supporting students through scholarship and progression pathways.",
    icon: Landmark,
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "Strategic Partnerships",
    content:
      "Collaboration spans universities, regulatory organizations, and industry teams to connect research with practical impact.",
    icon: Handshake,
    accent: "from-cyan-500 to-blue-500",
  },
];

const values = [
  {
    title: "Clarity in Complexity",
    text: "Complex engineering ideas become powerful when made understandable and actionable for students and collaborators.",
    icon: Sparkles,
  },
  {
    title: "Service with Excellence",
    text: "Academic achievement is strongest when coupled with institutional responsibility and community contribution.",
    icon: Heart,
  },
  {
    title: "Global Standards, Local Relevance",
    text: "Research and teaching should meet international rigor while addressing practical realities in African engineering contexts.",
    icon: Award,
  },
];

const philosophies = [
  {
    quote: "Teaching works best when students build confidence through guided experimentation and independent reasoning.",
    context: "On mentorship",
  },
  {
    quote: "High-quality research should remain mathematically sound while still useful to real engineering systems.",
    context: "On research impact",
  },
  {
    quote: "Leadership in academia is measured by how many others become stronger because of your presence.",
    context: "On institutional contribution",
  },
];

const personalInterests = [
  "Poetry and recitation",
  "Music and choir participation",
  "STEM mentoring",
  "Technical writing",
  "Community engagement",
  "Mentorship for scholarship applicants",
];

export default function AboutPage() {
  return (
    <section className="page-shell py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 1, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="panel bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"
        >
          <p className="kicker">Professional Summary</p>
          <div className="mt-4 grid gap-7 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">Martin Wachiye Wafula</h1>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                DPhil Candidate, Engineering Science, University of Oxford
              </p>
              <p className="text-base leading-relaxed text-slate-900 dark:text-slate-300">
                An academic and engineering practitioner focused on communication and information systems. The
                work blends research rigor, teaching clarity, and collaboration that translates ideas into real-world value.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-200/70 bg-blue-50/70 p-4 dark:border-blue-900/50 dark:bg-blue-950/20">
                  <p className="text-xs uppercase tracking-[0.1em] text-blue-700 dark:text-blue-300">Affiliation</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">University of Oxford</p>
                </div>
                <div className="rounded-xl border border-purple-200/70 bg-purple-50/70 p-4 dark:border-purple-900/50 dark:bg-purple-950/20">
                  <p className="text-xs uppercase tracking-[0.1em] text-purple-700 dark:text-purple-300">Teaching</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">Strathmore University and Multimedia University of Kenya</p>
                </div>
              </div>
            </div>

            <aside className="panel-soft">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Core Expertise</h2>
              <ul className="mt-4 space-y-3">
                {expertise.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                    <p className="text-sm text-slate-900 dark:text-slate-300">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Key Achievements</h2>
            <ul className="mt-3 grid gap-2 md:grid-cols-2">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-900 dark:text-slate-300">
                  <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.header>

        <section>
          <div className="mb-6">
            <p className="kicker">Professional Journey</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Pathway and progression</h2>
          </div>
          <div className="space-y-4">
            {journey.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.article
                  key={stage.phase}
                  initial={{ opacity: 1, x: index % 2 === 0 ? -14 : 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="panel"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-3 text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{stage.phase}</h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-300">{stage.period}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-900 dark:text-slate-300">{stage.story}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="panel h-full"
              >
                <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${section.accent} p-3 text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-900 dark:text-slate-300">{section.content}</p>
              </motion.article>
            );
          })}
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="panel-soft">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Values and leadership approach</h2>
            <div className="mt-4 space-y-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="rounded-xl border border-slate-200/70 bg-blue-50/70 p-4 dark:border-slate-700 dark:bg-slate-900/40">
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                      <Icon className="h-4 w-4 text-purple-500" /> {value.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-900 dark:text-slate-300">{value.text}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="panel-soft">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Guiding philosophies</h2>
            <div className="mt-4 space-y-3">
              {philosophies.map((item) => (
                <blockquote key={item.context} className="rounded-xl border border-slate-200/70 bg-blue-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/40">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    <MessageCircle className="h-4 w-4 text-blue-500" /> {item.context}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-900 dark:text-slate-300">"{item.quote}"</p>
                </blockquote>
              ))}
            </div>
          </article>
        </section>

        <section className="panel bg-gradient-to-br from-purple-600/10 via-transparent to-emerald-600/10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Beyond Engineering</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-900 dark:text-slate-300">
            Alongside research and teaching, personal interests in writing, music, and community initiatives keep
            the work grounded, creative, and human-centered. This balance supports a mentorship style that is both
            technically demanding and personally supportive.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {personalInterests.map((interest) => (
              <span key={interest} className="rounded-full border border-slate-300 bg-blue-50/80 px-3 py-1 text-xs font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}




