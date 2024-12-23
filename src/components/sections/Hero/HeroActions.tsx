import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';

export function HeroActions() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Button variant="neon-primary">
        <span>Explorar Servicios</span>
        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button variant="neon-ghost" onClick={scrollToContact}>
        Contáctanos
      </Button>
    </div>
  );
}