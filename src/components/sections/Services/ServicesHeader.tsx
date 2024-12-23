import React from 'react';
import { cn } from '../../../utils/cn';

export function ServicesHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4",
        "text-transparent bg-clip-text",
        "bg-gradient-to-r from-neon-blue to-neon-purple",
        "animate-title-glow"
      )}>
        Nuestros Servicios
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Soluciones integrales y personalizadas para impulsar tu negocio en el mercado global
      </p>
    </div>
  );
}