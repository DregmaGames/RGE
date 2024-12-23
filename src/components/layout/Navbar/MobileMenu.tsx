import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className={cn(
          "md:hidden relative group p-2 rounded-full",
          "hover:bg-neon-blue/10 transition-colors duration-300"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-neon-blue" />
        ) : (
          <Menu className="h-6 w-6 text-gray-400 group-hover:text-neon-blue" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 md:hidden">
          <div className={cn(
            "mx-4 p-4 rounded-2xl",
            "bg-deep-space/95 backdrop-blur-md",
            "border border-neon-blue/20",
            "animate-in fade-in slide-in-from-top-4"
          )}>
            <nav className="flex flex-col space-y-4">
              {['Servicios', 'Nosotros', 'Experiencia', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "text-gray-400 p-2 rounded-lg",
                    "hover:bg-neon-blue/10 hover:text-neon-blue",
                    "transition-colors duration-300"
                  )}
                  onClick={onToggle}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}