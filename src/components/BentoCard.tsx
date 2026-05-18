import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: string;
  noPadding?: boolean;
  accentBorder?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className, 
  span = 'col-span-1', 
  noPadding = false,
  accentBorder = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        boxShadow: '0 8px 30px rgba(45, 45, 45, 0.05)',
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'relative overflow-hidden rounded-[2px] bg-artvalo-card shadow-sm transition-all duration-500',
        accentBorder && 'accent-border-l',
        span,
        !noPadding && 'p-5 md:p-6',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
