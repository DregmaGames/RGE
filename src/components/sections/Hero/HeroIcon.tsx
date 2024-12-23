import React from 'react';
import { cn } from '../../../utils/cn';

export function HeroIcon() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
      {/* Glow Effects */}
      <div className={cn(
        "absolute inset-0",
        "rounded-full",
        "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue",
        "opacity-50 blur-xl",
        "animate-pulse duration-[3s]"
      )} />
      
      {/* Icon Container */}
      <div className={cn(
        "relative",
        "w-full h-full",
        "bg-deep-space/50 backdrop-blur-sm",
        "rounded-full p-4",
        "border border-neon-blue/30",
        "flex items-center justify-center",
        "group",
        "hover:scale-105 transition-transform duration-300"
      )}>
        <img
          src="/src/Images/hero-icon.png"
          alt="Global Solutions Icon"
          className={cn(
            "w-full h-full",
            "object-contain",
            "group-hover:animate-pulse"
          )}
        />
        
        {/* Orbital Ring */}
        <div className={cn(
          "absolute inset-0",
          "border-2 border-dashed border-neon-blue/20",
          "rounded-full",
          "animate-spin duration-[20s] linear infinite"
        )} />
      </div>
      
      {/* Accent Lines */}
      <div className="absolute -inset-4 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-8",
              "bg-gradient-to-t from-transparent via-neon-blue to-transparent",
              "opacity-50"
            )}
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: 'center'
            }}
          />
        ))}
      </div>
    </div>
  );
}