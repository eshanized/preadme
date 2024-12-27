import React from 'react';
import Credits from './Credits';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-nord-1 py-6 mt-auto border-t border-nord-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Credits />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;