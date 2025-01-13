import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SocialMedia from './SocialMedia';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <footer className="bg-black border-t border-cyan-900 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img src="/logorge.png" alt="Rios Global Experts" className="h-12 w-12" />
        </div>
        
        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 px-4">
            <li>
              <a href="#home" className="text-cyan-100 hover:text-cyan-400 text-sm sm:text-base">
                {t.home}
              </a>
            </li>
            <li>
              <a href="#services" className="text-cyan-100 hover:text-cyan-400 text-sm sm:text-base">
                {t.services}
              </a>
            </li>
            <li>
              <a href="#about" className="text-cyan-100 hover:text-cyan-400 text-sm sm:text-base">
                {t.about}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-cyan-100 hover:text-cyan-400 text-sm sm:text-base">
                {t.contact}
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media */}
        <div className="mt-8 flex justify-center">
          <SocialMedia />
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm sm:text-base text-cyan-100">
          © {new Date().getFullYear()} Rios Global Experts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}