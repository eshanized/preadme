import React from 'react';
import BasicSyntax from './BasicSyntax';
import ExtendedSyntax from './ExtendedSyntax';
import CodeBlocks from './CodeBlocks';
import Tables from './Tables';

const MarkdownGuide = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-nord-6">Markdown Guide</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BasicSyntax />
        <ExtendedSyntax />
        <CodeBlocks />
        <Tables />
      </div>
    </div>
  );
};

export default MarkdownGuide;