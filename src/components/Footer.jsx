import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Martin Wafula</h3>
            <p className="text-gray-400 text-sm">
              DPhil Candidate in Engineering Science at the University of Oxford, 
              specializing in communications and information engineering.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/research" className="block text-gray-400 hover:text-white transition text-sm">
                Research
              </Link>
              <Link to="/publications" className="block text-gray-400 hover:text-white transition text-sm">
                Publications
              </Link>
              <Link to="/teaching" className="block text-gray-400 hover:text-white transition text-sm">
                Teaching
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition text-sm">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="mailto:martin.wafula@ieee.org" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
              >
                <Mail className="w-4 h-4" />
                martin.wafula@ieee.org
              </a>
              <a 
                href="https://linkedin.com/in/martin-wachiye-wafula" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
              <a 
                href="tel:+254790511534" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
              >
                <Phone className="w-4 h-4" />
                +254 790 511 534
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Martin Wafula. All rights reserved. | IEEE Member</p>
        </div>
      </div>
    </footer>
  );
}