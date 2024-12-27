import { FC, ReactNode } from 'react';
import Container from '../ui/Container';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout: FC<PageLayoutProps> = ({ children, className = '' }) => (
  <Container>
    <div className={`py-8 space-y-8 ${className}`}>{children}</div>
  </Container>
);

export default PageLayout;
