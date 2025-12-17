'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield, BarChart3 } from 'lucide-react';
import { useRef } from 'react';
import { useCalendly } from './CalendlyContext';

export default function Hero() {
  const trustLogos = ['TechCorp', 'FinanceHub', 'CloudScale', 'DataFlow', 'AIVentures'];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { openCalendly } = useCalendly();

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Grid Background with Gradient */}
      <div className="absolute inset-0 bg-white">
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 128, 255, 0.15) 0%, rgba(139, 128, 255, 0.05) 30%, transparent 60%)',
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 128, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 128, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Fade out grid at edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" />
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 128, 255, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#425466] shadow-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 128, 255, 0.2)" }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={16} className="text-[#8B80FF]" />
                </motion.div>
                AI-Powered Business Solutions
              </motion.span>
            </motion.div>

            {/* Main Headline with stagger effect */}
            <motion.h1
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0A2540]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Build, Grow, and Automate Your Business with{' '}
              <motion.span 
                className="text-gradient-purple inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                AI
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 text-lg text-[#425466] max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From stunning websites to intelligent lead generation—everything you need to scale your business, powered by cutting-edge AI technology.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.button
                onClick={openCalendly}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B80FF] to-[#667eea] text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#8B80FF]/30 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#8B80FF]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Book a Demo</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={20} />
              </motion.button>
              <motion.a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-[#0A2540] rounded-xl font-semibold text-lg transition-all duration-300 hover:border-[#8B80FF] hover:bg-gray-50 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} className="text-[#8B80FF]" />
                Explore Solutions
              </motion.a>
            </motion.div>

            {/* Trust Badges with stagger animation */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-sm text-[#425466] mb-4">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {trustLogos.map((logo, i) => (
                  <motion.div
                    key={logo}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-[#425466] text-sm font-medium shadow-sm cursor-pointer"
                  >
                    {logo}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Enhanced Dashboard Mockup */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B80FF] to-[#667eea] flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <BarChart3 size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-[#0A2540]">AI Dashboard</div>
                      <div className="text-xs text-gray-500">Real-time analytics</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>

                {/* Stats Grid with counter animation */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <motion.div 
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                    whileHover={{ scale: 1.05, backgroundColor: "#f8f9ff" }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-[#8B80FF]"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1, type: "spring" }}
                    >
                      2.4K
                    </motion.div>
                    <div className="text-xs text-gray-500">Leads Generated</div>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                    whileHover={{ scale: 1.05, backgroundColor: "#f8f9ff" }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-[#667eea]"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1.1, type: "spring" }}
                    >
                      89%
                    </motion.div>
                    <div className="text-xs text-gray-500">Conversion Rate</div>
                  </motion.div>
                  <motion.div 
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                    whileHover={{ scale: 1.05, backgroundColor: "#f8f9ff" }}
                  >
                    <motion.div 
                      className="text-2xl font-bold text-green-500"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1.2, type: "spring" }}
                    >
                      $124K
                    </motion.div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </motion.div>
                </div>

                {/* Chart Placeholder with animated bars */}
                <div className="h-32 bg-gradient-to-r from-[#8B80FF]/10 to-[#667eea]/10 rounded-xl flex items-end justify-around p-4 border border-gray-100">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-6 bg-gradient-to-t from-[#8B80FF] to-[#667eea] rounded-t-md"
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${h}%` } : { height: 0 }}
                      transition={{ delay: 1.3 + i * 0.1, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.1, backgroundColor: "#667eea" }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Cards with enhanced animations */}
              <motion.div
                className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 w-48 border border-gray-100"
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Zap size={20} className="text-green-600" />
                  </motion.div>
                  <div>
                    <div className="text-sm font-semibold text-[#0A2540]">AI Automation</div>
                    <motion.div 
                      className="text-xs text-green-600"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Active
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 w-44 border border-gray-100"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Shield size={20} className="text-purple-600" />
                  </motion.div>
                  <div>
                    <div className="text-sm font-semibold text-[#0A2540]">99.9%</div>
                    <div className="text-xs text-gray-500">Uptime</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
