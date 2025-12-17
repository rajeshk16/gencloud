'use client';

import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Sparkles, Calendar } from 'lucide-react';
import { useRef } from 'react';
import { useCalendly } from './CalendlyContext';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openCalendly } = useCalendly();

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub', color: '#333' },
    { icon: <Mail size={20} />, href: '#', label: 'Email', color: '#EA4335' },
  ];

  const footerLinks = [
    { 
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'AI Solutions', href: '#services' },
        { name: 'Cloud Services', href: '#services' },
      ]
    },
    { 
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#' },
      ]
    },
    { 
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Contact', href: '#contact' },
      ]
    },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a 
              href="#home" 
              className="flex items-center gap-3 mb-6 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-white font-bold text-xl">G</span>
              </motion.div>
              <span className="text-2xl font-bold text-[#0A2540] group-hover:text-[#667eea] transition-colors">
                Gencloud
              </span>
            </motion.a>
            
            <p className="text-[#425466] text-sm leading-relaxed mb-6 max-w-sm">
              Empowering businesses with cutting-edge AI and cloud solutions. Transform your digital presence with our innovative technology.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="relative w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#425466] hover:text-white transition-colors duration-300 shadow-sm group overflow-hidden"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${social.color}dd, ${social.color})` }}
                  />
                  <span className="relative z-10">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
            >
              <h3 className="text-[#0A2540] font-bold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-[#425466] hover:text-[#667eea] text-sm transition-colors inline-flex items-center gap-2 group"
                      whileHover={{ x: 3 }}
                    >
                      <motion.span
                        className="w-0 h-0.5 bg-[#667eea] group-hover:w-4 transition-all duration-300"
                      />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Calendar className="text-[#667eea]" size={24} />
              </motion.div>
              <div>
                <h3 className="text-[#0A2540] font-bold text-lg">Ready to Get Started?</h3>
                <p className="text-[#425466] text-sm">Book a free consultation with our team today.</p>
              </div>
            </div>
            <motion.button
              onClick={openCalendly}
              className="px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-[#667eea]/30 transition-all duration-300 whitespace-nowrap flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles size={16} />
              Book a Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[#425466] text-sm">
              © 2024 Gencloud.io. All rights reserved. Built with ❤️ by Gencloud Team
            </div>
            
            <div className="flex items-center gap-6">
              {legalLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[#425466] hover:text-[#667eea] text-sm transition-colors"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#667eea]/30 flex items-center justify-center z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
