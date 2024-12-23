import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
        {title}
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto px-4">
        {description}
      </p>
    </div>
  );
}