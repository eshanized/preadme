import React from 'react';

interface SyntaxExampleProps {
  syntax: string;
  description: string;
}

const SyntaxExample: React.FC<SyntaxExampleProps> = ({ syntax, description }) => {
  return (
    <div className="flex justify-between items-center">
      <code className="bg-nord-2 px-2 py-1 rounded text-nord-8 font-mono text-sm">
        {syntax}
      </code>
      <span className="text-nord-4">{description}</span>
    </div>
  );
};

export default SyntaxExample;