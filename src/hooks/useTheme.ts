import { useEffect } from 'react';
import { useStore } from '../store/useStore';

export const useTheme = () => {
  const { darkMode } = useStore();

  useEffect(() => {
    // Apply dark mode class to document root
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return { darkMode };
};