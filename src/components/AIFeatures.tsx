'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Layout, Mail, Megaphone, Smartphone, Check, Sparkles } from 'lucide-react';
import { useCalendly } from './CalendlyContext';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  mockupContent: React.ReactNode;
}

export default function AIFeatures() {
  const [activeFeature, setActiveFeature] = useState('linkedin');
  const { openCalendly } = useCalendly();

  const features: Feature[] = [
    {
      id: 'linkedin',
      icon: <Linkedin size={20} />,
      title: 'Generate LinkedIn Content',
      description: 'Create engaging LinkedIn posts, articles, and comments that resonate with your audience and drive engagement.',
      benefits: ['AI-powered content suggestions', 'Optimal posting times', 'Engagement analytics', 'Brand voice consistency'],
      mockupContent: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2]" />
            <div>
              <div className="font-semibold text-[#0A2540]">Your Company</div>
              <div className="text-xs text-gray-500">Just now • 🌐</div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-4/5" />
            <div className="h-3 bg-gray-200 rounded w-3/4" />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>👍 1.2K</span>
            <span>💬 89 comments</span>
            <span>🔄 234 reposts</span>
          </div>
        </div>
      ),
    },
    {
      id: 'landing',
      icon: <Layout size={20} />,
      title: 'Build Landing Pages',
      description: 'Generate high-converting landing pages in minutes with AI-powered design and copy suggestions.',
      benefits: ['Drag-and-drop builder', 'A/B testing built-in', 'Mobile-responsive', 'SEO optimized'],
      mockupContent: (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="h-8 bg-gray-100 flex items-center px-3 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="p-4">
            <div className="h-20 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-lg mb-3" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-100 rounded w-full" />
              <div className="h-3 bg-gray-100 rounded w-2/3" />
            </div>
            <div className="mt-4 h-10 bg-[#667eea] rounded-lg" />
          </div>
        </div>
      ),
    },
    {
      id: 'followup',
      icon: <Mail size={20} />,
      title: 'Automate Follow-up Sequences',
      description: 'Set up intelligent email sequences that nurture leads and convert them into customers automatically.',
      benefits: ['Smart scheduling', 'Personalization tokens', 'Behavior triggers', 'Performance tracking'],
      mockupContent: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-[#0A2540]">Email Sequence</div>
            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">Active</span>
          </div>
          <div className="space-y-3">
            {['Day 1: Welcome', 'Day 3: Value Prop', 'Day 7: Case Study', 'Day 14: Offer'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i < 2 ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-400'}`}>
                  {i < 2 ? <Check size={14} /> : i + 1}
                </div>
                <span className="text-sm text-[#0A2540]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'campaigns',
      icon: <Megaphone size={20} />,
      title: 'Create Multi-channel Campaigns',
      description: 'Launch coordinated marketing campaigns across email, social, and ads from a single dashboard.',
      benefits: ['Unified analytics', 'Cross-channel sync', 'Budget optimization', 'Audience targeting'],
      mockupContent: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="font-semibold text-[#0A2540] mb-4">Campaign Performance</div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-lg font-bold text-blue-600">12.4K</div>
              <div className="text-xs text-gray-500">Reach</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg text-center">
              <div className="text-lg font-bold text-purple-600">8.2%</div>
              <div className="text-xs text-gray-500">CTR</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <div className="text-lg font-bold text-green-600">$2.4K</div>
              <div className="text-xs text-gray-500">Revenue</div>
            </div>
          </div>
          <div className="h-24 bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 rounded-lg" />
        </div>
      ),
    },
    {
      id: 'mobile',
      icon: <Smartphone size={20} />,
      title: 'Design Mobile Apps from Prompts',
      description: 'Describe your app idea and watch AI generate functional prototypes and designs instantly.',
      benefits: ['Natural language input', 'Instant prototypes', 'Export to code', 'Iterate quickly'],
      mockupContent: (
        <div className="flex justify-center">
          <div className="w-48 bg-white rounded-3xl p-2 shadow-lg border-4 border-gray-800">
            <div className="bg-gray-100 rounded-2xl p-4 h-80">
              <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
              <div className="h-24 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl mb-3" />
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-16 bg-gray-200 rounded-lg" />
                <div className="h-16 bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeFeatureData = features.find(f => f.id === activeFeature)!;

  return (
    <section className="section-padding section-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/80 mb-6">
            <Sparkles size={16} />
            AI-Powered Features
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Supercharge Your Business with{' '}
            <span className="text-gradient-blue">AI</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Our intelligent tools help you create, automate, and scale faster than ever before.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'bg-white text-[#0A2540]'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {feature.icon}
                  <span className="hidden sm:inline">{feature.title.split(' ').slice(0, 2).join(' ')}</span>
                </button>
              ))}
            </div>

            {/* Active Feature Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {activeFeatureData.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {activeFeatureData.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {activeFeatureData.benefits.map((benefit, i) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 mt-8 btn-primary-gradient"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try It Free
                  <Sparkles size={16} />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#667eea]/30 to-[#764ba2]/30 blur-3xl rounded-full" />
                
                {/* Mockup Content */}
                <div className="relative">
                  {activeFeatureData.mockupContent}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
