import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'neon-primary' | 'neon-ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'neon-primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'relative group px-8 py-3 rounded-full font-medium transition-all duration-300',
        variant === 'neon-primary' && [
          'bg-neon-blue/10 text-neon-blue border border-neon-blue/50',
          'hover:bg-neon-blue/20 hover:shadow-neon-blue',
          'animate-neon-border'
        ],
        variant === 'neon-ghost' && [
          'bg-deep-space/50 text-white border border-white/10',
          'hover:border-neon-blue/50 hover:text-neon-blue hover:bg-neon-blue/5',
          'transition-colors'
        ],
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center">
        {children}
      </span>
    </button>
  );
}