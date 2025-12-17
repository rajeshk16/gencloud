'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 200, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          transform: 'scale(3)',
        }}
      />
    </motion.div>
  );
}
