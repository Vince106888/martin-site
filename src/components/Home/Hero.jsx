import "./Hero.css";
import { motion } from "framer-motion";
import { Mail, FileText, ChevronDown } from "lucide-react";
import ImageRotator from "./ImageRotator";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Images */}
      <div className="hero-bg">
        <ImageRotator
          images={[
            "/images/martin-wafula.png",
            "/images/sample2.jpeg",
            "/images/sample3.jpg",
          ]}
          interval={4000}
          className="hero-bg-image"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Particle Effects */}
      <div className="hero-particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
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
          DPhil Candidate — Engineering Science, University of Oxford
        </motion.p>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          Exploring cutting-edge frameworks for lossy compression of spatial graphs and next-generation network communications. Passionate about bridging theory with impactful real-world applications in AI, networks, and data science.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#contact" className="hero-button btn-primary">
            <Mail className="w-5 h-5" /> Contact
          </a>
          <a href="#publications" className="hero-button btn-secondary">
            <FileText className="w-5 h-5" /> Publications
          </a>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <div className="scroll-cue">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
}
