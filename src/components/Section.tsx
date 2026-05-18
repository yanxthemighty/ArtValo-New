import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id, title, subtitle }) => {
  const isBreathing = !title && !subtitle;

  return (
    <section id={id} className={cn('py-24 px-6 md:px-12 lg:px-24 scroll-mt-24', className)}>
      <div className={cn('mx-auto', isBreathing ? 'max-w-full' : 'max-w-7xl')}>
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 space-y-2"
          >
            {title && (
              <h2 className="font-serif text-3xl md:text-5xl text-artvalo-ink tracking-tighter uppercase font-medium">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="max-w-2xl text-artvalo-muted text-lg font-light leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="h-[0.5px] w-full bg-artvalo-ink/10 mt-8" />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
