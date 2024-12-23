import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No dudes en enviar tu consulta para ver cómo podemos colaborar en tu próximo proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-deep-space/30 backdrop-blur-sm p-8 rounded-xl border border-neon-blue/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-neon-blue" />
                <span className="text-gray-300">contacto@riosglobalexperts.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-neon-purple" />
                <span className="text-gray-300">+54 (11) 6977-7846</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-neon-pink" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 bg-deep-space/30 border border-neon-blue/20 rounded-lg focus:outline-none focus:border-neon-blue text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-deep-space/30 border border-neon-blue/20 rounded-lg focus:outline-none focus:border-neon-blue text-white"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="w-full px-4 py-3 bg-deep-space/30 border border-neon-blue/20 rounded-lg focus:outline-none focus:border-neon-blue text-white"
            ></textarea>
            <button className="w-full bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/50 py-3 rounded-lg transition-all duration-300 hover:shadow-neon-blue">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}