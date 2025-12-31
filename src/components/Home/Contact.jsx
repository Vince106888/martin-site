import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-850 text-gray-900 dark:text-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-4">Reach out for collaborations, questions, or talks.</p>
        <a href="mailto:martin.wafula@eng.ox.ac.uk" className="btn-primary social-icon">
          <Mail className="w-5 h-5" /> Email Me
        </a>
      </div>
    </section>
  );
}
