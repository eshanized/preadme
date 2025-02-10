import React from 'react';
import { motion } from 'framer-motion';
import { scaleUp } from '../../utils/animations';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  animate = true,
  hover = true
}) => {
  const Component = animate ? motion.div : 'div';

  return (
    <Component
      variants={animate ? scaleUp : undefined}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={hover ? {
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        backgroundColor: "rgba(255, 255, 255, 0.15)"
      } : undefined}
      transition={{ duration: 0.2 }}
      className={`backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-xl transform transition-all duration-200 ${className}`}
    >
      {children}
    </Component>
  );
};

export default GlassCard;