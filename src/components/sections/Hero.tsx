import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { NeonGrid } from '../ui/NeonGrid';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-cyber-black">
      <NeonGrid />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-glow-pulse">
              Expertos Globales
            </span>
            <span className="block mt-2 text-white text-glow">en Soluciones Integrales</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformando el futuro a través de soluciones innovadoras en
            <span className="text-neon-blue"> Comercio Exterior</span>,
            <span className="text-neon-purple"> Ingeniería</span>,
            <span className="text-neon-pink"> Diseño</span> y
            <span className="text-neon-green"> Capacitación</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="neon-primary">
              <span>Explorar Servicios</span>
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="neon-ghost">
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="neon-line"></div>
      </div>
    </div>
  );
}