import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import LanguageSwitch from './LanguageSwitch';
import ClientAccessButton from './ClientAccessButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800 fixed w-full z-50">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile Layout (3 elements) */}
          <div className="flex-1 flex items-center justify-between md:hidden">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/logorge.png" alt="Rios Global Experts" className="h-8 w-8" />
            </div>
            
            {/* Centered Text */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-lg font-bold text-white whitespace-nowrap">
                Rios Global Experts
              </span>
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-light hover:bg-primary/10 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:justify-between md:w-full">
            <div className="flex items-center">
              <img src="/logorge.png" alt="Rios Global Experts" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">
                Rios Global Experts
              </span>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-primary transition-colors duration-300">
                {t.home}
              </a>
              <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                {t.services}
              </a>
              <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300">
                {t.about}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-primary transition-colors duration-300">
                {t.contact}
              </a>
              <LanguageSwitch />
              <ClientAccessButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#home"
              className="text-gray-300 hover:text-primary text-lg w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-primary text-lg w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.services}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-primary text-lg w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-primary text-lg w-full text-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </a>
            <div className="pt-4 border-t border-gray-800 w-full flex justify-center">
              <ClientAccessButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}