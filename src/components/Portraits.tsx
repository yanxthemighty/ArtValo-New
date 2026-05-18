import React from 'react';

interface PortraitProps {
  type: string;
  className?: string;
}

export const Portrait: React.FC<PortraitProps> = ({ type, className = '' }) => {
  // Simple elegant line art sketches
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      className={className}
    >
      <circle cx="50" cy="40" r="15" /> {/* Head */}
      <path d="M50 55 Q50 90 50 90" /> {/* Spine */}
      <path d="M30 65 Q50 60 70 65" /> {/* Shoulders */}
      
      {/* Dynamic features based on type */}
      {type.includes('female') && (
        <path d="M35 30 Q50 20 65 30 Q70 45 65 60 Q50 65 35 60 Q30 45 35 30" strokeWidth="0.8" />
      )}
      
      {type === 'asian-female' && (
        <g opacity="0.8">
          <path d="M42 40 h5" />
          <path d="M53 40 h5" />
          <path d="M48 48 Q50 50 52 48" />
        </g>
      )}

      {type === 'indian-female' && (
        <g opacity="0.8">
          <circle cx="50" cy="35" r="1" fill="currentColor" stroke="none" />
          <path d="M40 40 Q43 38 46 40" />
          <path d="M54 40 Q57 38 60 40" />
        </g>
      )}
      
      {/* Decorative organic lines for 'sketch' feel */}
      <path d="M20 80 Q50 75 80 82" opacity="0.3" />
      <path d="M15 85 Q50 82 85 88" opacity="0.2" />
    </svg>
  );
};
