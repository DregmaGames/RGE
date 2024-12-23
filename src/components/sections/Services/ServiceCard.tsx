import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  neonColor: string;
}

export function ServiceCard({ icon: Icon, title, description, features, neonColor }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-deep-space/30 backdrop-blur-sm",
        "border border-white/10",
        "hover:border-opacity-50 transition-all duration-500"
      )}
      style={{
        borderColor: neonColor,
        boxShadow: `0 0 20px ${neonColor}33`
      }}
    >
      <div className="p-6 relative z-10">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ color: neonColor }}
        >
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-start space-x-2 text-sm text-gray-300"
            >
              <span 
                className="mt-1 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: neonColor }}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${neonColor}22, transparent)` }}
      />
    </div>
  );
}