"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Store,
  Building2,
  Plane,
  UtensilsCrossed,
  Film,
  Bot,
  Sparkles,
  Package,
  Cpu,
  Code2,
  Smartphone,
  Rocket,
  Globe,
  Monitor,
  Palette,
  PenTool,
} from "lucide-react";
import { useCalendly } from "./CalendlyContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services", hasMega: true },
    { name: "Our Works", href: "/case-studies" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const industries = [
    { name: "Insurance", icon: <Building2 size={18} /> },
    { name: "Fintech", icon: <Store size={18} /> },
    { name: "Logistics", icon: <Package size={18} /> },
    { name: "Retail", icon: <Store size={18} /> },
    { name: "Healthcare", icon: <Building2 size={18} /> },
    { name: "Education", icon: <GraduationCap size={18} /> },
    { name: "E-Learning", icon: <BookOpen size={18} /> },
    { name: "Food & Beverage", icon: <UtensilsCrossed size={18} /> },
    { name: "Media & Entertainment", icon: <Film size={18} /> },
  ];

  const development = [
    { name: "Website Development", icon: <Globe size={18} /> },
    { name: "Mobile Apps", icon: <Smartphone size={18} /> },
    { name: "Cloud & SaaS Development", icon: <Package size={18} /> },
    { name: "MVP Development", icon: <Rocket size={18} /> },
    { name: "Maintenance & Support", icon: <Monitor size={18} /> },
  ];

  const aiServices = [
    { name: "AI & Automation Solutions", icon: <Bot size={18} /> },
    { name: "Custom AI Agents", icon: <Cpu size={18} /> },
    { name: "Gen AI Development", icon: <Sparkles size={18} /> },
    { name: "AI Applications", icon: <Code2 size={18} /> },
  ];

  const designing = [
    { name: "Best UI/UX Design Services", icon: <Palette size={18} /> },
    { name: "Web Design", icon: <PenTool size={18} /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold text-[#0A2540] tracking-tight flex items-center gap-2"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B80FF] to-[#667eea] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                Gencloud
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasMega ? (
                    <>
                      <button
                        onMouseEnter={() => setServicesOpen(true)}
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="nav-link px-4 py-2 flex items-center gap-1"
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Mega Menu */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <>
                            {/* Invisible bridge so cursor doesn't lose hover */}
                            <div
                              className="fixed inset-0 -z-10"
                              onMouseLeave={() => setServicesOpen(false)}
                            />

                            <motion.div
                              initial={{ opacity: 0, y: 15, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.98 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                              onMouseEnter={() => setServicesOpen(true)}
                              onMouseLeave={() => setServicesOpen(false)}
                              className="fixed inset-x-0 top-16 mt-2 flex justify-center pointer-events-none"
                            >
                              <div className="pointer-events-auto w-[95vw] max-w-[1100px] bg-white rounded-2xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden">
                                <div className="flex">
                                  {/* Column 1 - Strategic Tech Description */}
                                  <div className="w-[260px] p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 border-r border-gray-100 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B80FF] to-[#667eea] flex items-center justify-center mb-4">
                                      <Sparkles
                                        className="text-white"
                                        size={24}
                                      />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0A2540] leading-tight">
                                      Strategic Tech, Built for Scale
                                    </h3>
                                    <p className="text-sm text-[#425466] mt-4 leading-relaxed">
                                      At Gencloud, we provide tailored
                                      development services for businesses at
                                      every stage, from building rapid MVPs to
                                      scaling enterprise platforms.
                                    </p>
                                    <a
                                      href="#services"
                                      onClick={() => setServicesOpen(false)}
                                      className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#8B80FF] hover:text-[#667eea] transition-colors"
                                    >
                                      Explore All Services
                                      <ArrowRight size={16} />
                                    </a>
                                  </div>

                                  {/* Column 2 - Development */}
                                  <div className="w-[200px] py-6 px-4 border-r border-gray-100">
                                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider px-3 mb-4 flex items-center gap-2">
                                      <Code2
                                        size={14}
                                        className="text-[#8B80FF]"
                                      />
                                      Development
                                    </h4>
                                    <div className="space-y-1">
                                      {development.map((item, idx) => (
                                        <Link
                                          key={idx}
                                          href="/services/development"
                                          onClick={() => setServicesOpen(false)}
                                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#8B80FF]/5 transition-all duration-200 group"
                                        >
                                          <motion.span
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.03 }}
                                            className="flex items-center gap-3 w-full"
                                          >
                                            <span className="text-[#8B80FF] group-hover:scale-110 transition-transform">
                                              {item.icon}
                                            </span>
                                            <span className="text-sm text-[#0A2540] group-hover:text-[#8B80FF] transition-colors font-medium">
                                              {item.name}
                                            </span>
                                          </motion.span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                  {/* Column 3 - AI & Automations */}
                                  <div className="w-[200px] py-6 px-4 border-r border-gray-100">
                                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider px-3 mb-4 flex items-center gap-2">
                                      <Bot
                                        size={14}
                                        className="text-[#8B80FF]"
                                      />
                                      AI & Automations
                                    </h4>
                                    <div className="space-y-1">
                                      {aiServices.map((item, idx) => (
                                        <Link
                                          key={idx}
                                          href="/services/ai-automation"
                                          onClick={() => setServicesOpen(false)}
                                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#8B80FF]/5 transition-all duration-200 group"
                                        >
                                          <motion.span
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.03 }}
                                            className="flex items-center gap-3 w-full"
                                          >
                                            <span className="text-[#8B80FF] group-hover:scale-110 transition-transform">
                                              {item.icon}
                                            </span>
                                            <span className="text-sm text-[#0A2540] group-hover:text-[#8B80FF] transition-colors font-medium">
                                              {item.name}
                                            </span>
                                          </motion.span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                  {/* Column 4 - Designing */}
                                  <div className="w-[180px] py-6 px-4 border-r border-gray-100">
                                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider px-3 mb-4 flex items-center gap-2">
                                      <Palette
                                        size={14}
                                        className="text-[#8B80FF]"
                                      />
                                      Designing
                                    </h4>
                                    <div className="space-y-1">
                                      {designing.map((item, idx) => (
                                        <Link
                                          key={idx}
                                          href="/services/design"
                                          onClick={() => setServicesOpen(false)}
                                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#8B80FF]/5 transition-all duration-200 group"
                                        >
                                          <motion.span
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.03 }}
                                            className="flex items-center gap-3 w-full"
                                          >
                                            <span className="text-[#8B80FF] group-hover:scale-110 transition-transform">
                                              {item.icon}
                                            </span>
                                            <span className="text-sm text-[#0A2540] group-hover:text-[#8B80FF] transition-colors font-medium">
                                              {item.name}
                                            </span>
                                          </motion.span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                  {/* Column 5 - Industry */}
                                  <div className="w-[220px] py-6 px-4 flex-shrink-0">
                                    <h4 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider px-3 mb-4 flex items-center gap-2">
                                      <Building2
                                        size={14}
                                        className="text-[#8B80FF]"
                                      />
                                      Industry
                                    </h4>
                                    <div className="grid grid-cols-1 gap-0.5">
                                      {industries.map((item, idx) => (
                                        <Link
                                          key={idx}
                                          href="/services/industries"
                                          onClick={() => setServicesOpen(false)}
                                          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#8B80FF]/5 transition-all duration-200 group"
                                        >
                                          <motion.span
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.02 }}
                                            className="flex items-center gap-3 w-full"
                                          >
                                            <span className="text-[#8B80FF] group-hover:scale-110 transition-transform">
                                              {item.icon}
                                            </span>
                                            <span className="text-sm text-[#0A2540] group-hover:text-[#8B80FF] transition-colors font-medium">
                                              {item.name}
                                            </span>
                                          </motion.span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Footer CTA */}
                                <div className="px-8 py-5 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] flex items-center justify-between gap-6">
                                  <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <div className="w-12 h-12 rounded-xl bg-[#8B80FF]/20 flex items-center justify-center flex-shrink-0">
                                      <Rocket
                                        className="text-[#8B80FF]"
                                        size={24}
                                      />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-white font-bold text-base">
                                        Why Custom Always Outperforms
                                        Off-the-Shelf
                                      </p>
                                      <p className="text-gray-300 text-sm mt-1">
                                        Generic tools often fall short. We build
                                        software designed around your
                                        operations.
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => {
                                      setServicesOpen(false);
                                      openCalendly();
                                    }}
                                    className="px-6 py-3 bg-gradient-to-r from-[#8B80FF] to-[#667eea] text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-[#8B80FF]/30 transition-all duration-200 whitespace-nowrap flex-shrink-0"
                                  >
                                    Contact Us
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </>
                  ) : link.href.startsWith("/") ? (
                    <Link href={link.href} className="nav-link px-4 py-2 block">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="nav-link px-4 py-2 block">
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={openCalendly}
                className="px-5 py-2.5 bg-gradient-to-r from-[#8B80FF] to-[#667eea] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#8B80FF]/30 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Demo
                <ArrowRight size={16} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#0A2540] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden"
            >
              <div className="flex flex-col p-6 pt-20 h-full overflow-y-auto">
                <button
                  className="absolute top-4 right-4 p-2 text-[#0A2540]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>

                {navLinks.map((link, index) => (
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="py-4 text-lg font-medium text-[#0A2540] hover:text-[#8B80FF] transition-colors border-b border-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="py-4 text-lg font-medium text-[#0A2540] hover:text-[#8B80FF] transition-colors border-b border-gray-100"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  )
                ))}

                {/* Mobile Services List */}
                <div className="mt-6 mb-4">
                  <p className="text-xs font-semibold text-[#425466] uppercase tracking-wider mb-3">
                    Industry
                  </p>
                  <div className="space-y-1">
                    {industries.map((item, idx) => (
                      <motion.a
                        key={idx}
                        href="#services"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.02 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[#8B80FF]">{item.icon}</span>
                        <span className="text-sm font-medium text-[#0A2540]">
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-[#425466] uppercase tracking-wider mb-3">
                    Development
                  </p>
                  <div className="space-y-1">
                    {development.slice(0, 4).map((item, idx) => (
                      <motion.a
                        key={idx}
                        href="#services"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.02 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[#8B80FF]">{item.icon}</span>
                        <span className="text-sm font-medium text-[#0A2540]">
                          {item.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCalendly();
                  }}
                  className="mt-auto px-6 py-3 bg-gradient-to-r from-[#8B80FF] to-[#667eea] text-white font-semibold rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Book Demo →
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
