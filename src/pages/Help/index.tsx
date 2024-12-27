import React from 'react';
import MarkdownGuide from './MarkdownGuide';
import KeyboardShortcuts from './KeyboardShortcuts';

const Help = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-nord-6">Documentation</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MarkdownGuide />
        <KeyboardShortcuts />
      </div>
    </div>
  );
};

export default Help;