import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, Layout, Eye, HelpCircle, User, Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';
import GlassCard from '../ui/GlassCard';
import Container from '../ui/Container';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/editor', icon: FileText, label: 'Editor' },
    { path: '/templates', icon: Layout, label: 'Templates' },
    { path: '/preview', icon: Eye, label: 'Preview' },
    { path: '/help', icon: HelpCircle, label: 'Help' },
    { path: '/developer', icon: User, label: 'Developer' }
  ];

  return (
    <GlassCard className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/20">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <button 
            className="md:hidden p-2 text-nord-4 hover:text-nord-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                {...item}
                isActive={location.pathname === item.path}
              />
            ))}
            <div className="w-px h-6 bg-white/20 mx-2" />
            <ThemeToggle />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                {...item}
                isActive={location.pathname === item.path}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <div className="pt-2 border-t border-white/10">
              <ThemeToggle />
            </div>
          </div>
        )}
      </Container>
    </GlassCard>
  );
};

export default Navbar;