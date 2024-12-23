import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-cyber-black/95 backdrop-blur-md py-4 border-b border-neon-blue/20' : 'bg-transparent py-6'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative group w-12 h-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="/src/Images/logo circular rge.png" 
                alt="Rios Global Experts Logo" 
                className="relative w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="text-white font-bold text-xl">Rios Global Experts</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Servicios', 'Nosotros', 'Experiencia', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-neon-blue relative group transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-neon-blue transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-black/95 backdrop-blur-md border-t border-neon-blue/20">
          <div className="px-4 py-4 space-y-4">
            {['Servicios', 'Nosotros', 'Experiencia', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-400 hover:text-neon-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}