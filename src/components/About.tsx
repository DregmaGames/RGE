import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  // Function to render text with bold markdown-style syntax
  const renderDescription = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-cyan-400 sm:text-4xl neon-text mb-8">
            {t.title}
          </h2>

          {/* Profile Section */}
          <div className="mb-12">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <img
                src="/maxi.jpeg"
                alt="Maximiliano Rios"
                className="rounded-full w-full h-full object-cover border-4 border-cyan-400 neon-box shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Maximiliano Rios</h3>
            <p className="text-lg text-cyan-100 mb-8">CEO & Founder</p>
          </div>
          
          <div className="mb-12">
            <p className="text-lg text-cyan-100 leading-relaxed">
              {renderDescription(t.description)}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-md border-2 border-cyan-400 neon-box">
                  <span className="text-cyan-400 text-2xl font-bold">15+</span>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-medium text-cyan-400">{t.years}</h4>
                <p className="mt-2 text-cyan-100">{t.yearsDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}