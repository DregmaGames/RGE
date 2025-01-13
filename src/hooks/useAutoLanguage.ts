import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../translations';

export function useAutoLanguage() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    try {
      // Obtener el idioma del navegador
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      
      // Verificar si el idioma está soportado
      if (['es', 'en', 'it', 'de'].includes(browserLang)) {
        setLanguage(browserLang as Language);
      } else {
        // Si el idioma no está soportado, usar español por defecto
        setLanguage('es');
      }
    } catch (error) {
      console.error('Error detecting language:', error);
      setLanguage('es'); // Idioma por defecto si hay algún error
    }
  }, [setLanguage]);
}