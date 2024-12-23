import React from 'react';
import { ServiceCard } from '../components/ui/ServiceCard';
import { serviceData } from '../components/sections/Services/serviceData';
import { NeonGrid } from '../components/ui/NeonGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Background Elements */}
      <NeonGrid />
      
      {/* Header */}
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
          Nuestros Servicios
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">
          Soluciones integrales y personalizadas para impulsar tu negocio en el mercado global
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}