import React, { useState, useEffect } from 'react';
import { cn } from '../../../utils/cn';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-500",
      isScrolled ? [
        "bg-cyber-black/95 backdrop-blur-md py-4",
        "border-b border-neon-blue/20",
        "after:absolute after:inset-0",
        "after:bg-gradient-to-r after:from-transparent",
        "after:via-neon-blue/5 after:to-transparent",
        "after:-z-10"
      ] : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLogo />
          <NavLinks />
          <MobileMenu 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </nav>
  );
}