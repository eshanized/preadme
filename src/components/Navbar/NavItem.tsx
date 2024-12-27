import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  path: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const NavItem = ({ path, icon: Icon, label, isActive }: NavItemProps) => {
  return (
    <Link
      to={path}
      className={`
        flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200
        ${isActive 
          ? 'bg-nord-8/20 text-nord-8' 
          : 'text-nord-4 hover:bg-white/5 hover:text-nord-6'
        }
      `}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export default NavItem;