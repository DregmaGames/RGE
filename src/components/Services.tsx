import React from 'react';
import { Globe, Cog, Palette, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Comercio Exterior',
    description: 'Asesoramiento experto en importación, exportación y logística internacional'
  },
  {
    icon: Cog,
    title: 'Ingeniería',
    description: 'Soluciones técnicas innovadoras y desarrollo de proyectos industriales'
  },
  {
    icon: Palette,
    title: 'Diseño',
    description: 'Diseño industrial y desarrollo de productos con enfoque en la funcionalidad'
  },
  {
    icon: GraduationCap,
    title: 'Capacitación',
    description: 'Programas formativos especializados para profesionales y empresas'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales adaptadas a las necesidades de su empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}