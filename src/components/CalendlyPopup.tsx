'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Video, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyPopup({ isOpen, onClose }: CalendlyPopupProps) {
  const [isLoading, setIsLoading] = useState(true);
  const calendlyUrl = 'https://calendly.com/rajeshkanna-gencloud/30min';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const features = [
    { icon: <Clock size={16} />, text: '30 min consultation' },
    { icon: <Video size={16} />, text: 'Video or phone call' },
    { icon: <CheckCircle size={16} />, text: 'No commitment required' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#667eea] to-[#764ba2] p-6 text-white">
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                  }}
                />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Calendar size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold">Schedule a Demo</h2>
                      <p className="text-white/80 text-sm">Book a free consultation with our team</p>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Features */}
                <div className="relative z-10 flex flex-wrap gap-4 mt-4">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      {feature.icon}
                      {feature.text}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Calendly Embed */}
              <div className="relative h-[500px] bg-gray-50">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <motion.div
                      className="flex flex-col items-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-12 h-12 border-4 border-[#667eea]/30 border-t-[#667eea] rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <p className="text-[#425466] text-sm">Loading calendar...</p>
                    </motion.div>
                  </div>
                )}
                <iframe
                  src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=f9fafb&text_color=0A2540&primary_color=667eea`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a meeting"
                  onLoad={() => setIsLoading(false)}
                  className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
                />
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                <p className="text-[#425466] text-sm">
                  Powered by <span className="font-semibold text-[#667eea]">Calendly</span>
                </p>
                <motion.a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#667eea] text-sm font-medium hover:underline"
                  whileHover={{ x: 3 }}
                >
                  Open in new tab →
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
