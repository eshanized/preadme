import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, Zap, Save, Download, 
  Sparkles, Github, Coffee, Terminal
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import IconButton from '../components/ui/IconButton';
import Container from '../components/ui/Container';
import ResponsiveGrid from '../components/ui/ResponsiveGrid';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Zap, title: 'Live Preview', description: 'See changes in real-time' },
    { icon: Save, title: 'Auto-Save', description: 'Never lose your work' },
    { icon: Download, title: 'Easy Export', description: 'Multiple export formats' },
    { icon: Terminal, title: 'Code Highlighting', description: 'Beautiful code blocks' },
    { icon: Github, title: 'GitHub Integration', description: 'Direct publishing' },
    { icon: Coffee, title: 'Templates', description: 'Ready-to-use templates' }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-nord-0 via-nord-1 to-nord-3 -z-10" />
      
      <Container className="py-8 md:py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
            <GlassCard className="p-4">
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-nord-8 mx-auto" />
            </GlassCard>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-nord-6 mb-6">
            Create Beautiful READMEs
          </h1>
          <p className="text-lg md:text-xl text-nord-4 mb-12 max-w-2xl mx-auto px-4">
            A modern README generator with live preview, templates, and markdown support.
            Perfect for developers who want stunning documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <IconButton 
              icon={FileText}
              label="Start Creating"
              onClick={() => navigate('/editor')}
              variant="primary"
            />
            <IconButton
              icon={Coffee}
              label="View Templates"
              onClick={() => navigate('/templates')}
              variant="secondary"
            />
          </div>
        </div>

        <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3 }} className="max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description }) => (
            <GlassCard 
              key={title} 
              className="p-6 transform hover:scale-105 transition-transform duration-200"
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-nord-8 mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-nord-6 mb-2">{title}</h3>
              <p className="text-sm md:text-base text-nord-4">{description}</p>
            </GlassCard>
          ))}
        </ResponsiveGrid>
      </Container>
    </div>
  );
};

export default LandingPage;