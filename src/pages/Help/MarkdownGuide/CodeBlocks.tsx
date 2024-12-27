import React from 'react';
import GlassCard from '../../../components/ui/GlassCard';
import SyntaxExample from './SyntaxExample';

const CodeBlocks = () => {
  const examples = [
    { 
      syntax: '`inline code`',
      description: 'Inline code'
    },
    { 
      syntax: '```\ncode block\n```',
      description: 'Basic code block'
    },
    { 
      syntax: '```javascript\nconst x = 42;\n```',
      description: 'JavaScript code'
    },
    { 
      syntax: '```python\ndef hello():\n    print("Hello")\n```',
      description: 'Python code'
    },
    { 
      syntax: '```diff\n+ added line\n- removed line\n```',
      description: 'Diff syntax'
    }
  ];

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-bold text-nord-8 mb-4">Code Blocks</h3>
      <div className="space-y-3">
        {examples.map((example) => (
          <SyntaxExample key={example.syntax} {...example} />
        ))}
      </div>
    </GlassCard>
  );
};

export default CodeBlocks;