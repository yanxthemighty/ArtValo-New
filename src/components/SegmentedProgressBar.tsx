import React from 'react';
import { motion } from 'motion/react';

interface Segment {
  label: string;
  value: number;
  color: string;
  amount: string;
}

interface SegmentedProgressBarProps {
  segments: Segment[];
}

export const SegmentedProgressBar: React.FC<SegmentedProgressBarProps> = ({ segments }) => {
  const total = segments.reduce((acc, s) => acc + s.value, 0);

  return (
    <div className="space-y-4">
      <div className="flex h-12 w-full overflow-hidden rounded-full bg-artvalo-bg shadow-inner">
        {segments.map((segment, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            whileInView={{ width: `${(segment.value / total) * 100}%` }}
            transition={{ duration: 1, delay: i * 0.1, ease: 'circOut' }}
            style={{ backgroundColor: segment.color }}
            className="group relative h-full cursor-help transition-opacity hover:opacity-90"
          >
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded border border-artvalo-accent bg-artvalo-card px-2 py-1 text-[10px] group-hover:block whitespace-nowrap z-10 shadow-lg">
              {segment.label}: {segment.amount}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {segments.map((segment, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: segment.color }} />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-tighter text-artvalo-muted">{segment.label}</span>
              <span className="text-xs font-medium">{segment.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
