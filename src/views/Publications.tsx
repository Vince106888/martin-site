"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Brain, ExternalLink, Filter, Network, Quote, Sparkles } from "lucide-react";

type PublicationCategory = "Conference" | "Public Scholarship";

interface PublicationItem {
  id: string;
  category: PublicationCategory;
  title: string;
  authors: string;
  venue: string;
  year: number;
  location?: string;
  doi?: string;
  url: string;
  summary: string;
}

interface ResearchInterest {
  area: string;
  description: string;
  icon: typeof Brain;
  gradient: string;
}

const publicationItems: PublicationItem[] = [
  {
    id: "isit-2024-spatial-networks",
    category: "Conference",
    title: "On the Lossy Compression of Spatial Networks",
    authors: "Vippathalla, P. K., Wafula, M. W., Badiu, M. A., and Coon, J. P.",
    venue: "IEEE International Symposium on Information Theory",
    year: 2024,
    location: "Athens, Greece",
    doi: "10.1109/ISIT57864.2024.10619435",
    url: "https://ieeexplore.ieee.org/document/10619435",
    summary:
      "Characterizes lossy compression for spatial random networks and provides a partial information-distortion characterization under Hamming distortion.",
  },
  {
    id: "asilomar-2023-sbm",
    category: "Conference",
    title: "Rate-Distortion Function of the Stochastic Block Model",
    authors: "Wafula, M. W., Vippathalla, P. K., Coon, J. P., and Badiu, M. A.",
    venue: "Asilomar Conference on Signals, Systems, and Computers",
    year: 2023,
    location: "Pacific Grove, California, USA",
    doi: "10.1109/IEEECONF59524.2023.10476987",
    url: "https://ieeexplore.ieee.org/document/10476987",
    summary:
      "Derives rate-distortion results for stochastic block models, including side-information settings and related Erdos-Renyi graph behavior.",
  },
  {
    id: "medium-graph-compression-intro",
    category: "Public Scholarship",
    title: "Graph Compression: Introduction and Context",
    authors: "Wafula, M. W.",
    venue: "Medium",
    year: 2023,
    url: "https://wachiyem-74351.medium.com/graph-compression-part-a-introduction-4f228fb26633",
    summary:
      "Introduces graph compression methods for wider technical audiences and connects theory to practical communication network design.",
  },
];

const researchInterests: ResearchInterest[] = [
  {
    area: "Graph Compression",
    description:
      "Lossless and lossy representation methods for random graphs with focus on rate efficiency and structural fidelity.",
    icon: Network,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    area: "Network Topology Discovery",
    description:
      "Information-theoretic perspectives for topology inference in IoT and wireless networked environments.",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    area: "Advanced Wireless Systems",
    description:
      "Communication-system design and optimization across modern and emerging wireless frameworks.",
    icon: Brain,
    gradient: "from-emerald-500 to-teal-500",
  },
];

const categories: Array<"All" | PublicationCategory> = ["All", "Conference", "Public Scholarship"];

function formatCitation(item: PublicationItem): string {
  const location = item.location ? `, ${item.location}` : "";
  return `${item.authors} (${item.year}). ${item.title}. ${item.venue}${location}.`;
}

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredPublications = useMemo(() => {
    if (activeCategory === "All") {
      return publicationItems;
    }
    return publicationItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="page-shell py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <header className="panel bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10">
          <p className="kicker">Research and Publications</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-100">
            Peer-reviewed output and public scholarship
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-900 dark:text-slate-300">
            The publication profile combines conference-grade technical research with accessible writing that
            broadens understanding of graph compression and communication systems.
          </p>
        </header>

        <section className="panel-soft">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-300">
              <Filter className="h-4 w-4 text-blue-500" /> Filter by category
            </div>
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                    active
                      ? "border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "border-slate-300 text-slate-900 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-5">
          {filteredPublications.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="panel"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-900 dark:text-slate-400">{item.category}</p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-300">
                  {item.year}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-900 dark:text-slate-300">{item.summary}</p>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-700 dark:bg-slate-900/40">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-900 dark:text-slate-400">
                  <Quote className="h-3.5 w-3.5 text-blue-500" /> Citation
                </p>
                <p className="mt-2 text-sm text-slate-900 dark:text-slate-300">{formatCitation(item)}</p>
                {item.doi ? (
                  <p className="mt-2 text-sm text-slate-900 dark:text-slate-300">
                    DOI: <a href={`https://doi.org/${item.doi}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">{item.doi}</a>
                  </p>
                ) : null}
              </div>

              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
                Open publication <ExternalLink className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </section>

        <section>
          <div className="mb-6">
            <p className="kicker">Research Interests</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Active thematic areas</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {researchInterests.map((interest) => {
              const Icon = interest.icon;
              return (
                <article key={interest.area} className="panel">
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${interest.gradient} p-3 text-white shadow-lg`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{interest.area}</h3>
                  <p className="mt-2 text-sm text-slate-900 dark:text-slate-300">{interest.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="panel-soft">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Writing and public scholarship</h2>
            <p className="mt-3 text-sm text-slate-900 dark:text-slate-300">
              Beyond peer-reviewed work, technical writing is used to make graph compression and communication
              engineering concepts accessible to wider technical audiences.
            </p>
            <a href="https://wachiyem-74351.medium.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">
              Visit Medium profile <ExternalLink className="h-4 w-4" />
            </a>
          </article>

          <article className="panel-soft">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Academic profiles</h2>
            <div className="mt-3 space-y-2 text-sm">
              <a href="https://eng.ox.ac.uk/people/martin-wafula/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-200">Oxford profile <ExternalLink className="h-4 w-4" /></a>
              <a href="https://scholar.google.com/citations?user=oVgDqvgAAAAJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200">Google Scholar <ExternalLink className="h-4 w-4" /></a>
              <a href="https://www.researchgate.net/profile/Martin-Wafula-4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 dark:text-emerald-300 dark:hover:text-emerald-200">ResearchGate <ExternalLink className="h-4 w-4" /></a>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}




