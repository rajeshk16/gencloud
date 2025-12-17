"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Shield,
  TrendingUp,
  Truck,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  BookOpen,
  UtensilsCrossed,
  Film,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Target,
  Users,
  Layers,
  Zap,
  Globe,
  Sparkles,
  BarChart3,
  Lock,
  Wallet,
  Package,
  Store,
  Hospital,
  School,
  Coffee,
  Tv,
  DollarSign,
  FileText,
  Clock,
  Award,
  Rocket,
  Brain,
  Database,
  Cloud,
  Smartphone,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    id: "insurance",
    title: "Insurance",
    subtitle: "Digital transformation for insurance providers",
    icon: <Shield className="w-7 h-7" />,
    color: "from-blue-500 to-cyan-500",
    lightColor: "from-blue-500/20 to-cyan-500/20",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    shadowColor: "shadow-blue-500/20",
    description:
      "We build modern insurance platforms that streamline policy management, claims processing, and customer engagement. Our solutions help insurers reduce operational costs, improve customer experience, and accelerate digital transformation.",
    features: [
      "Policy management systems",
      "Claims automation",
      "Customer portals",
      "Agent dashboards",
      "Risk assessment AI",
      "Fraud detection",
    ],
    useCases: [
      {
        title: "Claims Processing Automation",
        description: "AI-powered claims processing that reduces processing time by 70% and improves accuracy.",
        icon: <FileText className="w-5 h-5" />,
      },
      {
        title: "Customer Self-Service Portals",
        description: "Intuitive portals for policy management, claims filing, and document uploads.",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Agent Management Systems",
        description: "Comprehensive platforms for agent onboarding, training, and performance tracking.",
        icon: <Award className="w-5 h-5" />,
      },
      {
        title: "Risk Assessment Tools",
        description: "AI-driven risk analysis and underwriting automation for faster policy issuance.",
        icon: <Target className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "AWS", icon: "☁️" },
      { name: "Stripe", icon: "💳" },
      { name: "Twilio", icon: "📱" },
      { name: "Redis", icon: "🔴" },
    ],
    stats: [
      { value: "70%", label: "Faster Claims" },
      { value: "50%", label: "Cost Reduction" },
      { value: "90%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Availability" },
    ],
  },
  {
    id: "fintech",
    title: "Fintech",
    subtitle: "Next-generation financial technology solutions",
    icon: <Wallet className="w-7 h-7" />,
    color: "from-emerald-500 to-teal-500",
    lightColor: "from-emerald-500/20 to-teal-500/20",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    shadowColor: "shadow-emerald-500/20",
    description:
      "We develop secure, scalable fintech platforms for payments, lending, wealth management, and banking. Our solutions comply with financial regulations while delivering exceptional user experiences.",
    features: [
      "Payment processing",
      "Digital wallets",
      "Lending platforms",
      "Investment apps",
      "KYC/AML compliance",
      "Fraud prevention",
    ],
    useCases: [
      {
        title: "Digital Banking Platforms",
        description: "Full-featured neobank solutions with account management, transfers, and bill payments.",
        icon: <Building2 className="w-5 h-5" />,
      },
      {
        title: "Payment Gateways",
        description: "Secure payment processing with multi-currency support and instant settlements.",
        icon: <DollarSign className="w-5 h-5" />,
      },
      {
        title: "Lending & Credit Platforms",
        description: "Automated loan origination, credit scoring, and repayment management systems.",
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        title: "Investment & Trading Apps",
        description: "Real-time trading platforms with portfolio management and market analytics.",
        icon: <BarChart3 className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Stripe", icon: "💳" },
      { name: "Plaid", icon: "🏦" },
      { name: "AWS", icon: "☁️" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "Docker", icon: "🐳" },
    ],
    stats: [
      { value: "99.99%", label: "Uptime" },
      { value: "1M+", label: "Transactions/Day" },
      { value: "<100ms", label: "Response Time" },
      { value: "PCI DSS", label: "Compliant" },
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    subtitle: "Smart logistics & supply chain solutions",
    icon: <Truck className="w-7 h-7" />,
    color: "from-orange-500 to-red-500",
    lightColor: "from-orange-500/20 to-red-500/20",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-600",
    shadowColor: "shadow-orange-500/20",
    description:
      "We build intelligent logistics platforms that optimize routes, track shipments in real-time, and automate warehouse operations. Our solutions help logistics companies reduce costs and improve delivery efficiency.",
    features: [
      "Fleet management",
      "Route optimization",
      "Real-time tracking",
      "Warehouse automation",
      "Inventory management",
      "Delivery scheduling",
    ],
    useCases: [
      {
        title: "Fleet Management Systems",
        description: "Real-time vehicle tracking, driver management, and fuel optimization.",
        icon: <Truck className="w-5 h-5" />,
      },
      {
        title: "Warehouse Management",
        description: "Automated inventory tracking, picking optimization, and stock management.",
        icon: <Package className="w-5 h-5" />,
      },
      {
        title: "Last-Mile Delivery",
        description: "Route optimization and delivery tracking for efficient last-mile operations.",
        icon: <Target className="w-5 h-5" />,
      },
      {
        title: "Supply Chain Visibility",
        description: "End-to-end supply chain tracking with predictive analytics and alerts.",
        icon: <Globe className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "Google Maps", icon: "🗺️" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "AWS IoT", icon: "📡" },
      { name: "Redis", icon: "🔴" },
      { name: "Kafka", icon: "📨" },
      { name: "Docker", icon: "🐳" },
    ],
    stats: [
      { value: "30%", label: "Cost Savings" },
      { value: "40%", label: "Faster Delivery" },
      { value: "95%", label: "On-Time Rate" },
      { value: "Real-time", label: "Tracking" },
    ],
  },
  {
    id: "retail",
    title: "Retail",
    subtitle: "Omnichannel retail experiences",
    icon: <ShoppingCart className="w-7 h-7" />,
    color: "from-purple-500 to-pink-500",
    lightColor: "from-purple-500/20 to-pink-500/20",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
    shadowColor: "shadow-purple-500/20",
    description:
      "We create seamless omnichannel retail experiences that connect online and offline shopping. Our solutions include e-commerce platforms, POS systems, inventory management, and personalized customer experiences.",
    features: [
      "E-commerce platforms",
      "POS systems",
      "Inventory sync",
      "Customer loyalty",
      "Personalization AI",
      "Analytics dashboards",
    ],
    useCases: [
      {
        title: "E-commerce Platforms",
        description: "Full-featured online stores with product catalogs, checkout, and order management.",
        icon: <Store className="w-5 h-5" />,
      },
      {
        title: "Omnichannel POS",
        description: "Unified point-of-sale systems that sync inventory across all channels.",
        icon: <ShoppingCart className="w-5 h-5" />,
      },
      {
        title: "Loyalty & Rewards",
        description: "Customer loyalty programs with points, rewards, and personalized offers.",
        icon: <Award className="w-5 h-5" />,
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking across warehouses, stores, and online channels.",
        icon: <Package className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "Shopify", icon: "🛍️" },
      { name: "Stripe", icon: "💳" },
      { name: "Algolia", icon: "🔍" },
      { name: "Klaviyo", icon: "📧" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "AWS", icon: "☁️" },
    ],
    stats: [
      { value: "60%", label: "Conversion Increase" },
      { value: "3x", label: "Customer Retention" },
      { value: "50%", label: "Cart Recovery" },
      { value: "24/7", label: "Sales" },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Digital health & telemedicine solutions",
    icon: <HeartPulse className="w-7 h-7" />,
    color: "from-red-500 to-rose-500",
    lightColor: "from-red-500/20 to-rose-500/20",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    shadowColor: "shadow-red-500/20",
    description:
      "We develop HIPAA-compliant healthcare platforms for telemedicine, patient management, and health records. Our solutions improve patient care, streamline operations, and enable remote healthcare delivery.",
    features: [
      "Telemedicine platforms",
      "EHR/EMR systems",
      "Patient portals",
      "Appointment scheduling",
      "Prescription management",
      "HIPAA compliance",
    ],
    useCases: [
      {
        title: "Telemedicine Platforms",
        description: "Video consultations, chat, and remote patient monitoring for virtual care.",
        icon: <Hospital className="w-5 h-5" />,
      },
      {
        title: "Patient Management",
        description: "Comprehensive patient records, appointment scheduling, and billing systems.",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Health Monitoring Apps",
        description: "Wearable integration, vital signs tracking, and health analytics.",
        icon: <HeartPulse className="w-5 h-5" />,
      },
      {
        title: "Pharmacy Management",
        description: "E-prescriptions, medication tracking, and pharmacy inventory systems.",
        icon: <FileText className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "Node.js", icon: "🟢" },
      { name: "Twilio", icon: "📱" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "AWS", icon: "☁️" },
      { name: "Redis", icon: "🔴" },
      { name: "Socket.io", icon: "🔌" },
      { name: "Docker", icon: "🐳" },
    ],
    stats: [
      { value: "80%", label: "Patient Satisfaction" },
      { value: "50%", label: "Cost Reduction" },
      { value: "24/7", label: "Care Access" },
      { value: "HIPAA", label: "Compliant" },
    ],
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Modern learning management systems",
    icon: <GraduationCap className="w-7 h-7" />,
    color: "from-indigo-500 to-purple-500",
    lightColor: "from-indigo-500/20 to-purple-500/20",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    iconColor: "text-indigo-600",
    shadowColor: "shadow-indigo-500/20",
    description:
      "We build comprehensive education platforms for schools, universities, and training institutions. Our solutions include LMS, student portals, virtual classrooms, and administrative systems.",
    features: [
      "Learning management",
      "Virtual classrooms",
      "Student portals",
      "Assessment tools",
      "Progress tracking",
      "Parent communication",
    ],
    useCases: [
      {
        title: "Learning Management Systems",
        description: "Complete LMS with course management, assignments, grading, and analytics.",
        icon: <School className="w-5 h-5" />,
      },
      {
        title: "Virtual Classrooms",
        description: "Live video classes, screen sharing, breakout rooms, and interactive whiteboards.",
        icon: <Tv className="w-5 h-5" />,
      },
      {
        title: "Student Information Systems",
        description: "Enrollment, attendance, grades, and student records management.",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Assessment & Testing",
        description: "Online exams, automated grading, and performance analytics.",
        icon: <FileText className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Zoom SDK", icon: "📹" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "AWS", icon: "☁️" },
      { name: "Redis", icon: "🔴" },
      { name: "Socket.io", icon: "🔌" },
      { name: "Docker", icon: "🐳" },
    ],
    stats: [
      { value: "10K+", label: "Students" },
      { value: "95%", label: "Engagement" },
      { value: "40%", label: "Better Outcomes" },
      { value: "24/7", label: "Access" },
    ],
  },
  {
    id: "e-learning",
    title: "E-Learning",
    subtitle: "Interactive online learning platforms",
    icon: <BookOpen className="w-7 h-7" />,
    color: "from-teal-500 to-cyan-500",
    lightColor: "from-teal-500/20 to-cyan-500/20",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    iconColor: "text-teal-600",
    shadowColor: "shadow-teal-500/20",
    description:
      "We create engaging e-learning platforms with interactive content, gamification, and adaptive learning. Our solutions help EdTech companies deliver personalized learning experiences at scale.",
    features: [
      "Course creation tools",
      "Interactive content",
      "Gamification",
      "Adaptive learning",
      "Certification",
      "Mobile learning",
    ],
    useCases: [
      {
        title: "Online Course Platforms",
        description: "Marketplace for courses with video lessons, quizzes, and certificates.",
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        title: "Corporate Training",
        description: "Employee training platforms with compliance tracking and skill assessments.",
        icon: <Building2 className="w-5 h-5" />,
      },
      {
        title: "Language Learning Apps",
        description: "Interactive language courses with speech recognition and adaptive lessons.",
        icon: <Globe className="w-5 h-5" />,
      },
      {
        title: "Skill Development",
        description: "Professional skill courses with hands-on projects and peer reviews.",
        icon: <Award className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "React Native", icon: "📱" },
      { name: "Vimeo", icon: "🎬" },
      { name: "Stripe", icon: "💳" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
    ],
    stats: [
      { value: "1M+", label: "Learners" },
      { value: "85%", label: "Completion Rate" },
      { value: "4.8★", label: "Course Rating" },
      { value: "50K+", label: "Courses" },
    ],
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    subtitle: "Digital solutions for restaurants & food delivery",
    icon: <UtensilsCrossed className="w-7 h-7" />,
    color: "from-amber-500 to-orange-500",
    lightColor: "from-amber-500/20 to-orange-500/20",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    shadowColor: "shadow-amber-500/20",
    description:
      "We develop comprehensive food & beverage platforms including online ordering, delivery management, POS systems, and kitchen automation. Our solutions help restaurants increase revenue and improve operations.",
    features: [
      "Online ordering",
      "Delivery management",
      "Restaurant POS",
      "Kitchen display",
      "Table reservations",
      "Loyalty programs",
    ],
    useCases: [
      {
        title: "Food Delivery Platforms",
        description: "Multi-restaurant ordering with real-time tracking and driver management.",
        icon: <Truck className="w-5 h-5" />,
      },
      {
        title: "Restaurant Management",
        description: "POS, inventory, menu management, and staff scheduling in one platform.",
        icon: <Store className="w-5 h-5" />,
      },
      {
        title: "Table Reservation Systems",
        description: "Online booking, waitlist management, and table optimization.",
        icon: <Clock className="w-5 h-5" />,
      },
      {
        title: "Cloud Kitchen Solutions",
        description: "Multi-brand kitchen management with order aggregation and analytics.",
        icon: <Coffee className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "React Native", icon: "📱" },
      { name: "Stripe", icon: "💳" },
      { name: "Google Maps", icon: "🗺️" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "Socket.io", icon: "🔌" },
      { name: "AWS", icon: "☁️" },
    ],
    stats: [
      { value: "50%", label: "More Orders" },
      { value: "30min", label: "Avg Delivery" },
      { value: "90%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Operations" },
    ],
  },
  {
    id: "media-entertainment",
    title: "Media & Entertainment",
    subtitle: "Streaming & content platforms",
    icon: <Film className="w-7 h-7" />,
    color: "from-violet-500 to-fuchsia-500",
    lightColor: "from-violet-500/20 to-fuchsia-500/20",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    iconColor: "text-violet-600",
    shadowColor: "shadow-violet-500/20",
    description:
      "We build scalable media platforms for video streaming, content management, and audience engagement. Our solutions help media companies deliver high-quality content experiences across devices.",
    features: [
      "Video streaming",
      "Content management",
      "Live broadcasting",
      "Subscription billing",
      "Analytics & insights",
      "Multi-device support",
    ],
    useCases: [
      {
        title: "Video Streaming Platforms",
        description: "Netflix-like platforms with adaptive streaming, recommendations, and offline viewing.",
        icon: <Tv className="w-5 h-5" />,
      },
      {
        title: "Live Streaming",
        description: "Real-time broadcasting with chat, reactions, and multi-camera support.",
        icon: <Film className="w-5 h-5" />,
      },
      {
        title: "Content Management",
        description: "Digital asset management with metadata, transcoding, and distribution.",
        icon: <Database className="w-5 h-5" />,
      },
      {
        title: "OTT Platforms",
        description: "Over-the-top streaming services with subscription management and DRM.",
        icon: <Smartphone className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "React Native", icon: "📱" },
      { name: "AWS Media", icon: "🎬" },
      { name: "Cloudflare", icon: "☁️" },
      { name: "Stripe", icon: "💳" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "Docker", icon: "🐳" },
    ],
    stats: [
      { value: "10M+", label: "Viewers" },
      { value: "99.9%", label: "Uptime" },
      { value: "4K", label: "Streaming" },
      { value: "Global", label: "CDN" },
    ],
  },
];

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <motion.div
        className={`relative h-full bg-white rounded-3xl overflow-hidden border-2 ${industry.borderColor} transition-all duration-500`}
        whileHover={{ 
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Animated Gradient Background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${industry.lightColor} opacity-0 transition-opacity duration-500`}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
        />
        
        {/* Gradient Accent Bar */}
        <motion.div 
          className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${industry.color}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: index * 0.08 + 0.3 }}
          style={{ transformOrigin: "left" }}
        />

        {/* Card Content */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg ${industry.shadowColor}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {industry.icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              <motion.h3 
                className="text-xl font-bold text-[#0A2540] group-hover:text-[#667eea] transition-colors duration-300 truncate"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.08 + 0.2 }}
              >
                {industry.title}
              </motion.h3>
              <motion.p 
                className="text-sm text-[#425466] line-clamp-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.08 + 0.3 }}
              >
                {industry.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Stats Grid - Compact */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {industry.stats.slice(0, 2).map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: index * 0.08 + 0.4 + idx * 0.1 }}
                className={`${industry.bgColor} rounded-xl p-3 text-center border ${industry.borderColor}`}
              >
                <div className={`text-xl font-bold ${industry.iconColor}`}>{stat.value}</div>
                <div className="text-[10px] text-[#425466] font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {industry.features.slice(0, 4).map((feature, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.08 + 0.5 + idx * 0.05 }}
                className={`inline-flex items-center gap-1 px-2.5 py-1 ${industry.bgColor} rounded-full text-[10px] font-semibold ${industry.iconColor} border ${industry.borderColor}`}
              >
                <CheckCircle2 className="w-2.5 h-2.5" />
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Use Cases Preview */}
          <div className="flex-1 space-y-2 mb-4">
            {industry.useCases.slice(0, 2).map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.08 + 0.6 + idx * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100 transition-colors group/item"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {useCase.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-[#0A2540] text-sm truncate group-hover/item:text-[#667eea] transition-colors">{useCase.title}</h4>
                  <p className="text-[10px] text-[#425466] line-clamp-2 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Preview */}
          <motion.div 
            className="flex items-center gap-1 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.08 + 0.8 }}
          >
            <span className="text-[10px] font-semibold text-[#425466] uppercase tracking-wide mr-2">Tech:</span>
            {industry.techStack.slice(0, 5).map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-sm cursor-pointer hover:bg-white hover:shadow-md transition-all"
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
            {industry.techStack.length > 5 && (
              <span className="text-[10px] text-[#425466] font-medium">+{industry.techStack.length - 5}</span>
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href={`#${industry.id}-details`}
            className={`w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${industry.color} text-white flex items-center justify-center gap-2 shadow-lg ${industry.shadowColor} hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore {industry.title}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function IndustriesPage() {
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
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"
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
              <Building2 className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Industry Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6"
            >
              Industry-Specific{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#425466] leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              We deliver tailored technology solutions for diverse industries — from insurance and fintech 
              to healthcare and education. Deep domain expertise meets cutting-edge technology.
            </motion.p>

            {/* Industry Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {industries.map((industry, idx) => (
                <motion.a
                  key={industry.id}
                  href={`#${industry.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-200 hover:border-[#667eea] hover:shadow-lg transition-all duration-300 text-sm font-medium text-[#0A2540] hover:text-[#667eea]`}
                >
                  <span className={industry.iconColor}>{industry.icon}</span>
                  {industry.title}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">Industry Expertise</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              Tailored solutions for every sector with deep domain knowledge
            </p>
          </motion.div>

          {/* Grid Layout - 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {industries.map((industry, index) => (
              <div key={industry.id} id={industry.id} className="scroll-mt-24">
                <IndustryCard industry={industry} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
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
              <span className="text-sm font-medium text-[#667eea]">Deep Dive</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Industry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">Solutions</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              Comprehensive use cases and technology stacks for each industry
            </p>
          </motion.div>

          {/* Industry Detail Cards */}
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={`${industry.id}-details`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <div className={`bg-white rounded-3xl overflow-hidden border-2 ${industry.borderColor} shadow-xl ${industry.shadowColor}`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${industry.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {industry.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">{industry.title}</h3>
                        <p className="text-white/80">{industry.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-white/90 max-w-3xl">{industry.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {industry.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className={`${industry.bgColor} rounded-2xl p-4 text-center border ${industry.borderColor}`}
                        >
                          <div className={`text-2xl md:text-3xl font-bold ${industry.iconColor}`}>{stat.value}</div>
                          <div className="text-sm text-[#425466] font-medium">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Use Cases Grid */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                        <Target className={`w-5 h-5 ${industry.iconColor}`} />
                        Use Cases
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {industry.useCases.map((useCase, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`p-5 rounded-2xl ${industry.bgColor} border ${industry.borderColor} hover:shadow-lg transition-all`}
                          >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white mb-3`}>
                              {useCase.icon}
                            </div>
                            <h5 className="font-bold text-[#0A2540] mb-2">{useCase.title}</h5>
                            <p className="text-sm text-[#425466] leading-relaxed">{useCase.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                        <Code2 className={`w-5 h-5 ${industry.iconColor}`} />
                        Technology Stack
                      </h4>
                      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                        {industry.techStack.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="p-3 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-200 transition-all text-center cursor-pointer"
                          >
                            <div className="text-2xl mb-1">{tech.icon}</div>
                            <div className="text-xs font-medium text-[#0A2540]">{tech.name}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              <span className="text-sm font-medium text-[#667eea]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Industry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">Expertise</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              Deep domain knowledge combined with technical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Brain className="w-6 h-6" />, title: "Domain Experts", description: "Teams with industry-specific knowledge and years of experience", color: "from-blue-500 to-cyan-500", stat: "50+" },
              { icon: <Lock className="w-6 h-6" />, title: "Compliance Ready", description: "Built-in regulatory compliance for HIPAA, PCI DSS, GDPR", color: "from-emerald-500 to-teal-500", stat: "100%" },
              { icon: <Zap className="w-6 h-6" />, title: "Rapid Deployment", description: "Fast time-to-market with agile development methodology", color: "from-orange-500 to-red-500", stat: "2x" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Scalable Growth", description: "Solutions that grow with your business needs", color: "from-purple-500 to-pink-500", stat: "∞" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                    {item.stat}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2 group-hover:text-[#667eea] transition-colors">{item.title}</h3>
                <p className="text-[#425466] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A2540] via-[#1a3a5c] to-[#0A2540] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#667eea]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#764ba2]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can build a custom solution tailored to your industry needs and business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#667eea]/40 transition-all duration-300 text-lg"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg"
                >
                  View Case Studies
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
