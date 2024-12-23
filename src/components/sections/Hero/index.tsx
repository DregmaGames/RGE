import React from 'react';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { HeroBackground } from './HeroBackground';
import { HeroIcon } from './HeroIcon';
import { NeonGrid } from '../../ui/NeonGrid';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <HeroBackground />
      <NeonGrid />
      
      {/* Content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8">
            <HeroIcon />
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
          </div>
        </div>
      </div>
      
      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="neon-line" />
      </div>
    </div>
  );
}