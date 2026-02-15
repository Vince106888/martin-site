"use client";

import "./Hero.css";
import { motion } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";
import ImageRotator from "./ImageRotator";

interface ParticleConfig {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  animationDelay: string;
}

function deterministicRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const HERO_PARTICLES: ParticleConfig[] = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  width: `${deterministicRandom(index * 13.37) * 4 + 2}px`,
  height: `${deterministicRandom(index * 17.91) * 4 + 2}px`,
  top: `${deterministicRandom(index * 19.73) * 100}%`,
  left: `${deterministicRandom(index * 29.11) * 100}%`,
  animationDelay: `${deterministicRandom(index * 37.49) * 5}s`,
}));

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <ImageRotator
          images={["/images/martin-wafula.png", "/images/sample2.jpeg", "/images/sample3.jpg"]}
          interval={4000}
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-particles">
        {HERO_PARTICLES.map((particle) => (
          <div
            key={`particle-${particle.id}`}
            className="hero-particle"
            style={{
              width: particle.width,
              height: particle.height,
              top: particle.top,
              left: particle.left,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Dr Martin Wachiye Wafula
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          DPhil Candidate - Engineering Science, University of Oxford
        </motion.p>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          Exploring cutting-edge frameworks for lossy compression of spatial graphs and
          next-generation network communications. Passionate about bridging theory with impactful
          real-world applications in AI, networks, and data science.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#contact" className="hero-button btn-primary">
            <Mail className="h-5 w-5" /> Contact
          </a>
          <a href="/publications" className="hero-button btn-secondary">
            <FileText className="h-5 w-5" /> Publications
          </a>
        </motion.div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}


