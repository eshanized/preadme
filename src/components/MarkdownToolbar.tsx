import React from 'react';
import { Bold, Italic, Link, Code, List, ListOrdered } from 'lucide-react';

interface MarkdownToolbarProps {
  onInsert: (text: string) => void;
}

const MarkdownToolbar: React.FC<MarkdownToolbarProps> = ({ onInsert }) => {
  const tools = [
    { icon: Bold, text: '**bold**', label: 'Bold' },
    { icon: Italic, text: '*italic*', label: 'Italic' },
    { icon: Link, text: '[text](url)', label: 'Link' },
    { icon: Code, text: '`code`', label: 'Code' },
    { icon: List, text: '- item', label: 'Bullet List' },
    { icon: ListOrdered, text: '1. item', label: 'Numbered List' },
  ];

  return (
    <div className="flex space-x-2">
      {tools.map(({ icon: Icon, text, label }) => (
        <button
          key={label}
          onClick={() => onInsert(text)}
          className="p-2 hover:bg-nord-2 rounded-md text-nord-4"
          title={label}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
};

export default MarkdownToolbar;