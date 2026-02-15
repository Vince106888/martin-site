"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Download,
  ExternalLink,
  GraduationCap,
  Handshake,
  Landmark,
  Mail,
  Microscope,
  Network,
  Presentation,
  Users,
} from "lucide-react";

interface ResearchPillar {
  title: string;
  summary: string;
  icon: typeof Microscope;
  gradient: string;
}

interface PublicationHighlight {
  title: string;
  venue: string;
  year: string;
  doi?: string;
  href: string;
}

interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

interface ImageRotatorProps {
  images: string[];
  interval?: number;
}

interface ParticleConfig {
  id: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
}

function deterministicRandom(seed: number): number {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

const heroParticles: ParticleConfig[] = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  top: `${deterministicRandom(index * 11.31) * 100}%`,
  left: `${deterministicRandom(index * 29.17) * 100}%`,
  duration: 3 + deterministicRandom(index * 17.29) * 2,
  delay: deterministicRandom(index * 21.43) * 2,
}));

const researchPillars: ResearchPillar[] = [
  {
    title: "Lossy Compression of Random Graphs",
    summary:
      "Rate-distortion frameworks for stochastic and spatial graph models with direct implications for scalable network representation.",
    icon: Network,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Information Theory for Networks",
    summary:
      "Information-theoretic analysis for communication and information engineering, including network structure and performance inference.",
    icon: Microscope,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Wireless Communication Systems",
    summary:
      "Research and teaching in digital communication systems, lab-based experimentation, and next-generation communication methods.",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "AI in Engineering Education",
    summary:
      "Integration of AI and machine learning context into communication engineering curricula for modern professional readiness.",
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-500",
  },
];

const publications: PublicationHighlight[] = [
  {
    title: "On the Lossy Compression of Spatial Networks",
    venue: "IEEE ISIT, Athens",
    year: "2024",
    doi: "10.1109/ISIT57864.2024.10619435",
    href: "https://ieeexplore.ieee.org/document/10619435",
  },
  {
    title: "Rate-Distortion Function of the Stochastic Block Model",
    venue: "Asilomar Conference",
    year: "2023",
    doi: "10.1109/IEEECONF59524.2023.10476987",
    href: "https://ieeexplore.ieee.org/document/10476987",
  },
  {
    title: "Graph Compression: Introduction and Context",
    venue: "Medium Technical Writing",
    year: "2023",
    href: "https://wachiyem-74351.medium.com/graph-compression-part-a-introduction-4f228fb26633",
  },
];

const impactMetrics: ImpactMetric[] = [
  {
    value: "13+",
    label: "Years of Teaching and Engineering",
    detail: "Experience from secondary teaching through university instruction, research, and industry engineering.",
  },
  {
    value: "6+",
    label: "Institutions Served",
    detail: "Academic, research, regulatory, and private-sector institutions across Kenya and the United Kingdom.",
  },
  {
    value: "5",
    label: "Years of Oxford Lab Mentorship",
    detail: "Sustained supervision of undergraduate communications and semiconductor laboratory work.",
  },
  {
    value: "2",
    label: "IEEE-Indexed Conference Papers",
    detail: "Peer-reviewed conference publications in core information theory and communication systems venues.",
  },
];

const affiliations = [
  "IEEE",
  "IEEE Future Networks Initiative",
  "IEEE Communications Society",
  "IEEE Information Theory Society",
  "IEEE Signal Processing Society",
];

const speakingHighlights = [
  {
    title: "IEEE ISIT 2024",
    detail: "Presented research on lossy compression of spatial networks in Athens, Greece.",
    icon: Presentation,
    color: "text-blue-300",
  },
  {
    title: "Asilomar Conference 2023",
    detail: "Presented rate-distortion analysis for stochastic block models in Pacific Grove, California.",
    icon: Landmark,
    color: "text-purple-300",
  },
  {
    title: "Scholarship and Mentorship Sessions",
    detail: "Academic guidance sessions focused on postgraduate preparation and strategic opportunity access.",
    icon: Users,
    color: "text-emerald-300",
  },
];

const profileImages = [
  {
    src: "/images/sample2.jpeg",
    alt: "Research and institutional collaboration",
    caption: "Institutional collaboration",
  },
  {
    src: "/images/sample3.jpg",
    alt: "Teaching and laboratory practice",
    caption: "Teaching and lab practice",
  },
  {
    src: "/images/sample4.jpeg",
    alt: "Conference and public engagement",
    caption: "Conference engagement",
  },
];

function ImageRotator({ images, interval = 5000 }: ImageRotatorProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="page-shell -mt-20">
      <section className="relative min-h-screen overflow-hidden">
        <ImageRotator images={["/images/sample4.jpeg", "/images/sample2.jpeg", "/images/sample3.jpg"]} />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/85 to-purple-950/90" />

        <div className="absolute inset-0 pointer-events-none">
          {heroParticles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute h-1 w-1 rounded-full bg-blue-300"
              style={{ top: particle.top, left: particle.left }}
              animate={{ y: [0, -26, 0], opacity: [0, 1, 0] }}
              transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200 backdrop-blur-sm">
                Executive Academic Profile
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Senior Leadership in Communication and Information Engineering
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
                Martin Wachiye Wafula integrates rigorous research, high-impact teaching, and institutional
                collaboration to advance information theory, graph compression, and communication systems.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2">
                  <GraduationCap className="h-4 w-4 text-blue-300" /> DPhil Candidate, University of Oxford
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-2">
                  <Briefcase className="h-4 w-4 text-purple-300" /> Teaching Fellow, Strathmore School of Computing and Engineering Sciences
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/publications" className="action-primary">
                  View Research <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/cv" className="action-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                  Download CV <Download className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.figure
              initial={{ opacity: 1, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/sample2.jpeg"
                  alt="Martin Wachiye Wafula"
                  fill
                  priority
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="pt-3 text-sm text-slate-300">
                Academic and technology leadership profile.
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.article initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="panel-soft">
            <p className="kicker">About</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Research, teaching, and institutional impact</h2>
            <div className="mt-4 space-y-4 text-slate-900 dark:text-slate-300">
              <p>
                Current work bridges information theory, network modeling, and communication engineering with a
                strong commitment to student growth and practical technical relevance.
              </p>
              <p>
                Experience spans teaching at Strathmore and Oxford, curriculum delivery in Kenya, and engineering
                practice across regulatory and industry organizations.
              </p>
              <p>
                The long-term objective is to expand research excellence and mentorship capacity for globally
                competitive engineering education.
              </p>
            </div>
          </motion.article>

          <motion.aside initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="panel bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-transparent">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Current Roles</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-900 dark:text-slate-300">
              <li className="flex items-start gap-3"><Briefcase className="mt-0.5 h-4 w-4 text-purple-500" /> Teaching Fellow, Strathmore School of Computing and Engineering Sciences</li>
              <li className="flex items-start gap-3"><GraduationCap className="mt-0.5 h-4 w-4 text-blue-500" /> DPhil Candidate, University of Oxford</li>
              <li className="flex items-start gap-3"><Briefcase className="mt-0.5 h-4 w-4 text-indigo-500" /> Teaching and curriculum roles at Multimedia University of Kenya</li>
              <li className="flex items-start gap-3"><Users className="mt-0.5 h-4 w-4 text-emerald-500" /> Scholar Programs Facilitation and student mentoring at Rhodes Trust</li>
            </ul>
          </motion.aside>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="kicker">Research Focus</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Core research pillars</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {researchPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="panel group"
              >
                <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${pillar.gradient} p-3 text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-900 dark:text-slate-300">{pillar.summary}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">Selected Publications</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Highlighted works</h2>
          </div>
          <Link href="/publications" className="action-secondary">View All Publications <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.title}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="panel flex h-full flex-col"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{publication.title}</h3>
              <p className="mt-2 text-sm text-slate-900 dark:text-slate-300">{publication.venue}</p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-400">{publication.year}</p>
              {publication.doi ? <p className="mt-3 text-sm text-slate-900 dark:text-slate-300">DOI: {publication.doi}</p> : null}
              <a href={publication.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
                Open source <ExternalLink className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8">
          {impactMetrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 1, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm"
            >
              <p className="text-3xl font-bold">{metric.value}</p>
              <p className="mt-1 text-base font-semibold">{metric.label}</p>
              <p className="mt-2 text-sm text-blue-100">{metric.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="kicker">Professional Affiliations</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Membership and service</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {affiliations.map((item) => (
            <article key={item} className="panel flex min-h-24 items-center justify-center border-dashed text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-900 dark:text-slate-300">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="kicker">Media and Speaking</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Conferences and public engagement</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {speakingHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="panel-soft">
                <Icon className={`h-5 w-5 ${item.color}`} />
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm text-slate-900 dark:text-slate-300">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {profileImages.map((image) => (
            <figure key={image.caption} className="panel p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width:768px) 30vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="pt-3 text-sm font-medium text-slate-900 dark:text-slate-300">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="panel-soft border-l-4 border-l-blue-600">
          <p className="kicker">Academic Collaboration</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Open to research collaboration, invited talks, and academic partnerships.
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-900 dark:text-slate-300">
            Engagements focus on measurable outcomes in research quality, mentorship depth, and curriculum impact.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="action-primary"><Handshake className="h-4 w-4" /> Contact</Link>
            <a href="mailto:martin.wafula@ieee.org" className="action-secondary"><Mail className="h-4 w-4" /> Email Directly</a>
          </div>
        </div>
      </section>
    </div>
  );
}



