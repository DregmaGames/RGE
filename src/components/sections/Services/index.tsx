import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServicesHeader } from './ServicesHeader';
import { serviceData } from './serviceData';
import { NeonGrid } from '../../ui/NeonGrid';

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-cyber-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <NeonGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="neon-line" />
      </div>
    </section>
  );
}