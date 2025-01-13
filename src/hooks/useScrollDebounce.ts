import { useState, useEffect } from 'react';

export function useScrollDebounce(delay: number = 150) {
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, delay);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [delay]);
  
  return isScrolling;
}