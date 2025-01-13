import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

interface SocialMediaProps {
  className?: string;
}

export default function SocialMedia({ className = '' }: SocialMediaProps) {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/rios-global-experts',
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#0A66C2]'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/riosgexperts',
      label: 'Instagram',
      hoverColor: 'hover:text-[#E4405F]'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/riosglobalexperts',
      label: 'Facebook',
      hoverColor: 'hover:text-[#1877F2]'
    }
  ];

  return (
    <div className={`flex space-x-6 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transform transition-all duration-300 ${hoverColor} group`}
          aria-label={label}
        >
          <div className="bg-gray-900/50 p-3 rounded-lg border border-cyan-400/20 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300">
            <Icon className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
          </div>
        </a>
      ))}
    </div>
  );
}