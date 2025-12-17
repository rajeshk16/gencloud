'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  client: string;
  description: string;
  outcome: string;
  image: string;
  index: number;
}

function ProjectCard({ title, client, description, outcome, image, index }: ProjectProps) {
  return (
    <Link href="/case-studies">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group premium-card rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 via-transparent to-transparent" />
          
          {/* Client Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[#0A2540] text-xs font-semibold">
            {client}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#0A2540] mb-2 group-hover:text-[#667eea] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#425466] text-sm mb-3 line-clamp-2">{description}</p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#667eea] font-semibold">Result:</span>
            <span className="text-[#425466]">{outcome}</span>
          </div>

          <motion.div
            className="mt-4 flex items-center gap-2 text-[#667eea] font-medium text-sm group-hover:gap-3 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            View Case Study
            <ExternalLink size={14} />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      client: 'TechCorp',
      description: 'Real-time data processing and predictive analytics dashboard serving 10M+ daily users.',
      outcome: '40% efficiency increase',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      title: 'Cloud Migration & Optimization',
      client: 'FinanceHub',
      description: 'Complete infrastructure overhaul from on-premise to AWS with zero downtime.',
      outcome: '60% cost reduction',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    {
      title: 'Custom CRM Solution',
      client: 'SalesForce Pro',
      description: 'Enterprise-grade CRM with AI-driven lead scoring and automated workflows.',
      outcome: '3x productivity boost',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      title: 'E-Commerce Platform',
      client: 'RetailMax',
      description: 'Scalable e-commerce solution handling 100K+ concurrent users during peak sales.',
      outcome: '250% revenue growth',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    },
    {
      title: 'Healthcare AI Assistant',
      client: 'MedTech',
      description: 'AI-powered diagnostic assistant reducing patient wait times and improving accuracy.',
      outcome: '80% faster diagnosis',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
    },
    {
      title: 'Supply Chain Optimization',
      client: 'LogiFlow',
      description: 'ML-driven supply chain management reducing waste and improving delivery times.',
      outcome: '35% cost savings',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
  ];

  return (
    <section id="portfolio" className="section-padding section-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#425466] mb-6">
            Our Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            Mini <span className="text-gradient-purple">Cases</span>
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            A selection of projects that showcase our expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/case-studies">
            <motion.span
              className="inline-flex items-center gap-2 btn-secondary cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
