import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';
import SyntaxExample from './SyntaxExample';

const Tables = () => {
  const examples = [
    { 
      syntax: '| Header | Header |\n|--------|--------|\n| Cell   | Cell   |',
      description: 'Basic table'
    },
    { 
      syntax: '| Left | Center | Right |\n|:-----|:------:|------:|\n| Text | Text   | Text  |',
      description: 'Aligned columns'
    },
    { 
      syntax: '| Header |\n|--------|\n| Cell 1 |\n| Cell 2 |',
      description: 'Single column'
    }
  ];

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-nord-8 mb-4">Tables</h3>
      <div className="space-y-3">
        {examples.map((example) => (
          <SyntaxExample key={example.syntax} {...example} />
        ))}
      </div>
    </GlassCard>
  );
};

export default Tables;