import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const IconButton: React.FC<IconButtonProps> = ({ 
  icon: Icon, 
  label, 
  onClick,
  variant = 'primary'
}) => {
  const baseStyles = "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm";
  const variants = {
    primary: "bg-nord-8/80 hover:bg-nord-8/90 text-nord-0",
    secondary: "bg-nord-3/50 hover:bg-nord-3/60 text-nord-6"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
};

export default IconButton;