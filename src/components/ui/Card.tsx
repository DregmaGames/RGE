import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl',
      'border border-white/10 rounded-xl p-6',
      'hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300',
      'before:absolute before:inset-0 before:-z-10 before:rounded-xl',
      'before:bg-gradient-to-br before:from-blue-500/20 before:to-purple-500/20',
      'before:opacity-0 before:transition-opacity hover:before:opacity-100',
      className
    )}>
      {children}
    </div>
  );
}