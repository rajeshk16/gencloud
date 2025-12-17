'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import FeaturedCase from '@/components/FeaturedCase';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import { CalendlyProvider } from '@/components/CalendlyContext';

export default function Page() {
  return (
    <CalendlyProvider>
      <main className="relative min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white overflow-x-hidden">
        <CursorFollower />
        <Navbar />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content Sections with Stagger Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Clients />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FeaturedCase />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Portfolio />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Stats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Process />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Blog />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FinalCTA />
        </motion.div>

        <Footer />
      </motion.div>
    </main>
    </CalendlyProvider>
  );
}
