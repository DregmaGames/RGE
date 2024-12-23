import React from 'react';
import { cn } from '../../../utils/cn';

export function HeroTitle() {
  return (
    <div className="relative">
      {/* Background Image Container */}
      <div className={cn(
        "absolute inset-0 -z-10",
        "opacity-60 mix-blend-overlay",
        "bg-cover bg-center bg-no-repeat",
        "rounded-xl overflow-hidden"
      )}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
          filter: "contrast(1.2) brightness(1.5)"
        }}
      />
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <span className={cn(
          "block text-transparent bg-clip-text",
          "bg-gradient-to-r from-neon-blue via-white to-yellow-300",
          "animate-title-glow"
        )}>
          Expertos Globales
        </span>
        <span className={cn(
          "block mt-2 text-white",
          "animate-subtle-glow"
        )}>
          en Soluciones Integrales
        </span>
      </h1>
    </div>
  );
}