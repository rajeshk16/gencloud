"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Cloud,
  Rocket,
  Wrench,
  CheckCircle2,
  Code2,
  Zap,
  Shield,
  Users,
  Layers,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Target,
  Cpu,
  Database,
  Server,
  GitBranch,
  Terminal,
  Palette,
  Box,
  Workflow,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendlyProvider, useCalendly } from "@/components/CalendlyContext";

const services = [
  {
    id: "website-development",
    title: "Website Development",
    subtitle: "Custom websites that convert visitors into customers",
    icon: <Globe className="w-7 h-7" />,
    color: "from-blue-500 to-cyan-500",
    lightColor: "from-blue-500/20 to-cyan-500/20",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    shadowColor: "shadow-blue-500/20",
    description:
      "We build high-performance, responsive websites that deliver exceptional user experiences. From corporate sites to complex web applications, our solutions are tailored to your business goals.",
    features: [
      "Custom responsive design",
      "SEO-optimized architecture",
      "Fast loading speeds",
      "CMS integration",
      "E-commerce functionality",
      "Analytics & tracking",
    ],
    useCases: [
      {
        title: "Corporate Websites",
        description: "Professional online presence for enterprises with brand consistency and lead generation.",
        icon: <Target className="w-5 h-5" />,
      },
      {
        title: "E-commerce Platforms",
        description: "Full-featured online stores with payment integration, inventory management, and order tracking.",
        icon: <Box className="w-5 h-5" />,
      },
      {
        title: "Landing Pages",
        description: "High-converting landing pages optimized for marketing campaigns and lead capture.",
        icon: <Sparkles className="w-5 h-5" />,
      },
      {
        title: "Portfolio Sites",
        description: "Stunning showcase websites for creative professionals and agencies.",
        icon: <Palette className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Node.js", icon: "🟢" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Vercel", icon: "▲" },
      { name: "AWS", icon: "☁️" },
    ],
    stats: [
      { value: "500+", label: "Websites Delivered" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "<2s", label: "Load Time" },
      { value: "50%", label: "Conversion Increase" },
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    subtitle: "Native & cross-platform mobile experiences",
    icon: <Smartphone className="w-7 h-7" />,
    color: "from-purple-500 to-pink-500",
    lightColor: "from-purple-500/20 to-pink-500/20",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
    shadowColor: "shadow-purple-500/20",
    description:
      "We create intuitive, feature-rich mobile applications for iOS and Android. Our apps are designed for performance, scalability, and user engagement.",
    features: [
      "Native iOS & Android",
      "Cross-platform development",
      "Offline functionality",
      "Push notifications",
      "In-app purchases",
      "Analytics integration",
    ],
    useCases: [
      {
        title: "Consumer Apps",
        description: "Engaging mobile experiences for B2C businesses with social features and gamification.",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Enterprise Mobile",
        description: "Secure internal apps for workforce management, field operations, and communication.",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        title: "On-Demand Services",
        description: "Uber-like apps for delivery, transportation, and service booking platforms.",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: "Health & Fitness",
        description: "Wellness apps with tracking, wearable integration, and personalized recommendations.",
        icon: <Target className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🦋" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
      { name: "Firebase", icon: "🔥" },
      { name: "GraphQL", icon: "◈" },
      { name: "Redux", icon: "🔄" },
      { name: "Expo", icon: "📦" },
    ],
    stats: [
      { value: "200+", label: "Apps Launched" },
      { value: "4.8★", label: "Avg Store Rating" },
      { value: "10M+", label: "Downloads" },
      { value: "60%", label: "User Retention" },
    ],
  },
  {
    id: "cloud-saas",
    title: "Cloud & SaaS Development",
    subtitle: "Scalable cloud solutions for modern businesses",
    icon: <Cloud className="w-7 h-7" />,
    color: "from-orange-500 to-red-500",
    lightColor: "from-orange-500/20 to-red-500/20",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-600",
    shadowColor: "shadow-orange-500/20",
    description:
      "We architect and build cloud-native SaaS platforms that scale with your business. From multi-tenant architectures to microservices, we deliver robust cloud solutions.",
    features: [
      "Multi-tenant architecture",
      "Auto-scaling infrastructure",
      "Subscription management",
      "API-first design",
      "Real-time features",
      "Enterprise security",
    ],
    useCases: [
      {
        title: "B2B SaaS Platforms",
        description: "Subscription-based software products with user management and billing integration.",
        icon: <Workflow className="w-5 h-5" />,
      },
      {
        title: "Data Analytics Platforms",
        description: "Cloud-based analytics tools with dashboards, reporting, and data visualization.",
        icon: <Database className="w-5 h-5" />,
      },
      {
        title: "Collaboration Tools",
        description: "Real-time collaboration platforms like project management and communication tools.",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "API Services",
        description: "Developer-focused API products with documentation, SDKs, and usage analytics.",
        icon: <Terminal className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "AWS", icon: "☁️" },
      { name: "Google Cloud", icon: "🌐" },
      { name: "Kubernetes", icon: "⚙️" },
      { name: "Docker", icon: "🐳" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Redis", icon: "🔴" },
      { name: "Stripe", icon: "💳" },
      { name: "Auth0", icon: "🔐" },
    ],
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "50+", label: "SaaS Products" },
      { value: "100K+", label: "Active Users" },
      { value: "40%", label: "Cost Reduction" },
    ],
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    subtitle: "Launch fast, learn faster, scale smarter",
    icon: <Rocket className="w-7 h-7" />,
    color: "from-green-500 to-emerald-500",
    lightColor: "from-green-500/20 to-emerald-500/20",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    shadowColor: "shadow-green-500/20",
    description:
      "We help startups and enterprises validate ideas quickly with lean MVPs. Our rapid development approach gets your product to market in weeks, not months.",
    features: [
      "Rapid prototyping",
      "Lean methodology",
      "User feedback loops",
      "Iterative development",
      "Market validation",
      "Scalable foundation",
    ],
    useCases: [
      {
        title: "Startup Launch",
        description: "Get your startup idea to market quickly with a functional product for early adopters.",
        icon: <Rocket className="w-5 h-5" />,
      },
      {
        title: "Product Validation",
        description: "Test market demand and gather user feedback before full-scale development.",
        icon: <Target className="w-5 h-5" />,
      },
      {
        title: "Internal Tools",
        description: "Quickly build internal tools to improve operations and test new workflows.",
        icon: <Cpu className="w-5 h-5" />,
      },
      {
        title: "Proof of Concept",
        description: "Demonstrate technical feasibility to stakeholders and secure funding.",
        icon: <Sparkles className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "Supabase", icon: "⚡" },
      { name: "Vercel", icon: "▲" },
      { name: "Stripe", icon: "💳" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Prisma", icon: "◈" },
      { name: "Resend", icon: "📧" },
      { name: "Clerk", icon: "🔑" },
    ],
    stats: [
      { value: "4-8", label: "Weeks to Launch" },
      { value: "100+", label: "MVPs Delivered" },
      { value: "70%", label: "Funding Success" },
      { value: "3x", label: "Faster Time-to-Market" },
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    subtitle: "Keep your systems running at peak performance",
    icon: <Wrench className="w-7 h-7" />,
    color: "from-teal-500 to-cyan-500",
    lightColor: "from-teal-500/20 to-cyan-500/20",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    iconColor: "text-teal-600",
    shadowColor: "shadow-teal-500/20",
    description:
      "We provide comprehensive maintenance and support services to ensure your applications remain secure, performant, and up-to-date. Our team is available 24/7 for critical issues.",
    features: [
      "24/7 monitoring",
      "Security updates",
      "Performance optimization",
      "Bug fixes",
      "Feature enhancements",
      "Technical support",
    ],
    useCases: [
      {
        title: "Legacy System Support",
        description: "Maintain and modernize legacy applications while ensuring business continuity.",
        icon: <Server className="w-5 h-5" />,
      },
      {
        title: "Performance Optimization",
        description: "Identify and resolve bottlenecks to improve application speed and efficiency.",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: "Security Hardening",
        description: "Regular security audits, vulnerability patching, and compliance maintenance.",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        title: "Managed Services",
        description: "Full-service management of your cloud infrastructure and applications.",
        icon: <GitBranch className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Datadog", icon: "📊" },
      { name: "PagerDuty", icon: "🚨" },
      { name: "Sentry", icon: "🐛" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "Terraform", icon: "🏗️" },
      { name: "Ansible", icon: "🔧" },
      { name: "Grafana", icon: "📈" },
      { name: "Prometheus", icon: "🔥" },
    ],
    stats: [
      { value: "24/7", label: "Support Available" },
      { value: "<1hr", label: "Response Time" },
      { value: "99.9%", label: "Issue Resolution" },
      { value: "30%", label: "Cost Savings" },
    ],
  },
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

function DevelopmentServicesContent() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { openCalendly } = useCalendly();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-200/30 to-green-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
              <Code2 className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Development Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6"
            >
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">
                Digital Products
              </span>{" "}
              That Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#425466] leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              From websites to mobile apps, cloud platforms to MVPs — we deliver end-to-end 
              development solutions that drive business growth and user engagement.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
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
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">Deliver</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and on-time delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: 1, title: "Discovery", icon: <Users className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
              { step: 2, title: "Design", icon: <Palette className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
              { step: 3, title: "Develop", icon: <Code2 className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
              { step: 4, title: "Test", icon: <Shield className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
              { step: 5, title: "Launch", icon: <Rocket className="w-5 h-5" />, color: "from-teal-500 to-cyan-500" },
              { step: 6, title: "Support", icon: <Wrench className="w-5 h-5" />, color: "from-indigo-500 to-purple-500" },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 text-center h-full">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-200 group-hover:text-[#667eea]/20 transition-colors mb-2">
                    {String(item.step).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help bring your vision to life with our development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#667eea]/30 transition-all duration-300"
              >
                Get a Free Quote
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
