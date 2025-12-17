'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  index: number;
}

function TestimonialCard({ quote, author, role, company, image, rating, index }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#667eea]/50 hover:shadow-xl transition-all duration-500"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-[#0A2540] text-lg leading-relaxed mb-6">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={image}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-[#0A2540]">{author}</div>
          <div className="text-sm text-[#425466]">{role} at <span className="text-[#667eea]">{company}</span></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Gencloud transformed our infrastructure completely. The migration was seamless, and we've seen a 60% reduction in costs. Their team is exceptional.",
      author: "Sarah Chen",
      role: "CTO",
      company: "FinanceHub",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
    },
    {
      quote: "The AI agents they built for us have revolutionized our customer service. Response times are down 80%, and satisfaction is at an all-time high.",
      author: "Michael Rodriguez",
      role: "VP of Operations",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      rating: 5,
    },
    {
      quote: "Working with Gencloud was a game-changer. They delivered a custom CRM that perfectly fits our workflow. Our sales team productivity tripled.",
      author: "Emily Watson",
      role: "Head of Sales",
      company: "SalesForce Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      rating: 5,
    },
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
            Client Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            What Our <span className="text-gradient-purple">Clients Say</span>
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional results
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
