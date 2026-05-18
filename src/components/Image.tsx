import React from 'react';
import { cn } from '../lib/utils';

// Mocking Next.js Image for Vite environment
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={cn('h-auto w-full object-cover', className)} 
      loading={props.priority ? 'eager' : 'lazy'}
    />
  );
};
