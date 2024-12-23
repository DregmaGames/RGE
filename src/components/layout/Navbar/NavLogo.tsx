import React from 'react';
import { cn } from '../../../utils/cn';

export function NavLogo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative group">
        <div className={cn(
          "absolute -inset-[2px] rounded-full",
          "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue",
          "opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-300"
        )} />
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img 
            src="/src/Images/logo circular rge.png" 
            alt="Rios Global Experts Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <span className="text-white font-bold text-xl">
        Rios Global Experts
      </span>
    </div>
  );
}