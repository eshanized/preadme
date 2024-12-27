import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nord-1 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-nord-4 mb-4 md:mb-0">
            Created with ❤️ by <a href="https://github.com/eshanized" className="text-nord-8 hover:text-nord-7" target="_blank" rel="noopener noreferrer">eshanized</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/eshanized" className="text-nord-4 hover:text-nord-8" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/eshanized" className="text-nord-4 hover:text-nord-8" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;