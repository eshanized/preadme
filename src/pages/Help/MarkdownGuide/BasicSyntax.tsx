import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';
import SyntaxExample from './SyntaxExample';

const BasicSyntax = () => {
  const examples = [
    { syntax: '# Heading 1', description: 'Main title' },
    { syntax: '## Heading 2', description: 'Section heading' },
    { syntax: '### Heading 3', description: 'Subsection heading' },
    { syntax: '**bold**', description: 'Bold text' },
    { syntax: '*italic*', description: 'Italic text' },
    { syntax: '~~strikethrough~~', description: 'Strikethrough text' },
    { syntax: '> quote', description: 'Blockquote' },
    { syntax: '- List item', description: 'Unordered list' },
    { syntax: '1. List item', description: 'Ordered list' },
  ];

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-nord-8 mb-4">Basic Syntax</h3>
      <div className="space-y-3">
        {examples.map((example) => (
          <SyntaxExample key={example.syntax} {...example} />
        ))}
      </div>
    </GlassCard>
  );
};

export default BasicSyntax;