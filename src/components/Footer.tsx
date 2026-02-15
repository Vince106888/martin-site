"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import type { NavLink } from "@/types/site";

const quickLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/teaching", label: "Teaching" },
  { href: "/experience", label: "Experience" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-slate-200 dark:border-slate-800/80">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <motion.div initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
            <h2 className="text-xl font-bold text-white">Martin Wachiye Wafula</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Senior academic profile in communication and information engineering, currently serving as
              Teaching Fellow at Strathmore while advancing research and mentorship across Oxford-linked and
              Kenyan academic networks.
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-blue-300" /> Nairobi, Kenya
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Navigation</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-blue-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Academic Profiles</h3>
            <div className="flex flex-col gap-2">
              <a href="https://eng.ox.ac.uk/people/martin-wafula/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-purple-300">
                <GraduationCap className="h-4 w-4 text-purple-300" /> Oxford Profile <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href="https://scholar.google.com/citations?user=oVgDqvgAAAAJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-blue-300">
                <Award className="h-4 w-4 text-blue-300" /> Google Scholar <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.researchgate.net/profile/Martin-Wafula-4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300">
                <Award className="h-4 w-4 text-cyan-300" /> ResearchGate <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a href="mailto:martin.wafula@ieee.org" className="inline-flex items-center gap-2 transition hover:text-blue-300">
                <Mail className="h-4 w-4 text-blue-300" /> martin.wafula@ieee.org
              </a>
              <a href="tel:+254790511534" className="inline-flex items-center gap-2 transition hover:text-emerald-300">
                <Phone className="h-4 w-4 text-emerald-300" /> +254 790 511 534
              </a>
              <a href="https://www.linkedin.com/in/martin-wafula" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-blue-300">
                <Linkedin className="h-4 w-4 text-blue-300" /> LinkedIn
              </a>
              <a href="https://twitter.com/martin_wachiye" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-sky-300">
                <Twitter className="h-4 w-4 text-sky-300" /> Twitter
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <p>(c) {year} Martin Wachiye Wafula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



