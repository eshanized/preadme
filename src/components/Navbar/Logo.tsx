import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <FileText className="w-8 h-8 text-nord-8" />
      <span className="text-xl font-bold text-nord-6">README Generator</span>
    </Link>
  );
};

export default Logo;