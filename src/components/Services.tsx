import React from 'react';
import { Briefcase, Wrench, Palette, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const getServiceIcon = (title: string) => {
  switch (title) {
    case 'Comercio Exterior':
    case 'Foreign Trade':
    case 'Commercio Estero':
    case 'Außenhandel':
      return Briefcase;
    case 'Ingeniería':
    case 'Engineering':
    case 'Ingegneria':
    case 'Ingenieurwesen':
      return Wrench;
    case 'Diseño':
    case 'Design':
      return Palette;
    case 'Capacitación':
    case 'Training':
    case 'Formazione':
    case 'Schulung':
      return GraduationCap;
    default:
      return Briefcase;
  }
};

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <div id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl title-glow">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.items.map((service, index) => {
            const Icon = getServiceIcon(service.title);
            return (
              <div
                key={index}
                className="relative bg-black/50 p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gray-900 border border-primary/30 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-primary mb-4">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}