"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cpu,
  Sparkles,
  Code2,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  Layers,
  ChevronRight,
  ExternalLink,
  Target,
  Database,
  Server,
  Terminal,
  Brain,
  MessageSquare,
  Workflow,
  LineChart,
  Settings,
  Cog,
  Network,
  Lightbulb,
  TrendingUp,
  Clock,
  Globe,
  FileText,
  Image,
  Mic,
  Video,
  Search,
  Mail,
  Calendar,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building2,
  Palette,
  Wrench,
  Rocket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendlyProvider, useCalendly } from "@/components/CalendlyContext";

const services = [
  {
    id: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    subtitle: "Transform your business with intelligent automation",
    icon: <Bot className="w-7 h-7" />,
    color: "from-violet-500 to-purple-600",
    lightColor: "from-violet-500/20 to-purple-600/20",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    iconColor: "text-violet-600",
    shadowColor: "shadow-violet-500/20",
    description:
      "We design and implement end-to-end AI automation solutions that streamline operations, reduce costs, and unlock new capabilities. From workflow automation to intelligent decision systems, we help businesses leverage AI to achieve operational excellence.",
    features: [
      "Workflow automation",
      "Process optimization",
      "Intelligent routing",
      "Predictive analytics",
      "Document processing",
      "Quality assurance AI",
    ],
    useCases: [
      {
        title: "Customer Service Automation",
        description: "Automate 80% of customer inquiries with AI-powered chatbots and ticket routing systems.",
        icon: <MessageSquare className="w-5 h-5" />,
      },
      {
        title: "Document Processing",
        description: "Extract, classify, and process documents automatically with OCR and NLP technologies.",
        icon: <FileText className="w-5 h-5" />,
      },
      {
        title: "Sales & Marketing Automation",
        description: "Automate lead scoring, email campaigns, and personalized content delivery.",
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        title: "Operations Optimization",
        description: "Streamline supply chain, inventory management, and resource allocation with AI.",
        icon: <Settings className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "LangChain", icon: "🔗" },
      { name: "OpenAI", icon: "🤖" },
      { name: "Python", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "Zapier", icon: "⚡" },
      { name: "n8n", icon: "🔄" },
      { name: "Make", icon: "🎯" },
      { name: "AWS Lambda", icon: "☁️" },
    ],
    stats: [
      { value: "80%", label: "Task Automation" },
      { value: "60%", label: "Cost Reduction" },
      { value: "10x", label: "Faster Processing" },
      { value: "24/7", label: "Operations" },
    ],
  },
  {
    id: "custom-ai-agents",
    title: "Custom AI Agents",
    subtitle: "Intelligent agents tailored to your business needs",
    icon: <Cpu className="w-7 h-7" />,
    color: "from-blue-500 to-cyan-500",
    lightColor: "from-blue-500/20 to-cyan-500/20",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    shadowColor: "shadow-blue-500/20",
    description:
      "We build custom AI agents that can reason, plan, and execute complex tasks autonomously. Our agents integrate with your existing systems and learn from interactions to continuously improve performance.",
    features: [
      "Autonomous task execution",
      "Multi-step reasoning",
      "Tool & API integration",
      "Memory & context",
      "Self-improvement",
      "Human-in-the-loop",
    ],
    useCases: [
      {
        title: "Research Agents",
        description: "AI agents that gather, analyze, and synthesize information from multiple sources.",
        icon: <Search className="w-5 h-5" />,
      },
      {
        title: "Sales Development Agents",
        description: "Autonomous agents that qualify leads, schedule meetings, and nurture prospects.",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Data Analysis Agents",
        description: "Agents that query databases, generate reports, and provide actionable insights.",
        icon: <LineChart className="w-5 h-5" />,
      },
      {
        title: "Personal Assistant Agents",
        description: "AI assistants that manage calendars, emails, and daily tasks intelligently.",
        icon: <Calendar className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "AutoGPT", icon: "🤖" },
      { name: "CrewAI", icon: "👥" },
      { name: "LangGraph", icon: "📊" },
      { name: "OpenAI", icon: "🧠" },
      { name: "Anthropic", icon: "🔮" },
      { name: "Pinecone", icon: "🌲" },
      { name: "Redis", icon: "🔴" },
      { name: "FastAPI", icon: "⚡" },
    ],
    stats: [
      { value: "100+", label: "Agents Deployed" },
      { value: "95%", label: "Task Accuracy" },
      { value: "50%", label: "Time Saved" },
      { value: "24/7", label: "Availability" },
    ],
  },
  {
    id: "gen-ai-development",
    title: "Gen AI Development",
    subtitle: "Harness the power of generative AI",
    icon: <Sparkles className="w-7 h-7" />,
    color: "from-pink-500 to-rose-500",
    lightColor: "from-pink-500/20 to-rose-500/20",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    iconColor: "text-pink-600",
    shadowColor: "shadow-pink-500/20",
    description:
      "We develop cutting-edge generative AI solutions including LLM applications, image generation, voice synthesis, and multimodal AI systems. Our solutions help businesses create content, automate creative tasks, and build innovative products.",
    features: [
      "LLM fine-tuning",
      "RAG systems",
      "Image generation",
      "Voice & audio AI",
      "Video generation",
      "Multimodal AI",
    ],
    useCases: [
      {
        title: "Content Generation",
        description: "Automated creation of marketing copy, blog posts, product descriptions, and social media content.",
        icon: <FileText className="w-5 h-5" />,
      },
      {
        title: "Image & Design AI",
        description: "Generate product images, marketing visuals, and design variations at scale.",
        icon: <Image className="w-5 h-5" />,
      },
      {
        title: "Voice & Audio Solutions",
        description: "Text-to-speech, voice cloning, and audio content generation for various applications.",
        icon: <Mic className="w-5 h-5" />,
      },
      {
        title: "Video Generation",
        description: "AI-powered video creation, editing, and personalization for marketing and training.",
        icon: <Video className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "GPT-4", icon: "🧠" },
      { name: "Claude", icon: "🔮" },
      { name: "Stable Diffusion", icon: "🎨" },
      { name: "Midjourney", icon: "🖼️" },
      { name: "ElevenLabs", icon: "🎙️" },
      { name: "Runway", icon: "🎬" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "Replicate", icon: "🔄" },
    ],
    stats: [
      { value: "10x", label: "Content Speed" },
      { value: "90%", label: "Cost Savings" },
      { value: "1M+", label: "Assets Generated" },
      { value: "50+", label: "Gen AI Projects" },
    ],
  },
  {
    id: "ai-applications",
    title: "AI Applications",
    subtitle: "Production-ready AI-powered applications",
    icon: <Code2 className="w-7 h-7" />,
    color: "from-emerald-500 to-teal-500",
    lightColor: "from-emerald-500/20 to-teal-500/20",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    shadowColor: "shadow-emerald-500/20",
    description:
      "We build full-stack AI applications that solve real business problems. From intelligent chatbots to recommendation engines, our applications are designed for scale, reliability, and seamless user experience.",
    features: [
      "Conversational AI",
      "Recommendation systems",
      "Predictive analytics",
      "Computer vision",
      "NLP applications",
      "Real-time AI",
    ],
    useCases: [
      {
        title: "AI Chatbots & Assistants",
        description: "Intelligent conversational interfaces for customer support, sales, and internal operations.",
        icon: <MessageSquare className="w-5 h-5" />,
      },
      {
        title: "Recommendation Engines",
        description: "Personalized product, content, and service recommendations that drive engagement.",
        icon: <ShoppingCart className="w-5 h-5" />,
      },
      {
        title: "Healthcare AI",
        description: "Diagnostic assistance, patient monitoring, and medical image analysis applications.",
        icon: <HeartPulse className="w-5 h-5" />,
      },
      {
        title: "EdTech AI",
        description: "Adaptive learning platforms, automated grading, and personalized education tools.",
        icon: <GraduationCap className="w-5 h-5" />,
      },
    ],
    techStack: [
      { name: "Next.js", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "🚀" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚙️" },
      { name: "AWS", icon: "☁️" },
    ],
    stats: [
      { value: "200+", label: "AI Apps Built" },
      { value: "99.9%", label: "Uptime" },
      { value: "5M+", label: "Users Served" },
      { value: "40%", label: "Efficiency Gain" },
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

function AIAutomationContent() {
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
            className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"
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
              <Bot className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">AI & Automation Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6"
            >
              Intelligent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">
                AI Solutions
              </span>{" "}
              for Modern Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#425466] leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              From custom AI agents to generative AI applications — we build intelligent solutions 
              that automate workflows, enhance decision-making, and drive innovation.
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

      {/* Why AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#667eea]/10 rounded-full mb-6">
              <Brain className="w-4 h-4 text-[#667eea]" />
              <span className="text-sm font-medium text-[#667eea]">Why Choose AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">AI</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              AI is not just a technology — it's a competitive advantage that drives efficiency, innovation, and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "10x Faster", description: "Automate repetitive tasks and accelerate workflows", color: "from-yellow-500 to-orange-500" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "60% Cost Savings", description: "Reduce operational costs with intelligent automation", color: "from-green-500 to-emerald-500" },
              { icon: <Target className="w-6 h-6" />, title: "95% Accuracy", description: "AI-powered decisions with high precision", color: "from-blue-500 to-cyan-500" },
              { icon: <Clock className="w-6 h-6" />, title: "24/7 Operations", description: "AI systems that work around the clock", color: "from-purple-500 to-pink-500" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-[#425466] text-sm">{item.description}</p>
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
              How We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">AI Solutions</span>
            </h2>
            <p className="text-lg text-[#425466] max-w-2xl mx-auto">
              A proven methodology that ensures successful AI implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: 1, title: "Discovery", icon: <Search className="w-5 h-5" />, color: "from-violet-500 to-purple-500" },
              { step: 2, title: "Data Prep", icon: <Database className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
              { step: 3, title: "Model Dev", icon: <Brain className="w-5 h-5" />, color: "from-pink-500 to-rose-500" },
              { step: 4, title: "Training", icon: <Cog className="w-5 h-5" />, color: "from-emerald-500 to-teal-500" },
              { step: 5, title: "Deploy", icon: <Rocket className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
              { step: 6, title: "Optimize", icon: <TrendingUp className="w-5 h-5" />, color: "from-indigo-500 to-purple-500" },
            ].map((item, idx) => (
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
              Ready to Leverage AI for Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how AI can transform your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#667eea]/30 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Start Your AI Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View AI Case Studies
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

export default function AIAutomationPage() {
  return (
    <CalendlyProvider>
      <AIAutomationContent />
    </CalendlyProvider>
  );
}
