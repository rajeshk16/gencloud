'use client';

import { motion } from 'framer-motion';

export default function Clients() {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'FinanceHub', logo: 'FH' },
    { name: 'CloudScale', logo: 'CS' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'AIVentures', logo: 'AV' },
    { name: 'NextGen', logo: 'NG' },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          className="text-center text-sm text-[#425466] mb-8 uppercase tracking-wider font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by innovative companies worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-2 text-gray-400 hover:text-[#0A2540] transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-sm group-hover:border-[#667eea] group-hover:text-[#667eea] transition-all duration-300">
                  {client.logo}
                </div>
                <span className="font-semibold text-lg">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
