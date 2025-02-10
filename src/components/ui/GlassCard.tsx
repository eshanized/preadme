import React from 'react';
import { motion } from 'framer-motion';
import { scaleUp } from '../../utils/animations';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', animate = true }) => {
  const Component = animate ? motion.div : 'div';

  return (
    <Component
      variants={animate ? scaleUp : undefined}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl transform transition-all duration-200 ${className}`}
    >
      {children}
    </Component>
  );
};

export default GlassCard;