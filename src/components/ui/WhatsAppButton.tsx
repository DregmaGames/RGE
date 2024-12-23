import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = 'Hola! Me gustaría obtener más información.' }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'w-14 h-14 rounded-full',
        'bg-[#25D366] hover:bg-[#20BA5C]',
        'flex items-center justify-center',
        'transition-all duration-300 transform hover:scale-110',
        'shadow-lg hover:shadow-xl',
        'group',
        'before:content-[""] before:absolute before:-inset-2',
        'before:bg-[#25D366]/20 before:rounded-full',
        'before:animate-ping before:opacity-75'
      )}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white transform transition-transform group-hover:rotate-12" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </button>
  );
}