'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, Sparkles } from 'lucide-react';
import { useCalendly } from './CalendlyContext';

export default function FinalCTA() {
  const { openCalendly } = useCalendly();

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(118, 75, 162, 0.05) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-[#425466] mb-8">
            <Sparkles size={16} className="text-[#667eea]" />
            Ready to Transform?
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Build Something{' '}
          <span className="text-gradient-purple">Extraordinary</span>
        </motion.h2>

        <motion.p
          className="text-lg text-[#425466] mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Partner with us to turn your vision into reality. From AI agents to cloud infrastructure, 
          we deliver solutions that scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={openCalendly}
            className="group inline-flex items-center justify-center gap-2 btn-primary-gradient text-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar size={20} />
            Book a Demo
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
          
          <motion.a
            href="mailto:hello@gencloud.io"
            className="inline-flex items-center justify-center gap-2 btn-secondary text-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={20} className="text-[#667eea]" />
            Contact Us
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-[#667eea] font-semibold mb-1">Email</div>
              <div className="text-[#0A2540]">hello@gencloud.io</div>
            </div>
            <div>
              <div className="text-[#667eea] font-semibold mb-1">Phone</div>
              <div className="text-[#0A2540]">+1 (555) 123-4567</div>
            </div>
            <div>
              <div className="text-[#667eea] font-semibold mb-1">Location</div>
              <div className="text-[#0A2540]">San Francisco, CA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
