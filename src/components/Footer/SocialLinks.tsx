import React from 'react';
import { Github, Twitter } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/eshanized" className="text-nord-4 hover:text-nord-8" target="_blank" rel="noopener noreferrer">
        <Github className="w-5 h-5" />
      </a>
      <a href="https://twitter.com/eshanized" className="text-nord-4 hover:text-nord-8" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinks;