import React from 'react';
import { NeonGrid } from '../ui/NeonGrid';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-cyber-black">
      <NeonGrid />
      <div className="relative pt-20">
        {children}
      </div>
    </div>
  );
}