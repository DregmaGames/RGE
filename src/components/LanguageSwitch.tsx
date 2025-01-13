import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../translations';

const languages: { code: Language; label: string; name: string; flag: string }[] = [
  { code: 'es', label: 'ES', name: 'Español', flag: '🇦🇷' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'IT', name: 'Italian', flag: '🇮🇹' },
  { code: 'de', label: 'DE', name: 'Deutsch', flag: '🇩🇪' }
];

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md border border-primary/20 hover:border-primary/40 transition-colors duration-300"
      >
        <span className="text-gray-300 flex items-center gap-2">
          <span className="text-base">{currentLanguage?.flag}</span>
          <span>{currentLanguage?.name}</span>
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black border border-primary/20">
          <div className="py-1">
            {languages.map(({ code, name, flag }) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  language === code
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-300 hover:bg-primary/5 hover:text-primary'
                } transition-colors duration-300 flex items-center gap-2`}
              >
                <span className="text-base">{flag}</span>
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}