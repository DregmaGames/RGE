import React from 'react';
import { Globe2, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-navy-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Globe2 className="h-8 w-8 text-blue-400" />
            <span className="text-white font-bold text-xl">Rios Global Experts</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">Nosotros</a>
              <a href="#expertise" className="text-gray-300 hover:text-white transition-colors">Experiencia</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}