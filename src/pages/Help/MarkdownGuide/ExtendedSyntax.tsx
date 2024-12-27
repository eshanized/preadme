import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';
import SyntaxExample from './SyntaxExample';

const ExtendedSyntax = () => {
  const examples = [
    { syntax: '[Link Text](url)', description: 'Hyperlink' },
    { syntax: '![Alt Text](image-url)', description: 'Image' },
    { syntax: '---', description: 'Horizontal rule' },
    { syntax: '- [ ] Task', description: 'Unchecked task' },
    { syntax: '- [x] Task', description: 'Checked task' },
    { syntax: '<kbd>Ctrl</kbd>', description: 'Keyboard key' },
    { syntax: 'footnote[^1]', description: 'Footnote reference' },
    { syntax: '[^1]: Note text', description: 'Footnote definition' },
    { syntax: '==highlight==', description: 'Highlighted text' },
  ];

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-nord-8 mb-4">Extended Syntax</h3>
      <div className="space-y-3">
        {examples.map((example) => (
          <SyntaxExample key={example.syntax} {...example} />
        ))}
      </div>
    </GlassCard>
  );
};

export default ExtendedSyntax;