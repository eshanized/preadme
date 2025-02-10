import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/animations';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  animate?: boolean;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  cols = { default: 1, sm: 2, lg: 3 },
  animate = true
}) => {
  const gridClasses = [
    `grid-cols-${cols.default || 1}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ].filter(Boolean).join(' ');

  const Component = animate ? motion.div : 'div';

  return (
    <Component
      variants={animate ? staggerContainer : undefined}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`grid gap-6 ${gridClasses} ${className}`}
    >
      {children}
    </Component>
  );
};

export default ResponsiveGrid;