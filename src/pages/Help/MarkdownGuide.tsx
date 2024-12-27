import React from 'react';

const MarkdownGuide = () => {
  const examples = [
    { syntax: '# Heading 1', description: 'Creates a large heading' },
    { syntax: '## Heading 2', description: 'Creates a medium heading' },
    { syntax: '**bold**', description: 'Makes text bold' },
    { syntax: '*italic*', description: 'Makes text italic' },
    { syntax: '[Link](url)', description: 'Creates a hyperlink' },
    { syntax: '- List item', description: 'Creates a bullet point' },
    { syntax: '1. Numbered item', description: 'Creates a numbered list' },
    { syntax: '`code`', description: 'Formats text as code' },
    { syntax: '```language\ncode block\n```', description: 'Creates a code block' },
  ];

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-nord-6 mb-6">Markdown Guide</h2>
      <div className="space-y-4">
        {examples.map(({ syntax, description }) => (
          <div key={syntax} className="flex justify-between items-center">
            <code className="bg-nord-2 px-2 py-1 rounded text-nord-8">{syntax}</code>
            <span className="text-nord-4">{description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkdownGuide;