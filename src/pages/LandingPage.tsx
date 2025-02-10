import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText, Zap, Save, Download,
  Sparkles, Github, Coffee, Terminal, ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import IconButton from '../components/ui/IconButton';
import Container from '../components/ui/Container';
import ResponsiveGrid from '../components/ui/ResponsiveGrid';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Zap, title: 'Live Preview', description: 'See changes in real-time as you type' },
    { icon: Save, title: 'Auto-Save', description: 'Your work is automatically saved' },
    { icon: Download, title: 'Easy Export', description: 'Export to multiple formats instantly' },
    { icon: Terminal, title: 'Code Highlighting', description: 'Syntax highlighting for code blocks' },
    { icon: Github, title: 'GitHub Integration', description: 'Publish directly to GitHub' },
    { icon: Coffee, title: 'Templates', description: 'Start with pre-built templates' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-4rem)] relative"
    >
      <AnimatedBackground />

      <Container className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-8"
            >
              <GlassCard className="p-4" hover={false}>
                <Sparkles className="w-12 h-12 text-nord-8" />
              </GlassCard>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-nord-6 mb-6 leading-tight">
              Create Beautiful
              <span className="text-nord-8"> READMEs</span>
            </h1>

            <p className="text-xl text-nord-4 mb-12 max-w-2xl">
              A modern README generator with live preview, templates, and markdown support.
              Perfect for developers who want stunning documentation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
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
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <GlassCard className="p-6" hover={false}>
              <img
                src="/preview-mockup.png"
                alt="Editor Preview"
                className="rounded-lg shadow-2xl"
              />
            </GlassCard>
          </motion.div>
        </div>

        {/* Features Grid */}
        <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3 }} className="max-w-6xl mx-auto mb-24">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <GlassCard className="p-8 h-full">
                <Icon className="w-10 h-10 text-nord-8 mb-4" />
                <h3 className="text-xl font-bold text-nord-6 mb-3">{title}</h3>
                <p className="text-nord-4">{description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </ResponsiveGrid>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <GlassCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-nord-6 mb-6">
              Ready to Create Your README?
            </h2>
            <p className="text-xl text-nord-4 mb-8">
              Join developers who are creating stunning documentation with our tools.
            </p>
            <IconButton
              icon={ArrowRight}
              label="Get Started Now"
              onClick={() => navigate('/editor')}
              variant="primary"
            />
          </GlassCard>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default LandingPage;