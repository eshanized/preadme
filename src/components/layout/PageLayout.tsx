import React from 'react';
import Container from '../ui/Container';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <Container>
      <div className={`py-8 space-y-8 ${className}`}>
        {children}
      </div>
    </Container>
  );
};

export default PageLayout;