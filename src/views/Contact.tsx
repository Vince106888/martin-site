"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ExternalLink,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

interface ContactMethod {
  label: string;
  primary: string;
  secondary: string;
  href?: string;
  description: string;
  gradient: string;
  icon: typeof Mail;
}

interface SocialLink {
  label: string;
  handle: string;
  href: string;
  gradient: string;
  icon: typeof Linkedin;
}

const methods: ContactMethod[] = [
  {
    label: "Email",
    primary: "martin.wafula@ieee.org",
    secondary: "martin.wafula@eng.ox.ac.uk",
    href: "mailto:martin.wafula@ieee.org",
    description: "Best channel for research collaboration and academic engagement.",
    gradient: "from-blue-500 to-cyan-500",
    icon: Mail,
  },
  {
    label: "Phone",
    primary: "+254 790 511 534",
    secondary: "International scheduling available",
    href: "tel:+254790511534",
    description: "For urgent coordination and direct discussion.",
    gradient: "from-emerald-500 to-teal-500",
    icon: Phone,
  },
  {
    label: "Location",
    primary: "Nairobi, Kenya",
    secondary: "Virtual collaboration worldwide",
    description: "Available for global meetings through virtual formats.",
    gradient: "from-purple-500 to-pink-500",
    icon: MapPin,
  },
];

const social: SocialLink[] = [
  { label: "LinkedIn", handle: "@martin-wafula", href: "https://www.linkedin.com/in/martin-wafula", gradient: "from-blue-600 to-blue-700", icon: Linkedin },
  { label: "Twitter", handle: "@martin_wachiye", href: "https://twitter.com/martin_wachiye", gradient: "from-sky-400 to-blue-500", icon: Twitter },
  { label: "Medium", handle: "@wachiyem", href: "https://wachiyem-74351.medium.com", gradient: "from-slate-700 to-slate-900", icon: Globe },
  { label: "Google Scholar", handle: "Research Profile", href: "https://scholar.google.com/citations?user=oVgDqvgAAAAJ", gradient: "from-orange-500 to-red-500", icon: Globe },
];

const availability = [
  {
    title: "Open to discussions",
    icon: MessageSquare,
    points: [
      "Research collaborations and consultations",
      "Speaking engagements and guest lectures",
      "Mentorship for postgraduate and scholarship pathways",
      "Technical writing and knowledge-sharing initiatives",
    ],
  },
  {
    title: "Response expectations",
    icon: Calendar,
    points: [
      "Email responses generally within 24 to 48 hours",
      "LinkedIn messages reviewed regularly",
      "Calls by prior scheduling are preferred",
      "Detailed collaboration notes are welcome in first contact",
    ],
  },
];

export default function ContactPage() {
  return (
    <section className="page-shell py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <header className="panel bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10">
          <p className="kicker">Contact and Collaboration</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-100">Professional inquiries</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-900 dark:text-slate-300">
            Correspondence is welcome for research partnerships, speaking invitations, mentorship engagements,
            and collaboration across academia, technology, and education.
          </p>
          <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-300">
            Current teaching base: Strathmore School of Computing and Engineering Sciences, Nairobi.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.article
                key={method.label}
                initial={{ opacity: 1, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="panel"
              >
                <div className={`inline-flex rounded-2xl bg-gradient-to-br ${method.gradient} p-3 text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{method.label}</h2>
                {method.href ? (
                  <a href={method.href} className="mt-2 block text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
                    {method.primary}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">{method.primary}</p>
                )}
                <p className="text-sm text-slate-900 dark:text-slate-400">{method.secondary}</p>
                <p className="mt-3 text-sm text-slate-900 dark:text-slate-300">{method.description}</p>
              </motion.article>
            );
          })}
        </section>

        <section>
          <div className="mb-5">
            <p className="kicker">Digital Profiles</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Connect online</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {social.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 1, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="panel group"
                >
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${item.gradient} p-3 text-white shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.label}</h3>
                  <p className="text-sm text-slate-800 dark:text-slate-400">{item.handle}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                    Visit <ExternalLink className="h-4 w-4" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {availability.map((block) => {
            const Icon = block.icon;
            return (
              <article key={block.title} className="panel-soft">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{block.title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-900 dark:text-slate-300">
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>

        <section className="panel bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10">
          <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-3 text-white shadow-lg">
            <Send className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Prefer email first?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-900 dark:text-slate-300">
            For collaboration inquiries, include a short introduction, purpose of contact, and any relevant
            background context to support a faster and more useful response.
          </p>
          <a href="mailto:martin.wafula@ieee.org" className="action-primary mt-5 inline-flex">
            <Mail className="h-4 w-4" /> Send email
          </a>
        </section>
      </div>
    </section>
  );
}



