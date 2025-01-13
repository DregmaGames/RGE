import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Clients() {
  const { language } = useLanguage();
  const t = translations[language].clients;

  return (
    <div id="clients" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl title-glow">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="h-16 object-contain"
                />
              </div>
              <blockquote className="mt-4">
                <p className="text-gray-300 italic">"{testimonial.review}"</p>
              </blockquote>
              <div className="mt-4 text-center">
                <p className="text-primary font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}