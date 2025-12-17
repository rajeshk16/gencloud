'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  index: number;
}

function BlogCard({ title, excerpt, image, date, readTime, category, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group premium-card rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[#0A2540] text-xs font-semibold uppercase tracking-wide">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-[#425466] mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#0A2540] mb-2 group-hover:text-[#667eea] transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#425466] text-sm mb-4 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>

        {/* Read More */}
        <motion.div
          className="flex items-center gap-2 text-[#667eea] font-medium text-sm group-hover:gap-3 transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          Read Article
          <ArrowRight size={14} />
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const articles = [
    {
      title: 'The Future of AI Agents in Enterprise Software',
      excerpt: 'Exploring how autonomous AI agents are transforming business operations and decision-making processes across industries.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      category: 'AI & ML',
    },
    {
      title: 'Cloud Architecture Best Practices for 2024',
      excerpt: 'A comprehensive guide to building scalable, secure, and cost-effective cloud infrastructure on modern platforms.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
      date: 'Jan 10, 2024',
      readTime: '12 min read',
      category: 'Cloud',
    },
    {
      title: 'Building High-Performance APIs at Scale',
      excerpt: 'Learn the strategies and technologies we use to handle millions of API requests while maintaining sub-100ms response times.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      date: 'Jan 5, 2024',
      readTime: '10 min read',
      category: 'Development',
    },
  ];

  return (
    <section id="blog" className="section-padding section-cream">
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
            Latest Insights
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-4">
            From Our <span className="text-gradient-purple">Blog</span>
          </h2>
          <p className="text-lg text-[#425466] max-w-2xl mx-auto">
            Insights, tutorials, and thought leadership on AI, cloud, and software development
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogCard key={article.title} {...article} index={index} />
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
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Articles
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
