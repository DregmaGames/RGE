import React from 'react';
import { DissolveImage } from './DissolveImage';
import { cn } from '../../../utils/cn';

export function HeroBackground() {
  return (
    <>
      {/* Main Background with Dissolve Effect */}
      <DissolveImage 
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Additional Ambient Effects */}
      <div className="absolute inset-0 -z-5">
        {/* Animated Glow */}
        <div className={cn(
          "absolute inset-0",
          "bg-gradient-to-b from-neon-blue/5 via-transparent to-transparent",
          "opacity-30",
          "animate-pulse duration-[3s]"
        )} />
        
        {/* Subtle Grid Overlay */}
        <div className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)]",
          "bg-[size:50px_50px]",
          "opacity-20"
        )} />
      </div>
    </>
  );
}