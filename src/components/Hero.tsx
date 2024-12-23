import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-blue-900 opacity-90" />
      <div className="absolute inset-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -1
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expertos Globales en Soluciones Integrales
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Liderando la innovación en Comercio Exterior, Ingeniería, Diseño y Capacitación
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 transition-colors">
            <span>Conoce más</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}