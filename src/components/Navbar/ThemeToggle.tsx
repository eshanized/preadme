import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-md text-nord-4 hover:bg-nord-2 transition-colors"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;