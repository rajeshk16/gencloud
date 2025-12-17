"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Layout,
  Smartphone,
  Monitor,
  CheckCircle2,
  Zap,
  Users,
  Layers,
  ChevronRight,
  ExternalLink,
  Target,
  Sparkles,
  Eye,
  MousePointer,
  PenTool,
  Figma,
  Frame,
  Grid3X3,
  Lightbulb,
  TrendingUp,
  Heart,
  Star,
  Wand2,
  Brush,
  Shapes,
  Component,
  Laptop,
  Globe,
  ShoppingCart,
  Building2,
  Rocket,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "ui-ux-design",
    title: "Best UI/UX Design Services",
    subtitle: "Human-centered design that delights users",
    icon: <Palette className="w-7 h-7" />,
    color: "from-pink-500 to-rose-500",
    lightColor: "from-pink-500/20 to-rose-500/20",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    iconColor: "text-pink-600",
    shadowColor: "shadow-pink-500/20",
    description:
      "We create intuitive, beautiful user experiences that drive engagement and conversions. Our design process combines user research, data-driven insights, and creative excellence to deliver interfaces that users love.",
    features: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "Visual design systems",
      "Usability testing",
      "Accessibility (WCAG)",
    ],
    useCases: [
      {
        title: "SaaS Product Design",
        description: "End-to-end design for B2B and B2C software products with complex workflows and dashboards.",
        icon: <Component className="w-5 h-5" />,
      },
      {
        title: "Mobile App Design",
        description: "Native iOS and Android app designs with platform-specific patterns and gestures.",
        icon: <Smartphone className="w-5 h-5" />,
      },
      {
        title: "E-commerce UX",
        description: "Conversion-optimized shopping experiences with seamless checkout flows.",
        icon: <ShoppingCart className="w-5 h-5" />,
      },
      {
        title: "Enterprise Dashboards",
        description: "Data-rich interfaces that make complex information easy to understand and act upon.",
        icon: <BarChart3 className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Figma", icon: "🎨" },
      { name: "Adobe XD", icon: "📐" },
      { name: "Sketch", icon: "💎" },
      { name: "Framer", icon: "⚡" },
      { name: "Principle", icon: "🎬" },
      { name: "Maze", icon: "🧪" },
      { name: "Hotjar", icon: "🔥" },
      { name: "Miro", icon: "📋" },
    ],
    stats: [
      { value: "500+", label: "Projects Designed" },
      { value: "40%", label: "Avg Conversion Lift" },
      { value: "4.9★", label: "Client Rating" },
      { value: "98%", label: "User Satisfaction" },
    ],
  },
  {
    id: "web-design",
    title: "Web Design",
    subtitle: "Stunning websites that convert and captivate",
    icon: <Monitor className="w-7 h-7" />,
    color: "from-violet-500 to-purple-600",
    lightColor: "from-violet-500/20 to-purple-600/20",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    iconColor: "text-violet-600",
    shadowColor: "shadow-violet-500/20",
    description:
      "We design modern, responsive websites that make a lasting impression. From landing pages to complex web applications, our designs combine aesthetics with functionality to deliver exceptional digital experiences.",
    features: [
      "Responsive design",
      "Landing page design",
      "Corporate websites",
      "Design systems",
      "Motion design",
      "Brand integration",
    ],
    useCases: [
      {
        title: "Corporate Websites",
        description: "Professional brand presence with compelling storytelling and lead generation.",
        icon: <Building2 className="w-5 h-5" />,
      },
      {
        title: "Landing Pages",
        description: "High-converting landing pages optimized for marketing campaigns and product launches.",
        icon: <Target className="w-5 h-5" />,
      },
      {
        title: "Portfolio Sites",
        description: "Creative showcase websites for agencies, designers, and creative professionals.",
        icon: <Frame className="w-5 h-5" />,
      },
      {
        title: "Web Applications",
        description: "Complex web app interfaces with intuitive navigation and user flows.",
        icon: <Laptop className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Figma", icon: "🎨" },
      { name: "Webflow", icon: "🌊" },
      { name: "Framer", icon: "⚡" },
      { name: "After Effects", icon: "🎬" },
      { name: "Lottie", icon: "✨" },
      { name: "GSAP", icon: "🚀" },
      { name: "Tailwind", icon: "🎯" },
      { name: "Spline", icon: "🔮" },
    ],
    stats: [
      { value: "300+", label: "Websites Designed" },
      { value: "50%", label: "Faster Load Times" },
      { value: "3x", label: "Engagement Increase" },
      { value: "100%", label: "Responsive" },
    ],
  },
];

const designPrinciples = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Centered",
    description: "Every design decision starts with understanding user needs and behaviors",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Visual Hierarchy",
    description: "Guide users naturally through content with intentional visual flow",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance First",
    description: "Beautiful designs that load fast and perform smoothly",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Emotional Design",
    description: "Create meaningful connections through thoughtful micro-interactions",
    color: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  { step: 1, title: "Discover", icon: <Lightbulb className="w-5 h-5" />, color: "from-violet-500 to-purple-500", description: "Research & understand" },
  { step: 2, title: "Define", icon: <Target className="w-5 h-5" />, color: "from-blue-500 to-cyan-500", description: "Strategy & planning" },
  { step: 3, title: "Design", icon: <PenTool className="w-5 h-5" />, color: "from-pink-500 to-rose-500", description: "Create & iterate" },
  { step: 4, title: "Prototype", icon: <Layers className="w-5 h-5" />, color: "from-emerald-500 to-teal-500", description: "Interactive mockups" },
  { step: 5, title: "Test", icon: <MousePointer className="w-5 h-5" />, color: "from-orange-500 to-red-500", description: "Validate with users" },
  { step: 6, title: "Deliver", icon: <Rocket className="w-5 h-5" />, color: "from-indigo-500 to-purple-500", description: "Handoff & support" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"usecases" | "tech">("usecases");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`relative bg-white rounded-3xl overflow-hidden border ${service.borderColor} hover:shadow-2xl ${service.shadowColor} transition-all duration-500`}
      >
        {/* Gradient Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`} />

        {/* Card Content */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.lightColor} flex items-center justify-center ${service.iconColor}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#667eea] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#425466]">{service.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#425466] leading-relaxed mb-6">{service.description}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {service.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                className={`${service.bgColor} rounded-xl p-3 text-center`}
              >
                <div className={`text-lg font-bold ${service.iconColor}`}>{stat.value}</div>
                <div className="text-[10px] text-[#425466] leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.features.map((feature, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.3 + idx * 0.03 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-[#425466]"
              >
                <CheckCircle2 className={`w-3 h-3 ${service.iconColor}`} />
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Expand Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              isExpanded
                ? "bg-gray-100 text-[#425466]"
                : `bg-gradient-to-r ${service.color} text-white hover:shadow-lg ${service.shadowColor}`
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? "Show Less" : "View Use Cases & Tech Stack"}
            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronRight className={`w-4 h-4 ${isExpanded ? "rotate-90" : ""}`} />
            </motion.span>
          </motion.button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-gray-100 mt-6">
                  {/* Tabs */}
                  <div className="flex gap-2 mb-6">
                    <button
                      onClick={() => setActiveTab("usecases")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "usecases"
                          ? `bg-gradient-to-r ${service.color} text-white`
                          : "bg-gray-100 text-[#425466] hover:bg-gray-200"
                      }`}
                    >
                      Use Cases
                    </button>
                    <button
                      onClick={() => setActiveTab("tech")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === "tech"
                          ? `bg-gradient-to-r ${service.color} text-white`
                          : "bg-gray-100 text-[#425466] hover:bg-gray-200"
                      }`}
                    >
                      Tech Stack
                    </button>
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    {activeTab === "usecases" && (
                      <motion.div
                        key="usecases"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        {service.useCases.map((useCase, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`p-4 rounded-xl ${service.bgColor} border ${service.borderColor}`}
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-3`}>
                              {useCase.icon}
                            </div>
                            <h4 className="font-semibold text-[#0A2540] mb-1">{useCase.title}</h4>
                            <p className="text-xs text-[#425466] leading-relaxed">{useCase.description}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                    {activeTab === "tech" && (
                      <motion.div
                        key="tech"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-4 gap-3"
                      >
                        {service.techStack.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className="p-3 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all text-center cursor-pointer"
                          >
                            <div className="text-2xl mb-1">{tech.icon}</div>
                            <div className="text-xs font-medium text-[#0A2540]">{tech.name}</div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function DesignServicesPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#667eea]/10 rounded-full mb-6"
            >
              <Palette className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Design Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6"
            >
              Design That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">
                Inspires
              </span>{" "}
              & Converts
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#425466] leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              We craft beautiful, intuitive digital experiences that delight users and drive business results. 
              From UI/UX design to stunning web interfaces — we bring your vision to life.
            </motion.p>

            {/* Service Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {services.map((service, idx) => (
                <motion.a
                  key={service.id}
                  href={`#${service.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-200 hover:border-[#667eea] hover:shadow-lg transition-all duration-300 text-sm font-medium text-[#0A2540] hover:text-[#667eea]`}
                >
                  <span className={service.iconColor}>{service.icon}</span>
                  {service.title}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#667eea]/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Our Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">Principles</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              The core values that guide every design decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center text-white mb-4`}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">{principle.title}</h3>
                <p className="text-[#425466] text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#667eea]/10 rounded-full mb-6">
              <Layers className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">Design</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              A proven design process that ensures beautiful, functional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#667eea]/30 text-center h-full">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-200 group-hover:text-[#667eea]/20 transition-colors mb-2">
                    {String(item.step).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-[#0A2540] mb-1">{item.title}</h3>
                  <p className="text-xs text-[#425466]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#667eea]/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">Excellence</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              A glimpse of our design work across various industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "SaaS Dashboard", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", color: "from-blue-500 to-cyan-500" },
              { title: "E-commerce App", category: "Mobile Design", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80", color: "from-purple-500 to-pink-500" },
              { title: "Corporate Website", category: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", color: "from-orange-500 to-red-500" },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color} mb-2`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-[#0A2540] transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's create something beautiful together. Get in touch to discuss your design project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#667eea]/30 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Case Studies
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
