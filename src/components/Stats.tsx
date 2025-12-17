'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
}

function AnimatedCounter({ value, suffix, label, index }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const displayValue = useMotionValue('0');

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      displayValue.set(Math.floor(latest).toString());
    });
  }, [springValue, displayValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#667eea]/50 hover:shadow-lg transition-all duration-300"
    >
      <motion.div className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-2">
        <motion.span>{displayValue}</motion.span>
        <span className="text-[#667eea]">{suffix}</span>
      </motion.div>
      <div className="text-[#425466] font-medium">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: 50, suffix: '+', label: 'Expert Specialists' },
    { value: 200, suffix: '+', label: 'Projects Delivered' },
    { value: 99, suffix: '.9%', label: 'Uptime Guarantee' },
    { value: 15, suffix: '+', label: 'Countries Served' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-[#425466] mb-6">
            By The Numbers
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            Proven <span className="text-gradient-purple">Excellence</span>
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCounter key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
