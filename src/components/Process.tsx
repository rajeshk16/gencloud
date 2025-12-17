'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <Search size={28} />,
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your business goals, challenges, and technical requirements to craft the perfect strategy.',
    },
    {
      icon: <Lightbulb size={28} />,
      number: '02',
      title: 'Strategy',
      description: 'Our team designs a comprehensive roadmap with clear milestones, timelines, and deliverables.',
    },
    {
      icon: <Code2 size={28} />,
      number: '03',
      title: 'Development',
      description: 'Agile development with weekly sprints, continuous integration, and transparent progress updates.',
    },
    {
      icon: <Rocket size={28} />,
      number: '04',
      title: 'Launch & Scale',
      description: 'Seamless deployment with ongoing support, monitoring, and optimization for peak performance.',
    },
  ];

  return (
    <section className="section-padding section-cream">
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
            Our Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            How We <span className="text-gradient-purple">Work</span>
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            A proven methodology that delivers results on time, every time
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent z-0" />
              )}
              
              <div className="relative z-10 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#667eea]/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#667eea] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#667eea] group-hover:to-[#764ba2] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

