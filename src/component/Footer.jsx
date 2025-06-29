import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0a192f] text-gray-300 border-t border-[#1e3a8a]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:place-items-center space-y-10 lg:gap-96">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li> */}
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Reach Me</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FiMail className="text-teal-400" />
                <a href="mailto:your.email@gmail.com" className="hover:text-teal-400 transition-colors">
                  afjalhossainmahin0@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-teal-400" />
                <a href="tel:+8801875027270" className="hover:text-teal-400 transition-colors">
                  +880 1875 027270
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/afjalhossain-linkdin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/mahin67580" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.facebook.com/afzalh0ssainmahin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-[#0a192f] transition-colors"
            aria-label="Back to top"
          >
            <FaArrowUp />
            Back to Top
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#1e3a8a] text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Afjal Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;