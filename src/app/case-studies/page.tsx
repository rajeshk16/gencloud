"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Leaf,
  MessageSquare,
  Cloud,
  Shield,
  GraduationCap,
  TrendingUp,
  Globe,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendlyProvider, useCalendly } from "@/components/CalendlyContext";

const caseStudies = [
  {
    id: 1,
    title: "AI Chatbot for E-commerce Personalization",
    client: "Global Retail Brand",
    industry: "E-commerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    challenge: "The client struggled with low conversion rates and generic product recommendations that failed to engage customers effectively.",
    solution: "We developed an AI-powered chatbot that analyzes user behavior, purchase history, and browsing patterns to deliver hyper-personalized product recommendations in real-time.",
    results: [
      { metric: "25%", label: "Increase in Sales Conversion" },
      { metric: "40%", label: "Higher Customer Engagement" },
      { metric: "3x", label: "Faster Response Time" },
      { metric: "60%", label: "Reduction in Cart Abandonment" },
    ],
    technologies: ["Natural Language Processing", "Machine Learning", "Real-time Analytics", "Cloud Infrastructure"],
    testimonial: {
      quote: "Gencloud transformed our customer experience. The AI chatbot feels like having a personal shopping assistant for every customer.",
      author: "Sarah Chen",
      role: "Head of Digital, Global Retail Brand",
    },
  },
  {
    id: 2,
    title: "Carbon Tracking IoT Dashboard",
    client: "Environment Tech Startup",
    industry: "Environmental Technology",
    icon: <Leaf className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    challenge: "The client needed a comprehensive solution to monitor and visualize carbon emissions across multiple facilities in real-time.",
    solution: "We developed an IoT-based carbon footprint monitoring system with integrated real-time analytics dashboards, using Power BI for sustainability metrics visualization.",
    results: [
      { metric: "30%", label: "Reduction in Carbon Emissions" },
      { metric: "Real-time", label: "Emissions Monitoring" },
      { metric: "50+", label: "IoT Sensors Deployed" },
      { metric: "99.9%", label: "Data Accuracy" },
    ],
    technologies: ["IoT Sensors", "Power BI", "Azure Cloud", "Real-time Data Processing"],
    testimonial: {
      quote: "The dashboard gave us unprecedented visibility into our environmental impact. We've exceeded our sustainability goals thanks to Gencloud.",
      author: "Michael Torres",
      role: "Sustainability Director",
    },
  },
  {
    id: 3,
    title: "AI-Powered Multilingual Customer Support Agent",
    client: "International SaaS Company",
    industry: "Technology",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    challenge: "The client needed to provide 24/7 customer support across 15+ languages while maintaining quality and reducing operational costs.",
    solution: "Gencloud built a cloud-hosted conversational AI agent that integrates seamlessly with existing CRM systems (HubSpot and Zendesk). It uses Natural Language Processing (NLP) and machine learning to understand user intent and generate contextual responses in multiple languages.",
    results: [
      { metric: "15+", label: "Languages Supported" },
      { metric: "80%", label: "Queries Resolved Automatically" },
      { metric: "24/7", label: "Availability" },
      { metric: "45%", label: "Cost Reduction" },
    ],
    technologies: ["NLP", "Machine Learning", "HubSpot Integration", "Zendesk Integration", "Multi-language AI"],
    testimonial: {
      quote: "Our support team can now focus on complex issues while the AI handles routine queries flawlessly in any language.",
      author: "Emma Rodriguez",
      role: "VP of Customer Success",
    },
  },
  {
    id: 4,
    title: "Cloud Migration & Uptime Optimization",
    client: "Media Streaming Startup",
    industry: "Media & Entertainment",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    challenge: "The startup's video platform was experiencing frequent downtime and couldn't scale to meet growing user demand.",
    solution: "We migrated the entire video platform to AWS Cloud, implemented auto-scaling infrastructure, and optimized streaming delivery for global audiences.",
    results: [
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "10x", label: "User Capacity (1K → 10K concurrent)" },
      { metric: "50%", label: "Faster Streaming Speeds" },
      { metric: "35%", label: "Infrastructure Cost Savings" },
    ],
    technologies: ["AWS Cloud", "Auto-scaling", "CDN Optimization", "Kubernetes", "Load Balancing"],
    testimonial: {
      quote: "We went from constant firefighting to smooth sailing. Our platform now handles 10x the users without breaking a sweat.",
      author: "David Park",
      role: "CTO, Media Startup",
    },
  },
  {
    id: 5,
    title: "HIPAA-Compliant Patient Management System",
    client: "Healthcare Network",
    industry: "Healthcare",
    icon: <Shield className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    challenge: "The healthcare network needed a secure, scalable patient management system that met strict HIPAA compliance requirements.",
    solution: "Gencloud developed a cloud-based Patient Management System (PMS) designed for scalability, security, and compliance. The system includes encrypted data storage, audit trails, and role-based access controls.",
    results: [
      { metric: "100%", label: "HIPAA Compliance" },
      { metric: "50K+", label: "Patient Records Managed" },
      { metric: "Zero", label: "Security Breaches" },
      { metric: "40%", label: "Administrative Time Saved" },
    ],
    technologies: ["HIPAA Compliance", "End-to-end Encryption", "Cloud Security", "Role-based Access", "Audit Logging"],
    testimonial: {
      quote: "Security and compliance were non-negotiable. Gencloud delivered a system that exceeds our requirements while being incredibly user-friendly.",
      author: "Dr. Jennifer Walsh",
      role: "Chief Medical Officer",
    },
  },
  {
    id: 6,
    title: "AI-Powered Student Analytics Dashboard",
    client: "EdTech Platform",
    industry: "Education",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    challenge: "The EdTech platform needed to provide educators with actionable insights into student performance and learning patterns.",
    solution: "We built an AI-powered analytics dashboard that tracks student engagement, predicts at-risk students, and provides personalized learning recommendations.",
    results: [
      { metric: "35%", label: "Improvement in Student Outcomes" },
      { metric: "90%", label: "Prediction Accuracy for At-risk Students" },
      { metric: "2x", label: "Educator Efficiency" },
      { metric: "10K+", label: "Students Monitored" },
    ],
    technologies: ["Predictive Analytics", "Machine Learning", "Data Visualization", "Learning Management Integration"],
    testimonial: {
      quote: "The insights we get from this dashboard have transformed how we support our students. We can now intervene before students fall behind.",
      author: "Prof. Robert Kim",
      role: "Director of Learning Innovation",
    },
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        {/* Image Header */}
        <div className="relative h-64 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-90`} />
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-white">{study.icon}</div>
            </motion.div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              {study.industry}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-2 group-hover:text-[#667eea] transition-colors">
            {study.title}
          </h3>
          <p className="text-[#425466] mb-6">{study.client}</p>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {study.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className={`${study.bgColor} rounded-xl p-4 text-center`}
              >
                <div className={`text-2xl font-bold ${study.iconColor}`}>{result.metric}</div>
                <div className="text-xs text-[#425466] mt-1">{result.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#0A2540] uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-[#425466] text-sm leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#0A2540] uppercase tracking-wider mb-2">
                    Our Solution
                  </h4>
                  <p className="text-[#425466] text-sm leading-relaxed">{study.solution}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#0A2540] uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-[#425466]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className={`${study.bgColor} rounded-xl p-6`}>
                  <p className="text-[#0A2540] italic mb-4">"{study.testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${study.color} flex items-center justify-center text-white font-bold`}>
                      {study.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0A2540] text-sm">{study.testimonial.author}</div>
                      <div className="text-xs text-[#425466]">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full mt-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              isExpanded
                ? "bg-gray-100 text-[#425466] hover:bg-gray-200"
                : `bg-gradient-to-r ${study.color} text-white hover:shadow-lg`
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? "Show Less" : "View Full Case Study"}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className={`w-4 h-4 ${isExpanded ? "rotate-90" : ""}`} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function CaseStudiesContent() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { openCalendly } = useCalendly();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Hero Content */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#667eea]/10 rounded-full mb-6"
            >
              <BarChart3 className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Our Success Stories</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A2540] mb-6"
            >
              Case{" "}
              <span className="text-gradient-purple">Studies</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-[#425466] leading-relaxed mb-8"
            >
              Discover how we've helped businesses transform their operations with cutting-edge 
              AI solutions, cloud infrastructure, and custom software development.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { icon: <TrendingUp className="w-5 h-5" />, value: "200+", label: "Projects Delivered" },
                { icon: <Globe className="w-5 h-5" />, value: "15+", label: "Countries Served" },
                { icon: <Users className="w-5 h-5" />, value: "50+", label: "Happy Clients" },
                { icon: <Zap className="w-5 h-5" />, value: "99.9%", label: "Client Satisfaction" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#667eea]/10 flex items-center justify-center text-[#667eea]">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A2540]">{stat.value}</div>
                    <div className="text-sm text-[#425466]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#667eea]/30 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Explore Services
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

export default function CaseStudiesPage() {
  return (
    <CalendlyProvider>
      <CaseStudiesContent />
    </CalendlyProvider>
  );
}
