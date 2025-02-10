import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import Navbar from '../Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useTheme(); // This will handle theme application

  return (
    <div className="min-h-screen bg-nord-0 dark:bg-nord-1">
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;