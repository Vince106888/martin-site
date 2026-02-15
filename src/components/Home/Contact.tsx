import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 px-6 py-20 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
        <p className="mb-4">Reach out for collaborations, questions, or talks.</p>
        <a href="mailto:martin.wafula@eng.ox.ac.uk" className="btn-primary social-icon">
          <Mail className="h-5 w-5" /> Email Me
        </a>
      </div>
    </section>
  );
}


