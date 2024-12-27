import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Layout, Eye, HelpCircle, Sun, Moon } from 'lucide-react';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useStore();

  const navItems = [
    { path: '/editor', icon: FileText, label: 'Editor' },
    { path: '/templates', icon: Layout, label: 'Templates' },
    { path: '/preview', icon: Eye, label: 'Preview' },
    { path: '/help', icon: HelpCircle, label: 'Help' },
  ];

  return (
    <nav className="bg-nord-1 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="w-8 h-8 text-nord-8" />
            <span className="text-xl font-bold text-nord-6">README Generator</span>
          </Link>

          <div className="flex items-center space-x-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium
                  ${location.pathname === path
                    ? 'bg-nord-2 text-nord-6'
                    : 'text-nord-4 hover:bg-nord-2 hover:text-nord-6'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-nord-4 hover:bg-nord-2"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;