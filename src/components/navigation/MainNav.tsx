import React from 'react';
import { cn } from '../../utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-gray-400 relative group transition-colors duration-300",
        "hover:text-neon-blue"
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-full bg-neon-blue/0 group-hover:bg-neon-blue/10 -z-10 transform scale-[1.2] transition-all duration-300 blur-sm"></span>
    </a>
  );
}

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink href="/services">Servicios</NavLink>
      <NavLink href="/contact">Contacto</NavLink>
      <NavLink href="/experience">Experiencia</NavLink>
    </nav>
  );
}