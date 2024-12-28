import React, { useState } from 'react';
import { Bold, Italic, Link, Code, List, ListOrdered } from 'lucide-react';

interface MarkdownToolbarProps {
  onInsert: (text: string) => void;
}

const MarkdownToolbar: React.FC<MarkdownToolbarProps> = ({ onInsert }) => {
  const [activeTool, setActiveTool] = useState<string | null>(null); // Track active tool for visual feedback

  const tools = [
    { icon: Bold, text: '**bold**', label: 'Bold', tooltip: 'Bold (Ctrl+B)' },
    { icon: Italic, text: '*italic*', label: 'Italic', tooltip: 'Italic (Ctrl+I)' },
    { icon: Link, text: '[text](url)', label: 'Link', tooltip: 'Insert Link (Ctrl+K)' },
    { icon: Code, text: '`code`', label: 'Code', tooltip: 'Inline Code (Ctrl+Shift+C)' },
    { icon: List, text: '- item', label: 'Bullet List', tooltip: 'Bullet List (Ctrl+Shift+L)' },
    { icon: ListOrdered, text: '1. item', label: 'Numbered List', tooltip: 'Numbered List (Ctrl+Shift+N)' },
  ];

  const handleToolClick = (text: string, label: string) => {
    onInsert(text);
    setActiveTool(label); // Set active tool
    setTimeout(() => setActiveTool(null), 300); // Clear active tool after a brief moment
  };

  return (
    <div className="flex space-x-2">
      {tools.map(({ icon: Icon, text, label, tooltip }) => (
        <button
          key={label}
          onClick={() => handleToolClick(text, label)}
          className={`p-2 hover:bg-nord-2 rounded-md text-nord-4 ${activeTool === label ? 'bg-nord-3' : ''}`}
          title={tooltip}
          aria-label={tooltip} // Accessibility enhancement
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
};

export default MarkdownToolbar;
