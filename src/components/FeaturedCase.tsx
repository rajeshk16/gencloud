'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

export default function FeaturedCase() {
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
            Featured Case Study
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            Success <span className="text-gradient-purple">Stories</span>
          </h2>
        </motion.div>

        {/* Featured Case Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="AI Analytics Dashboard"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full text-white text-sm font-bold">
                AI & Analytics
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#667eea] font-semibold mb-2">TechCorp Industries</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0A2540] mb-4">
                AI-Powered Analytics Platform
              </h3>
              <p className="text-[#425466] text-lg leading-relaxed">
                We built a real-time data processing and predictive analytics dashboard 
                serving 10M+ daily users, transforming how TechCorp makes data-driven decisions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <TrendingUp className="text-[#667eea] mb-2" size={24} />
                <div className="text-2xl font-bold text-[#0A2540]">40%</div>
                <div className="text-sm text-[#425466]">Efficiency Gain</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Clock className="text-[#764ba2] mb-2" size={24} />
                <div className="text-2xl font-bold text-[#0A2540]">3mo</div>
                <div className="text-sm text-[#425466]">Delivery Time</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Users className="text-[#6B8DD6] mb-2" size={24} />
                <div className="text-2xl font-bold text-[#0A2540]">10M+</div>
                <div className="text-sm text-[#425466]">Daily Users</div>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-[#667eea] font-semibold hover:gap-3 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              Read Full Case Study
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

