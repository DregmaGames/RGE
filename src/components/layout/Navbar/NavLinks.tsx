import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import { scrollToSection } from '../../../utils/scroll';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isScrollLink?: boolean;
}

function NavLink({ to, children, isScrollLink }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (isScrollLink) {
      e.preventDefault();
      scrollToSection(to.replace('#', ''));
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={cn(
        "text-gray-400 relative group transition-colors duration-300",
        "hover:text-neon-blue"
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full bg-neon-blue/0 group-hover:bg-neon-blue/10 -z-10 transform scale-[1.2] transition-all duration-300 blur-sm"></span>
    </Link>
  );
}

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLink to="#services" isScrollLink>Servicios</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
      <NavLink to="/experience">Experiencia</NavLink>
      <NavLink to="#about" isScrollLink>Nosotros</NavLink>
    </div>
  );
}