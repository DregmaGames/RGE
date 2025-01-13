import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, LogOut } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useModal } from '../contexts/ModalContext';

export default function ClientAccessButton() {
  const { user, signOut } = useAuth();
  const { language } = useLanguage();
  const { openAuthModal } = useModal();
  const t = translations[language].auth;

  const handleClick = async () => {
    if (user) {
      try {
        await signOut();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    } else {
      openAuthModal();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 border border-yellow-400/20 text-yellow-400 rounded-md hover:bg-yellow-400/10 transition-all duration-300 group"
    >
      {user ? (
        <>
          <LogOut className="w-4 h-4" />
          {t.signOut}
        </>
      ) : (
        <>
          <LogIn className="w-4 h-4" />
          {t.clientAccess}
        </>
      )}
    </button>
  );
}