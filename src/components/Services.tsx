'use client';

import { motion, useInView } from 'framer-motion';
import { Globe, Smartphone, Bot, Cloud, Palette, Headphones, Rocket, Code, ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { useCalendly } from './CalendlyContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
  onOpenCalendly: () => void;
}

function ServiceCard({ icon, title, description, color, index, onOpenCalendly }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <motion.div
        className="premium-card rounded-3xl p-8 cursor-pointer h-full relative overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${color}08 0%, ${color}15 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with animated background */}
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
            style={{ background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)` }}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              style={{ color }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {icon}
            </motion.div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              style={{ background: color }}
            />
          </motion.div>

          <h3 className="text-xl font-bold text-[#0A2540] mb-3 group-hover:text-[#667eea] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-[#425466] text-sm leading-relaxed mb-6">
            {description}
          </p>

          <motion.button
            onClick={onOpenCalendly}
            className="inline-flex items-center gap-2 text-[#667eea] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            Learn More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Decorative corner element */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at top right, ${color}15 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const { openCalendly } = useCalendly();

  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Website Development',
      description: 'Custom websites that convert visitors into customers with stunning design and seamless UX.',
      color: '#667eea',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Apps',
      description: 'Native iOS & Android applications built for performance, scalability, and user engagement.',
      color: '#764ba2',
    },
    {
      icon: <Bot size={32} />,
      title: 'AI & Automation Solutions',
      description: 'Intelligent automation that streamlines workflows and boosts productivity across your business.',
      color: '#6B8DD6',
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud & SaaS Development',
      description: 'Scalable cloud infrastructure and SaaS platforms built on AWS, Azure, and GCP.',
      color: '#8E37D7',
    },
    {
      icon: <Palette size={32} />,
      title: 'Best UI/UX Design Services',
      description: 'User-centered design that creates intuitive, beautiful experiences your customers love.',
      color: '#F59E0B',
    },
    {
      icon: <Headphones size={32} />,
      title: 'Maintenance and Support',
      description: '24/7 customer support and ongoing maintenance to keep your systems running smoothly.',
      color: '#10B981',
    },
    {
      icon: <Rocket size={32} />,
      title: 'MVP Development',
      description: 'Launch your idea fast with a minimum viable product that validates your concept.',
      color: '#EF4444',
    },
    {
      icon: <Code size={32} />,
      title: 'Custom Software',
      description: 'Tailored software solutions built to solve your unique business challenges.',
      color: '#06B6D4',
    },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#425466] shadow-sm mb-6"
            initial={{ scale: 0 }}
            animate={isHeaderInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Sparkles size={16} className="text-[#8B80FF]" />
            Our Services
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Everything You Need to{' '}
            <span className="text-gradient-purple">Succeed</span>
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            From concept to launch and beyond—we provide comprehensive solutions that drive real business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} onOpenCalendly={openCalendly} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B80FF] to-[#667eea] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-[#8B80FF]/30 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
