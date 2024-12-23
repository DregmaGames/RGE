import React from 'react';
import { Globe, Cog, Palette, GraduationCap } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Comercio Exterior',
    description: 'Asesoramiento experto en importación, exportación y logística internacional',
    neonColor: '#00F3FF'
  },
  {
    icon: Cog,
    title: 'Ingeniería',
    description: 'Soluciones técnicas innovadoras y desarrollo de proyectos industriales',
    neonColor: '#FF00FF'
  },
  {
    icon: Palette,
    title: 'Diseño',
    description: 'Diseño industrial y desarrollo de productos con enfoque en la funcionalidad',
    neonColor: '#FF0080'
  },
  {
    icon: GraduationCap,
    title: 'Capacitación',
    description: 'Programas formativos especializados para profesionales y empresas',
    neonColor: '#00FF9D'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-cyber-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales adaptadas al mundo digital de hoy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}